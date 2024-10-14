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

  import { onMount } from 'svelte';
  export let data;

    let featureProjects = []
    let loading = true;
    let error = null;

    async function fetchFeatureProjects() {
        try {
            const response = await fetch('/api/projects/allprojects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
            throw new Error(response.statusText);
            }

            const data = await response.json();

            featureProjects = data.projects.slice(0, 6);

        } catch (error) {
        error = e.message;
        alert(error);
      }finally{
        loading = false;
      }
    }

    onMount(() => {
        fetchFeatureProjects();
    })
</script>

<main class="flex flex-col self-stretch w-full pb-48 bg-teal-950 max-md:pb-24">
  <Header {data}/>
  <Hero {data}/>
</main>

<div class="container px-4 mx-auto mt-20 sm:px-6 lg:px-8">
  <div class="flex flex-wrap justify-between items-center gap-4 max-w-[1156px] mx-auto">
    <h2 class="text-2xl font-semibold text-black sm:text-3xl md:text-4xl">
      Featured Projects
    </h2>
    <ViewAllButton />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1156px] mx-auto px-[13.70px] pt-[13.70px] pb-[20.55px]">
    {#if featureProjects.length > 0}    
          {#each featureProjects as project}
        <Card {project}/> 
        {/each}
        {:else}
        <p>No projects found.</p>
      
        {/if}
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

  <div class="flex justify-center max-w-4xl mx-auto mt-8 mb-16 text-center">
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