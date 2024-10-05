<script>
    import ProgressBar from './ProgressBar.svelte';
    import ContributeButton from './ContributeButton.svelte';
    import CategoryTag from './CategoryTag.svelte';
    import DPGRating from './DPGRating.svelte';
  </script>
  
  <div class="flex flex-col bg-gray-200 rounded-3xl overflow-hidden">
    <header class="relative pt-[75%]">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9be50ea8fec0dc6763ce3b49a4620cfba2186ff41be76f7cb1029b5aecd0a109" 
        alt="" 
        class="absolute inset-0 w-full h-full object-cover"
      />
      <!-- <div class="absolute top-4 left-4 bg-lime-300 rounded-2xl border-2 border-solid border-teal-950 p-1.5">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f382dca341e494eba1b7bf2d90e54aae478d3521243220b272d6824b92dc6874" 
          alt="" 
          class="w-5 h-5 object-contain"
        />
      </div> -->
    </header>
    
    <div class="p-4">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-xl font-semibold text-black">Title</h2>
        <p class="text-xs text-neutral-400">
          <span class="text-sm font-semibold">$300</span> raised of <span class="text-sm font-semibold">$2000</span>
        </p>
      </div>
      <p class="text-xs text-black mb-2">
        Lorem ipsum dolor sit amet consectetur. Quis viverra egestas pulvinar volutpat at mauris tincidunt mi. Nunc volutpat netus tristique donec lectus.
      </p>
      <div class="flex gap-2 mb-4">
        <CategoryTag text="category 1" />
        <CategoryTag text="category 2" />
      </div>
      
      <DPGRating rating={5} total={9} />
      <ProgressBar progress={206} total={289} />
      
      <ContributeButton />
    </div>
  </div>