<script>
	import { projectStore } from './../stores/projectStore.js';
  import {get } from 'svelte/store';
  import { createEventDispatcher } from 'svelte';
  import SubNav from '../lib/SubNav.svelte';
  import { goto } from '$app/navigation'; 
  

  let title = get(projectStore).title;
  let bio = get(projectStore).bio;
  let country = get(projectStore).country;
  let details = get(projectStore).details;

  let selectedTags = [...get(projectStore).tags];

  function updateStore() {
    projectStore.update(data => {
      data.title = title;
      data.bio = bio;
      data.tags = tags;
      data.country = country;
      data.details = details;
      return data
    })
  }
 

  //let selectedTags = [];
  let isOpen = false;
  let inputValue = '';

  const dispatch = createEventDispatcher();

  const availableTags = [
    'Technology', 'Environment', 'Education', 'Healthcare', 'Social Impact',
    'Art & Culture', 'Community Development', 'Innovation'
  ];

  let navSections = [
    { id: 'basics', label: 'Basics', href: '/createProject' },
    { id: 'team', label: 'Team', href: '/createProject/team' },
    { id: 'links', label: 'Links', href: '/createProject/links' },
    { id: 'funding', label: 'Funding', href: '/createProject/funding' }
  ];

  let currentSection = 'basics';

  function handleNavigation(event) {
  const { href, id } = event.detail;
  currentSection = id;
  goto(href);
}

  function toggleDropdown(event) {
    event.preventDefault();
    isOpen = !isOpen;
  }

  function addTag(tag) {
    if (!selectedTags.includes(tag)) {
      selectedTags = [...selectedTags, tag];
      dispatch('change', selectedTags);
    }
    inputValue = '';
    isOpen = false;
  }

  function removeTag(tag) {
    selectedTags = selectedTags.filter(t => t !== tag);
    dispatch('change', selectedTags);
  }

  $: filteredTags = availableTags.filter(tag => 
    tag.toLowerCase().includes(inputValue.toLowerCase()) && !selectedTags.includes(tag)
  );


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

