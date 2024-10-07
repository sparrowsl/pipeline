<!-- <script>
	import ProfileNav from './../../../lib/ProfileNav.svelte';
    import Nav from '../../../lib/Nav.svelte';
    import ProfileForm from '../../../lib/ProfileForm.svelte';
    import Footer from '../../../lib/Footer.svelte'; // Import the new IconNav component
    import SubNav from '../../../lib/SubNav.svelte';
  
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
  
    let mainNavSections = [
      { id: 'profile', label: 'Profile', href: '/profile', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/00eacd2e9203d40d579eb83c6c31b8c06134308627c218c88c9580bed4d5d7ef' },
      { id: 'links', label: 'Links', href: '/profile/links', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ff10f4c0c448ee5208fc4e0b90f38cc53d69a7eda9bd7dc84eb1e7c779e81c4b' },
      { id: 'interests', label: 'Interests', href: '/profile/interests', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/09ba2f33466a78bf2d1e32dc9330bb0cc72747f64701080ac91f542e8459d18f' },
      { id: 'settings', label: 'Settings', href: '/profile/settings', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2ecfa6fbb29ac713eea63adc3b16821ea9f1a98b868badda74b6497e863f76db' }
    ];

  
    $: currentMainSection = mainNavSections.find(section => section.href === $page.url.pathname)?.id || 'profile';

    function handleNavigation(event) {
      const { href } = event.detail;
      goto(href);
    }
  </script>
  
  <main class="flex overflow-hidden flex-col bg-white">
    <Nav />
    
    <section class="flex flex-wrap gap-5 justify-between self-center mt-32 w-full max-w-[1080px] max-md:mt-10 max-md:max-w-full">
      <h1 class="text-6xl font-semibold leading-none text-black max-md:text-4xl">Username</h1>
      <a href="/" class="flex gap-2.5 justify-center items-center self-start px-6 py-3.5 text-2xl leading-none text-lime-800 bg-lime-200 border-2 border-lime-800 border-solid rounded-[50px] max-md:px-5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/64135a94b56ce48af9a1c4223db4ad995409393478b6a070980d63978b32c01e" alt="" class="object-contain self-stretch my-auto w-6 shrink-0 aspect-square" />
        <span class="self-stretch my-auto">View Profile</span>
      </a>
    </section>
    
    <section class="flex flex-col self-center p-10 mt-7 w-full leading-none text-black bg-white max-w-[1158px] max-md:px-5 max-md:max-w-full">
      <ProfileNav navSections={mainNavSections} bind:currentSection={currentMainSection} on:navigate={handleNavigation} />
      
      
      <ProfileForm />
    </section>
    
    <Footer />
  </main> -->

  <script>
    import ProfileNav from '../../../lib/ProfileNav.svelte';
    import Nav from '../../../lib/Nav.svelte';
    import ProfileForm from '../../../lib/ProfileForm.svelte';
    import Footer from '../../../lib/Footer.svelte';
    
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
  
    let mainNavSections = [
      { id: 'profile', label: 'Profile', href: '/profile/edit', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/00eacd2e9203d40d579eb83c6c31b8c06134308627c218c88c9580bed4d5d7ef' },
      { id: 'links', label: 'Links', href: '/profile/edit/links', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ff10f4c0c448ee5208fc4e0b90f38cc53d69a7eda9bd7dc84eb1e7c779e81c4b' },
      { id: 'interests', label: 'Interests', href: '/profile/edit/interests', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/09ba2f33466a78bf2d1e32dc9330bb0cc72747f64701080ac91f542e8459d18f' },
      { id: 'settings', label: 'Settings', href: '/profile/edit/settings', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2ecfa6fbb29ac713eea63adc3b16821ea9f1a98b868badda74b6497e863f76db' }
    ];
  
    $: currentMainSection = mainNavSections.find(section => section.href === $page.url.pathname)?.id || 'profile';
  
    function handleNavigation(event) {
      const { href } = event.detail;
      goto(href);
    }
  </script>
  
  <main class="flex overflow-hidden flex-col bg-white">
    <Nav />  

    <section class="flex flex-wrap gap-5 justify-between self-center mt-32 w-full max-w-[1080px] max-md:mt-10 max-md:max-w-full">
        <h1 class="text-6xl font-semibold leading-none text-black max-md:text-4xl">Username</h1>
        <a href="/" class="flex gap-2.5 justify-center items-center self-start px-6 py-3.5 text-2xl leading-none text-lime-800 bg-lime-200 border-2 border-lime-800 border-solid rounded-[50px] max-md:px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/64135a94b56ce48af9a1c4223db4ad995409393478b6a070980d63978b32c01e" alt="" class="object-contain self-stretch my-auto w-6 shrink-0 aspect-square" />
          <span class="self-stretch my-auto">View Profile</span>
        </a>
      </section>
    
    <section class="flex flex-col self-center w-full max-w-[1158px] p-10 bg-white gap-10">
      <ProfileNav navSections={mainNavSections} bind:currentSection={currentMainSection} on:navigate={handleNavigation} />
      
      <ProfileForm />
    </section>
    
    <Footer />
  </main>
  
  <style>
    :global(body) {
      font-family: 'PP Mori', sans-serif;
    }
  </style>