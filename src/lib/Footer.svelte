<script>
  import Icon from '@iconify/svelte';
  import Logo from './Logo.svelte';
  const currentYear = new Date().getFullYear();
</script>

<footer
  class="mt-16 border-t border-dashboard-gray-700 bg-dashboard-gray-900 py-12 text-gray-300 sm:py-16 lg:py-20"
>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col items-center">
      <Logo />
      <nav class="mt-8 sm:mt-12 lg:mt-14">
        <ul
          class="flex flex-wrap justify-center gap-4 text-base sm:gap-6 sm:text-lg lg:gap-10 lg:text-xl"
        >
          <li>
            <a
              href="/explore"
              class="transition-colors duration-300 hover:text-dashboard-yellow-400"
            >
              Explore projects
            </a>
          </li>
          <li>
            <a
              href="/resources/pipeline"
              class="transition-colors duration-300 hover:text-dashboard-yellow-400"
            >
              Learn about Pipeline
            </a>
          </li>
          <li>
            <a
              href="/resources/digital-public-good"
              class="transition-colors duration-300 hover:text-dashboard-yellow-400"
              >Learn about DPGs</a
            >
          </li>
        </ul>
      </nav>

      <Icon
        icon="prime:twitter"
        class="mt-8 block cursor-pointer text-4xl text-gray-300 transition-colors hover:text-dashboard-yellow-400"
      />
    </div>

    <hr class="my-8 border-dashboard-gray-700 sm:my-10" />

    <div
      class="flex flex-col items-center justify-between text-sm max-md:flex-col sm:flex-row sm:text-base"
    >
      <p class="mb-4 text-gray-400 sm:mb-0">
        &copy; {currentYear} Pipeline Copyright and rights reserved
      </p>
      <div class="flex items-center">
        <a
          href="/terms"
          class="text-gray-400 transition-colors duration-300 hover:text-dashboard-yellow-400"
          >Terms and Conditions</a
        >
        <span class="mx-2 text-gray-600">·</span>
        <a
          href="/privacy"
          class="text-gray-400 transition-colors duration-300 hover:text-dashboard-yellow-400"
          >Privacy Policy</a
        >
      </div>
    </div>
  </div>
</footer>
