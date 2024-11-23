<script>
  import ProfileInfo from '../../lib/ProfileInfo.svelte';
  import ProjectSection from '../../lib/ProjectSection.svelte';
  import { onMount } from 'svelte';

  let userProjects = [];
  let loading = true;
  let error = null;

  async function fetchMyProjects() {
    try {
      const response = await fetch('/api/projects/myProjects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      userProjects = data.projects;
    } catch (error) {
      console.log(error);
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

<!-- new code -->
<!-- container below to center the inner container -->
<div class="flex w-full items-start justify-center">
  <div class="w-[90%] mx-auto grid justify-center md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-4">
    
    <div class="px-5 md:px-0 md:w-1/3  md:sticky h-max">
      <ProfileInfo />
    </div>

 
    <div class="md:w-2/3">
      {#if loading}
        <p>Loading projects...</p>
      {:else if error}
        <p>Error: {error}</p>
      {:else}
        <ProjectSection projects={userProjects} />
      {/if}
    </div>
  </div>
</div>
