<script>
	import ProjectCategory from '../../lib/ProjectCategory.svelte';
    import Nav from '../../lib/Nav.svelte';   
    import Search from '../../lib/Search.svelte';
    import CategoryDropdown from '../../lib/CategoryDropdown.svelte';
    import SortDropdown from '../../lib/SortDropdown.svelte';
    import Card from '../../lib/Card.svelte';
    import LearnMoreButton from '../../lib/LearnMoreButton.svelte';
    import Footer from '../../lib/Footer.svelte';
  
    let activeCategory = 'Categories';
    let activeFilter = 'All projects';
  
    const filters = ['All projects', 'Design', 'Engineering', 'Art', 'Development'];   
</script>

<div class="w-full min-h-screen bg-white">
    <Nav />
    <div class="w-full bg-[#d1ea9a]/90 py-16">
        <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-[#08292c] text-[45.43px] font-semibold font-['PP Mori'] leading-[54.51px]">
                Discover impact projects, donate directly,<br/>& participate in funding rounds.
            </h1>
        </div>
    </div>

    <div class="flex justify-center px-4 w-full">
        <main class="flex flex-col mt-24 w-full text-2xl max-w-[965px] max-md:mt-10 max-md:max-w-full">
            <section class="flex flex-wrap gap-5 justify-between items-center w-full font-thin leading-none text-center text-lime-100 max-md:max-w-full">
                <Search />
                <CategoryDropdown />
                <SortDropdown />
            </section>
            <ProjectCategory />
        </main>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1156px] mx-auto px-[13.70px] pt-[13.70px] pb-[20.55px] text-5xl font-semibold mt-20">Top Projects</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1156px] mx-auto px-[13.70px] pt-[13.70px] pb-[20.55px]">
        <Card />
        <Card />
        <Card />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1156px] mx-auto px-[13.70px] pt-[13.70px] pb-[20.55px] text-5xl font-semibold mt-20">All Projects</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1156px] mx-auto px-[13.70px] pt-[13.70px] pb-[20.55px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>

    <div class="flex justify-center items-center mt-8 mb-16">
        <LearnMoreButton />
    </div>
  
    <Footer />
</div>