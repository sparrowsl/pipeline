<script>
  export let name = '';
  export let email = '';
  export let password = '';
  export let loading = false;
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      dispatch("signUp", { name, email, password });
    } else {
      console.log("Form fields are missing data");
    }
  }

  let rememberMe = false;
</script>

<form on:submit={handleSubmit} class="flex flex-col w-full text-base">
  <h2 class="text-4xl font-semibold leading-none text-black ">Register</h2>
  <p class="mb-4 opacity-50">Enter your Info to signup for Pipeline</p>
  <div class="flex flex-col w-full font-medium text-black whitespace-nowrap">
    <label for="name" class="max-md:max-w-full">Name</label>
    <input type="text" id="name" bind:value={name} class="flex mt-3 w-full border border-black border-solid h-[40px] rounded-full px-4" required />
  </div>

  <div class="flex flex-col w-full mt-4 font-medium text-black whitespace-nowrap">
    <label for="email" class="max-md:max-w-full">Email</label>
    <input type="email" id="email" bind:value={email} class="flex mt-3 w-full border border-black border-solid h-[40px] rounded-full px-4" required />
  </div>

  <div class="flex flex-col w-full mt-4 font-medium text-black whitespace-nowrap">
    <label for="password" class="max-md:max-w-full">Password</label>
    <input type="password" id="password" bind:value={password} class="flex mt-3 w-full border border-black border-solid h-[40px] rounded-full px-4" required />
  </div>

  <button type="submit" class="self-stretch px-10 py-4 mt-8 w-full text-base font-light text-white bg-teal-900 h-[40px] rounded-full" disabled={loading}>
    {loading ? 'Signing up...' : 'Sign up'}
  </button>

  <div class="flex flex-wrap items-center justify-between w-full gap-6 mt-6 text-sm leading-none">
    <label class="flex items-center gap-2 font-medium text-black">
      <input type="checkbox" bind:checked={rememberMe} class="rounded-full border-2 border-black h-[18px] w-[18px]" />
      Remember me
    </label>
  </div>
</form>

<div class="flex flex-col items-center w-full gap-6 mt-10">
  <p class="text-sm text-neutral-400">or continue with</p>
  
  <div class="flex gap-4 mb-6">
    <button class="p-3 bg-teal-900 rounded-full">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/879dd3080c7bd34490beea474587e94f0faf9dc63499622616e98b3997258731?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Social Icon" class="w-6 h-6" />
    </button>
    <button class="p-3 bg-teal-900 rounded-full">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eef60ce512ca366df9b9bbaf2534ef3d07f36cd1005177c9fcb115bc7726767?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Social Icon" class="w-6 h-6" />
    </button>
    <button class="p-3 bg-teal-900 rounded-full">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/879dd3080c7bd34490beea474587e94f0faf9dc63499622616e98b3997258731?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Social Icon" class="w-6 h-6" />
    </button>
    <button class="w-auto px-4 py-2 mt-2 text-teal-900 rounded-full bg-lime-400">
      Connect wallet
    </button>
  </div>
</div>