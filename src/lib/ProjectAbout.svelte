<script>
  export let project;
</script>

<article class="flex flex-col mb-10 w-full">
    <h2 class="text-2xl font-semibold leading-none text-black max-md:max-w-full">About Project</h2>
    <p class="mt-3 text-xl leading-7 text-neutral-700 max-md:max-w-full">
      {project.details || 'Project bio'}
    </p>
  </article>
  