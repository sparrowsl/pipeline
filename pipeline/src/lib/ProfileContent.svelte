<script>
  // You might want to pass these as props
  let username = "Username";
  let profileImage = "path/to/profile-image.jpg";

  // Define MenuItem as a Svelte component
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function MenuItem(icon, text) {
    return {
      icon,
      text,
      component: SvelteComponent
    };
  }
</script>

<div>
  <!-- Add your profile content here, for example: -->
  <img src={profileImage} alt={username} class="w-10 h-10 rounded-full" />
  <span>{username}</span>

  <!-- Use the MenuItem component -->
  {#each [
    MenuItem('user', 'Profile'),
    MenuItem('settings', 'Settings'),
    MenuItem('logout', 'Logout')
  ] as item}
    <div class="flex items-center gap-[14.60px]">
      <div class="w-[17.46px] h-[17.46px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
          <!-- Add your SVG path here or use an icon component -->
          <path d="M..." />
        </svg>
      </div>
      <div class="text-white text-sm font-normal font-['PP Mori'] leading-none">{item.text}</div>
    </div>
  {/each}
</div>

