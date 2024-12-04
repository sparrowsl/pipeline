<script>
  export let project;
</script>

<article class="mb-10 flex w-full flex-col">
  <div class="flex justify-between">
    <h2 class="text-2xl font-semibold leading-none text-black max-md:max-w-full">About Project</h2>
    <p>Last modified: 1 month ago</p>
  </div>
  <p class="mt-3 text-base leading-7 text-neutral-700 max-md:max-w-full">
    {project.details || 'Project bio'}
  </p>
</article>
