<script>
  export let question;
  export let imageSrc;
  export let answer;

  let isOpen = false;

  function toggleAnswer() {
    isOpen = !isOpen;
  }
</script>

<article class="mt-12 flex w-[1199px] max-w-full flex-col rounded-2xl bg-white max-md:mt-10">
  <div
    class="flex w-full flex-col justify-center rounded-2xl border border-solid border-teal-950 px-7 py-7 max-md:max-w-full max-md:px-5"
  >
    <div class="flex w-full flex-col max-md:max-w-full">
      <div
        class="flex w-full cursor-pointer flex-wrap items-center justify-between gap-10 max-md:max-w-full"
        on:click={toggleAnswer}
      >
        <h2 class="my-auto self-stretch text-3xl max-md:text-[17px]">{question}</h2>
        <img
          src={imageSrc}
          alt="Toggle answer"
          class="my-auto aspect-square w-[37px] shrink-0 self-stretch object-contain transition-transform duration-300 max-sm:w-[15px] {isOpen
            ? 'rotate-180'
            : ''}"
        />
      </div>
      {#if isOpen}
        <p
          class="mt-6 text-left text-2xl font-normal leading-relaxed text-gray-700 max-md:text-base max-md:leading-normal"
        >
          {answer}
        </p>
      {/if}
    </div>
  </div>
</article>
