<script>
  import UserProfile from './UserProfile.svelte';
  import Logo from './Logo.svelte';
  import { onMount } from 'svelte';
  import { searchBarOpen } from './utils.js';
  import Icon from '@iconify/svelte';
  import { Button } from '$lib/components/ui/button';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

  let isResourcesOpen = false;
  let isMobileMenuOpen = false;
  let isSearchModalOpen = false;

  function toggleResources() {
    isResourcesOpen = !isResourcesOpen;
  }

  function closeResources(event) {
    if (!event.target.closest('.resources-dropdown')) {
      isResourcesOpen = false;
    }
  }

  function toggleMobileMenu() {
    console.log('toggleMobileMenu');
    isMobileMenuOpen = !isMobileMenuOpen;
    if (!isMobileMenuOpen) {
      isResourcesOpen = false;
    }
  }

  onMount(() => {
    document.addEventListener('click', closeResources);

    if (isSearchModalOpen) {
      document.addEventListener('click', handleClickOutside);
    }
  });

  export let data = {
    isAuthenticated: false,
    user: null,
  };
</script>

<header
  class="relative left-0 right-0 top-0 z-[99999] flex h-[84px] items-center justify-between border-b border-dashboard-gray-700 bg-dashboard-gray-900 px-4 py-5 backdrop-blur-[15px] md:px-8"
>
  <div class="flex items-center h-6 gap-4 grow-0 md:gap-12">
    <Logo />
  </div>

  <div class="flex items-center md:flex lg:hidden">
    <Button
      on:click={toggleMobileMenu}
      class="text-white border-dashboard-gray-600 hover:bg-dashboard-gray-800 focus:outline-none "
      aria-label="Toggle mobile menu"
      variant="outline"
    >
      {#if isMobileMenuOpen}
        <Icon icon="mdi:close" class="text-2xl" />
      {:else}
        <Icon icon="mdi:hamburger-menu" class="text-2xl" />
      {/if}
    </Button>
  </div>

  <div class="hidden w-full max-w-[480px] items-center justify-center lg:flex">
    <div
      class="flex items-center justify-between w-full pl-4 pr-3 border rounded-full align-center border-dashboard-gray-600 bg-dashboard-gray-800"
    >
      <Button
        type="button"
        class="flex items-center justify-between w-full p-2 bg-transparent hover:bg-transparent"
        on:click={() => ($searchBarOpen = !$searchBarOpen)}
      >
        <span class="text-sm text-gray-400">Search for a project....</span>
        <Icon icon="mdi:search" class="text-2xl text-gray-400" />
      </Button>
    </div>
  </div>

  <div class="hidden h-[42.67px] grow-0 items-center justify-end gap-4 lg:flex">
    <div>
      {#if data.isAuthenticated}
        <UserProfile {data} />
      {:else}
        <a
          href="/sign-in"
          class="px-6 py-3 font-semibold transition-colors rounded-xl bg-dashboard-yellow-400 text-label-lg text-dashboard-black hover:bg-dashboard-yellow-500"
        >
          Sign up / Log in
        </a>
      {/if}
    </div>
  </div>

  {#if isMobileMenuOpen}
    <div
      class="absolute left-0 right-0 top-[84px] w-[100%] border-b border-dashboard-gray-700 bg-dashboard-gray-900 lg:hidden"
    >
      <div class="flex flex-col w-full px-8 py-4 space-y-4">
        <div class="mb-2 w-full max-w-[480px] items-center justify-center">
          <div
            class="flex items-center justify-between w-full py-2 pl-4 pr-3 border rounded-full align-center border-dashboard-gray-600 bg-dashboard-gray-800 max-lg:w-full"
          >
            <Button
              type="button"
              class="flex justify-between w-full mt-2 bg-transparent hover:bg-transparent"
              on:click={() => ($searchBarOpen = !$searchBarOpen)}
            >
              <span
                class="ml-[-18px] font-['Inter'] text-base font-semibold leading-none text-gray-400 max-lg:px-8 max-md:mb-[4px]"
                >Search for a project...</span
              >
            </Button>
          </div>
        </div>

        <div class="pt-4">
          {#if data.isAuthenticated}
            <UserProfile {data} />
          {:else}
            <a
              href="/sign-in"
              class="block w-full px-6 py-3 font-semibold text-center transition-colors rounded-xl bg-dashboard-yellow-400 text-label-lg text-dashboard-black hover:bg-dashboard-yellow-500"
            >
              Sign up / Log in
            </a>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</header>
