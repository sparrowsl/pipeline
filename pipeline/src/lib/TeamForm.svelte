<script>
  function navigateToNextSection() {
    const currentIndex = navSections.findIndex(section => section.id === currentSection);
    if (currentIndex < navSections.length - 1) {
      const nextSection = navSections[currentIndex + 1];
      currentSection = nextSection.id;
      goto(nextSection.href);
    } else {
      // If it's the last section, you might want to submit the form or do something else
      console.log('Project creation completed');
    }
  }

</script>

<section class="flex flex-col mt-14 w-full text-3xl font-semibold leading-none text-black max-w-[998px] max-md:mt-10 max-md:max-w-full">
  <h2 class="mb-10 text-4xl">Add team member</h2>
  <form class="flex flex-col w-full whitespace-nowrap max-md:max-w-full">
    <div class="flex flex-col mb-10">
      <label for="email" class="mb-5">Email</label>
      <input type="email" id="email" class="flex gap-2 w-full border border-lime-800 border-solid min-h-[80px] rounded-[52px] max-md:max-w-full px-8" required />
    </div>
    <button type="submit" class="gap-1 self-stretch px-12 py-8 my-auto bg-cyan-950 text-white min-w-[240px] rounded-[82px] max-md:px-5 max-md:max-w-full">
      Send Invitation
    </button>
  </form>
</section>