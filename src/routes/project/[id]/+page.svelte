<script>
  import { applyAction, enhance } from '$app/forms';
  import { invalidateAll } from '$app/navigation';
  import { page } from '$app/stores';
  import GitContributors from '$lib/GitContributors.svelte';
  import GitContributorsViewAll from '$lib/GitContributorsViewAll.svelte';
  import GitUpdate from '$lib/GitUpdate.svelte';
  import ProjectAbout from '$lib/ProjectAbout.svelte';
  import ProjectNav from '$lib/ProjectNav.svelte';
  import ResourceCard from '$lib/ResourceCard.svelte';
  import ResourcesViewAll from '$lib/ResourcesViewAll.svelte';
  import UpdateDetail from '$lib/UpdateDetail.svelte';
  import Updates from '$lib/Updates.svelte';
  import DpgStatus from '$lib/dpgStatus.svelte';
  import CategoryTag from '$lib/CategoryTag.svelte';
  import { amountFormat } from '$lib/utils/amountFormat.js';
  import { dateFormat } from '$lib/utils/dateTimeFormat.js';
  import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';
  import Issues from '$lib/Issues.svelte';
  import { Dialog, DialogHeader, DialogContent, DialogTitle } from '$lib/components/ui/dialog';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Button } from '$lib/components/ui/button';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Card, CardContent } from '$lib/components/ui/card';
  import { Separator } from '$lib/components/ui/separator';

  import { format } from 'date-fns';
  import { toast } from 'svelte-sonner';

  let id;
  $: id = $page.params.id;

  let user = null;
  let image;
  let banner;
  let date;

  export let data;
  const project = data.project;
  const projectUpdates = data.updates;
  const projectResource = data.resources;
  const uniqueResourceIds = new Set(projectResource.map((r) => r.id)).size;

  const githubLinkSplit = project?.github?.split('/') || [];
  const concat = githubLinkSplit[3] + '/' + githubLinkSplit[4];

  const fetchContribs = async () => {
    try {
      const res = await fetch(`https://api.github.com/repos/${concat}/contributors`);
      const data = await res.json();
      return data;
    } catch (_e) {
      return [];
    }
  };

  let showGitDetail = false;
  let showResourceDetail = false;

  function toggleGitDetail() {
    showGitDetail = !showGitDetail;
    showResourceDetail = false;
  }

  function toggleResourceDetail() {
    showResourceDetail = !showResourceDetail;
    showGitDetail = false;
  }

  const defaultImageUrl =
    'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/defaults/userProfile.png';

  let isFollowing = false;
  let showPopup = false;
  let popupMessage = '';
  let isAddingUpdate = false;

  let showUpdatePopup = false;

  function openUpdatePopup() {
    showUpdatePopup = true;
  }

  function closeUpdatePopup() {
    showUpdatePopup = false;
  }

  let activeNavItem = 'dpgStatus';
  let showUpdateDetail = false;
  let selectedUpdate = null;

  const navItems = [
    { id: 'dpgStatus', label: 'DPG Assessment', width: '150px' },
    { id: 'tasks', label: 'Issues & Tasks', width: '120px' },
  ];

  function handleNavChange(event) {
    activeNavItem = event.detail;
    showUpdateDetail = false;
  }

  function handleShowDetail(event) {
    selectedUpdate = event.detail.update;
    showUpdateDetail = true;
  }

  function handleGoBack() {
    showUpdateDetail = false;
    selectedUpdate = null;
    showGitDetail = false;
    showResourceDetail = false;
    showGitDetail = showGitDetail;
  }

  $: date = project.created_at ? format(new Date(project.created_at), 'd/M/yy') : '';

  $: banner = project.banner_image
    ? project.banner_image
    : 'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/defaults/banner.png?t=2024-11-20T15%3A45%3A51.937Z';

  $: image = project.image
    ? project.image
    : 'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/defaults/projectProf.png?t=2024-11-20T16%3A05%3A41.191Z';

  let contributors = [];
  let comments = [];

  onMount(async () => {
    if (data.isAuthenticated) {
      user = data.user;
    }

    contributors = await fetchContribs();
  });

  let totalCommits = 0;

  $: {
    if (Array.isArray(contributors)) {
      totalCommits = contributors.reduce((prev, curr) => prev + curr.contributions, 0) || 0;
    }
  }
</script>

