<script>
	import Contributors from './../../lib/Contributors.svelte';
    import Nav from '../../lib/Nav.svelte';
    import ProfileInfo from '../../lib/ProfileInfo.svelte';
    import Footer from '../../lib/Footer.svelte';
    import UserNav from '../../lib/UserNav.svelte';
  import ProjectAbout from '../../lib/ProjectAbout.svelte';
  import Card from '../../lib/Card.svelte';
  import ProjectMembers from '../../lib/ProjectMembers.svelte';
  import DpgStatus from '../../lib/dpgStatus.svelte';



  let activeNavItem = 'projectDetails';

  const navItems = [
    { id: 'projectDetails', label: 'Project details', width: '231px' },
    { id: 'team', label: 'Team', width: '65px' },
    { id: 'dpgStatus', label: 'DPG Status', width: '137px' },
    { id: 'socials', label: 'Socials', width: '85px' },
    { id: 'comments', label: 'Comments', width: '130px' },
    { id: 'contributors', label: 'Contributors', width: '150px' },
  ];

  function handleNavChange(event) {
    activeNavItem = event.detail;
    // Add any additional logic for navigation changes
  }
    </script>
    
    <div class="flex overflow-hidden flex-col items-center bg-white">
      <Nav />
      <ProfileInfo />
      
      <section class="flex flex-wrap gap-10 justify-between items-center px-16 py-11 mt-16 w-full bg-lime-300 max-w-[1076px] min-h-[258px] rounded-[33px] text-teal-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div class="flex flex-col self-stretch my-auto leading-none text-center whitespace-nowrap w-[201px]">
          <div class="text-7xl font-semibold max-md:text-4xl">6</div>
          <div class="mt-2 text-2xl">Contributors</div>
        </div>
        <div class="shrink-0 self-stretch my-auto w-0 border border-solid border-neutral-400 h-[174px]" role="separator"></div>
        <div class="flex flex-col self-stretch my-auto leading-none text-center w-[201px]">
          <div class="text-7xl font-semibold max-md:text-4xl">
            5<span class="text-5xl">/</span><span class="text-5xl text-teal-800">9</span>
          </div>
          <div class="mt-2 text-2xl">DPG Status</div>
        </div>
        <div class="shrink-0 self-stretch my-auto w-0 border border-solid border-neutral-400 h-[174px]" role="separator"></div>
        <div class="flex flex-col self-stretch my-auto w-[201px]">
          <div class="w-full text-7xl font-semibold leading-none text-center whitespace-nowrap max-md:text-4xl">
            $50
          </div>
          <div class="flex flex-col justify-center items-center mt-5 w-full font-medium">
            <div class="flex gap-3 items-center max-w-full w-[194px]">
              <div class="self-stretch my-auto text-xl leading-tight">$50</div>
              <div class="self-stretch my-auto text-xs leading-6 text-teal-800">
                Raised of
              </div>
              <div class="self-stretch my-auto text-base">$10,000</div>
            </div>
          </div>
        </div>
      </section>

      <main class="flex flex-col justify-center items-center px-10 py-12 mt-11 bg-white rounded-[37px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <UserNav {navItems} bind:activeItem={activeNavItem} on:navChange={handleNavChange} />
        
        <section class="flex overflow-hidden flex-col items-center mt-16 max-w-full w-[1085px] max-md:mt-10">
          {#if activeNavItem === 'projectDetails'}
            <ProjectAbout />
          {:else if activeNavItem === 'team'}
          <ProjectMembers />
          {:else if activeNavItem === 'dpgStatus'}
          <DpgStatus />
          {:else if activeNavItem === 'socials'}
         
            <!-- Socials component -->
          {:else if activeNavItem === 'comments'}
            <!-- Comments component -->
          {:else if activeNavItem === 'contributors'}
          <Contributors />
            <!-- Contributors component -->
          {/if}
        </section>
      </main>

     
      
      
    </div>

    <div class="flex flex-col mt-8 w-full max-w-[1100px] mx-auto text-black">
    <h2 class='text-3xl font-semibold leading-none text-black max-md:max-w-full'>Similar Projects</h2>
</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1156px] mx-auto px-[13.70px] pt-[13.70px] pb-[20.55px]">
        <Card />
        <Card />
        <Card />
      </div>

    <Footer />