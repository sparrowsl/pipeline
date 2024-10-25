<script>
  import Contributors from '../../../lib/Contributors.svelte';
  import Nav from '../../../lib/Nav.svelte';
  import ProfileInfo from '../../../lib/ProfileInfo.svelte';
  import Footer from '../../../lib/Footer.svelte';
  import UserNav from '../../../lib/UserNav.svelte';
  import ProjectAbout from '../../../lib/ProjectAbout.svelte';
  import Card from '../../../lib/Card.svelte';
  import ProjectMembers from '../../../lib/ProjectMembers.svelte';
  import DpgStatus from '../../../lib/dpgStatus.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let id;
    $: id = $page.params.id;

  let project = {};
  let loading = true;
  let error = null;

  let imageUrl = 'https://images.unsplash.com/photo-1471771450139-6bfdb4b2609a?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  async function getSingleProject() {
    try {
      const response = await fetch(`/api/projects/singleProject/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();

        project = data.project;

      
    } catch (error) {
        error = e.message;
        alert(error);
      }finally{
        loading = false;
      }
    }
  
    onMount(() => {
      getSingleProject();
    })



  let activeNavItem = 'projectDetails';

  const navItems = [
    { id: 'projectDetails', label: 'Project details', width: '231px' },
    { id: 'team', label: 'Team', width: '65px' },
    { id: 'dpgStatus', label: 'DPG Status', width: '137px' },
    { id: 'socials', label: 'Socials', width: '85px' },
    { id: 'comments', label: 'Comments', width: '130px' },
    { id: 'contributors', label: 'Contributors', width: '150px' },
  ];

  function handleNavChange(event) {
    activeNavItem = event.detail;
  }
  
  let ProjectBannerImage = null;
  let ProjectProfileImage = null;

  function handleBannerUpload(event) {
    const file = event.target.files[0];
    if (file) {
      ProjectBannerImage = URL.createObjectURL(file);
    }
  }

  function handleProfileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      ProjectProfileImage = URL.createObjectURL(file);
    }
  }
</script>

<div class="flex flex-col items-center overflow-hidden bg-white">
  <Nav />
  <div class="w-full max-w-[1300px] mx-auto px-4">
    <section class="flex relative flex-col mt-8 w-full max-w-[1300px] max-md:mt-10 max-md:max-w-full mb-[160px] ">
      <img src={imageUrl} class="flex z-0 gap-2.5 w-full bg-stone-300 h-[500px] rounded-[48px] max-md:max-w-full" role="img" aria-label="Project hero image" alt="Project image"/>
    
    </section>

    <section class="flex flex-col w-full mt-5">
      <div class="flex flex-wrap items-center justify-between w-full gap-10">
        <h1 class="text-6xl font-semibold leading-none text-black max-w-[852px] max-md:max-w-full max-md:text-4xl">
          {project.title || 'Project Title'}
        </h1>
        <div class="flex gap-1.5 items-center text-xl leading-loose text-neutral-600">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/edd6d143a10aa89a67f0101c84563e276eb2ea6bc943000847a62b3bcaeb9863?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Date icon" class="object-contain w-[30px] h-[30px]" />
          <time datetime="2024-10">Date Created: October 2024</time>
        </div>
      </div>
      <p class="mt-5 text-3xl font-light leading-10 text-black">
        {project.bio || 'Project bio'}
      </p>
    </section>

    <section class="flex flex-wrap items-center justify-between w-full gap-10 mt-12">
      <div class="flex flex-wrap items-center self-stretch gap-5 my-auto whitespace-nowrap">
        <h2 class="self-stretch my-auto text-4xl leading-none text-center text-black">
          Tags
        </h2>
        <div class="flex flex-wrap items-center self-stretch gap-4 my-auto text-2xl leading-none text-lime-800">
          {#if project.tags && project.tags.length > 0}
            {#each project.tags as tag}
              <span class="px-9 py-6 border-lime-800 border-solid border-[3px] rounded-[108px] max-md:px-5">
                {tag}
              </span>
            {/each}
          {/if}
        </div>
      </div>
      <div class="flex items-center self-stretch gap-5 my-auto">
        <a href="/">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/25d20ce21b5381fa4bb91daca604ede459a95788c00e5a42a9afd7b391c4745c?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Social media icon" class="w-[42px] h-[42px]" />
        </a>
        <a href="/">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5c13f9e834da63d824b400556fe5cd8597d00a77e173f8a4d80ba123f28636d?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Social media icon" class="w-[43px] h-[42px]" />
        </a>
        <a href="/">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d6130582fc43dd58473c8063281b982d5f2b437ad96a4b4fdba1cf2f2bceecf?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Social media icon" class="w-[42px] h-[42px]" />
        </a>
        <a href="/">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b1c23505fa8986b0fd138059c9fcc957d92b31ef2b40131c6d548918eead196?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Social media icon" class="w-[43px] h-[42px]" />
        </a>
        <a href="/">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d6cd595147180490183cbd33a6e0029edfc896a08354d1b7fe5e82e3cd7c05b?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Social media icon" class="w-[43px] h-[42px]" />
        </a>
      </div>
    </section>
    
    <section class="flex flex-wrap gap-10 justify-between items-center px-16 py-11 mt-16 w-full bg-lime-300 min-h-[258px] rounded-[33px] text-teal-950 max-md:px-5 max-md:mt-10">
      <div class="flex flex-col self-stretch my-auto leading-none text-center whitespace-nowrap w-[201px]">
        <div class="font-semibold text-7xl max-md:text-4xl">6</div>
        <div class="mt-2 text-2xl">Contributors</div>
      </div>
      <div class="shrink-0 self-stretch my-auto w-0 border border-solid border-neutral-400 h-[174px]" role="separator"></div>
      <div class="flex flex-col self-stretch my-auto leading-none text-center w-[201px]">
        <div class="font-semibold text-7xl max-md:text-4xl">
          5<span class="text-5xl">/</span><span class="text-5xl text-teal-800">9</span>
        </div>
        <div class="mt-2 text-2xl">DPG Status</div>
      </div>
      <div class="shrink-0 self-stretch my-auto w-0 border border-solid border-neutral-400 h-[174px]" role="separator"></div>
      <div class="flex flex-col self-stretch my-auto w-[201px]">
        <div class="w-full font-semibold leading-none text-center text-7xl whitespace-nowrap max-md:text-4xl">
          ${project.funding_goal}
        </div>
        <div class="flex flex-col items-center justify-center w-full mt-5 font-medium">
          <div class="flex gap-3 items-center max-w-full w-[194px]">
            <div class="self-stretch my-auto text-xl leading-tight">${project.funding_goal}</div>
            <div class="self-stretch my-auto text-xs leading-6 text-teal-800">
              Raised of
            </div>
            <div class="self-stretch my-auto text-base">${project.current_funding || 0}</div>
          </div>
        </div>
      </div>
    </section>

    <main class="flex flex-col justify-center items-center px-10 py-12 mt-11 bg-white rounded-[37px] max-md:px-5 max-md:mt-10">
      <UserNav {navItems} bind:activeItem={activeNavItem} on:navChange={handleNavChange} />
      
      <section class="flex overflow-hidden flex-col items-center mt-16 max-w-full w-[1085px] max-md:mt-10">
        {#if activeNavItem === 'projectDetails'}
          <ProjectAbout {project} />
        {:else if activeNavItem === 'team'}
          <ProjectMembers />
        {:else if activeNavItem === 'dpgStatus'}
          <DpgStatus />
        {:else if activeNavItem === 'socials'}
          <!-- Socials component -->
        {:else if activeNavItem === 'comments'}
          <!-- Comments component -->
        {:else if activeNavItem === 'contributors'}
          <Contributors />
        {/if}
      </section>
    </main>
  </div>

  <div class="flex flex-col mt-8 w-full max-w-[1300px] mx-auto px-4">
    <h2 class='text-3xl font-semibold leading-none text-black'>Similar Projects</h2>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1300px] mx-auto px-4 pt-4 pb-8">
  </div>


</div>
<Footer />