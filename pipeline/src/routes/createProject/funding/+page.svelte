<script>
	import LinkInput from '../../../lib/LinkInput.svelte';
    import Nav from '../../../lib/Nav.svelte';   
    import Footer from '../../../lib/Footer.svelte';

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

    <div class="flex justify-center w-full bg-white">
      <main class="flex flex-col p-10 leading-none text-black bg-white w-full max-w-[80%] mx-auto max-md:px-5">
        <nav class="flex flex-wrap gap-10 justify-between items-center w-full text-3xl whitespace-nowrap max-md:max-w-full">
          <a href="/createProject" class="flex flex-col justify-center items-center self-stretch my-auto">
            <span class="gap-2 self-stretch">Basics</span>
          </a>
          <a href="/createProject/team" class="gap-2.5 self-stretch my-auto">Team</a>
          <a href="/createProject/links" class="gap-2.5 self-stretch my-auto">Links</a>
          <a href="/createProject/funding" class="flex flex-col justify-center items-center self-stretch my-auto w-[184px]">
            <span>Funding</span>
            <div class="flex mt-2.5 max-w-full bg-lime-800 rounded min-h-[7px] w-[184px]" aria-hidden="true"></div>
          </a>
        </nav>
    
        <section class="flex flex-col justify-center mt-14 w-full text-3xl font-semibold max-md:mt-10 max-md:max-w-full">
          <form class="flex flex-col w-full max-md:max-w-full">
            <div class="flex flex-col mt-11 w-full max-md:mt-10 max-md:max-w-full">
              <label for="bankAccount" class="max-md:max-w-full">Bank Account</label>
              <input
                id="bankAccount"
                type="text"
                class="flex gap-2 mt-5 w-full border border-black border-solid min-h-[80px] rounded-[52px] max-md:max-w-full px-8"
                aria-label="Bank Account"
              />
            </div>
              
            <div class="flex flex-wrap gap-3.5 justify-center items-center mt-11 w-full text-4xl leading-none whitespace-nowrap text-neutral-400 max-md:mt-10 max-md:max-w-full">
              <hr class="shrink-0 self-stretch my-auto h-0.5 border-2 border-solid border-zinc-300 w-[165px]" />
              <span class="self-stretch my-auto">or</span>
              <hr class="shrink-0 self-stretch my-auto h-0.5 border-2 border-solid border-zinc-300 w-[165px]" />
            </div>

            <div class="flex flex-col mt-11 w-full max-md:mt-10 max-md:max-w-full">
              <label for="walletAddress" class="max-md:max-w-full">Wallet Address</label>
              <input
                id="walletAddress"
                type="text"
                class="flex gap-2 mt-5 w-full border border-black border-solid min-h-[80px] rounded-[52px] max-md:max-w-full px-8"
                aria-label="Wallet Address"
              />
            </div>
          
            <button
              type="submit"
              class="gap-1 self-stretch px-12 py-8 mt-11 w-full text-xl font-medium text-lime-100 whitespace-nowrap bg-lime-800 rounded-[82px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
            >
              Done
            </button>
          </form>
        </section>
      </main>
    </div>
  
    <Footer />
</div>