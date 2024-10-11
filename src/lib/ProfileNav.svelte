<script>
    import { createEventDispatcher } from 'svelte';
    import { goto } from '$app/navigation';
  
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
  
  <nav class="flex flex-wrap gap-10 justify-between items-center w-full text-3xl whitespace-nowrap max-md:max-w-full">
    {#each navSections as section (section.id)}
      <a 
        href={section.href} 
        class="flex flex-col justify-center items-center self-stretch my-auto w-[184px]"
        class:font-semibold={isActive(section.id)}
        on:click|preventDefault={() => handleClick(section)}
      >
        <div class="flex gap-2 items-center">
          <img loading="lazy" src={section.icon} alt="" class="object-contain self-stretch my-auto w-10 shrink-0 aspect-square" />
          <span class="self-stretch my-auto">{section.label}</span>
        </div>
        {#if isActive(section.id)}
          <div class="flex mt-2.5 max-w-full bg-lime-800 rounded min-h-[7px] w-[184px]" aria-hidden="true"></div>
        {/if}
      </a>
    {/each}
  </nav>