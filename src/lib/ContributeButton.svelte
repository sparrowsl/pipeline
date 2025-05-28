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

  const getButtonVariant = () => {
    if ($page.data.isAuthenticated && project.user_id === $page.data.user?.id) {
      return 'secondary'; // Secondary button for "View"
    }
    return 'primary'; // Primary button for "Contribute"
  };
</script>

<div class="flex w-full flex-col items-center">
  <a
    href={getProjectLink()}
    class="dashboard-button dashboard-button-{getButtonVariant()} flex w-full items-center justify-center"
    role="button"
    aria-label={getButtonLabel()}
  >
    {getButtonLabel()}
  </a>

  {#if !$page.data.isAuthenticated}
    <p class="mt-3 text-center text-body-sm text-gray-400">Please sign in to contribute.</p>
  {/if}
</div>

<style>
  .dashboard-button {
    /* Base button styling from style guide */
    padding: 12px 24px;
    font-weight: 500;
    border-radius: 12px; /* rounded-xl */
    font-size: 1rem; /* text-label-lg */
    line-height: 1.5;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    border: none;
    cursor: pointer;
    min-height: 44px;

    /* Focus styles */
    outline: none;
  }

  .dashboard-button:focus-visible {
    outline: 2px solid rgb(139, 92, 246); /* dashboard-purple-500 */
    outline-offset: 2px;
  }

  .dashboard-button:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  /* Primary Button - Accent/CTA styling */
  .dashboard-button-primary {
    background: rgb(250, 204, 21); /* dashboard-yellow-400 */
    color: rgb(0, 0, 0); /* dashboard-black */
    font-weight: 600;
  }

  .dashboard-button-primary:hover {
    background: rgb(245, 158, 11); /* dashboard-yellow-500 */
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(250, 204, 21, 0.25);
  }

  .dashboard-button-primary:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(250, 204, 21, 0.25);
  }

  /* Secondary Button - For "View" action */
  .dashboard-button-secondary {
    background: rgb(38, 38, 38); /* dashboard-gray-800 */
    color: rgb(255, 255, 255);
    border: 1px solid rgb(64, 64, 64); /* dashboard-gray-700 */
  }

  .dashboard-button-secondary:hover {
    background: rgb(64, 64, 64); /* dashboard-gray-700 */
    border-color: rgb(82, 82, 82); /* dashboard-gray-600 */
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }

  .dashboard-button-secondary:active {
    transform: translateY(0);
    background: rgb(23, 23, 23); /* dashboard-gray-900 */
  }
</style>
