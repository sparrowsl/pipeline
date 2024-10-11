<script>
    import ProfileNav from '../../../../lib/ProfileNav.svelte';
    import Nav from '../../../../lib/Nav.svelte';
    import Footer from '../../../../lib/Footer.svelte';
    import Interests from '../../../../lib/Interests.svelte';
    
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
  
    let mainNavSections = [
      { id: 'profile', label: 'Profile', href: '/profile/edit', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/00eacd2e9203d40d579eb83c6c31b8c06134308627c218c88c9580bed4d5d7ef' },
      { id: 'links', label: 'Links', href: '/profile/edit/links', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ff10f4c0c448ee5208fc4e0b90f38cc53d69a7eda9bd7dc84eb1e7c779e81c4b' },
      { id: 'interests', label: 'Interests', href: '/profile/edit/interests', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/09ba2f33466a78bf2d1e32dc9330bb0cc72747f64701080ac91f542e8459d18f' },
      { id: 'settings', label: 'Settings', href: '/profile/edit/settings', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2ecfa6fbb29ac713eea63adc3b16821ea9f1a98b868badda74b6497e863f76db' }
    ];
  
    $: currentMainSection = mainNavSections.find(section => section.href === $page.url.pathname)?.id || 'links';
  
    function handleNavigation(event) {
      const { href } = event.detail;
      goto(href);
    }

    let techInterests = [
      "Education",
      "Food & Beverages",
      "Energy / Green tech",
      "Health / Fitness",
      "Tech Startups",
      "Artificial Intelligence & Machine Learning",
      "Robotics",
      "Blockchain & Cryptocurrencies",
      "Cybersecurity",
      "Augmented Reality (AR) & Virtual Reality (VR)"
    ];

    let creativeInterests = [
      "Graphic Design",
      "Photography",
      "Video Production",
      "Music Production",
      "Writing & Storytelling",
      "Digital Art",
      "Fashion Design",
      "Creative Coding",
      "Animation",
      "User Experience (UX) Design"
    ];

    let communityProjects = [
      "Social Impact Initiatives",
      "Environmental Sustainability",
      "Education",
      "Local Development",
      "Health and Wellness",
      "Public Art Projects",
      "Crisis Response",
      "Civic Engagement",
      "Cultural Events"
    ];

    let selectedTechInterests = [];
    let selectedCreativeInterests = [];
    let selectedCommunityProjects = [];
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
  
  <section class="flex flex-col self-center w-full max-w-[1158px] p-10 bg-white gap-8">
    <ProfileNav navSections={mainNavSections} bind:currentSection={currentMainSection} on:navigate={handleNavigation} />
    
    <h1 class="mb-4 text-xl text-black">Select 3 or more to continue</h1>
    
    <div class="interests-container">
      <div class="interests-column">
        <Interests 
          title="Tech & Innovation" 
          interests={techInterests} 
          bind:selectedInterests={selectedTechInterests}
        />
      </div>
      <div class="interests-column">
        <Interests 
          title="Creative Works" 
          interests={creativeInterests} 
          bind:selectedInterests={selectedCreativeInterests}
        />
      </div>
      <div class="interests-column">
        <Interests 
          title="Community Projects" 
          interests={communityProjects} 
          bind:selectedInterests={selectedCommunityProjects}
          layout="grid"
        />
      </div>
    </div>
    <button type="submit" class="self-end mt-8 px-[59.89px] py-8 bg-[#516027] rounded-[127.56px] text-[#ebebeb] text-3xl font-medium font-['Inter'] leading-[32.91px]">
      save & continue
    </button>
  </section>
  
  <Footer />
</main>

<style>
  :global(body) {
    font-family: 'PP Mori', sans-serif;
  }

  .interests-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .interests-column {
    flex: 1 1 calc(50% - 10px);
    min-width: 300px;
  }

  @media (max-width: 768px) {
    .interests-column {
      flex: 1 1 100%;
    }
  }
</style>