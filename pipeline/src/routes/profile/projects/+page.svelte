<script>
    import Header from '../../../lib/Header.svelte';
    import ProfileInfo from '../../../lib/ProfileInfo.svelte';
    import ProjectSection from '../../../lib/ProjectSection.svelte';
    import Footer from '../../../lib/Footer.svelte';
    export let data;
    </script>
    
    <div class="flex overflow-hidden flex-col items-center bg-white">
      <Header {data}/>
      <ProfileInfo />
      <ProjectSection />

    </div>

    <Footer />