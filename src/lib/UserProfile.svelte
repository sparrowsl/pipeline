<script>
  import { onMount } from 'svelte';
  import { enhance } from '$app/forms';
  import Icon from '@iconify/svelte';
  import { afterNavigate } from '$app/navigation';

  let isOpen = false;
  let dropdownNode;
  let user = null;
  let error = null;
  export let data;

  afterNavigate(() => (isOpen = false));

  const defaultImageUrl =
    'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/defaults/userProfile.png';

  function toggleDropdown(event) {
    event.stopPropagation();
    isOpen = !isOpen;
  }

  function handleClickOutside(event) {
    if (!event.target.closest('button')) {
      isOpen = false;
    }
  }

  onMount(async () => {
    const handleGlobalClick = (event) => {
      if (isOpen && dropdownNode && !dropdownNode.contains(event.target)) {
        handleClickOutside(event);
      }
    };

    document.addEventListener('click', handleGlobalClick);

    if (data.isAuthenticated) {
      user = data.user;
    }

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  });
</script>

<div class="relative flex items-center">
  <button
    on:click={toggleDropdown}
    class="flex h-[43px] w-full items-center justify-between rounded-[51px] p-2.5 px-2"
  >
    {#if user?.id}
      <img
        loading="lazy"
        src={user?.image_url ? user.image_url : defaultImageUrl}
        alt="User avatar"
        class="aspect-square w-[43px] rounded-[51px] object-contain"
      />
      <span class="ml-4 text-ellipsis whitespace-nowrap text-white lg:hidden"
        >{user.display_name}</span
      >
    {/if}
  </button>

  {#if isOpen}
    <div
      bind:this={dropdownNode}
      class="absolute right-0 top-full z-[9999] mt-2 w-[280px] rounded-2xl bg-teal-600 shadow-lg max-lg:left-40 max-lg:-translate-x-[60px] max-md:left-20"
    >
      <nav class="flex flex-col py-6">
        <div class="ml-6 flex items-center gap-3 max-lg:hidden">
          <div class="flex rounded-3xl p-3">
            <img
              loading="lazy"
              src={user?.image_url ? user.image_url : defaultImageUrl}
              class="aspect-square w-[42px] rounded-[51px] object-contain"
              alt="User avatar"
            />
          </div>
          <span class="text-white">{user.display_name}</span>
        </div>

        <hr class="mt-4 w-full border-stone-300 max-lg:hidden" />

        <ul class="mt-6 flex flex-col px-6 text-sm text-white">
          <li class="flex items-center gap-4">
            <Icon icon="et:profile-male" class="text-lg" />
            <a href="/profile">Profile</a>
          </li>
          <li class="mt-6 flex items-center gap-4">
            <Icon icon="stash:save-ribbon-light" class="text-lg" />
            <a href="/project/create">Create Project</a>
          </li>
        </ul>

        <hr class="mt-7 w-full border-stone-300" />

        <ul class="mt-6 flex flex-col px-6 text-sm text-white">
          <li class="flex items-center gap-4">
            <Icon icon="stash:cog-light" class="text-xl" />
            <a href="/profile/edit">Settings</a>
          </li>
          <li class="mt-4 flex items-center gap-4">
            <Icon icon="humbleicons:logout" class="text-lg" />
            <form action="/profile/?/logout" method="post" use:enhance>
              <button type="submit" class="text-left">Logout</button>
            </form>
          </li>
        </ul>
      </nav>
    </div>
  {/if}
</div>
