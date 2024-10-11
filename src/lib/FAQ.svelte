<script>
    import FAQItem from './FAQItem.svelte';
    const faqItems = [
      { 
        question: "What is Pipeline?", 
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/885a0a3d657ee775c81b61a9ff9de6317a670673f099abb6ab47bc79663f7b6f?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8",
        answer: "Pipeline is a platform that helps developers create and manage digital public goods projects."
      },
      { 
        question: "Who is Pipeline for?", 
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc0869fd271c126fd9af57414c750d482a47bbecbf1c20273ae79a09209b263d?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8",
        answer: "Pipeline is for developers, contributors, and organizations interested in creating or supporting digital public goods."
      },
      { 
        question: "Why Open source?", 
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6283cfa2c3b70cee3a1f912c9ed2fd6c3a41a5263141141422b73b0e7bb1f5e7?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8",
        answer: "Open source promotes transparency, collaboration, and innovation, allowing for wider participation and improvement of digital public goods."
      },
      { 
        question: "How can I contribute?", 
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3313976087d6b6e12186e56d58268206a0e3dd70048f40acbff8b0bc8dc339d?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8",
        answer: "You can contribute by submitting your own projects, contributing to existing projects, or providing feedback and suggestions for improvement."
      },
      { 
        question: "What is DPG Registry?", 
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5de8ddeca1ad321b10d531e6dbfd6be9cff811c2a7eea1a3d538f5101aec0713?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8",
        answer: "The DPG Registry is a catalog of digital public goods that meet specific standards and criteria for open-source projects."
      },
      { 
        question: "How can I complete it?", 
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de7c92ed0cfa1582baa01984d8f24183e3cf990005570e4d665b76acf6834876?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8",
        answer: "To complete the DPG Registry process, ensure your project meets all required criteria and submit it for review through the Pipeline platform."
      }
    ];
  </script>
  
  <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 mt-16 sm:mt-32 font-semibold text-center">
    <div class="max-w-3xl mx-auto border-2 border-solid border-teal-950 rounded-3xl sm:rounded-[57px] p-6 sm:p-10">
        <h1 class="text-4xl sm:text-5xl lg:text-7xl text-emerald-950 mb-8 sm:mb-12">FAQ</h1>
        <div class="space-y-6 sm:space-y-8">
            {#each faqItems as item}
                <FAQItem question={item.question} imageSrc={item.imageSrc} answer={item.answer} />
            {/each}
        </div>
    </div>
</section>