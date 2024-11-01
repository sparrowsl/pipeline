<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let searchTerm = '';

  function handleInput(event) {
    searchTerm = event.target.value;
    dispatch('search', { searchTerm });
  }

</script>  
  
  <div class="flex items-center py-4 pr-16 pl-6 my-auto text-black border-[#97a07d] border-solid border-[2px] min-w-[240px] rounded-[43px] w-[805px] max-md:px-5 max-md:max-w-full max-md:flex-nowrap max-sm:justify-between">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/18369895e4db602dfeea407c51d752608ddfd4c412594f2f3a55fa96274df836?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="" class="object-contain shrink-0 aspect-square w-[26px] max-sm:w-[15px]" />
    <label for="searchInput" class="sr-only">Search</label>
    <input type="text" id="searchInput" placeholder="Search" class="flex-grow ml-2 text-lg bg-transparent border-none outline-none" 
    on:input={handleInput}/>
</div>