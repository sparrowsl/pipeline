<!-- <div class="flex gap-2.5 items-center self-stretch my-auto w-[43px]">
    <button class="flex gap-2.5 items-center self-stretch p-2.5 my-auto bg-lime-100 h-[43px] rounded-[51px] w-[43px]" aria-label="User profile">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/96beec81ef327e5423daad349680a010114e431e2dde868d082043ddbe2bcb6a?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="User avatar" class="object-contain self-stretch my-auto aspect-square w-[25px]" />
    </button>
  </div> -->


  <!-- <script> // We'll create this directive
    import ProfileContent from './ProfileContent.svelte';
  
    let isOpen = false;
  
    function toggleDropdown() {
      isOpen = !isOpen;
    }
  
    function closeDropdown() {
      isOpen = false;
    }

    export function clickOutside(node) {
    const handleClick = event => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        node.dispatchEvent(
          new CustomEvent('clickoutside', node)
        )
      }
    }
  
    document.addEventListener('click', handleClick, true);
  
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    }
  }
  </script>
  
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
    
    {#if isOpen}
      <div class="absolute right-0 top-full z-50 mt-2">
        <ProfileContent />
      </div>
    {/if}
  </div> -->


  
  <!-- <script>
    import { clickOutside } from './clickOutside.js';
    
    let isOpen = false;
  
    function toggleDropdown() {
      isOpen = !isOpen;
    }
  
    function closeDropdown() {
      isOpen = false;
    }
  </script>
  
  <div class="flex relative items-center">
    <button
      on:click={toggleDropdown}
      class="flex items-center justify-center p-2.5 {isOpen ? 'bg-teal-600' : 'bg-lime-100'} h-[43px] rounded-[51px] w-[43px] transition-colors duration-200"
      aria-label="User profile"
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/96beec81ef327e5423daad349680a010114e431e2dde868d082043ddbe2bcb6a?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
        alt="User avatar"
        class="w-[25px] aspect-square object-contain"
      />
    </button>
  

    {#if isOpen}
      <div
        class="absolute right-0 top-full z-50 mt-2 bg-teal-600 rounded-2xl shadow-lg w-[280px]"
        use:clickOutside on:clickoutside={closeDropdown}
      >
        <nav class="flex flex-col py-6">
          <div class="flex gap-3 items-center ml-6">
            <div class="flex p-3 rounded-3xl border-2 border-white bg-zinc-300">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f50886c560a5ea3db3b34b8d41e664325576c095b4bd239ce6486cf15c9fcce6?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
                class="w-[22px] object-contain aspect-square"
                alt="User avatar"
              />
            </div>
            <span class="text-white">Username</span>
          </div>
  
          <hr class="mt-4 w-full border-stone-300" />
  
          <ul class="flex flex-col px-6 mt-6 text-sm text-white">
            <li class="flex gap-4 items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b980984f37b77a34bf192f73bc2b8864dfe052a2488e8d5b5aa5b9d9bb6dcfae?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
                class="w-[17px] aspect-square object-contain"
                alt=""
              />
              <a href="#profile">Profile</a>
            </li>
            <li class="flex gap-4 items-center mt-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f94f282a088dca0f4f3cff9d000fcf49231532d17ca9669bc27adc8e207ecb09?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
                class="w-[17px] aspect-[0.94] object-contain"
                alt=""
              />
              <a href="#projects">Projects</a>
            </li>
            <li class="flex gap-4 items-center mt-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/36ac60f5b7c31186fbac22d462a0e906fbc7bd63ae9a9caa9b8e5265e025d2d7?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
                class="w-[17px] aspect-square object-contain"
                alt=""
              />
              <a href="#create-project">Create Project</a>
            </li>
            <li class="flex gap-4 items-center mt-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b23edae5206ca39fb5807ad08388550dad0ae7d3ce7e4178192c5f0487952fea?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
                class="w-[17px] aspect-[0.94] object-contain"
                alt=""
              />
              <a href="#notifications">Notifications</a>
            </li>
          </ul>
  
          <hr class="mt-7 w-full border-stone-300" />
  
          <ul class="flex flex-col px-6 mt-5 ml-6 text-sm text-white">
            <li class="flex gap-4 items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/134e2d421c52a6152b3b292772dd18c712e3b18e2360f2645b515c9ce5caf201?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
                class="w-[18px] aspect-[1.06] object-contain"
                alt=""
              />
              <a href="#settings">Settings</a>
            </li>
            <li class="flex gap-4 items-center mt-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a013c299c4e7d625b1100bfc8771c9e388f0dbf7c706bec63957c90cf739fe2b?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
                class="w-[18px] aspect-square object-contain"
                alt=""
              />
              <a href="#logout">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    {/if}
  </div> -->



  <script>
    import { onMount } from 'svelte';
    
    let isOpen = false;
    let dropdownNode;
  
    function toggleDropdown(event) {
      event.stopPropagation();
      isOpen = !isOpen;
    }
  
    function handleClickOutside(event) {
      if (!event.target.closest('button')) {
        isOpen = false;
      }
    }
  
    onMount(() => {
      const handleGlobalClick = (event) => {
        if (isOpen && dropdownNode && !dropdownNode.contains(event.target)) {
          handleClickOutside(event);
        }
      };
  
      document.addEventListener('click', handleGlobalClick);
  
      return () => {
        document.removeEventListener('click', handleGlobalClick);
      };
    });
  </script>
  
  <div class="flex relative items-center">
    <button
      on:click={toggleDropdown}
      class="flex items-center justify-center p-2.5 bg-lime-100 h-[43px] rounded-[51px] w-[43px]"
      aria-label="User profile"
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/96beec81ef327e5423daad349680a010114e431e2dde868d082043ddbe2bcb6a?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
        alt="User avatar"
        class="w-[25px] aspect-square object-contain"
      />
    </button>
  
    <!-- Dropdown -->
    {#if isOpen}
      <div
        bind:this={dropdownNode}
        class="absolute right-0 top-full z-50 mt-2 bg-teal-600 rounded-2xl shadow-lg w-[280px]"
      >
        <nav class="flex flex-col py-6">
          <div class="flex gap-3 items-center ml-6">
            <div class="flex p-3 rounded-3xl border-2 border-white bg-zinc-300">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f50886c560a5ea3db3b34b8d41e664325576c095b4bd239ce6486cf15c9fcce6?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
                class="w-[22px] object-contain aspect-square"
                alt="User avatar"
              />
            </div>
            <span class="text-white">Username</span>
          </div>
  
          <hr class="mt-4 w-full border-stone-300" />
  
          <ul class="flex flex-col px-6 mt-6 text-sm text-white">
            <li class="flex gap-4 items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b980984f37b77a34bf192f73bc2b8864dfe052a2488e8d5b5aa5b9d9bb6dcfae?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
                class="w-[17px] aspect-square object-contain"
                alt=""
              />
              <a href="/profile">Profile</a>
            </li>
            <li class="flex gap-4 items-center mt-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f94f282a088dca0f4f3cff9d000fcf49231532d17ca9669bc27adc8e207ecb09?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
                class="w-[17px] aspect-[0.94] object-contain"
                alt=""
              />
              <a href="#projects">Projects</a>
            </li>
            <li class="flex gap-4 items-center mt-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/36ac60f5b7c31186fbac22d462a0e906fbc7bd63ae9a9caa9b8e5265e025d2d7?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
                class="w-[17px] aspect-square object-contain"
                alt=""
              />
              <a href="/createProject">Create Project</a>
            </li>
            <li class="flex gap-4 items-center mt-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b23edae5206ca39fb5807ad08388550dad0ae7d3ce7e4178192c5f0487952fea?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
                class="w-[17px] aspect-[0.94] object-contain"
                alt=""
              />
              <a href="#notifications">Notifications</a>
            </li>
          </ul>
  
          <hr class="mt-7 w-full border-stone-300" />
  
          <ul class="flex flex-col px-6 mt-6 text-sm text-white">
            <li class="flex gap-4 items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/134e2d421c52a6152b3b292772dd18c712e3b18e2360f2645b515c9ce5caf201?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
                class="w-[18px] aspect-[1.06] object-contain"
                alt=""
              />
              <a href="#settings">Settings</a>
            </li>
            <li class="flex gap-4 items-center mt-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a013c299c4e7d625b1100bfc8771c9e388f0dbf7c706bec63957c90cf739fe2b?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
                class="w-[18px] aspect-square object-contain"
                alt=""
              />
              <a href="#logout">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    {/if}
  </div>