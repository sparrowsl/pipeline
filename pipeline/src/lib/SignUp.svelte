<!-- <script>
  let rememberMe = false;
</script>

<div class="flex flex-col mt-20 w-10/12 max-w-[80%] h-[80vh] self-center max-md:mt-10 max-md:max-w-full">
  <header class="flex flex-col self-start">
      <h1 class="text-3xl font-semibold text-black max-md:text-2xl">Sign up</h1>
      <p class="mt-4 text-xl text-neutral-400 max-md:text-lg">Enter your info to sign up for PipeLine</p>
  </header>

  <form class="flex flex-col mt-12 w-full text-lg max-md:mt-8 max-md:max-w-full">
      <div class="flex flex-col w-full font-medium text-black whitespace-nowrap max-md:max-w-full">
          <label for="name" class="max-md:max-w-full">Name</label>
          <input type="text" id="name" class="flex mt-3 w-full border border-black border-solid h-[45px] rounded-full px-4 max-md:max-w-full" required />
      </div>

      <div class="flex flex-col mt-6 w-full font-medium text-black whitespace-nowrap max-md:max-w-full">
          <label for="email" class="max-md:max-w-full">Email</label>
          <input type="email" id="email" class="flex mt-3 w-full border border-black border-solid h-[45px] rounded-full px-4 max-md:max-w-full" required />
      </div>

      <div class="flex flex-col mt-6 w-full font-medium text-black whitespace-nowrap max-md:max-w-full">
          <label for="password" class="max-md:max-w-full">Password</label>
          <input type="password" id="password" class="flex mt-3 w-full border border-black border-solid h-[45px] rounded-full px-4 max-md:max-w-full" required />
      </div>

      <button type="submit" class="self-stretch px-10 py-4 mt-8 w-full text-base font-light text-white bg-teal-900 h-[45px] rounded-full max-md:px-5 max-md:max-w-full">
          Sign up
      </button>

      <div class="flex flex-wrap gap-6 justify-between items-center mt-6 w-full text-sm leading-none max-md:max-w-full">
          <label class="flex gap-2 items-center font-medium text-black">
              <input type="checkbox" bind:checked={rememberMe} class="rounded-full border-2 border-black h-[18px] w-[18px]" />
              Remember me
          </label>
      </div>
  </form>

  <div class="flex flex-col gap-6 items-center mt-10 w-full">
      <p class="text-sm text-neutral-400">or continue with</p>
      <div class="flex gap-4">
          <button class="p-3 bg-teal-900 rounded-full">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed9f9b7351106d8862a2a9740335f040d3de1d1f724a210198cd8a81996fb6b0?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Social Icon" />
          </button>
          <button class="p-3 bg-teal-900 rounded-full">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eef60ce512ca366df9b9bbaf2534ef3d07f36cd1005177c9fcb115bc7726767?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Social Icon" />
          </button>
          <button class="p-3 bg-teal-900 rounded-full">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/879dd3080c7bd34490beea474587e94f0faf9dc63499622616e98b3997258731?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Social Icon" />
          </button>
      </div>
      <button class="px-4 py-2 mt-4 text-teal-900 bg-lime-400 rounded-full">
          Connect wallet
      </button>
  </div>
</div> -->


<script>
  export let name = '';
  export let email = '';
  export let password = '';
  export let loading = false;
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitted:', { name, email, password });

    if (name && email && password) {
      dispatch("signUp", {
        name,
        email,
        password
      });
    }else {
      console.log("Form fields are missing data");
    }
  }

  let rememberMe = false;
</script>

<div class="flex flex-col mt-20 w-10/12 max-w-[80%] h-[80vh] self-center max-md:mt-10 max-md:max-w-full">
  <header class="flex flex-col self-start">
      <h1 class="text-3xl font-semibold text-black max-md:text-2xl">Sign up</h1>
      <p class="mt-4 text-xl text-neutral-400 max-md:text-lg">Enter your info to sign up for PipeLine</p>
  </header>

  <form on:submit={handleSubmit} class="flex flex-col mt-12 w-full text-lg max-md:mt-8 max-md:max-w-full">
      <div class="flex flex-col w-full font-medium text-black whitespace-nowrap max-md:max-w-full">
          <label for="name" class="max-md:max-w-full">Name</label>
          <input type="text" id="name" bind:value={name} class="flex mt-3 w-full border border-black border-solid h-[45px] rounded-full px-4 max-md:max-w-full" required />
      </div>

      <div class="flex flex-col mt-6 w-full font-medium text-black whitespace-nowrap max-md:max-w-full">
          <label for="email" class="max-md:max-w-full">Email</label>
          <input type="email" id="email" bind:value={email} class="flex mt-3 w-full border border-black border-solid h-[45px] rounded-full px-4 max-md:max-w-full" required />
      </div>

      <div class="flex flex-col mt-6 w-full font-medium text-black whitespace-nowrap max-md:max-w-full">
          <label for="password" class="max-md:max-w-full">Password</label>
          <input type="password" id="password" bind:value={password} class="flex mt-3 w-full border border-black border-solid h-[45px] rounded-full px-4 max-md:max-w-full" required />
      </div>

      <button type="submit" class="self-stretch px-10 py-4 mt-8 w-full text-base font-light text-white bg-teal-900 h-[45px] rounded-full max-md:px-5 max-md:max-w-full" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign up'}
      </button>

      <div class="flex flex-wrap gap-6 justify-between items-center mt-6 w-full text-sm leading-none max-md:max-w-full">
          <label class="flex gap-2 items-center font-medium text-black">
              <input type="checkbox" bind:checked={rememberMe} class="rounded-full border-2 border-black h-[18px] w-[18px]" />
              Remember me
          </label>
      </div>
  </form>

  <div class="flex flex-col gap-6 items-center mt-10 w-full">
    <p class="text-sm text-neutral-400">or continue with</p>
    
    <div class="flex gap-4 mb-6"> <!-- Added mb-6 to separate from the button -->
        <button class="p-3 bg-teal-900 rounded-full">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/879dd3080c7bd34490beea474587e94f0faf9dc63499622616e98b3997258731?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Social Icon" class="w-6 h-6" />
        </button>
        <button class="p-3 bg-teal-900 rounded-full">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eef60ce512ca366df9b9bbaf2534ef3d07f36cd1005177c9fcb115bc7726767?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Social Icon" class="w-6 h-6" />
        </button>
        <button class="p-3 bg-teal-900 rounded-full">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/879dd3080c7bd34490beea474587e94f0faf9dc63499622616e98b3997258731?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Social Icon" class="w-6 h-6" />
        </button>
        <button class="px-4 py-2 mt-2 w-auto text-teal-900 bg-lime-400 rounded-full">
          Connect wallet
      </button>
    </div>
  
  </div>
  
  
  
  
</div>
