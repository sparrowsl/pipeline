<script>
    import Nav from '../../lib/Nav.svelte';   
    import Footer from '../../lib/Footer.svelte';
    import ProjectBasics from '../../lib/ProjectBasics.svelte';
  
    let activeCategory = 'Categories';
    let activeFilter = 'All projects';
  
    const filters = ['All projects', 'Design', 'Engineering', 'Art', 'Development'];  
    

        import { onMount } from 'svelte';
      
        let imageLoaded = false;
      
        onMount(() => {
          const img = new Image();
          img.src = "https://cdn.builder.io/api/v1/image/assets/TEMP/e31ab375db047d220f54398e16c4cc0f0001d612779f0974e0d8c39c0fea9107?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8";
          img.onload = () => {
            imageLoaded = true;
          };
        });
 
</script>

<div class="w-full min-h-screen bg-white">
    <Nav />

      
      <section class="relative min-h-[417px] w-full">
        {#if imageLoaded}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e31ab375db047d220f54398e16c4cc0f0001d612779f0974e0d8c39c0fea9107?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
            alt=""
            class="object-cover absolute inset-0 w-full h-full"
            aria-hidden="true"
          />
        {/if}
        <div class="relative flex flex-col items-center justify-center gap-2.5 p-4 text-center text-black min-h-[417px]">
          <h1 class="text-8xl font-semibold leading-[99px] max-md:text-4xl max-md:leading-[49px]">
            <slot></slot>
          </h1>
        </div>   
      </section>


      <main class="flex overflow-hidden flex-col bg-white">
        <h1 class="self-center mt-20 text-7xl font-semibold leading-none text-center text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Create a Project
        </h1>
        <ProjectBasics />
      </main>
      
  
    <Footer />
</div>