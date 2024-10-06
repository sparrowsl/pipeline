<script>
    let selectedTab = 'Card';
    let amount = '';
    let name = '';
    let email = '';
    let cardNumber = '';
    let month = '';
    let year = '';
    let cvv = '';
    let rememberPayment = false;
    let agreeToTerms = false;
  
    function selectTab(tab) {
      selectedTab = tab;
    }
  
    function handlePayment() {
      if (agreeToTerms) {
        console.log('Processing payment...');
        // Implement payment logic here
      } else {
        alert('Please agree to the terms before making a payment.');
      }
    }
  
    $: total = amount ? `$ ${amount}` : '$ 0';
  </script>
  
  <main class="flex flex-col items-center w-full max-w-[996px] mx-auto">
    <nav class="flex flex-wrap gap-10 justify-center items-center mt-20 text-6xl font-semibold leading-none text-center whitespace-nowrap max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <a href="/contribute">
      <div class="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[393px] max-md:text-4xl" class:text-black={selectedTab === 'Card'} class:text-neutral-400={selectedTab !== 'Card'} on:click={() => selectTab('Card')}>
        <div class="max-md:text-4xl">Card</div>
        <div class="flex self-center mt-3.5 max-w-full rounded-md min-h-[11px] w-[393px]" class:bg-lime-300={selectedTab === 'Card'}></div>
      </div>
    </a>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
     <a href="/contribute/wallet">
      <div class="flex flex-col justify-center items-center self-stretch my-auto min-w-[240px] w-[393px] max-md:text-4xl" class:text-black={selectedTab === 'Wallet'} class:text-neutral-400={selectedTab !== 'Wallet'} on:click={() => selectTab('Wallet')}>
        <div class="max-md:text-4xl">Wallet</div>
        <div class="flex mt-2.5 max-w-full rounded-md min-h-[12px] w-[393px]" class:bg-lime-300={selectedTab === 'Wallet'}></div>
      </div>
    </a>
    </nav>
  
    <section class="flex flex-col mt-20 w-full leading-none text-black max-w-[996px] max-md:mt-10 max-md:max-w-full">
      <div class="flex flex-col max-w-full w-[387px]">
        <h2 class="self-start text-4xl font-semibold text-center">Enter amount below</h2>
        <p class="mt-3.5 text-xl font-thin">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <input
        type="text"
        bind:value={amount}
        placeholder="$ USD"
        class="gap-1.5 self-stretch py-7 pr-16 pl-7 mt-8 w-full text-3xl font-thin text-center border-lime-800 border-solid border-[3px] min-h-[87px] rounded-[50px] max-md:px-5"
      />
    </section>
  
    <form class="flex flex-col justify-center items-center mt-28 w-full max-w-[996px] max-md:mt-10 max-md:max-w-full">
      <div class="flex flex-col w-full max-w-[995px] max-md:max-w-full">
        <div class="flex flex-col w-full text-2xl font-semibold leading-none text-black whitespace-nowrap max-md:max-w-full">
          <label for="name" class="max-md:max-w-full">Name</label>
          <input id="name" type="text" bind:value={name} class="flex gap-1.5 mt-3.5 w-full border-2 border-lime-800 border-solid min-h-[82px] px-8 rounded-[48px] max-md:max-w-full" />
        </div>
        <div class="flex flex-col mt-11 w-full text-2xl font-semibold leading-none text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
          <label for="email" class="max-md:max-w-full">Email</label>
          <input id="email" type="email" bind:value={email} class="flex gap-1.5 mt-3.5 w-full border-2 border-lime-800 border-solid min-h-[82px] px-8 rounded-[48px] max-md:max-w-full" />
        </div>
      </div>
    </form>
  
    {#if selectedTab === 'Card'}
      <form class="flex flex-col mt-11 w-full max-md:mt-10 max-md:max-w-full">
        <div class="text-2xl font-semibold leading-none text-black max-md:max-w-full">
          Card Number
        </div>
        <div class="flex gap-1.5 items-center py-5 pr-10 pl-7 mt-3.5 w-full border-2 border-lime-800 border-solid min-h-[82px] rounded-[48px] max-md:px-5 max-md:max-w-full">
          <div class="flex gap-3.5 justify-center items-center self-stretch my-auto">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5f6fe743ef97cb4feb5f8b4f8da37042b832f36034a2e951277a5ee5e47cc85?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[43px]" alt="" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/078c32b274dcf29a91f567cfa72b97f852e35c3fc7301977c72b352f1955e17d?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" class="object-contain shrink-0 self-stretch my-auto w-11 aspect-[1.02]" alt="" />
          </div>
          <input type="text" bind:value={cardNumber} placeholder="Card Number" class="flex-grow" />
        </div>
        <div class="flex flex-wrap gap-10 items-center mt-11 w-full max-md:mt-10 max-md:max-w-full">
          <div class="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[230px]">
            <label for="month" class="text-2xl font-semibold leading-none text-black">MM</label>
            <input type="text" id="month" bind:value={month} class="flex gap-1.5 items-center py-8 pr-10 pl-7 mt-7 w-full border-2 border-lime-800 border-solid min-h-[82px] rounded-[48px] max-md:px-5" />
          </div>
          <div class="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[230px]">
            <label for="year" class="text-2xl font-semibold leading-none text-black">YY</label>
            <input type="text" id="year" bind:value={year} class="flex gap-1.5 items-center py-8 pr-10 pl-7 mt-7 w-full border-2 border-lime-800 border-solid min-h-[82px] rounded-[48px] max-md:px-5" />
          </div>
          <div class="flex flex-col grow shrink self-stretch my-auto w-60 text-2xl font-semibold leading-none text-black whitespace-nowrap min-w-[240px]">
            <label for="cvv">CVV</label>
            <input id="cvv" type="text" bind:value={cvv} class="flex gap-1.5 mt-7 max-w-full border-2 border-lime-800 border-solid min-h-[82px] rounded-[48px] w-[297px]" />
          </div>
        </div>
        <div class="flex gap-3 items-center self-start mt-11 text-2xl font-semibold leading-none text-black max-md:mt-10">
          <input type="checkbox" id="remember-payment" bind:checked={rememberPayment} class="flex shrink-0 self-stretch my-auto rounded-full border-4 border-black border-solid h-[41px] w-[42px]" />
          <label for="remember-payment" class="self-stretch my-auto">Remember payment method</label>
        </div>
      </form>
    {:else}
      <div class="mt-11 text-2xl font-semibold">Wallet functionality not implemented</div>
    {/if}
  
    <section class="flex flex-col justify-center self-stretch mt-20 leading-none text-black max-md:mt-10 max-md:max-w-full">
      <div class="flex flex-col justify-center w-full max-md:max-w-full">
        <div class="flex flex-col w-full text-center max-md:max-w-full">
          <div class="flex gap-1.5 items-center py-6 pr-9 pl-7 w-full border-b-2 border-black min-h-[84px] max-md:px-5 max-md:max-w-full">
            <div class="flex flex-wrap gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[934px]">
              <div class="self-stretch my-auto text-2xl font-thin">Total</div>
              <div class="self-stretch my-auto text-4xl font-semibold">{total}</div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap gap-2.5 justify-center items-center self-center mt-14 text-2xl font-semibold max-md:mt-10 max-md:max-w-full">
          <input type="checkbox" id="terms-agreement" bind:checked={agreeToTerms} class="flex shrink-0 self-stretch my-auto w-9 h-9 rounded-full border-black border-solid border-[3px]" />
          <label for="terms-agreement" class="self-stretch my-auto max-md:max-w-full">
            I agree to the Terms of Use and have read and understand the Privacy Policy
          </label>
        </div>
        <button on:click={handlePayment} class="gap-1.5 self-stretch px-9 py-9 mt-14 w-full text-3xl font-semibold text-center text-lime-100 bg-cyan-950 rounded-[53px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          Make Payment
        </button>
      </div>
    </section>
  </main>