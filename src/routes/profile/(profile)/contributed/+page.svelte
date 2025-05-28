<script>
  import Card from '$lib/Card.svelte';

  export let data;
</script>

{#if data.projects && data.projects.length > 0}
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {#each data.projects as project}
      <Card {project} />
    {/each}
  </div>
{:else}
  <!-- Premium Empty State -->
  <div class="flex min-h-[400px] items-center justify-center">
    <div class="max-w-md text-center">
      <div
        class="mb-6 rounded-2xl border border-dashboard-gray-700 bg-dashboard-gray-900/50 p-8 backdrop-blur-sm"
      >
        <div
          class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-dashboard-gray-800"
        >
          <svg class="h-8 w-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>

        <h3 class="mb-2 text-heading-lg text-white">No contributions yet</h3>
        <p class="mb-6 text-body-md text-gray-400">
          Start contributing to open projects and make a difference in the community.
        </p>

        <a href="/explore">
          <button
            class="focus-ring mx-auto flex items-center justify-center gap-2 rounded-xl bg-dashboard-purple-500 px-6 py-3 text-label-lg font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-dashboard-purple-600"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Explore Projects
          </button>
        </a>
      </div>

      <p class="text-body-sm text-gray-500">Find projects that match your skills and interests</p>
    </div>
  </div>
{/if}
