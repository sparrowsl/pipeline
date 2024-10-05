<script>
    import SignInForm from '../../lib/SignInForm.svelte';
    import Logo from '../../lib/Logo.svelte';
  </script>
  
  <main class="overflow-hidden h-screen bg-white max-md:pr-5">
    <div class="flex gap-5 h-full max-md:flex-col">
      <section class="flex flex-col w-6/12 h-full max-md:w-full">
        <div class="flex gap-2.5 items-center py-24 pr-2 pl-12 w-full h-full grow bg-cyan-950 max-md:pl-5 max-md:py-10">
          <div class="flex flex-col self-stretch my-auto min-w-[240px] w-[534px]">
            <Logo />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2c87d36d522646afc65e2334ae141b78ca66fc63c07d8edf349286480639e46?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="" class="object-contain mt-48 w-full aspect-[1.34] max-md:mt-10" />
          </div>
        </div>
      </section>
      <section class="flex flex-col ml-5 w-6/12 h-full max-md:w-full max-md:ml-0">
        <div class="flex flex-col justify-center items-center w-full h-full bg-white">
          <nav class="flex gap-10 justify-center w-full text-4xl max-md:flex-col">
            <div class="flex flex-col justify-center items-center text-black">
              <a href="/signIn">
              <div>Sign in</div>
            </a>
              <div class="flex mt-3 bg-lime-800 h-1.5 w-[179px] rounded-[30px]" />
            </div>
            <div class="flex flex-col items-center text-neutral-400">
              <a href="/signUp">
              <div>Sign up</div>
            </a>
              <div class="flex mt-3 h-1.5 w-[179px] rounded-[30px]" />
            </div>
          </nav>
          <SignInForm />
        </div>
      </section>
    </div>
  </main>
  
  <style>
    :global(builder-component) {
      max-width: none !important;
    }
  
    /* Fix layout for mobile */
    @media (max-width: 768px) {
      main {
        padding-right: 0;
      }
  
      section {
        margin-left: 0 !important;
      }
  
      nav {
        flex-direction: column;
      }
    }
  </style>
  