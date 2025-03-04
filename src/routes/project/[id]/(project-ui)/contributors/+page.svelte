<script>
  import ContributorsCard from './ContributorsCard.svelte';
  import GitContributorsViewAll from '$lib/GitContributorsViewAll.svelte';
  import ResourceCard from '$lib/ResourceCard.svelte';
  import ResourcesViewAll from '$lib/ResourcesViewAll.svelte';
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';

  export let data;
  console.log(data.contributors);
  const { isAuthenticated, project, resources, user, updates, contributors } = data;

  let showUpdateDetail = false;
  let selectedUpdate = null;
  let showGitDetail = false;
  let showResourceDetail = false;
  let projectUpdates = data.updates;
  let projectResource = data.resources;

  function toggleGitDetail() {
    showGitDetail = !showGitDetail;
    showResourceDetail = false;
  }

  function toggleResourceDetail() {
    console.log('Toggling Resource Detail');
    showResourceDetail = !showResourceDetail;
    console.log('showResourceDetail:', showResourceDetail);
    showGitDetail = false;
  }

  let contributors2 = [
    {
      name: 'Hawa Kallon',
      githubLink: 'https://github.com/hawakallon',
      commits: 42,
      avatarUrl: 'https://github.com/hawakallon.png',
    },
    {
      name: 'Saidu Bundu-Kamara',
      githubLink: 'https://github.com/saidubundukamara',
      commits: 80,
      avatarUrl: 'https://github.com/saidubundukamara.png',
    },
    {
      name: 'Sparrow',
      githubLink: 'https://github.com/sparrowsl',
      commits: 80,
      avatarUrl: 'https://github.com/sparrowsl.png',
    },
    {
      name: 'Mitch',
      githubLink: 'https://github.com/stElmitchay',
      commits: 80,
      avatarUrl: 'https://github.com/stElmitchay.png',
    },
  ];

  const totalCommits = contributors.reduce(
    (sum, contributor) => sum + contributor.contributions,
    0,
  );
</script>

<div class="w-full px-4 md:px-10">
  {#if !showGitDetail && !showResourceDetail}
    <div class="mb-6 inline-flex items-center justify-start gap-1 self-stretch">
      <div
        class="text-center font-['Roboto'] text-2xl font-normal leading-loose text-black md:text-[32px]"
      ></div>
    </div>

    <div class="flex w-full flex-col pb-14 max-md:pl-5">
      <div
        class="flex w-full flex-wrap items-center justify-between gap-10 text-center font-bold max-md:max-w-full"
      >
        <h1 class="my-auto self-stretch text-4xl leading-tight text-black">GitHub Contributors</h1>
        <a
          href="{$page.url.pathname}/all"
          class="flex items-center gap-1 rounded-full border-2 border-lime-800 px-4 py-2 text-sm text-lime-800"
        >
          <span class="">View All</span>
          <Icon icon="mdi:chevron-right" class="text-2xl" />
        </a>
      </div>
      <div class="relative z-0 mt-5 grid w-full grid-cols-2 items-start gap-4 max-md:max-w-full">
        {#each contributors as contributor}
          <ContributorsCard {contributor} {totalCommits} />
        {/each}
      </div>
    </div>

    <div class="flex max-w-[846px] flex-col max-md:pl-5">
      <div
        class="flex w-full flex-wrap items-center justify-between gap-10 text-center font-bold max-md:max-w-full"
      >
        <h2 class="my-auto self-stretch text-4xl leading-tight text-black">Resources</h2>
        <button
          class="my-auto flex items-center justify-center gap-1 self-stretch rounded-[40px] border-2 border-solid border-lime-800 py-2 pl-3 pr-2 text-sm leading-none text-lime-800"
          on:click={toggleResourceDetail}
        >
          <span class="my-auto self-stretch">View All</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e13f9fadc17a702d863b8d21bc60e6c7ea08ee8a9506ba412086d7b1a1d15195?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
            alt=""
            class="my-auto aspect-square w-5 shrink-0 self-stretch object-contain"
          />
        </button>
      </div>
      <div class="mt-5 flex w-full flex-wrap items-start gap-5 max-md:max-w-full">
        {#each projectResource as resource}
          <ResourceCard {resource} />
        {/each}
      </div>
    </div>
  {/if}
  <!--
  {#if showGitDetail}
    <GitContributorsViewAll on:goBack={handleGoBack} />
  {:else if showResourceDetail}
    <ResourcesViewAll on:goBack={handleGoBack} />
  {/if}
  -->
</div>
