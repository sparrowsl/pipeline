 <script>
  import Contributors from '../../../lib/Contributors.svelte';
  import Nav from '../../../lib/Nav.svelte';
  import ProfileInfo from '../../../lib/ProfileInfo.svelte';
  import Footer from '../../../lib/Footer.svelte';
  import ProjectNav from '../../../lib/ProjectNav.svelte';
  import ProjectAbout from '../../../lib/ProjectAbout.svelte';
  import Card from '../../../lib/Card.svelte';
  import ProjectMembers from '../../../lib/ProjectMembers.svelte';
  import DpgStatus from '../../../lib/dpgStatus.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Updates from '../../../lib/Updates.svelte';
  import UpdateDetail from '../../../lib/UpdateDetail.svelte';
  import Resources from '../../../lib/Resources.svelte';
  
  let id;
    $: id = $page.params.id;

  let project = {};
  let loading = true;
  let error = null;

  let imageUrl = 'https://images.unsplash.com/photo-1471771450139-6bfdb4b2609a?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


  let currentUser = { id: 'user123' };
  let isFollowing = false;
  
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

    function toggleFollow() {
    isFollowing = !isFollowing;
  }
  
    onMount(() => {
      getSingleProject();
    })
    
    let showUpdatePopup = false;
    let updateTitle = '';
    let updateBody = '';


    function openUpdatePopup() {
    showUpdatePopup = true;
  }

  function closeUpdatePopup() {
    showUpdatePopup = false;
    updateTitle = '';
    updateBody = '';
  }

  async function submitUpdate() {
    try {
      const response = await fetch('/api/projects/addUpdate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId: project.id,
          title: updateTitle,
          body: updateBody,
        }),
      });
      if (!response.ok) throw new Error('Failed to add update');
      closeUpdatePopup();
      alert('Update added successfully');
    } catch (e) {
      alert(e.message);
    }
  }

  let activeNavItem = 'projectDetails';
  let showUpdateDetail = false; 


  const navItems = [
    { id: 'projectDetails', label: 'About', width: '70px' },
    { id: 'team', label: 'Team', width: '65px' },
    { id: 'updates', label: 'Updates', width: '95px' },
    { id: 'contributors', label: 'Contributors', width: '150px' },
  ];

  function handleNavChange(event) {
    activeNavItem = event.detail;
    showUpdateDetail = false;
  }

  function handleShowDetail() {
    showUpdateDetail = true;
  }

  function handleGoBack() {
    showUpdateDetail = false;
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


<div class="bg-white">
  <Nav />

  <div class="flex items-start max-w-[1500px] mx-auto px-4">

    <div class="flex flex-col w-full max-w-[40%] pr-4 sticky top-0 ">
      <section class="flex relative flex-col mt-6 w-full mb-[64px]">
        <!-- svelte-ignore a11y-no-redundant-roles -->
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={imageUrl}
          class="flex z-0 w-full bg-stone-300 h-[250px] rounded-[24px] max-md:max-w-full"
          role="img"
          aria-label="Project hero image"
          alt="Project image"
        />
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          class="absolute z-10 w-[120px] h-[120px] rounded-full outline outline-4 outline-white"
          style="top: 97%; left: 50px; transform: translateY(-50%);"
          src="https://via.placeholder.com/211x211"
          alt="Project overlay image"
        />
      </section>

      <section class="flex flex-col w-full mt-3">
        <div class="flex justify-between">
          <h1 class="text-3xl font-semibold text-black max-md:text-2xl">
            {project.title || 'Project Title'}
          </h1>
          <div class="flex items-center gap-1 mt-2 text-base text-neutral-600">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/edd6d143a10aa89a67f0101c84563e276eb2ea6bc943000847a62b3bcaeb9863?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" alt="Date icon" class="object-contain w-[24px] h-[24px]" />
            <time datetime="2024-10">Created: October 2024</time>
          </div>
        </div>
        <p class="mt-3 text-xl font-light leading-8 text-black">
          {project.bio || 'Project bio'}
        </p>
      </section>

      <section class="flex flex-wrap items-center gap-3 mt-2">
        <div class="flex flex-wrap gap-2 text-lg text-lime-800">
          {#if project.tags && project.tags.length > 0}
            {#each project.tags as tag}
              <span class="px-2 py-0.5 text-base border-2 rounded-md border-[#0b383c] max-md:px-3">
                {tag}
              </span>
            {/each}
          {/if}
        </div>
      </section>

      <div class="flex items-center gap-3 mt-6">
        {#if currentUser.id === project.creatorId}
        <a href="/edit-project" class="w-full py-4 text-base font-semibold text-center text-white bg-[#0b383c] rounded-full">
          <button>EDIT PROJECT</button>
        </a>
        <button
          on:click={openUpdatePopup}
          class="w-full py-4 text-base font-semibold text-center text-black rounded-full bg-lime-300">
          ADD UPDATE
        </button>
        {:else}
          <a href="/contribute" class="bg-[#0b383c] text-[#e9f5d3] text-center text-base font-semibold py-4 rounded-full w-[50%]">
            <button>CONTRIBUTE</button>
          </a>
          <button
          on:click={toggleFollow}
          class="border-2 text-center text-base font-semibold py-4 rounded-full w-[50%]"
          class:bg-[#e9f5d3]={isFollowing} 
          class:text-black={isFollowing} 
        >
          {isFollowing ? 'UNFOLLOW' : 'FOLLOW'}
        </button>
        
        {/if}
      </div>

  
      {#if showUpdatePopup}
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="relative bg-white p-8 rounded-lg shadow-lg w-[400px] max-w-full">
      <!-- Close Button -->
      <button
        on:click={closeUpdatePopup}
        class="absolute text-2xl font-bold text-gray-500 top-2 right-2 hover:text-gray-700"
        style="z-index: 1000;"
      >
        &times;
      </button>

      <h2 class="mb-4 text-xl font-bold">Add Update</h2>
      <label class="block mb-2 text-sm font-medium text-gray-700">
        Title
        <input
          type="text"
          bind:value={updateTitle}
          class="w-full p-2 mt-1 border rounded-lg"
        />
      </label>
      <label class="block mb-4 text-sm font-medium text-gray-700">
        Body
        <textarea
          bind:value={updateBody}
          rows="4"
          class="w-full p-2 mt-1 border rounded-lg resize-none"
        ></textarea>
      </label>
      <button
        on:click={submitUpdate}
        class="w-full py-2 text-black rounded-lg bg-lime-300"
      >
        Submit Update
      </button>
    </div>
  </div>
{/if}


      
      <section class="flex flex-wrap gap-6 justify-between items-center p-6 mt-8 w-full bg-lime-300 rounded-[20px] text-teal-950 max-md:mt-6">
        <div class="flex flex-col items-center w-[120px]">
          <div class="text-5xl font-semibold max-md:text-3xl">6</div>
          <div class="text-sm">Contributors</div>
        </div>
        <div class="w-px h-[100px] bg-neutral-400"></div>
        <div class="flex flex-col items-center w-[120px]">
          <div class="text-5xl font-semibold max-md:text-3xl">
            5<span class="text-3xl">/</span><span class="text-3xl text-teal-800">9</span>
          </div>
          <div class="text-sm">DPG Status</div>
        </div>
        <div class="w-px h-[100px] bg-neutral-400"></div>
        <div class="flex flex-col items-center w-[120px]">
          <div class="text-5xl font-semibold max-md:text-3xl">${project.funding_goal}</div>
          <div class="text-sm">raised of ${project.current_funding || 0}</div>
        </div>
      </section>

      <DpgStatus />
    </div>


    <div class="flex flex-col w-[80%] max-w-[60%] bg-white pl-4 overflow-y-auto">
      <main class="flex flex-col items-start px-4 py-8 bg-white rounded-[20px] max-md:px-4 max-md:mt-6">
        <ProjectNav
          class="flex items-start w-full overflow-x-auto text-sm flex-nowrap whitespace-nowrap"
          {navItems}
          bind:activeItem={activeNavItem}
          on:navChange={handleNavChange}
        />
    
        <section class="flex flex-col items-center w-full max-w-full mt-8 overflow-hidden">
          {#if activeNavItem === 'projectDetails'}
            <ProjectAbout {project} />
        
          {:else if activeNavItem === 'team'}
            <ProjectMembers />
        
          {:else if activeNavItem === 'updates'}
            {#if showUpdateDetail}
              <UpdateDetail on:goBack={handleGoBack} /> 
            {:else}
              <Updates on:showDetail={handleShowDetail} /> 
            {/if}
        
          {:else if activeNavItem === 'contributors'}
            <Contributors />
            <div class="inline-flex items-center self-stretch justify-start gap-1">
              <div class="text-center text-black text-[32px] font-normal font-['Roboto'] leading-loose">
                <slot name="header">Resources</slot>
              </div>
            </div>
            <Resources
            username="@username392"
            title="UX Case Study for an Internship App in Sierra Leone"
            description="A brief summary of what the resource is about."
            likes={187}
            comments={64}
          >
            <span slot="header">My Resources</span>
            <img slot="icon" src="icon.png" alt="Resource icon" />
            <img slot="profile-icon" src="profile-icon.png" alt="User" />
          </Resources>

          <Resources
          username="@username392"
          title="UX Case Study for an Internship App in Sierra Leone"
          description="A brief summary of what the resource is about."
          likes={187}
          comments={64}
        >
          <span slot="header">My Resources</span>
          <img slot="icon" src="icon.png" alt="Resource icon" />
          <img slot="profile-icon" src="profile-icon.png" alt="User" />
        </Resources>
        
          {/if}
        </section>
        
      </main>
      
      <div class="flex flex-col w-full px-4 mt-6">
        <h2 class="text-2xl font-semibold leading-none text-black">Similar Projects</h2>
      </div>
      <div class="grid w-full grid-cols-1 gap-4 px-4 pt-4 pb-8 md:grid-cols-2 lg:grid-cols-3">

      </div>
    </div>
  </div>
</div>

<Footer />
