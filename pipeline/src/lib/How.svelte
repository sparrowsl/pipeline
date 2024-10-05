<script>
    import LearnMoreButton from "./LearnMoreButton.svelte";
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
    <h2 class="text-4xl sm:text-5xl lg:text-7xl font-semibold text-center text-black leading-tight mb-16">
        <span class="text-3xl sm:text-4xl lg:text-6xl block">How</span>
        <span class="text-4xl sm:text-5xl lg:text-7xl">Pipeline Works?</span>
    </h2>
    <div class="w-full space-y-16">
        <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div class="w-full lg:w-1/2 aspect-square">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/28a2ce8b1da03d382b7e78ee6e5fe892b00c40ae04603fa41ca5892bca8d0a38?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" 
                     alt="Submit and Discover DPG Ideas" 
                     class="w-full h-full object-cover rounded-lg" />
            </div>
            <div class="w-full lg:w-1/2 space-y-4">
                <h3 class="text-3xl sm:text-4xl lg:text-[50px] font-semibold font-['PP Mori'] leading-tight text-black">Submit and Discover<br/>DPG Ideas</h3>
                <p class="text-xl sm:text-2xl text-[#8c8c8c] font-normal font-['PP Mori']">Register your project in minutes and start getting funding via donations and matching rounds</p>
            </div>
        </div>
        
        <div class="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
            <div class="w-full lg:w-1/2 aspect-square">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/315deeea4493d8d8a3d36d4b064871d729dfca2de0f68c8e1354806789b065ce?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" 
                     alt="Meet Criteria for DPG Registry" 
                     class="w-full h-full object-cover rounded-lg" />
            </div>
            <div class="w-full lg:w-1/2 space-y-4">
                <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold font-['PP Mori'] leading-tight text-black">Meet Criteria for<br/>DPG Registry</h3>
                <p class="text-xl sm:text-2xl text-[#8c8c8c] font-normal font-['PP Mori']">Learn what it takes to be listed in the DPG registry.<br/>Use our checklist to ensure your project meets requirements.</p>
            </div>
        </div>
        
        <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div class="w-full lg:w-1/2 aspect-square">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/94faeac3703e7f1561735c571bb62c08704196d48e63fe773f1a109087844c8b?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" 
                     alt="Get Support for DPG Ideas" 
                     class="w-full h-full object-cover rounded-lg" />
            </div>
            <div class="w-full lg:w-1/2 space-y-4">
                <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold font-['PP Mori'] leading-tight text-black">Get Support to Bring Your DPG Ideas to Life</h3>
                <p class="text-xl sm:text-2xl text-[#8c8c8c] font-normal font-['PP Mori']">Register your project in minutes and start getting funding via donations and matching rounds</p>
            </div>
        </div>
    </div>
    <div class="mt-16">
        <LearnMoreButton />
    </div>
</div>