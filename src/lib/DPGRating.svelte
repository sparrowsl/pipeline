<script>
  import Icon from '@iconify/svelte';

  export let rating;
</script>

<div class="flex items-center gap-2 text-white">
  <Icon icon="tabler:checkbox" class="text-lg text-white/80" />
  <span class="text-sm font-bold text-white">{rating || 0}</span>
</div>
