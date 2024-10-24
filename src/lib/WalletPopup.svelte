<script>
    import { onMount } from 'svelte';
    import { modalOpen } from './modalStore.js';
    import SuccessPopup from './SuccessPopup.svelte';
  
    export let projectName = "Project Name";
    export let totalAmount = 10;
  
    let showSuccessPopup = false;
  
    onMount(() => {
     
    });
  
    function handleConfirmPayment() {
     
      showSuccessPopup = true;
    }
  
    function closeModal() {
      modalOpen.set(false);
      showSuccessPopup = false;
    }
  </script>
  
  {#if !showSuccessPopup}
    <main class="flex overflow-hidden flex-col px-16 py-28 leading-none text-center text-black bg-white shadow-sm max-w-[758px] rounded-[59px] max-md:px-5 max-md:pt-24 relative">
      <button on:click={closeModal} class="absolute text-2xl top-4 right-4">&times;</button>
      
      <header class="flex flex-col max-w-full font-semibold w-[266px]">
        <h1 class="max-w-full text-xl w-[228px]">You are contributing to</h1>
        <h2 class="w-full mt-4 text-4xl">{projectName}</h2>
      </header>
      
      <section class="flex flex-col w-full mt-20 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-1 items-center py-3.5 pr-5 pl-4 w-full border-b border-black min-h-[49px] max-md:pr-5 max-md:max-w-full">
          <div class="flex flex-wrap gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[551px]">
            <p class="self-stretch my-auto text-base font-thin">Total</p>
            <p class="self-stretch my-auto text-2xl font-semibold">$ {totalAmount}</p>
          </div>
        </div>
      </section>
      
      <button 
        on:click={handleConfirmPayment}
        class="gap-1 self-stretch px-5 py-5 mt-12 text-base font-semibold text-lime-100 bg-cyan-950 rounded-[32px] max-md:mt-10 hover:bg-cyan-900"
        aria-label="Confirm Payment"
      >
        Confirm Payment
      </button>
    </main>
  {:else}
    <SuccessPopup />
  {/if}