<script>
  const categories = [
    { name: 'All projects', active: true },
    { name: 'Design', active: false },
    { name: 'Engineering', active: false },
    { name: 'Art', active: false },
    { name: 'Development', active: false }
  ];
</script>

<nav class="flex flex-wrap gap-4 items-center self-start mt-12 text-sm leading-none text-lime-800 max-md:mt-6 max-md:max-w-full" aria-label="Project Categories">
  {#each categories as category}
    <button
      class="px-10 py-3 text-xl my-auto whitespace-nowrap border-lime-800 border-solid border-2 rounded-full transition-colors duration-300 hover:bg-lime-200 {category.active ? 'bg-lime-300' : ''}"
      aria-current={category.active ? 'page' : undefined}
    >
      {category.name}
    </button>
  {/each}
</nav>