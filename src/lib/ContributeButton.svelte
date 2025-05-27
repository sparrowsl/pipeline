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
    class="glass-button mt-5 flex w-full max-w-sm items-center justify-center rounded-full px-6 py-2.5 text-base font-semibold text-gray-800 transition-all duration-300 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent md:text-lg"
    role="button"
    aria-label={getButtonLabel()}
  >
    {getButtonLabel()}
  </a>

  {#if !$page.data.isAuthenticated}
    <p class="mt-2 text-sm text-gray-600 sm:text-base">Please sign in to contribute.</p>
  {/if}
</div>

<style>
  .glass-button {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow:
      0 4px 16px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  .glass-button:hover {
    background: rgba(255, 255, 255, 0.9);
    color: #1f2937;
    border-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: none;
    box-shadow:
      0 6px 20px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
  }

  .glass-button:active {
    transform: scale(0.98);
  }
</style>
