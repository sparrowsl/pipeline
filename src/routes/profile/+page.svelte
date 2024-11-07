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
  <ProfileInfo />
  {#if loading}
    <p>Loading projects...</p>
  {:else if error}
    <p>Error: {error}</p>
  {:else}
    <ProjectSection projects={userProjects} />
  {/if}
</div>
