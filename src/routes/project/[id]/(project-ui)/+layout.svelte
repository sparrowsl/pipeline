<script>
  import { applyAction, enhance } from '$app/forms';
  import ProjectNav from '$lib/ProjectNav.svelte';
  import ProjectAbout from '$lib/ProjectAbout.svelte';
  import DpgStatus from '$lib/dpgStatus.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Updates from '$lib/Updates.svelte';
  import UpdateDetail from '$lib/UpdateDetail.svelte';
  import { amountFormat } from '$lib/utils/amountFormat.js';
  import Icon from '@iconify/svelte';
  import { dateFormat } from '$lib/utils/dateTimeFormat.js';
  import { toast } from 'svelte-sonner';
  import { invalidateAll } from '$app/navigation';
  import GitContributors from '$lib/GitContributors.svelte';
  import ResourceCard from '$lib/ResourceCard.svelte';
  import { createEventDispatcher } from 'svelte';
  import GitContributorsViewAll from '$lib/GitContributorsViewAll.svelte';
  import ResourcesViewAll from '$lib/ResourcesViewAll.svelte';
  import GitUpdate from '$lib/GitUpdate.svelte';

  $: id = $page.params.id;

  export let data;
  let { user, resources, project, updates, isAuthenticated } = data;

  let isFollowing = false;
  let isAddingUpdate = false;
  let showUpdatePopup = false;

  function openUpdatePopup() {
    showUpdatePopup = true;
  }

  function closeUpdatePopup() {
    showUpdatePopup = false;
  }

  const navItems = [
    { href: `${$page.url.pathname}/`, label: 'About', width: '70px' },
    { href: `${$page.url.pathname}/dpg-status`, label: 'DPG Status', width: '90px' },
    { href: `${$page.url.pathname}/updates`, label: 'Updates', width: '95px' },
    { href: `${$page.url.pathname}/contributors`, label: 'Contributors', width: '150px' },
  ];

  const banner = project.banner_image
    ? project.banner_image
    : 'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/defaults/banner.png?t=2024-11-20T15%3A45%3A51.937Z';

  const image = project.image
    ? project.image
    : 'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/defaults/projectProf.png?t=2024-11-20T16%3A05%3A41.191Z';
</script>

