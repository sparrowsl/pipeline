<script>
    import { modalOpen } from './modalStore.js';
    import WalletPopup from './WalletPopup.svelte';
  
    let projectName = "Project Name";
    let totalAmount = 10;
  
    function openWalletPopup() {
      modalOpen.set(true);
    }
  </script>
  
  <main class="flex overflow-hidden flex-col items-center px-20 pt-24 leading-none text-center bg-white pb-[500px] rounded-[100px] max-md:px-5 max-md:py-24">
    <section class="flex flex-col items-center w-full max-w-[1034px] max-md:max-w-full">
      <div class="flex flex-wrap gap-10 justify-center items-center mt-20 text-6xl font-semibold whitespace-nowrap max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <a href="/contribute">
          <div class="flex flex-col justify-center self-stretch my-auto min-w-[240px] text-neutral-400 w-[393px] max-md:text-4xl">
            <h2 class="max-md:text-4xl">Card</h2>
            <div class="flex self-center mt-3.5 max-w-full rounded-md min-h-[11px] w-[393px]"></div>
          </div>
        </a>
        <a href="/contribute/wallet">
          <div class="flex flex-col justify-center items-center self-stretch my-auto text-black min-w-[240px] w-[393px] max-md:text-4xl">
            <h2 class="max-md:text-4xl">Wallet</h2>
            <div class="flex mt-2.5 max-w-full bg-lime-300 rounded-md min-h-[12px] w-[393px]"></div>
          </div>
        </a>
      </div>
      <div class="flex flex-col self-stretch mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <button on:click={openWalletPopup} class="gap-1.5 self-stretch px-9 py-9 w-full text-3xl font-semibold text-lime-100 bg-lime-800 rounded-[53px] max-md:px-5 max-md:max-w-full">
          Connect Wallet
        </button>
        <div class="flex flex-col self-center mt-20 max-w-full text-black w-[996px] max-md:mt-10">
          <label for="amount" class="max-w-full text-4xl font-semibold w-[387px]">
            Enter Amount
          </label>
          <input
            type="text"
            id="amount"
            class="gap-1.5 self-stretch py-7 pr-16 pl-7 mt-8 w-full text-3xl font-thin border-lime-800 border-solid border-[3px] min-h-[87px] rounded-[50px] max-md:px-5"
            placeholder="$ USDC"
          />
        </div>
      </div>
    </section>
  </main>
  
  {#if $modalOpen}
    <div class="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50">
      <div class="p-4 bg-white rounded-lg">
        <WalletPopup {projectName} {totalAmount} />
      </div>
    </div>
  {/if}