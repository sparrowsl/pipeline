<script>
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import { enhance } from '$app/forms';
  import Icon from '@iconify/svelte';
  import { afterNavigate } from '$app/navigation';
  import { Button } from '$lib/components/ui/button';

  export let data;

  let user = null;
  const defaultImageUrl =
    'https://zyfpmpmcpzmickajgkwp.supabase.co/storage/v1/object/public/pipeline-images/defaults/userProfile.png';

  afterNavigate(() => {});

  $: if (data.isAuthenticated) {
    user = data.user;
  }
</script>

<div class="relative flex items-center">
  <DropdownMenu.Root>
    <DropdownMenu.Trigger class="flex w-full items-center justify-between !rounded-[51px] px-2">
      {#if user?.id}
        <img
          loading="lazy"
          src={user?.image_url ? user.image_url : defaultImageUrl}
          alt="User avatar"
          class="aspect-square w-[43px] rounded-[51px] object-contain"
        />
        <span class="ml-4 text-ellipsis whitespace-nowrap text-white lg:hidden">
          {user.display_name}
        </span>
      {/if}
    </DropdownMenu.Trigger>

    <DropdownMenu.Content
      sideOffset={8}
      class="z-[999999] w-[280px] !rounded-2xl border-0 bg-[#0b383c]  p-0 shadow-lg  max-lg:-translate-x-[60px] max-md:left-20"
      align="end"
    >
      <nav class="flex flex-col py-2">
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

        <DropdownMenu.Group class="mt-6 flex flex-col px-6 text-sm text-white">
          <DropdownMenu.Item class="flex cursor-pointer items-center gap-4">
            <Icon icon="et:profile-male" class="text-lg" />
            <a href="/profile">Profile</a>
          </DropdownMenu.Item>
          <DropdownMenu.Item class="mt-6 flex cursor-pointer items-center gap-4">
            <Icon icon="stash:save-ribbon-light" class="text-lg" />
            <a href="/project/create">Create Project</a>
          </DropdownMenu.Item>
        </DropdownMenu.Group>

        <DropdownMenu.Separator class="mt-7 w-full border-stone-300" />

        <DropdownMenu.Group class="mt-6 flex flex-col px-6 text-sm text-white">
          <DropdownMenu.Item class="flex cursor-pointer items-center gap-4">
            <Icon icon="stash:cog-light" class="text-xl" />
            <a href="/profile/edit">Settings</a>
          </DropdownMenu.Item>
          <DropdownMenu.Item class="mt-4 flex cursor-pointer items-center gap-4">
            <Icon icon="humbleicons:logout" class="text-lg" />
            <form action="/logout" method="post" use:enhance>
              <Button type="submit" class="text-left">Logout</Button>
            </form>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </nav>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
