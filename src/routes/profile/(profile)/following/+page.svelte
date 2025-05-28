<script>
  import Card from '$lib/Card.svelte';

  export let data;
</script>

{#if data?.following && data.following.length > 0}
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {#each data.following as project}
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
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>

        <h3 class="mb-2 text-heading-lg text-white">No followed projects</h3>
        <p class="mb-6 text-body-md text-gray-400">
          Discover and follow projects that inspire you to stay updated on their progress.
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Find Projects to Follow
          </button>
        </a>
      </div>

      <p class="text-body-sm text-gray-500">Stay connected with projects you care about</p>
    </div>
  </div>
{/if}