<div class="min-h-screen bg-dashboard-black">
  <!-- Breadcrumb Navigation -->
  <nav class="pt-8 mb-6">
    <div class="container px-8 mx-auto max-w-7xl">
      <div class="flex items-center gap-2">
        <a
          href="/explore"
          class="flex items-center gap-2 font-medium text-gray-300 transition-colors text-body-lg hover:text-white"
        >
          <Icon icon="lucide:arrow-left" class="w-5 h-5" />
          Explore
        </a>
        <Icon icon="lucide:chevron-right" class="w-4 h-4 text-gray-500" />
        <span class="text-gray-400 text-body-lg">{project.title || 'Project Details'}</span>
      </div>
    </div>
  </nav>

  <div class="container px-8 mx-auto max-w-7xl">
    <!-- Hero Section - Comprehensive Layout -->
    <div class="flex gap-8 mb-8">
      <!-- Project Image -->
      <div class="flex-shrink-0">
        <img
          loading="lazy"
          src={image}
          class="object-cover w-48 h-64 rounded-2xl bg-dashboard-gray-800 shadow-card"
          alt="Project image"
        />
      </div>

      <!-- Main Project Info -->
      <div class="flex-1 space-y-6">
        <!-- Title and Metadata -->
        <div class="space-y-4">
          <div class="space-y-2">
            <div class="flex items-center gap-3 text-gray-400 text-body-sm">
              <Icon icon="lucide:calendar" class="w-4 h-4" />
              <time datetime={project.created_at}>Created {date}</time>
            </div>
            <h1 class="font-semibold leading-tight text-white text-display-xl">
              {project.title || 'Project Title'}
            </h1>
          </div>

          <!-- DPG Status - Prominent -->
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-3">
              <Icon icon="lucide:shield-check" class="w-5 h-5 text-dashboard-yellow-400" />
              <div class="font-semibold text-white text-heading-md">
                {project.dpgCount}<span class="text-gray-400">/9</span>
              </div>
              <span class="text-gray-300 text-body-md">DPG Standards</span>
            </div>
            <div class="w-32 h-2 rounded-full bg-dashboard-gray-700">
              <div
                class="h-2 transition-all duration-300 rounded-full bg-gradient-to-r from-dashboard-yellow-400 to-dashboard-purple-500"
                style="width: {(project.dpgCount / 9) * 100}%"
              ></div>
            </div>
          </div>

          <!-- Tags -->
          {#if project.tags && project.tags.length > 0}
            <div class="flex flex-wrap gap-2">
              {#each project.tags as tag}
                <div class="transition-transform duration-200 transform hover:scale-105">
                  <CategoryTag {tag} />
                </div>
              {/each}
            </div>
          {/if}
        </div>

        <!-- Action Buttons -->
        {#if user}
          <div class="flex gap-3">
            <a
              href="/project/{id}/contribute"
              class="px-6 py-3 font-medium transition-colors rounded-xl bg-dashboard-yellow-400 text-label-lg text-dashboard-black hover:bg-dashboard-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-yellow-400 disabled:pointer-events-none disabled:opacity-50"
            >
              <Icon icon="lucide:heart-handshake" class="inline w-4 h-4 mr-2" />
              Contribute
            </a>

            {#if user.id === project.user_id}
              <a
                href="/project/{id}/edit"
                class="px-6 py-3 font-medium text-white transition-colors border rounded-xl border-dashboard-gray-600 bg-dashboard-gray-800 text-label-lg hover:bg-dashboard-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <Icon icon="lucide:edit" class="inline w-4 h-4 mr-2" />
                Edit
              </a>
            {:else}
              <form
                action="?/bookmark"
                method="POST"
                use:enhance={() => {
                  return async ({ result }) => {
                    if (result.type === 'success') {
                      isFollowing = !isFollowing;
                      toast.success(
                        isFollowing
                          ? 'Project followed successfully'
                          : 'Project unfollowed successfully',
                      );
                    }
                  };
                }}
              >
                <button
                  type="submit"
                  class="px-6 py-3 font-medium text-white transition-colors border rounded-xl border-dashboard-gray-600 bg-dashboard-gray-800 text-label-lg hover:bg-dashboard-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  class:bg-dashboard-purple-500={isFollowing}
                  class:border-dashboard-purple-500={isFollowing}
                  class:hover:bg-dashboard-purple-600={isFollowing}
                >
                  <Icon
                    icon={isFollowing ? 'lucide:user-check' : 'lucide:user-plus'}
                    class="inline w-4 h-4 mr-2"
                  />
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
              </form>
            {/if}
          </div>
        {/if}
      </div>

      <!-- Right Sidebar - Stats & Contributors -->
      <div class="flex-shrink-0 space-y-6 w-80">
        <!-- Stats Grid -->
        <div
          class="grid grid-cols-2 gap-4 p-4 border rounded-xl border-dashboard-gray-700 bg-dashboard-gray-900/50"
        >
          <div class="text-center">
            <div class="font-semibold text-white text-display-md">
              ${amountFormat(project.current_funding || 0)}
            </div>
            <div class="text-gray-400 text-label-sm">
              raised of ${amountFormat(project.funding_goal || 0)}
            </div>
          </div>
          <div class="text-center">
            <div class="font-semibold text-white text-display-md">
              {projectUpdates.length}
            </div>
            <div class="text-gray-400 text-label-sm">updates</div>
          </div>
        </div>

        <!-- Contributors - Compact Style -->
        <div class="p-4 border rounded-xl border-dashboard-gray-700 bg-dashboard-gray-900/50">
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-semibold text-white text-heading-md">Contributors</h3>
            <!-- {#if contributors.length > 6}
              <button
                class="text-gray-400 transition-colors text-label-sm hover:text-white"
                on:click={toggleGitDetail}
              >
                View all
              </button>
            {/if} -->
          </div>

          <!-- Avatar Row -->
          <div class="flex items-center -space-x-2">
            {#if Array.isArray(contributors) && contributors.length > 0}
              {#each contributors.slice(0, 6) as contributor}
                <img
                  src={contributor.avatar_url || defaultImageUrl}
                  alt={contributor.login || 'Contributor'}
                  class="w-10 h-10 transition-transform border-2 rounded-full border-dashboard-gray-700 bg-dashboard-gray-800 hover:z-10 hover:scale-110"
                  title={contributor.login || 'Contributor'}
                />
              {/each}
              {#if contributors.length > 6}
                <div
                  class="flex items-center justify-center w-10 h-10 text-xs font-medium text-gray-300 border-2 rounded-full border-dashboard-gray-700 bg-dashboard-gray-800"
                >
                  +{contributors.length - 6}
                </div>
              {/if}
            {:else}
              <div
                class="flex items-center justify-center w-10 h-10 text-gray-500 border-2 border-dashed rounded-full border-dashboard-gray-600"
              >
                <Icon icon="lucide:users" class="w-5 h-5" />
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>

    <!-- Project About Section -->
    <div class="mb-8">
      <ProjectAbout {project} />
    </div>

    <!-- Detailed Sections - Minimal Tabs -->
    <div class="p-6 border rounded-2xl border-dashboard-gray-700 bg-dashboard-gray-900 shadow-card">
      <ProjectNav
        class="flex items-start w-full overflow-x-auto text-sm flex-nowrap whitespace-nowrap"
        {navItems}
        bind:activeItem={activeNavItem}
        on:navChange={handleNavChange}
      />

      <section class="mt-8">
        {#if activeNavItem === 'dpgStatus'}
          <div class="space-y-6">
            <div class="text-center">
              <h2 class="mb-2 font-semibold text-white text-display-xl">
                DPG Compliance Assessment
              </h2>
              <p class="text-gray-300 text-body-lg">
                Detailed evaluation against Digital Public Good standards
              </p>
            </div>
            <DpgStatus {user} {project} />
          </div>
        {:else if activeNavItem === 'tasks'}
          <div class="space-y-6">
            <div>
              <h2 class="mb-2 font-semibold text-white text-display-xl">Issues & Tasks</h2>
              <p class="text-gray-300 text-body-lg">Open issues and development tasks</p>
            </div>
            <Issues />
          </div>
        {/if}
      </section>
    </div>
  </div>
</div>

<!-- Modals -->
{#if showGitDetail}
  <Dialog open onOpenChange={() => (showGitDetail = false)}>
    <DialogContent class="max-w-4xl">
      <GitContributorsViewAll on:goBack={handleGoBack} />
    </DialogContent>
  </Dialog>
{/if}

{#if showResourceDetail}
  <Dialog open onOpenChange={() => (showResourceDetail = false)}>
    <DialogContent class="max-w-4xl">
      <ResourcesViewAll on:goBack={handleGoBack} />
    </DialogContent>
  </Dialog>
{/if}

{#if showUpdatePopup}
  <Dialog open onOpenChange={closeUpdatePopup}>
    <DialogContent
      class="fixed w-full max-w-md rounded-2xl border border-dashboard-gray-700 bg-dashboard-gray-900 p-6 shadow-card sm:left-[50%] sm:top-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]"
    >
      <DialogHeader>
        <DialogTitle class="mb-4 font-semibold text-white text-heading-lg">Add Update</DialogTitle>
      </DialogHeader>

      <form
        action="?/addUpdate"
        method="POST"
        use:enhance={() => {
          return async ({ form, result }) => {
            if (result.type === 'success') {
              closeUpdatePopup();
              form.reset();
            }
            await applyAction(result);
            await invalidateAll();
          };
        }}
        class="space-y-4"
      >
        <div>
          <Label class="block mb-2 font-medium text-gray-300 text-label-lg">Title</Label>
          <Input
            type="text"
            name="title"
            class="w-full px-4 py-3 text-white border rounded-lg border-dashboard-gray-600 bg-dashboard-gray-800 text-body-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500"
            required
            disabled={isAddingUpdate}
          />
        </div>

        <div>
          <Label class="block mb-2 font-medium text-gray-300 text-label-lg">Body</Label>
          <Textarea
            rows="4"
            name="body"
            class="w-full px-4 py-3 text-white border rounded-lg resize-none border-dashboard-gray-600 bg-dashboard-gray-800 text-body-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500"
            required
            disabled={isAddingUpdate}
          />
        </div>

        <Button
          type="submit"
          class="w-full px-6 py-3 font-medium transition-colors rounded-xl bg-dashboard-yellow-400 text-label-lg text-dashboard-black hover:bg-dashboard-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-yellow-400 disabled:pointer-events-none disabled:opacity-50"
          disabled={isAddingUpdate}
        >
          {#if isAddingUpdate}
            <span class="flex items-center justify-center gap-2">
              <Icon icon="lucide:loader-2" class="w-4 h-4 animate-spin" />
              Adding Update...
            </span>
          {:else}
            Add Update
          {/if}
        </Button>
      </form>
    </DialogContent>
  </Dialog>
{/if}
