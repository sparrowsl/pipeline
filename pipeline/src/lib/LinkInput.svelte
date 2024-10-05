<script>
    export let label = '';
  </script>
  
  <div class="flex flex-col mt-9 w-full whitespace-nowrap max-md:max-w-full">
    <label for={label.toLowerCase()} class="max-md:max-w-full">{label}</label>
    <input
      type="text"
      id={label.toLowerCase()}
      class="flex gap-2 mt-5 w-full border border-lime-800 border-solid min-h-[80px] rounded-[52px] max-md:max-w-full px-8"
      aria-label={label}
    />
  </div>