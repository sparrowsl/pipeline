<script>

    import Nav from '../../../../lib/Nav.svelte';   

    import Footer from '../../../../lib/Footer.svelte';

    import ContributeBtn from '../../../../lib/ContributeBtn.svelte';
    import Apply from '../../../../lib/apply.svelte';
    import { page } from '$app/stores';
  
    let id;
    $: id = $page.params.id;
  
    let myButtons = [];
    $: if (id) {
      myButtons = [
        { label: 'Funding', active: true, href: `/contribute/${id}/wallet` },
        { label: 'Resources', active: false, href: `/contribute/${id}/apply` }
      ];
    }
  
    function handleButtonClick(event) {
      console.log(`Button clicked: ${event.detail.label}, navigating to: ${event.detail.href}`);
   
    }
  </script>
  
  <div class="w-full min-h-screen bg-white">
    <Nav />
    <div class="w-full bg-[#d1ea9a]/90 py-16">
        <div class="max-w-4xl mx-auto text-center">
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
  
    <Apply id={id} />
  
    <Footer />
  </div>
  
  <style>
    .header-text {
      line-height: 1;
    }
  </style>