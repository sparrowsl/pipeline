<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import { Button } from '$lib/components/ui/button';

  const dispatch = createEventDispatcher();

  let loading = true;

  let categories = [];

  async function fetchAllCategories() {
    try {
      const response = await fetch('/api/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      categories = [
        { id: 0, title: 'All Projects', active: true },
        ...data.categories.map((category) => ({ ...category, active: false })),
      ];
    } catch (error) {}
  }

  onMount(() => {
    fetchAllCategories();
  });

  function setActiveCategory(selectedCategory) {
    if (selectedCategory.id === 0) {
      setAllProjects();
      return;
    }

    categories = categories.map((category) => ({
      ...category,
      active: category.title === selectedCategory.title,
    }));

    dispatch('categorySelected', selectedCategory);
  }

  function setAllProjects() {
    categories = categories.map((category) => 
    ({ ...category, active: category.id === 0  }));
    dispatch('categorySelected', '');
  }
</script>

<nav
  class="flex flex-wrap items-center max-w-full gap-2 pb-4 mt-8 overflow-x-auto text-sm leading-none text-lime-800"
  style="scroll-snap-type: x mandatory;"
  aria-label="Project Categories"
>
  {#each categories as category}
    <div
      class="inline-flex h-[29px] items-center justify-center rounded-[36px] border-2 px-3 py-2
              {category.active ? 'border-[#bfce95] bg-[#e9f5d3]' : 'border-neutral-200 bg-white'}"
    >
      <button
        class="font-base text-center font-['Inter'] text-[13px] leading-[13px]
              {category.active ? 'text-black' : 'text-black'}"
        aria-current={category.active ? 'page' : undefined}
        on:click={() => setActiveCategory(category)}
      >
        {category.title}
      </button>
    </div>
  {/each}
</nav>
