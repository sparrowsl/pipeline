<script>
  import { page } from '$app/stores';

  export let project;

  const getProjectLink = () => {
    if ($page.data.isAuthenticated) {
      return project.user_id === $page.data.user?.id
        ? `/project/${project.id}` // Owner's project link
        : `/project/${project.id}/contribute`; // Contributor's link
    }
    return '/sign-in';
  };

  const getButtonLabel = () => {
    if ($page.data.isAuthenticated) {
      return project.user_id === $page.data.user?.id ? 'View' : 'Contribute';
    }
    return 'Contribute';
  };
</script>

<a
  href={getProjectLink()}
  class="mt-5 flex w-full items-center justify-center whitespace-nowrap rounded-[48px] border border-solid border-teal-950 bg-cyan-950 text-xs font-medium leading-loose text-zinc-100"
>
  <span
    class="my-auto gap-2 self-stretch overflow-hidden rounded-3xl px-7 py-3.5 text-xl max-md:px-5"
  >
    {getButtonLabel()}
  </span>
</a>

{#if !$page.data.isAuthenticated}
  <!-- We can implement Tooltip or additional message for unauthenticated users -->
  <p class="mt-2 text-sm text-gray-400">Please sign in to contribute.</p>
{/if}
