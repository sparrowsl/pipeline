<script>
  export let project;
  import { timeAgo } from '$lib/utils/dateTimeFormat.js';
  let date;

  $: date = timeAgo(project.updated_at);
</script>

<article class="flex w-full flex-col space-y-4">
  <div class="flex justify-end">
    {#if project.updated_at}
      <p class="text-body-sm text-gray-400">Last modified: {date}</p>
    {:else}
      <p class="text-body-sm text-gray-400">Last modified: No modification</p>
    {/if}
  </div>
  <p class="text-body-lg leading-relaxed text-gray-300">
    {project.details || project.bio || 'Project details not available.'}
  </p>
</article>
