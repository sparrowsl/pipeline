<script>
    export let number;
    export let title;
    export let description;
  </script>
  
  <article class="flex flex-wrap items-start w-full gap-4 mt-24 max-md:mt-10 max-md:max-w-full">
    <div class="px-5 w-14 text-2xl font-semibold leading-none whitespace-nowrap bg-lime-300 rounded-3xl border-lime-800 border-solid border-[3px] h-[57px] min-h-[56px] max-md:px-5 flex items-center justify-center">
      {number}
    </div>
    <div class="flex flex-col grow shrink min-w-[240px] w-[1019px] max-md:max-w-full">
      <h2 class="mb-2 text-[32px] font-semibold text-gray-800 max-sm:text-xl">{title}</h2>
      <p class="text-lg text-gray-700 max-sm:text-base">{description}</p>
    </div>
  </article>