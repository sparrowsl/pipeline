<!-- <script>
  import SignInForm from '../../lib/SignInForm.svelte';
  import Logo from '../../lib/Logo.svelte';

  let loading = false;
  let email = '';
  let password = '';

  const handleSignIn = async (event) => {
    const { email, password } = event.detail;

    try {
      console.log({ email, password });
      loading = true;

      const response = await fetch('/api/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (response.ok) {
        window.location.href = result.redirectTo || '/explore';
      } else {
        alert(`Sign-in error: ${result.error}`);
      }

    } catch (error) {
      alert(`Sign-in failed: ${error.message}`);
    } finally {
      loading = false;
    }
  };
</script>
  
  <main class="h-screen overflow-hidden bg-white max-md:pr-5">
    <div class="flex h-full gap-5 max-md:flex-col">
      <section class="flex flex-col w-6/12 h-full max-md:w-full">
        <div class="flex gap-2.5 items-center py-24 pr-2 pl-12 w-full h-full grow bg-cyan-950 max-md:pl-5 max-md:py-10">
          <div class="flex flex-col self-stretch my-auto min-w-[240px] w-[534px]">
            <Logo />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2c87d36d522646afc65e2334ae141b78ca66fc63c07d8edf349286480639e46?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="" class="object-contain mt-48 w-full aspect-[1.34] max-md:mt-10" />
          </div>
        </div>
      </section>
      <section class="flex flex-col w-6/12 h-full ml-5 max-md:w-full max-md:ml-0">
        <div class="flex flex-col items-center justify-center w-full h-full bg-white">
          <nav class="flex justify-center w-full gap-10 text-4xl max-md:flex-col">
            <div class="flex flex-col items-center justify-center text-black">
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
          <SignInForm {loading} {email} {password} on:signIn={handleSignIn} />
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
   -->
   <script>
    import SignInForm from '../../lib/SignInForm.svelte';
    import SignUp from '../../lib/SignUp.svelte';
    import Logo from '../../lib/Logo.svelte';
  
    let loading = false;
    let name = '';
    let email = '';
    let password = '';
    let isSignUp = false;
  
    const toggleForm = () => {
      isSignUp = !isSignUp;
    };
  
    const handleSignIn = async (event) => {
      const { email, password } = event.detail;
  
      try {
        console.log({ email, password });
        loading = true;
  
        const response = await fetch('/api/signIn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
  
        const result = await response.json();
  
        if (response.ok) {
          window.location.href = result.redirectTo || '/explore';
        } else {
          alert(`Sign-in error: ${result.error}`);
        }
  
      } catch (error) {
        alert(`Sign-in failed: ${error.message}`);
      } finally {
        loading = false;
      }
    };
  
    const handleSignUp = async (event) => {
      const { name, email, password } = event.detail;
  
      try {
        console.log({ name, email, password });
        loading = true;
  
        const response = await fetch('/api/signUp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        });
  
        const result = await response.json();
  
        if (response.ok) {
          alert('Sign-up successful!');
        } else {
          alert(`Sign-up error: ${result.error}`);
        }
        
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      } finally {
        loading = false;
      }
    };
  </script>
  
  <main class="h-screen overflow-hidden bg-white md:pr-0">
    <div class="flex flex-col h-full gap-5 md:flex-row">
      <section class="w-full h-full md:w-5/12">
        <div class="flex items-center h-full gap-2.5 py-10 pr-2 pl-5 grow bg-cyan-950 md:py-24 md:pl-12">
          <div class="flex flex-col self-stretch w-full my-auto min-w-[240px] max-w-[534px]">
            <Logo />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2c87d36d522646afc65e2334ae141b78ca66fc63c07d8edf349286480639e46?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="" class="object-contain w-full mt-10 aspect-[1.34] md:mt-48" />
          </div>
        </div>
      </section>
      <section class=" h-full pt-[3%] md:w-7/12 md:ml-5">
        <div class="flex flex-col items-center justify-start h-full pt-20 bg-white">
          <nav class="flex justify-center gap-20 mb-8 text-4xl md:gap-60">
            <div class="flex flex-col items-center justify-center h-[72px]">
              <button
                on:click={() => (isSignUp = false)}
                class="text-black transition-colors duration-300 ease-in-out"
                class:text-neutral-400={isSignUp}
              > 
                <div>Sign in</div>
              </button>
              {#if !isSignUp}
                <div class="flex w-[179px] h-1.5 mt-3 bg-lime-800 rounded-[30px]" />
              {/if}
            </div>
            <div class="flex flex-col items-center h-[72px]">
              <button
                on:click={() => (isSignUp = true)}
                class="text-black transition-colors duration-300 ease-in-out"
                class:text-neutral-400={!isSignUp}
              >
                <div>Sign up</div>
              </button>
              {#if isSignUp}
                <div class="flex w-[179px] h-1.5 mt-3 bg-lime-800 rounded-[30px]" />
              {/if}
            </div>
          </nav>
          <div class="flex-grow w-[60%] pt-8 overflow-y-auto">
            {#if isSignUp}
              <SignUp {loading} {name} {email} {password} on:signUp={handleSignUp} />
            {:else}
              <SignInForm {loading} {email} {password} on:signIn={handleSignIn} />
            {/if}
          </div>
        </div>
      </section>
    </div>
  </main>



  