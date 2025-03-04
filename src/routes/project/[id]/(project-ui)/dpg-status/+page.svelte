<script>
  import Icon from '@iconify/svelte';

  export let data;
</script>

<section class="mx-auto mt-8 flex w-full max-w-[1000px] flex-col text-black">
  <h2 class="mb-6 ml-4 text-2xl font-semibold">
    DPG Registry Status: {data?.project?.dpgCount || 0}/9
  </h2>
  <ul class="grid gap-5 text-lg">
    {#each data.project?.dpgStatuses as dpg}
      <li class="flex items-center gap-3 rounded-2xl border-2 border-stone-300 p-4">
        <Icon icon="tabler:checkbox" class="text-2xl" />
        <span>{dpg.name}</span>
      </li>
    {/each}
  </ul>
</section>
