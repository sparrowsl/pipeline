<script>
  export let navItems = [];
  export let activeItem = '';

  function handleClick(item) {
    activeItem = item.id;
    if (item.onClick) item.onClick();
  }
</script>

<nav class="mb-8 flex w-full items-center justify-center">
  <div class="flex rounded-2xl border border-dashboard-gray-700 bg-dashboard-gray-900/50 p-2">
    {#each navItems as item}
      <button
        on:click={() => handleClick(item)}
        class="relative rounded-xl px-6 py-3 text-label-lg font-medium transition-all duration-200
        {item.id === activeItem
          ? 'bg-dashboard-yellow-400 text-dashboard-black'
          : 'text-gray-400 hover:bg-dashboard-gray-800 hover:text-white'}"
      >
        {item.label}
      </button>
    {/each}
  </div>
</nav>
