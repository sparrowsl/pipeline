<!-- <script>
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

  export let project;

  onMount(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  });
  </script>
  
  <div class="flex flex-col overflow-hidden bg-gray-200 rounded-3xl">

    <header class="relative pt-[75%]">
      <a href="/singleProject/{project.id}">
      <img 
        loading="lazy" 
        src="https://s3-alpha-sig.figma.com/img/b145/e71a/4f52857904881646898dd594ee6b92a5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tt2xMwhQvYmcWeuMlhHsbwmV3TbFYJJ~T1XJSGBNff-FoACYJarUQmb6a~Vmh81Jef1oqcYhZUmS7Nb4N~CXNLaTcCgn2prDFa7jcMD35Z-X2G7HTRh682o7iFRuZQ14vEtrwYrAcG6ScIKWMvAjcOL5J-rRzwGHWeAObM6bdtYfjACUy9Nu4vMucAP4SS0QwXbZ1nZcNHb6N0RYoJ8nLB6xZt-1fh3djQB4FBOR-jFl1rTYi2~q8LviNZjR5cHXRvpTmcHNigVfkgMvbkS4vx20NZ5~HCBAKk40SG4c1mu2c62qFZXf5jzhamYBs2~i8BC4fDczAduSeGu2ZG9lFw__" 
        alt="" 
        class="absolute inset-0 object-cover h-full overflow-hidden rounded-md w-[97%]"
      />
      </a>
      <div class="absolute top-10 right-8">
        <div class="relative inline-block text-left dropdown-container">
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
      <div class="flex items-center justify-between mb-2">
        <h2 class="text-xl font-semibold text-black">{project.title}</h2>
        <p class="text-xs text-neutral-400">
          <span class="text-sm font-semibold">${project.current_funding || 0}</span> raised of <span class="text-sm font-semibold">${project.funding_goal}</span>
        </p>
      </div>
      <p class="mb-2 text-xs text-black">
        {project.bio}
      </p>
      <div class="flex gap-2 mb-4">
        <CategoryTag text="category 1" />
        <CategoryTag text="category 2" />
      </div>
      
      <DPGRating rating={5} total={9} />
      <ProgressBar progress={206} total={289} />
      
      <ContributeButton project={project} />
    </div>
  </div> -->

<script>
  import ProgressBar from "./ProgressBar.svelte";
  import ContributeButton from "./ContributeButton.svelte";
  import CategoryTag from "./CategoryTag.svelte";
  import DPGRating from "./DPGRating.svelte";

  import { onMount } from "svelte";
  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function closeDropdown(event) {
    if (event.target.closest(".dropdown-container")) return;
    isOpen = false;
  }

  export let project;

  onMount(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  });
</script>

<div class="flex flex-col overflow-hidden bg-gray-200 rounded-3xl">
  <header class="relative pt-[75%]">
    <a
      href="/singleProject/{project.id}"
      class="absolute inset-0 flex items-center justify-center"
    >
      <div class="w-[95%] h-[90%] overflow-hidden rounded-3xl">
        <img
          loading="lazy"
          src="https://s3-alpha-sig.figma.com/img/b145/e71a/4f52857904881646898dd594ee6b92a5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tt2xMwhQvYmcWeuMlhHsbwmV3TbFYJJ~T1XJSGBNff-FoACYJarUQmb6a~Vmh81Jef1oqcYhZUmS7Nb4N~CXNLaTcCgn2prDFa7jcMD35Z-X2G7HTRh682o7iFRuZQ14vEtrwYrAcG6ScIKWMvAjcOL5J-rRzwGHWeAObM6bdtYfjACUy9Nu4vMucAP4SS0QwXbZ1nZcNHb6N0RYoJ8nLB6xZt-1fh3djQB4FBOR-jFl1rTYi2~q8LviNZjR5cHXRvpTmcHNigVfkgMvbkS4vx20NZ5~HCBAKk40SG4c1mu2c62qFZXf5jzhamYBs2~i8BC4fDczAduSeGu2ZG9lFw__"
          alt=""
          class="object-cover w-full h-full"
        />
      </div>
    </a>
    <div class="absolute top-4 right-3">
      <div class="relative inline-block text-left dropdown-container">
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
              class="object-contain w-4 h-4"
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
              <a
                href="/userProjects"
                class="block px-4 py-2 text-sm text-white"
                role="menuitem">Follow Project</a
              >
              <a
                href="/profile"
                class="block px-4 py-2 text-sm text-white"
                role="menuitem">Creator's Name</a
              >
            </div>
          </div>
        {/if}
      </div>
    </div>
  </header>

  <div class="p-4 mt-auto">
    <div class="flex items-center justify-between mb-2">
      <h2 class="text-xl font-semibold text-black">{project.title}</h2>
      <p class="text-xs text-neutral-400">
        <DPGRating rating={project.dpgStatusCount} />
      </p>
    </div>
 
    <div class="flex gap-2 ml-[-2px] mb-4">
      {#if project.tags.length > 0}
        {#each project.tags as tag}
          <CategoryTag {tag} />
        {/each}
      {:else}
        <p></p>
      {/if}
    </div>

   <div>
    <span class="text-sm font-semibold">${project.current_funding || 0}</span>
    raised of <span class="text-sm font-semibold">${project.funding_goal}</span>
   </div>
    <ProgressBar progress={project.current_funding} total={project.funding_goal} />
    <ContributeButton {project} />
  </div>
</div>
