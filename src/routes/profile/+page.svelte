<script>
    import Nav from '../../lib/Nav.svelte';
    import ProfileInfo from '../../lib/ProfileInfo.svelte';
    import ProjectSection from '../../lib/ProjectSection.svelte';
    import Footer from '../../lib/Footer.svelte';
  import { onMount } from 'svelte';

    let userProjects = [];
    let loading = true;
    let error = null;

    async function fetchMyProjects() {
      try {
        const response = await fetch('/api/projects/myProjects', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();

        userProjects = data.projects;


      } catch (error) {
        error = e.message;
        alert(error);
      }finally{
        loading = false;
      }
    }

    onMount(() => {
      fetchMyProjects();
    });


    </script>
    
    <div class="flex flex-col items-center overflow-hidden bg-white">
      <Nav />
      <ProfileInfo />
      {#if loading}
      <p>Loading projects...</p>
      {:else if error}
        <p>Error: {error}</p>
      {:else}
      <ProjectSection projects = {userProjects} />
      {/if}

    </div>

    <Footer /> 

<!-- <script>
  import Nav from '../../lib/Nav.svelte';
  import ProfileInfo from '../../lib/ProfileInfo.svelte';
  import ProjectSection from '../../lib/ProjectSection.svelte';
  import Footer from '../../lib/Footer.svelte';
  import SubNav from '../../lib/SubNav.svelte';
  import { onMount } from 'svelte';

  let userProjects = [];
  let loading = true;
  let error = null;
  let currentSection = 'created';

  let navSections = [
    { id: 'created', label: 'Projects created' },
    { id: 'contributed', label: 'Projects contributed' },
    { id: 'bookmarks', label: 'Bookmarks' },
    { id: 'notifications', label: 'Notifications' }
  ];

  function handleNavigation(event) {
    currentSection = event.detail.id;
  }

  async function fetchMyProjects() {
    try {
      const response = await fetch('/api/projects/myProjects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      userProjects = data.projects;

    } catch (e) {
      error = e.message;
      alert(error);
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    fetchMyProjects();
  });
</script>

<div class="flex flex-col items-center overflow-hidden bg-white">
  <Nav />
  <ProfileInfo />
  
  <section class="flex flex-col items-center p-7 mt-20 bg-white max-w-[1235px] mx-auto max-md:px-5 max-md:mt-10 w-full">
      <div class="w-full max-w-[1156px]">
          <SubNav {navSections} {currentSection} on:navigate={handleNavigation} />
          
          {#if loading}
              <p class="mt-8 text-center">Loading projects...</p>
          {:else if error}
              <p class="mt-8 text-center text-red-500">Error: {error}</p>
          {:else}
              <div class="w-full">
                  {#if currentSection === 'created'}
                  {#if loading}
                  <p>Loading projects...</p>
                  {:else if error}
                    <p>Error: {error}</p>
                  {:else}
                  <ProjectSection projects = {userProjects} />
                  {/if}
                  {:else if currentSection === 'contributed'}
                  <ProjectSection projects = {userProjects} />
                  {:else if currentSection === 'bookmarks'}
                  <ProjectSection projects = {userProjects} />
                  {:else if currentSection === 'notifications'}
                  <ProjectSection projects = {userProjects} />s
                  {/if}
              </div>
          {/if}
      </div>
  </section>
</div>

<Footer /> -->


