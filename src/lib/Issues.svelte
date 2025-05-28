<script>
  import { page } from '$app/stores';
  import { Card, CardContent } from '$lib/components/ui/card';
  import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
  import { Separator } from '$lib/components/ui/separator';
  import Icon from '@iconify/svelte';

  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.round((now - date) / 1000 / 60);

    if (diff < 60) return `${diff} minutes ago`;
    if (diff < 1440) return `${Math.round(diff / 60)} hours ago`;
    return `${Math.round(diff / 1440)} days ago`;
  }

  const fetchProjectIssues = async () => {
    const githubLinkSplit = $page.data?.project?.github?.split('/') || [];
    const concat = githubLinkSplit[3] + '/' + githubLinkSplit[4];

    try {
      const res = await fetch(`https://api.github.com/repos/${concat}/issues`);
      const data = await res.json();
      return data;
    } catch (_e) {
      return [];
    }
  };
</script>

<div class="flex flex-col items-start w-full">
  {#await fetchProjectIssues()}
    <p class="text-gray-400 text-body-md">Loading issues...</p>
  {:then issues}
    {#if issues.length > 0}
      <div class="w-full space-y-3">
        {#each issues as issue, index}
          <div
            class="p-4 transition-colors duration-200 border rounded-xl border-dashboard-gray-700 bg-dashboard-gray-900/50 hover:bg-dashboard-gray-800/50"
          >
            <div class="flex items-center gap-4">
              <div class="flex-shrink-0 p-2 rounded-lg bg-green-500/10">
                <Icon icon="octicon:issue-opened-16" class="w-5 h-5 text-green-400" />
              </div>

              <div class="flex-1 min-w-0">
                <a
                  href={issue.html_url}
                  target="_blank"
                  class="block font-semibold text-white truncate transition-colors text-heading-sm hover:text-dashboard-yellow-400"
                  title={issue.title}
                >
                  {issue.title}
                </a>
                <div class="flex items-center gap-2 mt-1 text-gray-400 text-body-sm">
                  <span>#{issue.number}</span>
                  <span>·</span>
                  <span class="text-gray-300">{issue.user.login}</span>
                  <span>opened {timeAgo(issue.created_at)}</span>
                </div>
              </div>

              <Avatar class="flex-shrink-0 w-8 h-8 border border-dashboard-gray-600">
                <AvatarImage src={issue.user.avatar_url} alt={issue.user.login} />
                <AvatarFallback class="text-gray-300 bg-dashboard-gray-800 text-body-sm">
                  {issue.user.login.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div
        class="p-8 text-center border rounded-xl border-dashboard-gray-700 bg-dashboard-gray-900/30"
      >
        <Icon icon="octicon:issue-opened-16" class="w-12 h-12 mx-auto mb-4 text-gray-500" />
        <p class="font-medium text-gray-400 text-heading-sm">No open issues</p>
        <p class="mt-1 text-gray-500 text-body-sm">
          This repository doesn't have any open issues at the moment.
        </p>
      </div>
    {/if}
  {/await}
</div>
