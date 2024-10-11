<form class="flex flex-col w-full text-3xl text-black max-md:max-w-full">
    <div class="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
      <label for="currentPassword" class="self-stretch my-auto">Current Password</label>
      <input type="password" id="currentPassword" class="flex shrink-0 self-stretch my-auto border border-black border-solid h-[73px] min-w-[240px] rounded-[49px] w-[733px] px-6"/>
    </div>
    <div class="flex flex-wrap gap-10 justify-between items-center mt-9 w-full max-md:max-w-full">
      <label for="newPassword" class="self-stretch my-auto">New Password</label>
      <input type="password" id="newPassword" class="flex shrink-0 self-stretch my-auto border border-black border-solid h-[73px] min-w-[240px] rounded-[49px] w-[735px] px-6" />
    </div>
    <div class="flex flex-wrap gap-10 justify-between items-center mt-9 w-full max-md:max-w-full">
      <label for="confirmPassword" class="self-stretch my-auto">Confirm Password</label>
      <input type="password" id="confirmPassword" class="flex shrink-0 self-stretch my-auto border border-black border-solid h-[73px] min-w-[240px] rounded-[49px] w-[735px] px-6" />
    </div>
  </form>

  <button class="self-end px-16 py-8 mt-8 text-3xl text-white whitespace-nowrap bg-lime-800 rounded-[128px] max-md:px-5">
    Done
  </button>

  <button class="gap-1 self-stretch px-10 py-7 mt-8 w-full text-xl text-white bg-teal-900 min-h-[73px] rounded-[82px] max-md:px-5 max-md:max-w-full">
    Delete Account
  </button>