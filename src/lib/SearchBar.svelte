<script>
  import { goto } from '$app/navigation';
  function goToExplorePage(event) {
    event.preventDefault(); 
    goto('/explore'); 
  }
</script>

<form class="flex gap-10 justify-between items-center self-stretch my-auto text-xs leading-none text-center text-lime-800 bg-lime-200 rounded-3xl border border-lime-300 border-solid min-h-[33px] w-[238px] p-2 py-2">
  <label for="searchInput" class="sr-only">Search Projects</label>
  <input 
    type="text" 
    id="searchInput" 
    placeholder="Search Projects" 
    class="ml-2 text-sm bg-transparent border-none outline-none" 
    on:click={goToExplorePage} 
  />
  <button 
    type="button" 
    aria-label="Search" 
    on:click={goToExplorePage}
  >
    <img 
      loading="lazy" 
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cea00987cd5d34029b3f3529b7ac5f876b522a99547522c90064fae2fcdeb9d?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" 
      alt="Search icon" 
      class="self-stretch object-contain my-auto w-[18px] shrink-0 aspect-square" 
    />
  </button>
</form>


