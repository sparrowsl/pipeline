<script>
    export let navItems = [];
    export let activeItem = '';
  
    function handleClick(item) {
      activeItem = item.id;
      if (item.onClick) item.onClick();
    }
  </script>
  
  <nav class="flex flex-wrap gap-10 justify-center items-start text-2xl font-semibold leading-none text-center text-lime-800 max-md:max-w-full">
    {#each navItems as item}
      <div class="flex flex-col justify-center items-center" style="width: {item.width};">
        <button 
          on:click={() => handleClick(item)}
          class="gap-2.5 self-stretch whitespace-nowrap"
        >
          {item.label}
        </button>
        {#if item.id === activeItem}
          <div class="flex mt-3.5 max-w-full bg-lime-300 rounded min-h-[6px]" style="width: {item.width};" aria-hidden="true"></div>
        {/if}
      </div>
    {/each}
  </nav>