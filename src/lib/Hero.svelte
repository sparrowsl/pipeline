 <script>
  export let data;
</script>

<section class="flex flex-wrap gap-10 items-center self-center mt-44 mb-0 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
    <div class="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[583px] max-md:max-w-full sm:px-2">
      <div class="flex flex-col w-full max-md:max-w-full">
        <h1 class="text-7xl font-semibold text-white leading-[94px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
          Building a <br />Better<br /><span class="text-lime-300">Digital Future</span>
        </h1>
        <p class="mt-3.5 text-2xl leading-7 text-gray-200 max-md:max-w-full">
          Discover, contribute, and collaborate on <br />open-source projects that drive social impact globally.
        </p>
      </div>
      
      <div class="flex flex-wrap gap-5 justify-between items-center mt-20 w-full leading-none max-w-[550px] max-md:mt-10 max-md:max-w-full">
        <a href="#discover" class="flex gap-7 justify-center items-center self-stretch p-6 my-auto text-2xl text-black bg-lime-300 min-w-[240px] rounded-[91px] w-[300px] max-md:px-5">
          <span class="self-stretch my-auto">Discover Projects</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ee85afd95f21137b0259c2e12860243ce44ca3d6eeef6dbee9406e15ee48684?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="" class="object-contain shrink-0 self-stretch my-auto w-8 aspect-[0.97]" />
        </a>
        {#if !data.isAuthenticated}
        <a href="#signup" class="flex gap-7 justify-center items-center self-stretch px-7 py-7 my-auto text-2xl text-lime-300 border-2 border-lime-300 border-solid min-h-[79px] rounded-[61px] w-[228px] max-md:px-5">
          Sign up
        </a>
        {/if}
      </div>
     
    </div>
    <div class="flex gap-2 items-center self-stretch my-auto min-w-[240px] w-[503px] max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/57cf35930d02cbe6dc515733ea696508f4e4050139500aa10ab40489da63e872?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Illustration of digital future concept" class="object-contain self-stretch my-auto aspect-[0.94] min-w-[240px] w-[503px]" />
    </div>
  </section> 

<!-- 
  <script>
    export let data;
  </script>
  
  <section class="flex flex-wrap items-center self-center gap-10 mb-0 mt-44 max-lg:mt-20 max-lg:mb-5 max-md:max-w-full">
      <div class="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[583px] max-lg:w-[90%] max-md:max-w-full pl-4">
        <div class="flex flex-col w-full max-md:max-w-full">
          <h1 class="text-7xl font-semibold text-white leading-[94px] max-lg:text-5xl max-md:text-4xl max-md:leading-[50px]">
            Building a <br />Better<br /><span class="text-lime-300">Digital Future</span>
          </h1>
          <p class="mt-3.5 text-2xl leading-7 text-gray-200 max-md:max-w-full max-lg:text-xl">
            Discover, contribute, and collaborate on <br />open-source projects that drive social impact globally.
          </p>
        </div>
        
        <div class="flex flex-wrap gap-5 justify-between items-center mt-20 w-full leading-none max-w-[550px] max-lg:mt-10">
          <div class="flex flex-col w-full gap-5 max-md:flex-row">
            <a href="#discover" class="flex gap-2 justify-center items-center self-stretch p-4 my-auto text-sm text-black bg-lime-300 rounded-[50px] w-[60%] mx-auto">
              <span class="self-stretch my-auto text-base">Discover Projects</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ee85afd95f21137b0259c2e12860243ce44ca3d6eeef6dbee9406e15ee48684?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="" class="object-contain shrink-0 self-stretch my-auto w-4 aspect-[0.97]" />
            </a>
            {#if !data.isAuthenticated}
            <a href="#signup" class="flex gap-3 justify-center items-center self-stretch px-4 py-3 my-auto text-lg text-lime-300 border-2 border-lime-300 border-solid rounded-[50px] w-[40%] mx-auto">
              Sign up
            </a>
            {/if}
          </div>
        </div>
       
      </div>
      <div class="flex gap-2 items-center self-stretch my-auto min-w-[240px] w-[503px] max-lg:w-[90%] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/57cf35930d02cbe6dc515733ea696508f4e4050139500aa10ab40489da63e872?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Illustration of digital future concept" class="object-contain self-stretch my-auto aspect-[0.94] min-w-[240px] w-full" />
      </div>
  </section> -->

 