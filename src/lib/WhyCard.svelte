<script>
    export let iconSrc;
    export let title;
    export let description;
    </script>

    <article class="flex flex-col grow shrink py-10 pr-9 pl-10 bg-teal-800 min-w-[240px] rounded-[54px] w-[410px] max-md:px-5 max-md:max-w-full">
      <div class="flex gap-4 items-center self-end p-4 bg-lime-300 h-[84px] rounded-[81px] w-[84px]">
        <img loading="lazy" src={iconSrc} alt="" class="object-contain self-stretch my-auto aspect-square w-[51px]" />
      </div>
      <div class="flex flex-col mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <h3 class="text-5xl font-semibold leading-none text-lime-300 max-md:max-w-full">
          {title}
        </h3>
        <p class="mt-3 text-3xl leading-10 text-white max-md:max-w-full">
          {description}
        </p>
      </div>
    </article>