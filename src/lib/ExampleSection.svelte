<script>
  import ExampleItem from './ExampleItem.svelte';
  
  const examples = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0432ad968109162930883694c4ea6d66e6266d3617a66c8a4ab8b90010080c67?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8", alt: "Open Software icon", title: "Open\nSoftware" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/414ed069a7b010c5a64ba83b79905fdb6bc7383c9e6fa7f6cdcdc9d35d4c6986?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8", alt: "Open AI Models icon", title: "Open\nAI Models" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/76c0921ff7abebd8a33b05256f618fb97012458de585932cae8b748e10f8a49a?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8", alt: "Open Data icon", title: "Open\nData" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f2d4396ff2fdfbbc7e66f7f203344d7f379a9a1b393388763ee55e06ab34d38?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8", alt: "Open Content icon", title: "Open\nContent" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b29a6439f123d49185ea8ef2535b59441ee4c681778826e3767c88474801fa8a?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8", alt: "Open Standards icon", title: "Open\nStandards" }
  ];
</script>

<section class="flex flex-col items-center mt-16 max-w-full w-[1028px] max-md:mt-10 px-4 mx-auto">
  <h2 class="text-5xl font-semibold leading-none text-black mb-8 max-md:text-4xl text-center">Examples</h2>
  <div class="flex flex-wrap gap-16 justify-center items-start w-full text-3xl font-thin leading-8 text-black max-md:max-w-full">
    {#each examples as example}
      <ExampleItem {...example} />
    {/each}
  </div>
</section>