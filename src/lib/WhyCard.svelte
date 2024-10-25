<script>
    export let iconSrc;
    export let title;
    export let description;
    </script>

    <article class="flex flex-col grow shrink py-10 pr-9 pl-10 bg-teal-800 min-w-[240px] rounded-[54px] w-[410px] max-md:px-5 max-md:max-w-full max-sm:max-w-[90%] mx-auto">
      <div class="flex gap-4 items-center self-end p-4 bg-lime-300 h-[84px] rounded-[81px] w-[84px] max-sm:rounded-[60px]">
          <img loading="lazy" src={iconSrc} alt="" class="object-contain self-stretch my-auto aspect-square w-[51px]" />
      </div>
      <div class="flex flex-col w-full mt-14 max-md:mt-10 max-md:max-w-full">
          <h3 class="text-5xl font-semibold leading-none text-lime-300 max-md:max-w-full max-sm:text-4xl">
              {title}
          </h3>
          <p class="text-white text-3xl font-normal font-['PP Mori'] leading-[40.86px] max-sm:text-2xl">
              {description}
          </p>
      </div>
  </article>