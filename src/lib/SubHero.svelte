<script>
    import { onMount } from 'svelte';
    
    let imageLoaded = false;
    
    onMount(() => {
      const img = new Image();
      img.src = "https://cdn.builder.io/api/v1/image/assets/TEMP/d0270db3565bb4ec499ebb7511eb2d8c49123736c2356af5f8e6e53f38dc859c?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8";
      img.onload = () => {
        imageLoaded = true;
      };
    });
</script>

<div class="w-full bg-teal-950 ">
  <section class="flex flex-col lg:flex-row gap-8 justify-between items-center py-24 px-6 max-w-7xl mx-auto">
    <div class="flex flex-col justify-center items-start max-w-xl w-full">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/310d2ae075e7a95e2591159bea0f95ad1ac9e702568d696606bca936676bd1a1?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" 
             alt="Pipeline logo" 
             class="object-contain max-w-full aspect-[5.95] w-[334px] mb-6" />
        <h2 class="text-3xl lg:text-4xl text-white leading-tight mb-6">
            At Pipeline we encourage and assist creators, contributors, funders, and consumers to recognise and use the DPG Standards to help their project qualify as DPG Product.
        </h2>
        <a href="#learn-more" class="inline-block px-8 py-4 text-xl font-light text-center text-lime-800 bg-lime-300 border border-lime-800 rounded-full hover:bg-lime-400 transition-colors">
            Learn more
        </a>
    </div>
    <div class="w-full max-w-2xl">
        {#if imageLoaded}
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0270db3565bb4ec499ebb7511eb2d8c49123736c2356af5f8e6e53f38dc859c?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" 
                 alt="Illustration of Pipeline process" 
                 class="object-contain w-full aspect-[1.07]" />
        {:else}
            <div class="w-full aspect-[1.07] bg-gray-200 animate-pulse"></div>
        {/if}
    </div>
  </section>
</div>