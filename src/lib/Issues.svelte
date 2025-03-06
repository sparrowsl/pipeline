
<script>
   import Icon from '@iconify/svelte';

    function timeAgo(dateString) {
      const date = new Date(dateString);
      const now = new Date();
      const diff = Math.round((now - date) / 1000 / 60);
  
      if (diff < 60) return `${diff} minutes ago`;
      if (diff < 1440) return `${Math.round(diff / 60)} hours ago`;
      return `${Math.round(diff / 1440)} days ago`;
    }


    export let issue;
 </script>
  

  <h2 class="self-start mb-4 text-3xl font-bold text-teal-950">Issues</h2>

  <div class="flex flex-col items-start w-full">
    <div class="flex items-center w-[70%] gap-4 p-4 border-b border-gray-300">
      <div class="flex-shrink-0">
        {#if issue.state === "open"}
          <Icon icon="mdi:clock-outline" class="text-3xl text-green-500" />
        {:else}
          <Icon icon="mdi:clock-off-outline" class="text-3xl text-red-500" />
        {/if}
      </div>
  
      <div class="flex-1">
        <a href={issue.html_url} target="_blank" class="text-lg font-semibold text-teal-950 hover:underline">
          {issue.title}
        </a>
        <p class="text-sm text-gray-500">
          #{issue.number} · <span class="text-md">{issue.user.login}</span> opened {timeAgo(issue.created_at)}
        </p>
      </div>
  
      <img src={issue.user.avatar_url} alt={issue.user.login} class="w-8 h-8 rounded-full">
    </div>
  </div>
  

  
   

   