<script>
  export let question;
  export let imageSrc;
  export let answer;

  let isOpen = false;

  function toggleAnswer() {
    isOpen = !isOpen;
  }
</script>

<article class="flex flex-col mt-12 max-w-full bg-white rounded-2xl w-[1199px] max-md:mt-10">
  <div class="flex flex-col justify-center w-full border border-solid px-7 py-7 rounded-2xl border-teal-950 max-md:px-5 max-md:max-w-full">
    <div class="flex flex-col w-full max-md:max-w-full">
      <div class="flex flex-wrap items-center justify-between w-full gap-10 cursor-pointer max-md:max-w-full" on:click={toggleAnswer}>
        <h2 class="self-stretch my-auto text-3xl max-md:text-[17px] ">{question}</h2>
        <img src={imageSrc} alt="Toggle answer" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[37px] max-sm:w-[15px] transition-transform duration-300 {isOpen ? 'rotate-180' : ''}" />
      </div>
      {#if isOpen}
        <p class="mt-6 text-2xl font-normal leading-relaxed text-left text-gray-700 max-md:text-base max-md:leading-normal">{answer}</p>
      {/if}
    </div>
  </div>
</article>



