<!-- <div class="flex gap-2.5 items-center self-stretch my-auto w-[43px]">
    <button class="flex gap-2.5 items-center self-stretch p-2.5 my-auto bg-lime-100 h-[43px] rounded-[51px] w-[43px]" aria-label="User profile">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/96beec81ef327e5423daad349680a010114e431e2dde868d082043ddbe2bcb6a?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="User avatar" class="object-contain self-stretch my-auto aspect-square w-[25px]" />
    </button>
  </div> -->


  <script> // We'll create this directive
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
  </div>


  