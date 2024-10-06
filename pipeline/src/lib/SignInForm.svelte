<script>
  export let email = '';
  export let password = '';
  export let loading = false;
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitted:', { email, password });

    if (email && password) {
      dispatch("signIn", {
        email,
        password
      });
    }else {
      console.log("Form fields are missing data");
    }
  }
    let rememberMe = false;
  </script>
  
  <div class="flex flex-col mt-20 w-10/12 max-w-[80%] self-center max-md:mt-10 max-md:max-w-full">
    <header class="flex flex-col self-start">
      <h1 class="text-3xl font-semibold text-black max-md:text-2xl">Sign in</h1>
      <p class="mt-4 text-xl text-neutral-400 max-md:text-lg">Enter your info to sign in</p>
    </header>
    
    <form on:submit={handleSubmit} class="flex flex-col mt-12 w-full text-lg max-md:mt-8 max-md:max-w-full">
      <div class="flex flex-col w-full font-medium text-black whitespace-nowrap max-md:max-w-full">
        <label for="email" class="max-md:max-w-full">Email</label>
        <input type="email" id="email" bind:value={email} class="flex mt-3 w-full border border-black border-solid h-[45px] rounded-full px-4 max-md:max-w-full" required />
      </div>
      
      <div class="flex flex-col mt-6 w-full font-medium text-black whitespace-nowrap max-md:max-w-full">
        <label for="password" class="max-md:max-w-full">Password</label>
        <input type="password" id="password" bind:value={password} class="flex mt-3 w-full border border-black border-solid h-[45px] rounded-full px-4 max-md:max-w-full" required />
      </div>
      
      <button type="submit" class="self-stretch px-10 py-4 mt-8 w-full text-base font-light text-white bg-teal-900 h-[45px] rounded-full max-md:px-5 max-md:max-w-full" disabled={loading}>
        {loading ? 'Signing in...' : 'Sign in'}
      </button>
      
      <div class="flex flex-wrap gap-6 justify-between items-center mt-6 w-full text-sm leading-none max-md:max-w-full">
        <label class="flex gap-2 items-center font-medium text-black">
          <input type="checkbox" bind:checked={rememberMe} class="rounded-full border-2 border-black h-[18px] w-[18px]" />
          Remember me
        </label>
        <a href="#forgot-password" class="font-semibold text-neutral-400">Forgot Password?</a>
      </div>
    </form>
  </div>
  