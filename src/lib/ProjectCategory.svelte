<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import { Button } from '$lib/components/ui/button';

  const dispatch = createEventDispatcher();

  let loading = true;
  let categories = [];
  let selectedCategories = new Set();
  let isDropdownOpen = false;

  async function fetchAllCategories() {
    try {
      const data = {
        categories: [
          {
            id: '6660aa4d-18aa-4929-af91-6240cc72dc22',
            title: 'No Poverty',
            description: 'End poverty in all its forms everywhere',
            created_at: '2024-10-29T12:47:10.110186+00:00',
            sdg_id: 1,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-01.jpg?t=2024-11-18T16%3A05%3A17.510Z',
          },
          {
            id: '1c073632-b5e3-4e40-8353-c61edb73c068',
            title: 'Zero Hunger',
            description:
              'End hunger, achieve food security, improve nutrition, and promote sustainable agriculture',
            created_at: '2024-10-29T12:47:27.544783+00:00',
            sdg_id: 2,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-02.jpg?t=2024-11-18T16%3A07%3A24.534Z',
          },
          {
            id: '48181b1e-4cbf-4405-b226-58d794e0c287',
            title: 'Good Health and Well-being',
            description: 'Ensure healthy lives and promote well-being for all at all ages',
            created_at: '2024-10-29T12:47:52.437837+00:00',
            sdg_id: 3,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-03.jpg?t=2024-11-18T16%3A07%3A45.633Z',
          },
          {
            id: 'a015b99b-c072-48d4-81a1-b02ea6404d3b',
            title: 'Quality Education',
            description:
              'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all',
            created_at: '2024-10-29T12:48:45.779336+00:00',
            sdg_id: 4,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-04.jpg?t=2024-11-18T16%3A08%3A10.025Z',
          },
          {
            id: '7001d57b-d0dd-4b6c-9385-ad4a37e08635',
            title: 'Gender Equality',
            description: 'Achieve gender equality and empower all women and girls.',
            created_at: '2024-10-29T12:50:17.345651+00:00',
            sdg_id: 5,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-05.jpg',
          },
          {
            id: '96d9e849-0143-4012-abaa-fe52b3077fd4',
            title: 'Clean Water and Sanitation ',
            description:
              'Ensure availability and sustainable management of water and sanitation for all',
            created_at: '2024-10-29T12:50:37.424016+00:00',
            sdg_id: 6,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-06.jpg',
          },
          {
            id: 'dc076d0a-304a-4f30-9413-714ede8815ca',
            title: 'Affordable and Clean Energy',
            description:
              'Ensure access to affordable, reliable, sustainable, and modern energy for all.',
            created_at: '2024-10-29T12:51:15.947917+00:00',
            sdg_id: 7,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-07.jpg',
          },
          {
            id: '65f5951b-9a02-43c3-b512-5c3162f077e8',
            title: 'Decent Work and Economic Growth',
            description:
              'Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.',
            created_at: '2024-10-29T12:51:48.244098+00:00',
            sdg_id: 8,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-08.jpg',
          },
          {
            id: '03fd91a1-19b6-48a0-9586-81710ef955ed',
            title: 'Industry, Innovation, and Infrastructure ',
            description:
              'Build resilient infrastructure, promote inclusive and sustainable industrialisation, and foster innovation.',
            created_at: '2024-10-29T12:53:06.064968+00:00',
            sdg_id: 9,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-09.jpg',
          },
          {
            id: '680c08c4-3e70-4eef-99bf-99e77ff0e249',
            title: 'Reduce Inequality',
            description: 'Reduce inequality within and among countries.',
            created_at: '2024-10-29T12:53:30.427468+00:00',
            sdg_id: 10,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-10.jpg',
          },
          {
            id: '1353578f-98d6-49c5-abc8-2a8e7019dbf7',
            title: 'Sustainable Cities and Communities',
            description:
              'Make cities and human settlements inclusive, safe, resilient, and sustainable.',
            created_at: '2024-10-29T12:53:55.907153+00:00',
            sdg_id: 11,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-11.jpg',
          },
          {
            id: '56adf4f9-8f10-4cd5-b74c-954547801e34',
            title: 'Responsible Consumption and Production ',
            description: 'Ensure sustainable consumption and production patterns.',
            created_at: '2024-10-29T12:54:23.399539+00:00',
            sdg_id: 12,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-12.jpg',
          },
          {
            id: '6a24bc4f-bfc6-4bd8-a4fd-07a0c79e6bfe',
            title: 'Climate Action',
            description: 'Take urgent action to combat climate change and its impacts.',
            created_at: '2024-10-29T12:54:40.537702+00:00',
            sdg_id: 13,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-13.jpg',
          },
          {
            id: 'aac0fe44-1fc6-4df5-a03e-f79d2761cb2c',
            title: 'Life Below Water',
            description:
              'Conserve and sustainably use the oceans, seas, and marine resources for sustainable development.',
            created_at: '2024-10-29T12:55:05.524105+00:00',
            sdg_id: 14,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-14.jpg',
          },
          {
            id: '230ae35f-fa09-41d9-98fb-dd84b11bd9de',
            title: 'Life on Land',
            description:
              'Protect, restore, and promote sustainable use of terrestrial ecosystems, manage forests, combat desertification, halt and reverse land degradation, and halt biodiversity loss.\t',
            created_at: '2024-10-29T12:55:25.743788+00:00',
            sdg_id: 15,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-15.jpg',
          },
          {
            id: 'bd61dd07-fd29-463c-85f2-0666a24a068d',
            title: 'Peace, Justice, and Strong Institutions',
            description:
              'Promote peaceful and inclusive societies, provide access to justice for all, and build effective, accountable, and inclusive institutions.',
            created_at: '2024-10-29T12:55:56.391512+00:00',
            sdg_id: 16,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-16.jpg',
          },
          {
            id: 'fffb81fc-34be-4499-a7ff-172ad3faddb5',
            title: 'Partnerships for the Goals',
            description:
              'Strengthen the means of implementation and revitalise the global partnership for sustainable development.',
            created_at: '2024-10-29T12:56:42.068642+00:00',
            sdg_id: 17,
            image:
              'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/SDGs/E_SDG_Icons-17.jpg',
          },
        ],
      };

      categories = data.categories
        .map((category) => ({
          ...category,
          title: category.title.trim(), // Remove extra spaces
        }))
        .sort((a, b) => a.sdg_id - b.sdg_id);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    fetchAllCategories();
  });

  function toggleCategory(category) {
    if (selectedCategories.has(category.id)) {
      selectedCategories.delete(category.id);
    } else {
      selectedCategories.add(category.id);
    }
    selectedCategories = new Set(selectedCategories); // Trigger reactivity

    // Dispatch selected categories
    const selected = categories.filter((cat) => selectedCategories.has(cat.id));
    dispatch('categorySelected', selected);
  }

  function clearAllFilters() {
    selectedCategories.clear();
    selectedCategories = new Set(selectedCategories);
    dispatch('categorySelected', []);
  }

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Close dropdown when clicking outside
  function handleClickOutside(event) {
    if (!event.target.closest('.category-dropdown')) {
      closeDropdown();
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<div class="category-dropdown relative">
  <!-- Selected Pills Display -->
  {#if selectedCategories.size > 0}
    <div class="mb-4 flex flex-wrap gap-2">
      {#each categories.filter((cat) => selectedCategories.has(cat.id)) as category}
        <div
          class="flex items-center gap-2 rounded-lg border border-dashboard-purple-500/30 bg-dashboard-purple-500/20 px-3 py-2"
        >
          <img
            src={category.image}
            alt={category.title}
            class="h-4 w-4 rounded-sm object-cover"
            loading="lazy"
          />
          <span class="text-label-md font-medium text-dashboard-purple-400">{category.title}</span>
          <button
            on:click={() => toggleCategory(category)}
            class="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-dashboard-purple-500/30 text-dashboard-purple-300 transition-colors hover:bg-dashboard-purple-500/50 hover:text-white"
            aria-label="Remove {category.title} filter"
          >
            <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      {/each}
      <button
        on:click={clearAllFilters}
        class="text-label-sm font-medium text-gray-400 underline transition-colors hover:text-white"
      >
        Clear all
      </button>
    </div>
  {/if}

  <!-- Dropdown Toggle Button -->
  <button
    on:click={toggleDropdown}
    class="flex w-full items-center justify-between rounded-xl border border-dashboard-gray-600 bg-dashboard-gray-800 px-4 py-3 text-left text-body-lg font-medium text-gray-300 transition-colors hover:border-dashboard-gray-500 hover:bg-dashboard-gray-700 focus:border-dashboard-purple-500 focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500/20"
    aria-expanded={isDropdownOpen}
    aria-haspopup="listbox"
  >
    <span class="flex items-center gap-2">
      <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
        />
      </svg>
      {selectedCategories.size > 0
        ? `${selectedCategories.size} SDG${selectedCategories.size > 1 ? 's' : ''} selected`
        : 'Select SDG Categories'}
    </span>
    <svg
      class="h-5 w-5 text-gray-400 transition-transform duration-200 {isDropdownOpen
        ? 'rotate-180'
        : ''}"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  <!-- Dropdown Menu -->
  {#if isDropdownOpen}
    <div
      class="z-50 mt-2 w-full rounded-xl border border-dashboard-gray-600 bg-dashboard-gray-900 shadow-lg"
    >
      <div class="max-h-80 overflow-y-auto p-2">
        {#if loading}
          <div class="flex items-center justify-center py-8">
            <div
              class="h-6 w-6 animate-spin rounded-full border-2 border-dashboard-purple-500 border-t-transparent"
            ></div>
          </div>
        {:else if categories.length === 0}
          <div class="py-8 text-center">
            <p class="text-body-md text-gray-500">No categories available</p>
          </div>
        {:else}
          {#each categories as category}
            <button
              on:click={() => toggleCategory(category)}
              class="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors hover:bg-dashboard-gray-800 focus:bg-dashboard-gray-800 focus:outline-none"
              role="option"
              aria-selected={selectedCategories.has(category.id)}
            >
              <!-- Checkbox -->
              <div
                class="flex h-5 w-5 items-center justify-center rounded border-2 transition-colors {selectedCategories.has(
                  category.id,
                )
                  ? 'border-dashboard-purple-500 bg-dashboard-purple-500'
                  : 'border-dashboard-gray-600 bg-transparent'}"
              >
                {#if selectedCategories.has(category.id)}
                  <svg
                    class="h-3 w-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                {/if}
              </div>

              <!-- SDG Icon -->
              <div
                class="flex h-8 w-8 items-center justify-center rounded-md bg-dashboard-gray-700"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  class="h-6 w-6 rounded-sm object-cover"
                  loading="lazy"
                />
              </div>

              <!-- Category Info -->
              <div class="min-w-0 flex-1">
                <p class="truncate text-body-md font-medium text-gray-300">{category.title}</p>
                <p class="truncate text-label-sm text-gray-500">SDG {category.sdg_id}</p>
              </div>
            </button>
          {/each}
        {/if}
      </div>

      <!-- Footer with clear all option -->
      {#if selectedCategories.size > 0}
        <div class="border-t border-dashboard-gray-700 p-3">
          <button
            on:click={clearAllFilters}
            class="text-label-md font-medium text-gray-400 transition-colors hover:text-white"
          >
            Clear all filters
          </button>
        </div>
      {/if}
    </div>
  {/if}
</div>
