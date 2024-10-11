<script>
    export let rating;
    export let total;
  </script>
  
  <div class="flex gap-3.5 items-center self-start text-2xl leading-none text-neutral-400">
    <div class="flex gap-1 items-center self-stretch my-auto">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0407902193cd565443be17ec33814308d260b869b643603846e010995739fa2f?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[23px]" />
      <div class="self-stretch my-auto">
        <span class="text-base text-neutral-400">DPG Registry:</span>
        <span class="text-xl font-extrabold text-neutral-400">{rating} </span>
        <span class="text-base text-neutral-400">out of</span>
        <span class="text-base font-extrabold text-neutral-400"> {total}</span>
      </div>
    </div>
  </div>