<script>
  import { page } from '$app/stores';
</script>

<!-- if the status code is "404" and the error message is "not found" -->
{#if $page.status === 404 && $page.error.message === "Not Found"}
<div class="flex flex-col items-center justify-center mt-16">
  <h1 class="text-9xl font-bold text-gray-800">{$page.status}</h1>
  <p class="text-2xl font-medium text-gray-600 mt-4">Oops! Page not found.</p>
  <a
    href="/explore"
    class="bg-[#d1ea9a] hover:bg-[#e1faac] text-base font-bold py-2 px-4 rounded mt-4">
    Go Home
  </a>
</div>
{/if}

<!-- if the status code is "404" and the error message is "not found" -->
{#if $page.status === 404 && $page.error.message === "Error: 404"}
<div class="flex flex-col items-center justify-center mt-16">
  <h1 class="text-9xl font-bold text-gray-800">{$page.status}</h1>
  <p class="text-2xl font-medium text-gray-600 mt-4">Oops! Something is not loading.</p>
</div>
{/if}
<!-- other error codes implementation below here -->

