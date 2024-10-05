<!-- <script>

let currentSection = 'basics';
    function isActive(section) {
  return currentSection === section;
}
</script>


<nav class="flex flex-wrap gap-10 justify-between items-center w-full text-3xl leading-none text-black whitespace-nowrap max-md:max-w-full">
    <a href="/project/basics" class="flex flex-col items-center justify-center w-[184px] text-center" on:click={() => currentSection = 'basics'}>
      <div class="w-full">Basics</div>
      {#if isActive('basics')}
        <div class="mt-2.5 bg-lime-800 rounded h-[7px] w-full max-w-[184px]"></div>
      {/if}
    </a>
    <a href="/createProject/team" class="flex flex-col items-center justify-center w-[184px] text-center" class:font-semibold={isActive('team')} on:click={() => currentSection = 'team'}>
      <div class="w-full">Team</div>
      {#if isActive('team')}
        <div class="mt-2.5 bg-lime-800 rounded h-[7px] w-full max-w-[184px]"></div>
      {/if}
    </a>
    <a href="/createProject/links" class="flex flex-col items-center justify-center w-[184px] text-center" class:font-semibold={isActive('links')} on:click={() => currentSection = 'links'}>
      <div class="w-full">Links</div>
      {#if isActive('links')}
        <div class="mt-2.5 bg-lime-800 rounded h-[7px] w-full max-w-[184px]"></div>
      {/if}
    </a>
    <a href="/createProject/funding" class="flex flex-col items-center justify-center w-[184px] text-center" class:font-semibold={isActive('funding')} on:click={() => currentSection = 'funding'}>
      <div class="w-full">Funding</div>
      {#if isActive('funding')}
        <div class="mt-2.5 bg-lime-800 rounded h-[7px] w-full max-w-[184px]"></div>
      {/if}
    </a>
  </nav> -->

  <!-- <script>
    export let navSections = [];
    export let currentSection = navSections[0]?.id || '';
  
    function isActive(sectionId) {
      return currentSection === sectionId;
    }
  
    function handleClick(sectionId) {
      currentSection = sectionId;
    }
  </script>
  
  <nav class="flex flex-wrap gap-10 justify-between items-center w-full text-3xl leading-none text-black whitespace-nowrap max-md:max-w-full">
    {#each navSections as section (section.id)}
      <a 
        href={section.href} 
        class="flex flex-col items-center justify-center w-[184px] text-center" 
        class:font-semibold={isActive(section.id)} 
        on:click|preventDefault={() => handleClick(section.id)}
      >
        <div class="w-full">
          <slot name="item" {section}>
            {section.label}
          </slot>
        </div>
        {#if isActive(section.id)}
          <div class="mt-2.5 bg-lime-800 rounded h-[7px] w-full max-w-[184px]"></div>
        {/if}
      </a>
    {/each}
  </nav> -->


  <script>
    import { createEventDispatcher } from 'svelte';
    import { goto } from '$app/navigation'; // Import this if you're using SvelteKit
  
    export let navSections = [];
    export let currentSection = navSections[0]?.id || '';
  
    const dispatch = createEventDispatcher();
  
    function isActive(sectionId) {
      return currentSection === sectionId;
    }
  
    function handleClick(section) {
      currentSection = section.id;
      
      // If using SvelteKit, uncomment the next line
      // goto(section.href);
  
      // If not using SvelteKit, dispatch a custom event
      dispatch('navigate', { href: section.href, id: section.id });
    }
  </script>
  
  <nav class="flex flex-wrap gap-10 justify-between items-center w-full text-3xl leading-none text-black whitespace-nowrap max-md:max-w-full">
    {#each navSections as section (section.id)}
      <a 
        href={section.href} 
        class="flex flex-col items-center justify-center w-[184px] text-center" 
        class:font-semibold={isActive(section.id)} 
        on:click|preventDefault={() => handleClick(section)}
      >
        <div class="w-full">
          <slot name="item" {section}>
            {section.label}
          </slot>
        </div>
        {#if isActive(section.id)}
          <div class="mt-2.5 bg-lime-800 rounded h-[7px] w-full max-w-[184px]"></div>
        {/if}
      </a>
    {/each}
  </nav>