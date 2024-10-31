<script>
    import { modalOpen } from './modalStore.js';
    import WalletPopup from './WalletPopup.svelte';
  
    let projectName = "Project Name";
    let totalAmount = 10;
  
    function openWalletPopup() {
      modalOpen.set(true);
    }
  </script>
  
  <main class="flex overflow-hidden flex-col items-center px-20 pt-14 leading-none text-center bg-white pb-[500px] rounded-[100px] max-md:px-5 max-md:py-24">
    <section class="flex flex-col items-center w-full max-w-[1034px] max-md:max-w-full">
     
      <div class="flex flex-col self-stretch w-full mt-20 max-md:mt-10 max-md:max-w-full">
        <button on:click={openWalletPopup} class="gap-1.5 self-center px-6 py-4 w-[80%] text-3xl font-semibold text-lime-100 bg-lime-800 rounded-[53px] max-md:px-5 max-md:max-w-full">
          Connect Wallet
        </button>
        <div class="flex flex-col self-center mt-24 max-w-full text-black w-[996px] max-md:mt-10">
          <label for="amount" class="max-w-full text-4xl flex justify-start font-semibold w-[387px]">
            Enter Amount
          </label>
          <input
            type="text"
            id="amount"
            class="gap-1.5 self-stretch py-3 pr-16 pl-7 mt-8 w-full text-3xl font-thin border-lime-800 border-solid border-[3px] min-h-[67px] rounded-[50px] max-md:px-5"
            placeholder="$ USDC"
          />
        </div>

        <button on:click={openWalletPopup} class="gap-1.5 self-end px-2 py-4 w-[20%] text-xl font-semibold mt-6 text-white bg-lime-800 rounded-[53px] max-md:px-5 max-md:max-w-full">
          Send
        </button>
      </div>
    </section>
  </main>
  
  {#if $modalOpen}
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="p-4 rounded-lg">
        <WalletPopup {projectName} {totalAmount} />
      </div>
    </div>
  {/if}