<script>
  export let email = '';
  export let password = '';
  export let loading = false;
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch("signIn", { email, password });
    } else {
      console.log("Form fields are missing data");
    }
  }

  let rememberMe = false;
</script>

<form on:submit={handleSubmit} class="flex flex-col w-full text-lg">
  <h2 class="mb-2 text-4xl font-semibold leading-none text-black">Sign in</h2>
  <p class="mb-4 opacity-50">Enter your Info to sign up</p>
  <div class="flex flex-col w-full font-medium text-black whitespace-nowrap">
    <label for="email" class="max-md:max-w-full">Email</label>
    <input type="email" id="email" bind:value={email} class="flex mt-3 w-full border border-black border-solid h-[45px] rounded-full px-4" required />
  </div>
  
  <div class="flex flex-col w-full mt-6 font-medium text-black whitespace-nowrap">
    <label for="password" class="max-md:max-w-full">Password</label>
    <input type="password" id="password" bind:value={password} class="flex mt-3 w-full border border-black border-solid h-[45px] rounded-full px-4" required />
  </div>
  
  <button type="submit" class="self-stretch px-10 py-4 mt-8 w-full text-base font-light text-white bg-teal-900 h-[45px] rounded-full" disabled={loading}>
    {loading ? 'Signing in...' : 'Sign in'}
  </button>
  
  <div class="flex flex-wrap items-center justify-between w-full gap-6 mt-6 text-sm leading-none">
    <label class="flex items-center gap-2 font-medium text-black">
      <input type="checkbox" bind:checked={rememberMe} class="rounded-full border-2 border-black h-[18px] w-[18px]" />
      Remember me
    </label>
    <a href="#forgot-password" class="font-semibold text-neutral-400">Forgot Password?</a>
  </div>
</form>
