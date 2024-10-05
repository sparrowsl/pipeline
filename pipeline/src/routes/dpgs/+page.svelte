<script>
    import Nav from '../../lib/Nav.svelte';
    import Journey from '../../lib/Journey.svelte';
    import Footer from '../../lib/Footer.svelte';
</script>


<main>

    <Nav />
</main>


<div class="w-[100%] h-[417px] bg-[#d1ea9a]/90 justify-center items-center gap-2.5 inline-flex mb-20">
    <div class="flex-col justify-start items-center gap-[14.67px] inline-flex">
        <div class="text-center text-black text-[89.62px] font-semibold font-['PP Mori'] leading-[98.58px]">What are<br/>Digital Public Goods?</div>
    </div>
</div>

<div class="px-4 py-8 mx-auto max-w-4xl text-start">
    <h1 class="mb-6 text-4xl font-semibold text-gray-800">What are DPGs?</h1>
    <p class="h-[259.67px] text-black text-[22.78px] font-normal font-['PP Mori'] leading-[45.89px]">
      Digital public goods are the resources, data sheets, AI models, and software available to all citizens for free contributing to sustainable development. These are non-excludable which means no one is excluded from using these resources and services and non-rivalrous which means they are available and accessible to all communities and one person's use will not diminish their availability for other people in the communities.
    </p>
  
    <div class="my-8 border-t border-gray-300"></div>
  
    <h2 class="mb-6 text-3xl font-semibold text-gray-800">Examples of DPGs</h2>
    <div class="space-y-6 text-left">
      <div>
        <h3 class="mb-2 text-[32px] font-semibold text-gray-800">OpenAI Models:</h3>
        <p class="text-lg text-gray-700">These are artificial intelligence models developed and shared openly to advance research, innovation, and accessibility across multiple sectors. E.g. OpenAI's GPT models like ChatGPT</p>
      </div>
      <div>
        <h3 class="mb-2 text-[32px] font-semibold text-gray-800">Open Software (Open Source Software):</h3>
        <p class="text-lg text-gray-700">Open software refers to programs whose source code is made publicly available, allowing anyone to view, modify, and distribute it. This encourages innovation and collaboration. Example: Linux, Android</p>
      </div>
      <div>
        <h3 class="mb-2 text-[32px] font-semibold text-gray-800">Open Data:</h3>
        <p class="text-lg text-gray-700">Open data refers to datasets that are freely available for anyone to use, modify, and share. This openness fosters transparency, innovation, and solutions to global challenges. Example: World Bank Open data</p>
      </div>
      <div>
        <h3 class="mb-2 text-[32px] font-semibold text-gray-800">Open Content:</h3>
        <p class="text-lg text-gray-700">Open content refers to materials (text, images, videos, etc.) that are freely available for anyone to use, share, and often modify. This allows for the broad dissemination of knowledge and creativity. Example: Wikipedia</p>
      </div>
      <div>
        <h3 class="mb-2 text-[32px] font-semibold text-gray-800">Open Standards:</h3>
        <p class="text-lg text-gray-700">Open standards refer to technical standards that are made available for anyone to use, ensuring that different systems and technologies can work together seamlessly. Example HTML & CSS</p>
      </div>
    </div>
  
    <div class="my-8 border-t border-gray-300"></div>
  
    <h2 class="mb-6 text-3xl font-semibold text-gray-800">Why are DPGs important?</h2>
    <p class="mb-6 text-xl text-gray-700">
      Digital Public Goods (DPGs) like OpenAI models, open software, open data, open content, and open standards are incredibly important because they foster innovation, inclusivity, and collaboration on a global scale. Here's why they matter:
    </p>
    <div class="space-y-6 text-left">
      <div>
        <h3 class="mb-2 text-2xl font-semibold text-gray-800">1. Promote Innovation and Creativity</h3>
        <p class="text-lg text-gray-700">Open resources empower anyone to build upon existing tools and knowledge, fuelling innovation.<br/>Example: Open-source software like Linux allows developers to create tailored operating systems for everything from personal computers to servers, driving the evolution of cloud computing and mobile devices.</p>
      </div>
      <div>
        <h3 class="mb-2 text-2xl font-semibold text-gray-800">2. Increase Access and Inclusivity</h3>
        <p class="text-lg text-gray-700">Open resources break down barriers to entry, making essential tools and knowledge available to people around the world, regardless of economic or geographic constraints.<br/>Example: Open educational resources like Khan Academy provide free access to high-quality learning materials for students who may not have access to traditional education.</p>
      </div>
      <div>
        <h3 class="mb-2 text-2xl font-semibold text-gray-800">3. Foster Collaboration and Global Solutions</h3>
        <p class="text-lg text-gray-700">This open exchange of ideas and resources leads to more effective and innovative solutions, especially for global challenges like climate change, public health, and poverty.<br/>Example: Open data from global health organizations enables researchers from different countries to collaborate on combating diseases, like during the COVID-19 pandemic.</p>
      </div>
      <div>
        <h3 class="mb-2 text-2xl font-semibold text-gray-800">4. Encourage Transparency and Trust</h3>
        <p class="text-lg text-gray-700">By making information, tools, and data openly available, DPGs promote transparency and accountability in industries, governments, and organizations.<br/>Example: Open data from government sources allows citizens to monitor how public funds are used, fostering transparency and accountability.</p>
      </div>
      <div>
        <h3 class="mb-2 text-2xl font-semibold text-gray-800">5. Drive Economic Growth</h3>
        <p class="text-lg text-gray-700">Open resources lower the cost of development and innovation by eliminating licensing fees and providing access to essential tools.<br/>Example: Startups in Africa have built innovative solutions on top of open-source platforms, driving economic growth and providing tech solutions tailored to local needs.</p>
      </div>
      <div>
        <h3 class="mb-2 text-2xl font-semibold text-gray-800">6. Ensure Interoperability and Connectivity</h3>
        <p class="text-lg text-gray-700">Open standards are essential for ensuring that different systems, technologies, and devices can work together seamlessly.<br/>Example: HTML, an open standard, ensures that websites are accessible on all devices and browsers, contributing to the growth of the World Wide Web.</p>
      </div>
    </div>
  
    <div class="my-8 border-t border-gray-300"></div>
  
    <h2 class="mb-6 text-3xl font-semibold text-gray-800">Digital Public Goods Standard</h2>
    <p class="mb-8 text-[22px] text-gray-700">
      The Digital Public Goods Standard is a set of specifications and guidelines designed to maximise consensus about whether a digital solution conforms to the definition of a digital public good. According to the UN Secretary General's Roadmap for Digital Cooperation, digital public goods are open-source software, open standards, open data, open AI systems, and open content collections that adhere to privacy and other applicable best practices, do no harm, and are of high relevance for attainment of the United Nations 2030 Sustainable Development Goals (SDGs).
    </p>
  
    <h2 class="mb-6 text-3xl font-semibold text-gray-800">Requirements to be a DPG</h2>
    <p class="text-[25px] text-gray-700">
      Below are the 9 indicators and requirements that determine if nominated software, data, AI systems, and/or content collections can be considered a DPG.
    </p>
  </div>

  <div class="px-4 py-8 mx-auto max-w-4xl text-center">
  
    <div class="space-y-8 text-left">
      <div>
        <h3 class="mb-2 text-2xl font-semibold text-gray-800">1. Relevance to SDGs</h3>
        <p class="text-xl text-gray-700">The project needs a clear plan for long-term sustainability, ensuring it can continue to advance the sustainable development goals.</p>
      </div>
  
      <div>
        <h3 class="mb-2 text-2xl font-semibold text-gray-800">2. Use of Approved Open Licenses</h3>
        <p class="text-xl text-gray-700">The project must use an open-source license, allowing others to freely use, modify, and distribute the solution.</p>
      </div>
  
      <div>
        <h3 class="mb-2 text-2xl font-semibold text-gray-800">3. Clear Ownership</h3>
        <p class="text-xl text-gray-700">Ownership of assets that the digital public good produces must be clearly defined and documented. For example, through copyright, trademark or other publicly available information.</p>
      </div>
  
      <div>
        <h3 class="mb-2 text-2xl font-semibold text-gray-800">4. Platform Independence</h3>
        <p class="text-xl text-gray-700">There should be existence of functional, open alternatives that can be used without significant changes to the core product.</p>
      </div>
  
      <div>
        <h3 class="mb-2 text-2xl font-semibold text-gray-800">5. Documentation</h3>
        <p class="text-xl text-gray-700">Any educational or informational materials should be openly licensed, making them accessible to everyone.</p>
      </div>
  
      <div>
        <h3 class="mb-2 text-2xl font-semibold text-gray-800">6. Mechanism for Extracting Data</h3>
        <p class="text-xl text-gray-700">The project should share data openly, ensuring transparency and enabling others to build upon it.</p>
      </div>
  
      <div>
        <h3 class="mb-2 text-2xl font-semibold text-gray-800">7. Adherence to Privacy and Applicable Laws</h3>
        <p class="text-xl text-gray-700">The project must prioritize data privacy and security, protecting users' information and ensuring ethical practices.</p>
      </div>
  
      <div>
        <h3 class="mb-2 text-2xl font-semibold text-gray-800">8. Adherence to Standards & Best Practices</h3>
        <p class="text-xl text-gray-700">It must adhere to widely accepted open standards that promote interoperability and accessibility.</p>
      </div>
  
      <div>
        <h3 class="mb-2 text-2xl font-semibold text-gray-800">9. Do No Harm by Design</h3>
        <p class="text-xl text-gray-700">It should be designed to avoid causing harm, ensuring the project benefits society without unintended negative consequences.</p>
      </div>
    </div>
  </div>


  <div class="w-full max-w-[1076px] mx-auto mt-16 ">
    <Journey />
  </div>
  
  <Footer />