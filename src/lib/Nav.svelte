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
  <div class="flex h-6 grow-0 items-center gap-4 md:gap-12">
    <Logo />
  </div>

  <div class="flex items-center md:flex lg:flex">
    <Button
      on:click={toggleMobileMenu}
      class="border-dashboard-gray-600 text-white hover:bg-dashboard-gray-800 focus:outline-none lg:hidden"
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
      class="align-center flex w-full items-center justify-between rounded-full border border-dashboard-gray-600 bg-dashboard-gray-800 pl-4 pr-3"
    >
      <Button
        type="button"
        class="flex w-full items-center justify-between bg-transparent p-2 hover:bg-transparent"
        on:click={() => ($searchBarOpen = !$searchBarOpen)}
      >
        <span class="text-sm text-gray-400">Search for a project....</span>
        <Icon icon="mdi:search" class="text-2xl text-gray-400" />
      </Button>
    </div>
  </div>

  <div class="hidden h-[42.67px] grow-0 items-center justify-end gap-4 lg:flex">
    <div class="flex items-center gap-4">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger class="focus:outline-none">
          <Button
            variant="ghost"
            class="flex items-center gap-1 p-0 text-white transition-colors hover:bg-transparent hover:text-dashboard-yellow-400"
          >
            <span class="font-['Inter'] text-base font-semibold leading-none"> Resources </span>
            <Icon
              icon="radix-icons:caret-down"
              class="text-2xl transition-transform duration-200"
            />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          class="z-[999999] w-[18vh] rounded-md border border-dashboard-gray-700 !bg-dashboard-gray-900 p-0 shadow-lg"
          sideOffset={5}
          align="end"
        >
          <DropdownMenu.Item
            class="border-none p-0 hover:bg-dashboard-gray-800 focus:bg-dashboard-gray-800 focus:outline-none"
          >
            <a
              href="/resources/pipeline"
              class="block w-full px-4 py-3 text-left text-gray-300 transition-colors hover:border-none hover:bg-dashboard-gray-800 hover:text-dashboard-yellow-400 hover:outline-none"
              >About Pipeline</a
            >
          </DropdownMenu.Item>
          <DropdownMenu.Item
            class="border-none p-0 hover:bg-dashboard-gray-800 focus:bg-dashboard-gray-800 focus:outline-none"
          >
            <a
              href="/resources/digital-public-good"
              class="block w-full px-4 py-3 text-left text-gray-300 transition-colors hover:border-none hover:bg-dashboard-gray-800 hover:text-dashboard-yellow-400 hover:outline-none"
              >About DPGs</a
            >
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>

    <div>
      {#if data.isAuthenticated}
        <UserProfile {data} />
      {:else}
        <a
          href="/sign-in"
          class="rounded-xl bg-dashboard-yellow-400 px-6 py-3 text-label-lg font-semibold text-dashboard-black transition-colors hover:bg-dashboard-yellow-500"
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
      <div class="flex w-full flex-col space-y-4 px-8 py-4">
        <div class="mb-2 w-full max-w-[480px] items-center justify-center">
          <div
            class="align-center flex w-full items-center justify-between rounded-full border border-dashboard-gray-600 bg-dashboard-gray-800 py-2 pl-4 pr-3 max-lg:w-full"
          >
            <Button
              type="button"
              class="mt-2 flex w-full justify-between bg-transparent hover:bg-transparent"
              on:click={() => ($searchBarOpen = !$searchBarOpen)}
            >
              <span
                class="ml-[-18px] font-['Inter'] text-base font-semibold leading-none text-gray-400 max-lg:px-8 max-md:mb-[4px]"
                >Search for a project...</span
              >
            </Button>
          </div>
        </div>

        <a
          href="/"
          class="font-['Inter'] text-base font-semibold text-white transition-colors hover:text-dashboard-yellow-400"
        >
          Tasks
        </a>

        <div class="resources-dropdown relative">
          <Button
            on:click={toggleResources}
            class="flex w-full items-center justify-between border-b border-dashboard-gray-700 bg-transparent px-4 py-4 hover:bg-dashboard-gray-800 focus:outline-none"
          >
            <span class="ml-[-18px] font-['Inter'] text-base font-semibold leading-none text-white">
              Resources
            </span>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[17px] transform transition-transform duration-200 {isResourcesOpen
                ? 'rotate-180'
                : ''}"
            >
              <g id="CaretDown" clip-path="url(#clip0_1224_8929)">
                <path
                  id="Vector"
                  d="M10.0837 4.5L6.33374 8.25L2.58374 4.5"
                  stroke="white"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1224_8929">
                  <rect width="12" height="12" fill="white" transform="translate(0.334106)" />
                </clipPath>
              </defs>
            </svg>
          </Button>

          {#if isResourcesOpen}
            <div
              class="absolute right-0 top-6 z-[9999] mt-2 w-[25vh] rounded-md border border-dashboard-gray-700 bg-dashboard-gray-800 shadow-lg"
            >
              <a
                href="/resources/pipeline"
                class="block w-full px-4 py-3 text-left text-gray-300 transition-colors hover:bg-dashboard-gray-700 hover:text-dashboard-yellow-400"
                >About Pipeline</a
              >
              <a
                href="/resources/digital-public-good"
                class="block w-full px-4 py-3 text-left text-gray-300 transition-colors hover:bg-dashboard-gray-700 hover:text-dashboard-yellow-400"
                >About DPGs</a
              >
            </div>
          {/if}
        </div>

        <div class="pt-4">
          {#if data.isAuthenticated}
            <UserProfile {data} />
          {:else}
            <a
              href="/sign-in"
              class="block w-full rounded-xl bg-dashboard-yellow-400 px-6 py-3 text-center text-label-lg font-semibold text-dashboard-black transition-colors hover:bg-dashboard-yellow-500"
            >
              Sign up / Log in
            </a>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</header>
