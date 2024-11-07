<!-- <script>
    import Nav from '../../lib/Nav.svelte';
    import Footer fr../../../lib/Nav.svelte.svelte';
    import Contribute from '../../lib/Contribute.svelte';
    import Apply fr../../../lib/Footer.sveltelte';
    import { page } from '$app/stores';
    ../../../lib/Contribute.svelte
    l../../../lib/apply.svelte
    $: id = $page.params.id;


    let steps = [
        { label: 'Funding', active: true },
        { label: 'Resources', active: false }
    ];../$types.js

    function selectStep(index) {
        steps = steps.map((step, i) => ({ ...step, active: i === index }));
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

    <div class="flex justify-center max-w-4xl mx-auto mt-12 space-x-4">
        {#each steps as step, index}
            <button 
                class="px-6 py-3 font-semibold transition duration-200 border rounded"
                class:bg-cyan-950={step.active}
                class:text-lime-100={step.active}
                class:text-neutral-400={!step.active}
               
                on:click={() => selectStep(index)}
            >
                {step.label}
            </button>
        {/each}
    </div>

    <div class="max-w-4xl mx-auto mt-8">
        {#if steps[0].active}
            <Contribute />
            <p class="mt-4">Content related to funding contributions goes here.</p>
        {:else if steps[1].active}
        <Apply id={id} />
        {/if}
    </div>

    <Footer />
</div>
 -->

<script>
  import Contribute from "../../../lib/Contribute.svelte";
  import Apply from "../../../lib/apply.svelte";
  import { page } from "$app/stores";

  let id;
  $: id = $page.params.id;

  let steps = [
    { label: "Funding", active: true },
    { label: "Resources", active: false },
  ];

  function selectStep(index) {
    steps = steps.map((step, i) => ({ ...step, active: i === index }));
  }
</script>

<div class="w-full bg-[#d1ea9a]/90 py-16">
  <div class="max-w-4xl mx-auto text-center">
    <h1
      class="text-[#08292c] text-[50.43px] font-semibold font-['PP Mori'] leading-[54.51px]"
    >
      Make a Difference Today!
    </h1>
    <p class="mt-10 text-xl">
      Your contribution to this project will help bring it to life
    </p>
  </div>
</div>

<div
  class="flex justify-center w-[43%] mx-auto mt-12 space-x-6 border-2 border-[#0b383c] rounded-full py-1"
>
  {#each steps as step, index}
    <button
      class="px-6 py-6 font-semibold transition duration-300 border-2 rounded-full text-2xl w-[47%]
                     {step.active
        ? 'bg-[#0b383c] text-lime-100 border-[#0b383c]'
        : 'text-[#0b383c] border-none'}"
      on:click={() => selectStep(index)}
    >
      {step.label}
    </button>
  {/each}
</div>

<div class="max-w-4xl mx-auto mt-8">
  {#if steps[0].active}
    <Contribute />
  {:else if steps[1].active}
    <Apply {id} />
  {/if}
</div>
