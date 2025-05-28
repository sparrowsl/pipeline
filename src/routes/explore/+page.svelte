<script>
  import ProjectCategory from '$lib/ProjectCategory.svelte';
  import Card from '$lib/Card.svelte';
  import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from '$lib/components/ui/accordion';
  import { Button } from '$lib/components/ui/button';

  export let data;
  let loadedProjects = data.allProjects;

  let searchResults = [];
  let categoryResult = [];
  let loading = true;
  let searchTerm = '';
  let selectedTag = '';

  let currentPage = 1;
  let searchPage = 1;
  let categoryPage = 1;
  const itemsPerPage = 6;
  let allProjectsLoaded = false;
  let allSearchLoaded = false;
  let allCategoryLoaded = false;
  let searchResultsLoaded = false;
  let categoryResultLoaded = false;

  // TODO: we would find a way around it later
  async function fetchAllProjects() {
    try {
      const response = await fetch(`/api/projects?page=${currentPage}&limit=${itemsPerPage}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      if (loadedProjects?.length < itemsPerPage) {
        allProjectsLoaded = true;
      }

      loadedProjects = [...loadedProjects, ...data.projects];
      // data.allProjects = loadedProjects;
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
    }
  }

  async function projectByCategory(tag) {
    categoryResultLoaded = true;
    try {
      const response = await fetch(
        `/api/projects/projectByCategory/${tag}?&page=${categoryPage}&limit=${itemsPerPage}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        },
      );

      if (!response.ok) throw new Error(response.statusText);

      const data = await response.json();

      if (data.projects.length < itemsPerPage) {
        allCategoryLoaded = true;
      }

      categoryResult = data.projects;
    } catch (e) {
      alert(e.message);
    } finally {
      categoryResultLoaded = false;
    }
  }

  async function loadMoreProjects() {
    currentPage += 1;
    fetchAllProjects();
  }

  function loadMoreSearchResults() {
    searchPage += 1;
    searchProjects(searchTerm);
  }

  function loadMoreCategoryResults() {
    categoryPage += 1;
    projectByCategory(selectedTag);
  }

  function handleCategorySelected(event) {
    const selectedCategories = event.detail;
    if (selectedCategories && selectedCategories.length > 0) {
      // For now, we'll use the first selected category for API calls
      // TODO: Update API to handle multiple categories
      const firstCategory = selectedCategories[0];
      selectedTag = selectedCategories.map((cat) => cat.title).join(', ');
      projectByCategory(firstCategory.id);
    } else {
      selectedTag = '';
      // Reset to show all projects when no categories are selected
      loadedProjects = data.allProjects;
      categoryResult = [];
    }
  }
</script>

