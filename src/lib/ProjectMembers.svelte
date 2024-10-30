<section class="flex flex-wrap gap-6 items-center mt-8 w-full max-w-[900px] max-md:mt-6 max-md:max-w-full">
    <img src="/" class="flex shrink-0 gap-2 self-stretch my-auto border-4 border-white border-solid bg-zinc-300 h-[80px] rounded-full w-[80px]" aria-label="Creator profile picture" alt="">
    <div class="flex flex-col self-stretch my-auto flex-grow max-w-[calc(100%-140px)]">
      <div class="flex items-center gap-3">
        <h1 class="text-2xl font-semibold leading-tight text-black">
          Creator Name
        </h1>
        <span class="px-3 py-1 text-sm leading-none border border-solid rounded-full text-lime-800 whitespace-nowrap bg-lime-200 border-lime-800">
          Creator
        </span>
      </div>
      <p class="mt-2 text-sm leading-snug text-stone-500 max-md:max-w-full">
        This will appear on your project page and must include your name, photo, and biography.
      </p>
    </div>
  </section>

  <section class="flex flex-wrap items-center gap-6 mt-8 w-full max-w-[900px] max-md:mt-6 max-md:max-w-full justify-between">

    <div class="flex items-center flex-grow gap-6">
      <div class="flex justify-around">
      <img src="/" class="flex-shrink-0 border-4 border-white bg-zinc-300 h-[80px] w-[80px] rounded-full" aria-label="teammate profile picture" alt=""></div>
      
   
      <div class="flex flex-col flex-grow mr-14">
        <div class="flex items-center gap-3">
          <h1 class="text-2xl font-semibold text-black">Teammate</h1>
          <span class="px-3 py-1 text-sm border rounded-full border-lime-800 bg-lime-200 text-lime-800">Designer</span>
        </div>
        <p class="mt-2 text-sm text-stone-500">
          This will appear on your project page and must include your name, photo, and biography.
        </p>
      </div>
    <button type="button" class="px-4 py-2 text-sm font-medium text-white transition-colors bg-red-600 rounded-full hover:bg-red-500">
      Delete
    </button>
  </div>
  </section>
  

  <form class="flex flex-col mt-8 w-[93%] max-w-[900px] max-md:max-w-full">
    <div class="flex items-center w-full mb-6 space-x-4">
      <label for="email" class="w-1/3 text-base font-medium">Email / Username</label>
      <input
        type="email"
        id="email"
        class="flex-grow h-12 px-4 text-base border border-solid rounded-full border-lime-800"
        required
      />
    </div>
  
    <div class="flex items-center w-full mb-6 space-x-4">
      <label for="title" class="w-1/3 text-base font-medium">Title</label>
      <input
        type="text"
        id="title"
        class="flex-grow h-12 px-4 text-base border border-solid rounded-full border-lime-800"
        required
      />
    </div>
  

    <div class="flex flex-wrap items-center justify-end w-full gap-3 mt-2">
      <button
        type="submit"
        class="px-6 py-3 text-base font-medium text-white transition-colors rounded-full bg-cyan-950 hover:bg-cyan-900"
      >
        Send Invitation
      </button>
    </div>
  </form>
  