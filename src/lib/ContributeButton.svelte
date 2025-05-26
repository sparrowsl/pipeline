<script>
  import { page } from '$app/stores';

  export let project;

  const getProjectLink = () => {
    if ($page.data.isAuthenticated) {
      return project.user_id === $page.data.user?.id
        ? `/project/${project.id}`
        : `/project/${project.id}/contribute`;
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

<div class="flex w-full flex-col items-center">
  <a
    href={getProjectLink()}
    class="mt-5 flex w-full max-w-sm items-center justify-center rounded-full border border-solid border-teal-950 bg-cyan-950 px-6 py-2.5 text-base font-semibold text-zinc-100 shadow-md transition-colors hover:bg-cyan-900 focus:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 md:text-lg"
    role="button"
    aria-label={getButtonLabel()}
  >
    {getButtonLabel()}
  </a>

  {#if !$page.data.isAuthenticated}
    <p class="mt-2 text-sm text-gray-400 sm:text-base">Please sign in to contribute.</p>
  {/if}
</div>
