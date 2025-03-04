<script>
  import Icon from '@iconify/svelte';
  import ContributorsCard from '../ContributorsCard.svelte';
  import { page } from '$app/stores';

  export let data;

  const totalCommits = data.contributors.reduce(
    (sum, contributor) => sum + contributor.contributions,
    0,
  );
</script>

<div class="relative inline-flex h-[1639.94px] flex-col items-start justify-start gap-9">
  <a
    href="/project/{$page.params.id}/contributors"
    class="flex items-center gap-1 rounded-full border border-[#516027] px-3 py-2"
  >
    <Icon icon="material-symbols-light:chevron-left" class="text-2xl" />
    <span class="text-sm font-bold text-[#516027]"> Back </span>
  </a>

  <div class="">
    <div class="flex items-center justify-between self-stretch">
      <h4 class="text-xl font-semibold text-black">All Github Contributors</h4>

      <!-- Search Input -->
      <div class="flex items-center rounded-full border border-[#e2e2e2] px-4 py-2">
        <input
          type="text"
          placeholder="Search Contributors"
          class="border-none text-sm text-[#a0a0a0] outline-none"
        />
        <Icon icon="mdi:search" text="text-2xl" />
      </div>
    </div>

    <div class="mt-5 grid grid-cols-2 gap-5">
      {#each data.contributors as contributor}
        <ContributorsCard {contributor} {totalCommits} />
      {/each}
    </div>
  </div>
</div>
