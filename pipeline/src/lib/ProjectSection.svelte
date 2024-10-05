<script>
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import Card from '../lib/Card.svelte';
    import SubNav from '../lib/SubNav.svelte';
  
    let navSections = [
      { id: 'created', label: 'Projects created', href: '/profile' },
      { id: 'contributed', label: 'Projects contributed', href: '/profile/projects' },
      { id: 'bookmarks', label: 'Bookmarks', href: '/profile/bookmarks' },
      { id: 'notifications', label: 'Notifications', href: '/profile/notifications' }
    ];
  
    $: currentSection = navSections.find(section => section.href === $page.url.pathname)?.id || 'created';
  
    function handleNavigation(event) {
      const { href, id } = event.detail;
      goto(href);
    }
  </script>
  
  <section class="flex flex-col items-center p-7 mt-20 bg-white max-w-[1235px] mx-auto max-md:px-5 max-md:mt-10">
    <div class="w-full max-w-[1156px]">
      <SubNav {navSections} bind:currentSection on:navigate={handleNavigation} />
      
      <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </section>