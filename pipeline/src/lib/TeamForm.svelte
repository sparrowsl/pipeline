<section class="flex flex-col mt-14 w-full text-3xl font-semibold leading-none text-black max-w-[998px] max-md:mt-10 max-md:max-w-full">
    <h2 class="text-4xl">Add team member</h2>
    <form class="flex flex-col mt-10 w-full whitespace-nowrap max-md:max-w-full">
      <div class="flex flex-col mb-10">
        <label for="email" class="mb-5">Email</label>
        <input type="email" id="email" class="flex gap-2 w-full border border-lime-800 border-solid min-h-[80px] rounded-[52px] max-md:max-w-full px-8" required />
      </div>
      <div class="flex flex-col mb-10">
        <label for="title" class="mb-5">Title</label>
        <input type="text" id="title" class="flex gap-2 w-full border border-lime-800 border-solid min-h-[80px] rounded-[52px] max-md:max-w-full px-8" required />
      </div>
      <div class="flex flex-wrap gap-10 justify-between items-center mt-10 w-full text-xl font-medium text-gray-200 max-md:max-w-full">
        <button type="submit" class="gap-1 self-stretch px-12 py-8 my-auto bg-cyan-950 min-w-[240px] rounded-[82px] w-[696px] max-md:px-5 max-md:max-w-full">
          Send Invitation
        </button>
        <button type="button" class="gap-1 self-stretch py-8 pr-12 pl-12 my-auto bg-lime-800 min-w-[240px] rounded-[82px] max-md:px-5">
          Save & Continue
        </button>
      </div>
    </form>
  </section>