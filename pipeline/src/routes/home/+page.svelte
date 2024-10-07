<script>
	import ExampleSection from './../../lib/ExampleSection.svelte';
  import Header from '../../lib/Header.svelte';
  import Hero from '../../lib/Hero.svelte';
  import ViewAllButton from '../../lib/ViewAllButton.svelte';
  import Card from '../../lib/Card.svelte';
  import DPG from '../../lib/DPG.svelte';
  import Examples from '../../lib/Examples.svelte';
  import LearnMoreButton from '../../lib/LearnMoreButton.svelte';
  import SubHero from '../../lib/SubHero.svelte';
  import How from '../../lib/How.svelte';
  import Why from '../../lib/Why.svelte';
  import FAQ from '../../lib/FAQ.svelte';
  import Journey from '$lib/Journey.svelte';
  import Footer from '../../lib/Footer.svelte';
  export let data;
</script>

<main class="flex flex-col self-stretch pb-48 w-full bg-teal-950 max-md:pb-24">
  <Header {data}/>
  <Hero {data}/>
</main>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
  <div class="flex flex-wrap justify-between items-center gap-4 max-w-[1156px] mx-auto">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
      Featured Projects
    </h2>
    <ViewAllButton />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1156px] mx-auto px-[13.70px] pt-[13.70px] pb-[20.55px]">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>

  <div class="max-w-4xl mx-auto mt-20">
    <DPG />
  </div>

  <div class="w-full max-w-[1076px] mx-auto mt-16">
    <ExampleSection />
  </div>

  <div class="w-full max-w-[1076px] mx-auto mt-16 ">
    <Examples />
  </div>

  <div class="max-w-4xl mx-auto mt-8 flex justify-center mb-16">
    <LearnMoreButton />
  </div>
</div>

<SubHero />

<div class="w-full max-w-[1076px] mx-auto mt-16 ">
  <How />
</div>

<div class="w-full max-w-[1076px] mx-auto mt-16 ">
  <Why />
</div>

<div class="w-full max-w-[1076px] mx-auto mt-16 ">
  <FAQ />
</div>

<div class="w-full max-w-[1076px] mx-auto mt-16 ">
  <Journey />
</div>

<Footer />