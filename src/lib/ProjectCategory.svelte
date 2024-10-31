<!-- <script>
  const categories = [
    { name: 'All projects', active: true },
    { name: 'Design', active: false },
    { name: 'Engineering', active: false },
    { name: 'Art', active: false },
    { name: 'Development', active: false }
  ];
</script>

<nav class="flex flex-wrap items-center self-start gap-4 mt-8 text-sm leading-none text-lime-800 max-md:mt-6 max-md:max-w-full" aria-label="Project Categories">
  {#each categories as category}
    <button
      class="px-10 py-3 text-xl my-auto whitespace-nowrap border-lime-800 border-solid border-2 rounded-full transition-colors duration-300 hover:bg-lime-200 {category.active ? 'bg-lime-300' : ''}"
      aria-current={category.active ? 'page' : undefined}
    >
      {category.name}
    </button>
  {/each}
</nav> -->

<script>
  const categories = [
    { name: 'All projects', active: true },
    { name: 'Design', active: false },
    { name: 'Engineering', active: false },
    { name: 'Art', active: false },
    { name: 'Development', active: false },
    { name: 'Marketing', active: false },
    { name: 'Sales', active: false },
    { name: 'Research', active: false },
  ];
</script>

<!-- <nav
  class="flex items-center max-w-full gap-4 mt-8 overflow-x-auto text-sm leading-none text-lime-800"
  style="scroll-snap-type: x mandatory;"
  aria-label="Project Categories"
>
  {#each categories as category}
    <button
      class="px-10 py-3 text-xl my-auto whitespace-nowrap border-lime-800 border-solid border-2 rounded-full transition-colors duration-300 hover:bg-lime-200 {category.active ? 'bg-lime-300' : ''}"
      aria-current={category.active ? 'page' : undefined}
      style="scroll-snap-align: start;"
    >
      {category.name}
    </button>
  {/each}
</nav> -->
<nav
  class="flex items-center max-w-full gap-4 pb-4 mt-8 overflow-x-auto text-sm leading-none text-lime-800"
  style="scroll-snap-type: x mandatory;"
  aria-label="Project Categories"
>
  {#each categories as category}
    <button
      class="px-10 py-3 text-xl my-auto whitespace-nowrap border-lime-800 border-solid border-2 rounded-full transition-colors duration-300 hover:bg-lime-200 {category.active ? 'bg-lime-300' : ''}"
      aria-current={category.active ? 'page' : undefined}
      style="scroll-snap-align: start;"
    >
      {category.name}
    </button>
  {/each}
</nav>
<style>
  nav {
    scrollbar-width: thin;
    margin-bottom: 5px;
    scrollbar-color: #a3e635 #f3f4f6; /* Adjust scrollbar colors for Firefox */
  }

  /* Customize scrollbar for WebKit browsers */
  nav::-webkit-scrollbar {
    height: 8px;
  }

  nav::-webkit-scrollbar-track {
    background: #f3f4f6;
  }

  nav::-webkit-scrollbar-thumb {
    background-color: #a3e635;
    border-radius: 10px;
  }
</style>
