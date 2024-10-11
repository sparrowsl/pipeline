

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