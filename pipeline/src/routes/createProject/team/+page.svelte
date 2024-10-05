<script>
  import TeamForm from '../../../lib/TeamForm.svelte';
  import CreatorProfile from '../../../lib/CreatorProfile.svelte';
  import Nav from '../../../lib/Nav.svelte';  
  import Footer from '../../../lib/Footer.svelte';
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

<div class="flex overflow-hidden flex-col bg-white">
  <div class="flex flex-col p-10 bg-white max-w-[80%] mx-auto max-md:px-5">
    <nav class="flex flex-wrap gap-10 justify-between items-center w-full text-3xl leading-none text-black whitespace-nowrap max-md:max-w-full">
      <a href="/createProject" class="flex flex-col justify-center items-center self-stretch my-auto">
        <span class="gap-2 self-stretch">Basics</span>
      </a>
      
      <a href="/createProject/team">
        <div class="flex flex-col justify-center items-center self-stretch my-auto w-[184px]">
          <span>Team</span>
          <div class="flex mt-2.5 max-w-full bg-lime-800 rounded min-h-[7px] w-[184px]" aria-hidden="true"></div>
        </div>
      </a>  
      
      <a href="/createProject/links" class="gap-2.5 self-stretch my-auto">Links</a>
      <a href="/createProject/funding" class="gap-2.5 self-stretch my-auto">Funding</a>
    </nav>
    <CreatorProfile />
    <TeamForm />
  </div>
</div>

<Footer />
</div>