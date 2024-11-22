<script>
  import ProfileInfo from "../../lib/ProfileInfo.svelte";
  import ProjectSection from "../../lib/ProjectSection.svelte";
  import { onMount } from "svelte";

  let userProjects = [];
  let loading = true;
  let error = null;

  async function fetchMyProjects() {
    try {
      const response = await fetch("/api/projects/myProjects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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

<div class="flex flex-col md:flex-row w-[90%] mx-auto space-y-4 md:space-y-0 md:space-x-4 mt-[-25px]">

  <div class="flex-none w-full md:w-1/3 md:sticky md:top-4 h-max">
    <ProfileInfo />
  </div>

  <div class="flex-1">
    {#if loading}
      <p>Loading projects...</p>
    {:else if error}
      <p>Error: {error}</p>
    {:else}
      <ProjectSection projects={userProjects} />
    {/if}
  </div>
</div>

