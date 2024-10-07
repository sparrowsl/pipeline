<script>
    import ProgressBar from './ProgressBar.svelte';
    import ContributeButton from './ContributeButton.svelte';
    import CategoryTag from './CategoryTag.svelte';
    import DPGRating from './DPGRating.svelte';
    
  import { onMount } from 'svelte';
  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function closeDropdown(event) {
    if (event.target.closest('.dropdown-container')) return;
    isOpen = false;
  }

  onMount(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  });
  </script>
  
  <div class="flex overflow-hidden flex-col bg-gray-200 rounded-3xl">
    <!-- <header class="relative pt-[75%]">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9be50ea8fec0dc6763ce3b49a4620cfba2186ff41be76f7cb1029b5aecd0a109" 
        alt="" 
        class="object-cover absolute inset-0 w-full h-full"
      />
      <div class="absolute top-4 right-4 p-1.5 bg-lime-300 rounded-2xl border-2 border-solid border-teal-950">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f382dca341e494eba1b7bf2d90e54aae478d3521243220b272d6824b92dc6874" 
          alt="" 
          class="object-contain w-5 h-5"
        />
      </div>
    </header> -->

    <header class="relative pt-[75%]">
      <a href="/userProjects">
      <img 
        loading="lazy" 
        src="https://s3-alpha-sig.figma.com/img/b145/e71a/4f52857904881646898dd594ee6b92a5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tt2xMwhQvYmcWeuMlhHsbwmV3TbFYJJ~T1XJSGBNff-FoACYJarUQmb6a~Vmh81Jef1oqcYhZUmS7Nb4N~CXNLaTcCgn2prDFa7jcMD35Z-X2G7HTRh682o7iFRuZQ14vEtrwYrAcG6ScIKWMvAjcOL5J-rRzwGHWeAObM6bdtYfjACUy9Nu4vMucAP4SS0QwXbZ1nZcNHb6N0RYoJ8nLB6xZt-1fh3djQB4FBOR-jFl1rTYi2~q8LviNZjR5cHXRvpTmcHNigVfkgMvbkS4vx20NZ5~HCBAKk40SG4c1mu2c62qFZXf5jzhamYBs2~i8BC4fDczAduSeGu2ZG9lFw__" 
        alt="" 
        class="object-cover absolute inset-0 w-full h-full"
      />
      </a>
      <div class="absolute top-4 right-4">
        <div class="inline-block relative text-left dropdown-container">
          <div>
            <button 
              type="button" 
              class="inline-flex justify-center items-center p-1.5 bg-lime-300 rounded-2xl border-2 border-solid border-teal-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500" 
              on:click={toggleDropdown}
            >
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f382dca341e494eba1b7bf2d90e54aae478d3521243220b272d6824b92dc6874" 
                alt="" 
                class="object-contain w-5 h-5"
              />
            </button>
          </div>
    
          {#if isOpen}
            <div 
              class="absolute right-0 mt-2 w-56 bg-[#0d909c] rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right" 
              role="menu" 
              aria-orientation="vertical"
            >
              <div class="py-1" role="none">
                <a href="/userProjects" class="block px-4 py-2 text-sm text-white" role="menuitem">Follow Project</a>
                <a href="/profile" class="block px-4 py-2 text-sm text-white" role="menuitem">Creator's Name</a>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </header>
    
    <div class="p-4">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-xl font-semibold text-black">Title</h2>
        <p class="text-xs text-neutral-400">
          <span class="text-sm font-semibold">$300</span> raised of <span class="text-sm font-semibold">$2000</span>
        </p>
      </div>
      <p class="mb-2 text-xs text-black">
        Lorem ipsum dolor sit amet consectetur. Quis viverra egestas pulvinar volutpat at mauris tincidunt mi. Nunc volutpat netus tristique donec lectus.
      </p>
      <div class="flex gap-2 mb-4">
        <CategoryTag text="category 1" />
        <CategoryTag text="category 2" />
      </div>
      
      <DPGRating rating={5} total={9} />
      <ProgressBar progress={206} total={289} />
      
      <ContributeButton />
    </div>
  </div>