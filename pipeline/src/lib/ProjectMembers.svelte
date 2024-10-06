<section class="flex flex-wrap gap-6 items-center mt-8 w-full max-w-[900px] max-md:mt-6 max-md:max-w-full">
    <div class="flex shrink-0 gap-2 self-stretch my-auto border-4 border-white border-solid bg-zinc-300 h-[120px] rounded-full w-[120px]" role="img" aria-label="Creator profile picture"></div>
    <div class="flex flex-col self-stretch my-auto flex-grow max-w-[calc(100%-140px)]">
      <div class="flex gap-3 items-center">
        <h1 class="text-2xl font-semibold leading-tight text-black">
          Creator Name
        </h1>
        <span class="px-3 py-1 text-sm leading-none text-lime-800 whitespace-nowrap bg-lime-200 rounded-full border border-lime-800 border-solid">
          Creator
        </span>
      </div>
      <p class="mt-2 text-sm leading-snug text-stone-500 max-md:max-w-full">
        This will appear on your project page and must include your name, photo, and biography.
      </p>
    </div>
  </section>
  
  <form class="flex flex-col mt-8 w-full max-w-[900px] max-md:max-w-full">
    <div class="flex flex-col mb-6 w-full">
      <label for="email" class="mb-2 text-sm font-medium">Email</label>
      <input type="email" id="email" class="px-4 w-full h-12 text-base rounded-full border border-lime-800 border-solid" required />
    </div>
    <div class="flex flex-col mb-6 w-full">
      <label for="title" class="mb-2 text-sm font-medium">Title</label>
      <input type="text" id="title" class="px-4 w-full h-12 text-base rounded-full border border-lime-800 border-solid" required />
    </div>
    <div class="flex flex-wrap gap-4 justify-between items-center mt-8 w-full">
      <button type="submit" class="flex-grow px-6 py-3 text-base font-medium text-white rounded-full transition-colors bg-cyan-950 hover:bg-cyan-900">
        Send Invitation
      </button>
      <button type="button" class="px-6 py-3 text-base font-medium text-white bg-lime-800 rounded-full transition-colors hover:bg-lime-700">
        Save & Continue
      </button>
    </div>
  </form>