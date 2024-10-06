<script>
    import Header from '../../../lib/Header.svelte';
    import ProfileInfo from '../../../lib/ProfileInfo.svelte';

    import Footer from '../../../lib/Footer.svelte';

    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import SubNav from '../../../lib/SubNav.svelte';
  
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
    export let data;
    </script>
    
    <div class="flex overflow-hidden flex-col items-center bg-white">
      <Header {data}/>
      <ProfileInfo />

     
        <div class="w-full max-w-[1156px] mt-20">
          <SubNav {navSections} bind:currentSection on:navigate={handleNavigation} />
    
        </div>



    </div>

    <Footer />