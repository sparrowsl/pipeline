<script>
    export let question;
    export let imageSrc;
    export let answer;
  
    let isOpen = false;
  
    function toggleAnswer() {
      isOpen = !isOpen;
    }
  </script>
  
  <article class="flex flex-col mt-12 max-w-full bg-white rounded-2xl w-[1099px] max-md:mt-10">
    <div class="flex flex-col justify-center px-7 py-7 w-full rounded-2xl border border-solid border-teal-950 max-md:px-5 max-md:max-w-full">
      <div class="flex flex-col w-full max-md:max-w-full">
        <div class="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
          <h2 class="self-stretch my-auto text-2xl">{question}</h2>
          <button on:click={toggleAnswer} class="focus:outline-none">
            <img src={imageSrc} alt="Toggle answer" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[37px] transition-transform duration-300 {isOpen ? 'rotate-180' : ''}" />
          </button>
        </div>
        {#if isOpen}
          <p class="mt-6 text-left text-xl font-normal text-gray-700 leading-relaxed">{answer}</p>
        {/if}
      </div>
    </div>
  </article>
  
  <style>
    h2 {
      font-size: 1.5rem; 
    }
    
    p {
      font-size: 1.25rem;
      line-height: 1.6;
    }
  
    @media (max-width: 768px) {
      h2 {
        font-size: 1.25rem; 
      }
      
      p {
        font-size: 1rem; 
      }
    }
  </style>