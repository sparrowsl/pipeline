<script>

    import Nav from '../../../lib/Nav.svelte';   

    import Footer from '../../../lib/Footer.svelte';

    import ContributeBtn from '../../../lib/ContributeBtn.svelte';
    import Apply from '../../../lib/apply.svelte';
  
    let myButtons = [
      { label: 'Donate', active: false, href: '/contribute' },
      { label: 'Apply', active: true, href: '/contribute/apply' }
    ];
  
    function handleButtonClick(event) {
      console.log(`Button clicked: ${event.detail.label}, navigating to: ${event.detail.href}`);
      // Add your navigation logic here if needed
    }
  </script>
  
  <div class="w-full min-h-screen bg-white">
    <Nav />
    <div class="w-full bg-[#d1ea9a]/90 py-16">
        <div class="mx-auto max-w-4xl text-center">
          <h1 class="text-[#08292c] text-[85.43px] font-semibold font-['PP Mori'] leading-tight header-text">
            Make a Difference
            <br/>
            <span class="inline-block mt-8">Today!</span>
          </h1>
          <p class="mt-20 text-xl">Your contribution to this project will help bring it to life</p>
        </div>
      </div>
      
    <ContributeBtn 
      buttons={myButtons}
      activeColor="bg-cyan-950 text-lime-100"
      inactiveColor="text-neutral-400"
      borderColor="border-teal-950"
      on:buttonClick={handleButtonClick}
    />  
  
    <Apply />
  
    <Footer />
  </div>
  
  <style>
    .header-text {
      line-height: 1;
    }
  </style>