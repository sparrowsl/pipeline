<script>
	import Learn from './Learn.svelte';
    import LearnDPG from './LearnDPG.svelte';
    import Newsletter from './Newsletter.svelte';
</script>

<section class="flex flex-col lg:flex-row justify-between items-center p-6 sm:p-6 lg:p-12 mt-10 sm:mt-16 lg:mt-20 bg-lime-300 rounded-3xl sm:rounded-[47px] max-w-7xl mx-auto">
    <div class="flex flex-col self-stretch font-semibold w-full lg:w-[45%] mb-8 lg:mb-0">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-teal-950">
            Start your DPG journey now
        </h1>
        <p class="mt-2.5 text-lg sm:text-xl leading-6 text-teal-800">
            Discover, support, and create Digital Public Goods on Pipeline.
        </p>
    </div>
    <div class="flex flex-col self-stretch w-full lg:w-[45%] space-y-6">
        <Learn />
        <LearnDPG />
        <Newsletter />
    </div>
</section>