<section class="flex flex-col self-center p-10 mt-5 w-full bg-white max-w-[1235px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
 
  
  {#if currentSection === 'basics'}
    <form class="flex flex-col w-full mt-14 max-md:mt-10">
      <div class="flex flex-col w-full max-md:max-w-full">
        <div class="flex flex-col items-start w-full leading-none max-md:max-w-full">
          <div class="flex flex-col max-w-full w-[409px]">
            <h2 class="text-4xl font-semibold text-black">Project Images</h2>
            <p class="mt-2.5 text-xl text-stone-300">Click to change Project's Cover & Profile photo</p>
          </div>
        </div>

        <div class="self-stretch h-[295.61px] relative mb-[141px]">
          <label for="banner-upload" class="cursor-pointer">
            <div class="w-full h-full bg-[#d9d9d9] rounded-[37.69px] flex justify-center items-center overflow-hidden">
              {#if ProjectBannerImage}
                <img src={ProjectBannerImage} alt="Banner" class="object-cover w-full h-full" />
              {:else}
                <div class="text-center">Click to upload banner image</div>
              {/if}
            </div>
          </label>
          <input type="file" id="banner-upload" class="hidden" accept="image/*" on:change={handleBannerUpload} />
          
          <label for="profile-upload" class="cursor-pointer">
            <div class="absolute bottom-[-92.6px] left-[46.69px] w-[185.19px] h-[185.19px] bg-[#d9d9d9] rounded-full border-8 border-white flex justify-center items-center overflow-hidden">
              {#if ProjectProfileImage}
                <img src=ProjectProfileImage} alt="Profile" class="object-cover w-full h-full rounded-full" />
              {:else}
                <div class="text-sm text-center">Click to upload profile picture</div>
              {/if}
            </div>
          </label>
          <input type="file" id="profile-upload" class="hidden" accept="image/*" on:change={handleProfileUpload} />
        </div>
      </div>
  
      <div class="flex flex-col justify-center w-full mt-44 max-md:mt-10 max-md:max-w-full">
        <div class="flex flex-col w-full max-md:max-w-full">
          <label for="projectTitle" class="text-4xl font-semibold leading-none text-black max-md:max-w-full">Project title</label>
          <p class="mt-2.5 text-xl leading-none text-stone-300 max-md:max-w-full">What is the title of your project</p>
          <input type="text" id="projectTitle" bind:value={title} on:change={updateStore} class="flex gap-1.5 w-full border-2 border-lime-800 border-solid min-h-[70px] rounded-[75px] max-md:max-w-full mt-2.5 px-4" aria-required="true" />
        </div>
  
        <div class="flex flex-col w-full mt-9 max-md:max-w-full">
          <label for="projectBio" class="text-4xl font-semibold leading-none text-black max-md:max-w-full">Project bio</label>
          <p class="mt-2.5 text-xl leading-none text-stone-300 max-md:max-w-full">Give a short description of your project</p>
          <textarea id="projectBio" bind:value={bio} on:change={updateStore} class="flex gap-1.5 w-full border-2 border-lime-800 border-solid min-h-[150px] rounded-[31px] max-md:max-w-full mt-2.5 p-4" aria-required="true"></textarea>
        </div>
        
        <div class="flex flex-col w-full mt-9 max-md:max-w-full">
          <label for="projectTags" class="text-4xl font-semibold leading-none text-black max-md:max-w-full">Project tags</label>
          <p class="mt-2.5 text-xl leading-none text-stone-300 max-md:max-w-full">Select the keywords that best describe your project.</p>
          
          <div class="relative mt-2.5 w-full">
            <div class="flex flex-wrap items-center py-3 px-6 w-full border-2 border-lime-800 border-solid min-h-[70px] rounded-[75px] bg-white">
              <div class="flex flex-wrap items-center flex-grow gap-2 pr-8">
                {#each selectedTags as tag}
                  <span class="flex items-center px-3 py-1 rounded-full text-lime-800 bg-lime-200">
                    {tag}
                    <button on:click={() => removeTag(tag)} class="ml-2 text-lime-800 hover:text-lime-900">×</button>
                  </span>
                {/each}
                <input
                  type="text"
                  bind:value={inputValue}
                  on:focus={toggleDropdown}
                  placeholder="Type to add tags"
                  class="flex-grow bg-transparent border-none outline-none"
                />
              </div>
              <button 
                on:click={toggleDropdown} 
                class="absolute transform -translate-y-1/2 right-4 top-1/2 focus:outline-none"
                aria-label="Toggle tag dropdown"
              >
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5884aaa40d84100252b9385acefd99519ea142223ddf8cccbdc39ac10099df1f?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8" 
                  alt="Dropdown arrow" 
                  class="w-5 h-5 object-contain transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
                />
              </button>
            </div>
            
            {#if isOpen}
              <div class="absolute z-10 w-full mt-1 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg max-h-60">
                {#each filteredTags as tag}
                  <button
                    on:click={() => addTag(tag)}
                    class="block w-full px-4 py-2 text-left hover:bg-lime-100 focus:bg-lime-200 focus:outline-none"
                  >
                    {tag}
                  </button>
                {/each}
              </div>
            {/if}
          </div>
        </div>
        
        <div class="flex flex-col w-full mt-9 max-md:max-w-full">
          <label for="projectCountry" class="text-4xl font-semibold leading-none text-black max-md:max-w-full">Country</label>
          <p class="mt-2.5 text-xl leading-none text-stone-300 max-md:max-w-full">Choose the location where you are running the project.</p>
          <div class="flex flex-col mt-2.5 w-full max-md:max-w-full">
            <div class="flex gap-1.5 items-center py-6 pr-20 pl-6 w-full border-2 border-lime-800 border-solid min-h-[70px] rounded-[75px] max-md:px-5 max-md:max-w-full">
              <select id="projectCountry" bind:value={country} on:change={updateStore} class="flex-grow bg-transparent border-none outline-none" aria-label="Select project country">
                <option value="">Select a country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="India">India</option>
              </select>
            </div>
          </div>
        </div>


  
        <div class="flex flex-col w-full mt-9 max-md:max-w-full">
          <label for="projectDetails" class="text-4xl font-semibold leading-none text-black max-md:max-w-full">Project details</label>
          <p class="mt-2.5 text-xl leading-5 text-stone-300 max-md:max-w-full">Tell potential contributors more about your project. Provide details that will motivate people to contribute. A good pitch is compelling, informative, and easy to digest.</p>
          <textarea id="projectDetails" bind:value={details} on:change={updateStore} class="flex gap-1.5 w-full border-2 border-lime-800 border-solid min-h-[581px] rounded-[31px] max-md:max-w-full mt-2.5 p-4" aria-required="true"></textarea>
        </div>

       
  
      </div>
    </form>
  {:else if currentSection === 'team'}
    <p>Team Section (To be implemented)</p>
  {:else if currentSection === 'links'}
    <p>Links Section (To be implemented)</p>
  {:else if currentSection === 'funding'}
    <p>Funding Section (To be implemented)</p>
  {/if}
</section>