<!-- Main container with dark background and proper spacing -->
<div class="min-h-screen bg-dashboard-black">
  <div class="container px-8 mx-auto max-w-7xl">
    <!-- Breadcrumb Navigation -->
    <nav class="pt-8 mb-6">
      <div class="flex items-center gap-2">
        <a
          href="/"
          class="font-medium text-gray-300 transition-colors text-body-lg hover:text-white"
        >
          Home
        </a>
        <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <span class="text-gray-400 text-body-lg">Explore Projects</span>
      </div>
    </nav>

    <!-- Main content layout -->
    <div class="flex flex-col gap-8 lg:flex-row">
      <!-- Sidebar -->
      <aside class="w-full lg:w-80 lg:flex-shrink-0">
        <div class="sticky top-8">
          <div
            class="p-6 border rounded-2xl border-dashboard-gray-700 bg-dashboard-gray-900 shadow-card"
          >
            <h3 class="mb-4 text-gray-300 text-heading-lg">Filter Projects</h3>

            <ProjectCategory on:categorySelected={handleCategorySelected} />
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="flex-1 min-w-0">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {#if searchTerm && searchResults.length > 0}
            <div class="col-span-full">
              <h2 class="text-white text-heading-xl">
                Search results for: <span class="text-dashboard-yellow-400">"{searchTerm}"</span>
              </h2>
            </div>
            {#each searchResults as project}
              <Card {project} />
            {/each}
            {#if !searchResultsLoaded && !allSearchLoaded}
              <div class="flex items-center justify-center mt-8 col-span-full">
                <button
                  on:click={loadMoreSearchResults}
                  class="px-6 py-3 font-medium text-white transition-colors rounded-xl bg-dashboard-gray-800 text-label-lg hover:bg-dashboard-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-purple-500 disabled:pointer-events-none disabled:opacity-50"
                >
                  Load more results
                </button>
              </div>
            {/if}
          {:else if selectedTag}
            <div class="col-span-full">
              <h2 class="text-white text-heading-xl">
                Projects in: <span class="text-dashboard-yellow-400">"{selectedTag}"</span>
              </h2>
            </div>
            {#if categoryResult.length > 0}
              {#each categoryResult as project}
                <Card {project} class="!h-auto !flex-shrink-0" />
              {/each}
              {#if !categoryResultLoaded && !allCategoryLoaded}
                <div class="flex items-center justify-center mt-8 col-span-full">
                  <button
                    on:click={loadMoreCategoryResults}
                    class="px-6 py-3 font-medium text-white transition-colors rounded-xl bg-dashboard-gray-800 text-label-lg hover:bg-dashboard-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-purple-500 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Load more projects
                  </button>
                </div>
              {/if}
            {:else}
              <div
                class="p-8 text-center border col-span-full rounded-2xl border-dashboard-gray-700 bg-dashboard-gray-900"
              >
                <p class="text-gray-400 text-body-lg">
                  No projects found for "{selectedTag}".
                </p>
                <p class="mt-2 text-gray-500 text-body-md">
                  Try selecting a different category or browse all projects.
                </p>
              </div>
            {/if}
          {:else if !searchTerm}
            <!-- Top Projects Section -->
            <div class="col-span-full">
              <h2 class="text-white text-heading-xl">Top Projects</h2>
              <p class="mt-2 text-gray-400 text-body-lg">
                Featured projects making the biggest impact
              </p>
            </div>
            {#each data.topProjects as project}
              <Card {project} />
            {:else}
              <div
                class="p-8 text-center border col-span-full rounded-2xl border-dashboard-gray-700 bg-dashboard-gray-900"
              >
                <p class="text-gray-400 text-body-lg">No featured projects available.</p>
              </div>
            {/each}

            <!-- All Projects Section -->
            <div class="mt-8 col-span-full">
              <h2 class="text-white text-heading-xl">All Projects</h2>
              <p class="mt-2 text-gray-400 text-body-lg">
                Discover and support projects across all categories
              </p>
            </div>
            {#if data.allProjects.length > 0}
              {#each loadedProjects as project (project.id)}
                <Card {project} />
              {/each}
              {#if !allProjectsLoaded}
                <div class="flex items-center justify-center flex-grow w-full mt-8 col-span-full">
                  <div
                    class="flex cursor-pointer"
                    on:click={loadMoreProjects}
                    on:keydown={(e) => e.key === 'Enter' && loadMoreProjects()}
                    role="button"
                    tabindex="0"
                  >
                    <button
                      class="px-6 py-3 font-medium transition-colors rounded-xl bg-dashboard-yellow-400 text-label-lg text-dashboard-black hover:bg-dashboard-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-purple-500 disabled:pointer-events-none disabled:opacity-50"
                    >
                      Load more projects
                    </button>
                  </div>
                </div>
              {/if}
            {:else}
              <div
                class="p-8 text-center border col-span-full rounded-2xl border-dashboard-gray-700 bg-dashboard-gray-900"
              >
                <p class="text-gray-400 text-body-lg">No projects found.</p>
                <p class="mt-2 text-gray-500 text-body-md">Check back later for new projects.</p>
              </div>
            {/if}
          {:else}
            <div
              class="p-8 text-center border col-span-full rounded-2xl border-dashboard-gray-700 bg-dashboard-gray-900"
            >
              <p class="text-gray-400 text-body-lg">No search results found.</p>
              <p class="mt-2 text-gray-500 text-body-md">
                Try adjusting your search terms or browse all projects.
              </p>
            </div>
          {/if}
        </div>
      </main>
    </div>
  </div>
</div>
