<!-- <script>
  import { clickOutside } from './clickOutside.js'; 

  export let username = "Username";
  export let avatarSrc = "https://cdn.builder.io/api/v1/image/assets/TEMP/f50886c560a5ea3db3b34b8d41e664325576c095b4bd239ce6486cf15c9fcce6";

  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function closeDropdown() {
    isOpen = false;
  }

  const menuItems = [
    { href: "#profile", text: "Profile", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b980984f37b77a34bf192f73bc2b8864dfe052a2488e8d5b5aa5b9d9bb6dcfae" },
    { href: "#projects", text: "Projects", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f94f282a088dca0f4f3cff9d000fcf49231532d17ca9669bc27adc8e207ecb09" },
    { href: "#create-project", text: "Create Project", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/36ac60f5b7c31186fbac22d462a0e906fbc7bd63ae9a9caa9b8e5265e025d2d7" },
    { href: "#notifications", text: "Notifications", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b23edae5206ca39fb5807ad08388550dad0ae7d3ce7e4178192c5f0487952fea" },
    { href: "#settings", text: "Settings", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/134e2d421c52a6152b3b292772dd18c712e3b18e2360f2645b515c9ce5caf201" },
    { href: "#logout", text: "Logout", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a013c299c4e7d625b1100bfc8771c9e388f0dbf7c706bec63957c90cf739fe2b" },
  ];
</script>

<div class="inline-block relative" use:clickOutside on:click_outside={closeDropdown}>
  <button 
    on:click={toggleDropdown}
    class="flex gap-3 items-center"
  >
    <div class="overflow-hidden w-11 h-11 rounded-full border-2 border-white bg-zinc-300">
      <img {avatarSrc} alt="User avatar" class="object-cover w-full h-full" />
    </div>
    <span class="text-white">{username}</span>
  </button>

  {#if isOpen}
    <nav class="flex absolute right-0 z-50 flex-col mt-2 w-48 text-white bg-teal-600 rounded-lg shadow-lg">
      <ul class="p-4 space-y-4 list-none">
        {#each menuItems as item, index}
          {#if index === 4}
            <hr class="border-t border-white" />
          {/if}
          <li class="flex gap-4 items-center">
            <img src={item.icon} alt="" class="w-4 h-4" />
            <a href={item.href} class="hover:text-teal-300">{item.text}</a>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
</div>

<style>
  /* Ensure the dropdown has a high z-index to avoid overlapping issues */
  nav {
    z-index: 150;
  }
</style> -->


<div class="relative flex gap-2.5 items-center self-stretch my-auto w-[43px]" use:clickOutside on:clickoutside={closeDropdown}>
  <button
    on:click={toggleDropdown}
    class="flex gap-2.5 items-center justify-center self-stretch p-2.5 my-auto bg-lime-100 h-[43px] rounded-[51px] w-[43px]"
    aria-label="User profile"
    aria-expanded={isOpen}
    aria-haspopup="true"
  >
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/96beec81ef327e5423daad349680a010114e431e2dde868d082043ddbe2bcb6a?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
      alt="User avatar"
      class="object-contain self-stretch my-auto aspect-square w-[25px]"
    />
  </button>
  </div>