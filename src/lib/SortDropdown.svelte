  <script>
    import { onMount } from 'svelte';
  
    let isDropdownOpen = false; 
    let selectedOption = "Sort by"; 
  
    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen; 
    }
  
    function selectOption(option) {
        selectedOption = option; 
        isDropdownOpen = false; 
    }
  
    function closeDropdown(event) {
        if (!event.target.closest('.dropdown')) {
            isDropdownOpen = false; 
        }
    }
  
       
    onMount(() => {
        document.addEventListener('click', closeDropdown);
        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    });
  </script>
  
  <div class="dropdown relative flex gap-1.5 justify-center items-center self-stretch px-6 py-4 my-auto bg-teal-950 rounded-[43px] max-md:px-2" role="button" tabindex="0">
  <button on:click={toggleDropdown} class="dropdown relative flex gap-1.5 justify-center items-center self-stretch px-2 my-auto bg-teal-950 rounded-[43px] max-md:px-5" role="button" tabindex="0">
    <span class="self-stretch my-auto text-lg cursor-pointer" >{selectedOption}</span>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06ffd7e20c2e1885ffcdb09988de28f3f926e106789fafcb6c3b52dba9b903f8?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="" class="self-stretch object-contain w-6 my-auto shrink-0 aspect-square" />
  </button>
      
      {#if isDropdownOpen}
        <div class="absolute z-10 w-48 mt-2 rounded-md shadow-lg bg-teal-950 top-12 ">
            <ul class="py-2">
                <li class="px-4 py-2 cursor-pointer" on:click={() => selectOption('Option 1')}>Option 1</li>
                <li class="px-4 py-2 cursor-pointer " on:click={() => selectOption('Option 2')}>Option 2</li>
                <li class="px-4 py-2 cursor-pointer" on:click={() => selectOption('Option 3')}>Option 3</li>
            </ul>
        </div>
      {/if}
  </div>
  
  <style>
    
    .dropdown {
        position: relative; 
    }
  </style>