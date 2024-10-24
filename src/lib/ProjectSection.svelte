<script>
 import Card from '../lib/Card.svelte';


  export let projects = []; 

  let navSections = [
    { id: 'created', label: 'Projects created' },
    { id: 'contributed', label: 'Projects contributed' },
    { id: 'bookmarks', label: 'Bookmarks' },
    { id: 'notifications', label: 'Notifications' }
  ];


  let currentSection = 'created';

  function handleNavigation(id) {
    currentSection = id;
  }
</script>

<section class="flex flex-col items-center p-7 mt-20 bg-white max-w-[1235px] mx-auto max-md:px-5 max-md:mt-10">
  <div class="w-full max-w-[1156px]">
  
    <nav class="flex mb-4 space-x-28">
      {#each navSections as section}
        <button
          class="px-4 py-3 text-2xl font-semibold transition-all duration-200 border-b-2"
          class:border-b-blue-500={section.id === currentSection}
          on:click={() => handleNavigation(section.id)}
        >
          {section.label}
        </button>
      {/each}
    </nav>
    <div class="mt-8">
      {#if currentSection === 'created'}
        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {#if projects.length > 0}
            {#each projects as project}
              <Card {project}/>
            {/each}
          {:else}
            <p>No projects found.</p>
          {/if}
        </div>
      {:else if currentSection === 'contributed'}
        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {#if projects.length > 0}
            {#each projects as project}
              <Card {project}/>
            {/each}
          {:else}
            <p>No projects found.</p>
          {/if}
        </div>
      {:else if currentSection === 'bookmarks'}
        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {#if projects.length > 0}
            {#each projects as project}
              <Card {project}/>
            {/each}
          {:else}
            <p>No projects found.</p>
          {/if}
        </div>
      {:else if currentSection === 'notifications'}
        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {#if projects.length > 0}
            {#each projects as project}
              <Card {project}/>
            {/each}
          {:else}
            <p>No projects found.</p>
          {/if}
        </div>
      {/if}
    </div>
  </div>
</section>

