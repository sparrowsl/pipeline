<script>
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<main class="flex flex-col items-center justify-center max-w-full w-[1045px] mx-auto px-4">
  <section class="text-center">
    <h1 class="text-5xl font-semibold text-black leading-[55px] mb-4 max-md:text-4xl max-md:leading-[49px]">
      What are<br />Digital Public Goods?
    </h1>
    <p class="text-4xl font-light leading-[57px] text-zinc-950 max-md:text-4xl max-md:leading-[56px]">
      These are resources, tools, or content that are made available and accessible to the public.
    </p>
  </section>
</main>

{#if mounted}
  <span class="sr-only">Content loaded</span>
{/if}