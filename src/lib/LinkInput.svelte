<!-- <script>
    export let label = '';
    export let value = '';

    function handleChange(event) {
      value = event.target.value;
    }

  </script>
  
  <div class="flex flex-col w-full mt-9 whitespace-nowrap max-md:max-w-full">
    <label for={label.toLowerCase()} class="max-md:max-w-full">{label}</label>
    <input
      type="text"
      id={label.toLowerCase()}
      bind:value
      on:input={handleChange}
      class="flex gap-2 mt-5 w-full border border-lime-800 border-solid min-h-[80px] rounded-[52px] max-md:max-w-full px-8"
      aria-label={label}
    />
  </div> -->

  <script>
    export let label = '';
    export let value = '';
  
    function handleChange(event) {
      value = event.target.value;
    }
  </script>
  
  <div class="flex items-center justify-between w-full mt-9 whitespace-nowrap max-md:flex-col max-md:items-start max-md:gap-2">
    <label for={label.toLowerCase()} class="w-1/3 text-lg font-semibold">{label}</label>
    
    <input
      type="text"
      id={label.toLowerCase()}
      bind:value
      on:input={handleChange}
      class="border border-lime-800 border-solid rounded-full px-6 py-2 w-2/3 max-w-lg min-h-[48px] focus:outline-none focus:border-[#0b383c] transition-colors duration-200"
      aria-label={label}
    />
  </div>
  