<div class="mx-auto flex max-w-[1500px] flex-col items-start px-4 lg:flex-row lg:px-8">
  <div class="lg:sticky lg:top-0 lg:w-[40%] lg:pr-4">
    <section class="relative mb-[64px] mt-6 flex w-full flex-col">
      <img
        loading="lazy"
        src={banner}
        class="z-0 flex h-[250px] w-full rounded-[24px] bg-stone-300 max-md:max-w-full"
        alt="banner"
      />
      <img
        loading="lazy"
        class="absolute left-1/2 z-10 h-[120px] w-[120px] -translate-x-1/2 transform rounded-full outline outline-4 outline-white max-lg:left-[20px] lg:left-[50px] lg:translate-x-0"
        style="top: 97%; transform: translateY(-50%);"
        src={image}
        alt="Project overlay"
      />
    </section>

    <section class="mt-3 flex w-full flex-col">
      <div class="flex justify-between max-md:gap-2">
        <h1 class="break-all text-3xl font-semibold text-black max-lg:mt-2 max-lg:text-xl">
          {project.title}
        </h1>
        <div class="mt-2 flex items-center gap-1 text-base text-neutral-600">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/edd6d143a10aa89a67f0101c84563e276eb2ea6bc943000847a62b3bcaeb9863?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
            alt="Date icon"
            class="h-[24px] w-[24px] object-contain max-md:w-[15px]"
          />
          <time datetime="2024-10" class="max-md:text-sm">
            Created: {dateFormat(project.created_at)}
          </time>
        </div>
      </div>
      <p class="mt-3 text-xl font-light leading-8 text-black max-lg:text-base">
        {project.bio || 'Project bio'}
      </p>
    </section>

    <section class="mt-2 flex flex-wrap items-center gap-3">
      <div class="flex flex-wrap gap-2 text-lg text-lime-800">
        {#each project.tags as tag (tag.id)}
          <span class="rounded-md border-2 border-[#0b383c] px-2 py-0.5 text-base max-md:px-3">
            {tag.title}
          </span>
        {/each}
      </div>
    </section>

    {#if user}
      <div class="mt-6 flex items-center gap-3">
        {#if user.id === project.user_id}
          <a
            href="/project/{project.id}/edit"
            class="w-full rounded-full bg-[#0b383c] py-4 text-center text-base font-semibold text-white"
          >
            <button>EDIT PROJECT</button>
          </a>
          <button
            on:click={openUpdatePopup}
            class="w-full rounded-full bg-lime-300 py-4 text-center text-base font-semibold text-black"
          >
            ADD UPDATE
          </button>
        {:else}
          <a
            href="/project/{project.id}/contribute"
            class="w-full rounded-full bg-[#0b383c] py-4 text-center text-base font-semibold text-[#e9f5d3] lg:w-[50%]"
          >
            <button>CONTRIBUTE</button>
          </a>
          <form
            class="w-[50%]"
            action="?/bookmark"
            method="POST"
            use:enhance={() => {
              return async ({ result }) => {
                if (result.type === 'success') {
                  toast.success('Project bookmarked successfully');
                }
              };
            }}
          >
            <button
              type="submit"
              class="w-full rounded-full border-2 py-4 text-center text-base font-semibold"
              class:bg-[#e9f5d3]={isFollowing}
              class:text-black={isFollowing}
            >
              {isFollowing ? 'UNFOLLOW' : 'FOLLOW'}
            </button>
          </form>
        {/if}
      </div>
    {/if}

    <section
      class="mt-8 flex w-full items-center justify-between gap-6 rounded-[20px] bg-lime-300 p-6 text-teal-950 max-md:mt-6"
    >
      <div class="flex w-[120px] flex-col items-center max-md:w-[80px]">
        <div class="text-5xl font-semibold max-md:text-3xl">6</div>
        <div class="text-sm max-md:text-[13px]">Contributors</div>
      </div>
      <div class="h-[100px] w-px bg-neutral-400 max-md:hidden"></div>
      <div class="flex w-[120px] flex-col items-center max-md:w-[80px]">
        <div class="text-5xl font-semibold max-md:text-3xl">
          5<span class="text-3xl">/</span><span class="text-3xl text-teal-800">9</span>
        </div>
        <div class="text-sm max-md:text-[12px]">DPG Status</div>
      </div>
      <div class="h-[100px] w-px bg-neutral-400 max-md:hidden"></div>
      <div class="flex w-[120px] flex-col items-center max-md:w-[95px]">
        <div class="text-4xl font-semibold max-md:text-3xl">
          ${amountFormat(project.current_funding) || 0}
        </div>
        <div class="text-sm max-md:text-[12px]">
          raised of ${amountFormat(project.funding_goal) || 0}
        </div>
      </div>
    </section>
  </div>

  <div class="mt-4 w-full lg:mt-0 lg:pl-4">
    <main
      class="flex flex-col items-start rounded-[20px] bg-white px-4 py-8 max-md:mt-6 max-md:px-4"
    >
      <nav
        class="mb-10 flex gap-5 text-2xl font-semibold text-lime-800 max-md:gap-4 max-md:text-sm"
      >
        {#each navItems as item (item.href)}
          <div class="flex flex-col items-center justify-center gap-8">
            <a href={item.href} class="gap-2.5 text-base">
              {item.label}
            </a>
            <!-- TODO: underline this path on url change / also move up-->
            {#if $page.url.pathname.includes(item.href)}
              <div class="mt-3.5 flex min-h-[6px] max-w-full rounded bg-lime-300"></div>
            {/if}
          </div>
        {/each}
      </nav>

      <slot />
    </main>
  </div>
</div>
