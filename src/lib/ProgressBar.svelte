<script>
  export let progress;
  export let total;

  $: percentage = (progress / total) * 100;
</script>

<div class="flex flex-col mt-2 w-full rounded-lg">
  <div
    class="flex flex-col justify-center items-start py-px bg-lime-100 rounded-lg max-md:pr-5"
  >
    <div
      class="flex shrink-0 bg-lime-300 rounded-lg h-[11px]"
      style="width: {percentage}%"
      aria-valuenow={percentage}
      aria-valuemin="0"
      aria-valuemax="100"
      role="progressbar"
    />
  </div>
</div>
