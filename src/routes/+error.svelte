<script>
  import { page } from '$app/stores';
</script>

<!-- if the status code is "404" -->
{#if $page.status === 404}
<div class="flex flex-col items-center justify-center mt-16">
 <img src="/404.png" alt="404" class="object-cover h-[430px]" />
</div>
{/if}
