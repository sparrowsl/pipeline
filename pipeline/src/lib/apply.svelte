<script>
  export let id;
  let loading = false;
  let name = '';
  let email = '';
  let interest = '';
  let skills = '';
  let workHours = '';
  let question = '';

  const handleApplySubmit = async () => {
    try {
      loading = true;

      const response = await fetch(`/api/projects/contribute/${id}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          interest,
          skills,
          workHours,
          question,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Application submitted successfully!');
      } else {
        alert(`Error: ${response.statusText}`);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
    }
  };
</script>
<form on:submit|preventDefault={handleApplySubmit} class="w-[80%] max-w-6xl mx-auto px-4 py-8">
    <div class="flex flex-col mb-8 w-full">
      <label for="name" class="mb-2 text-lg md:text-xl">Name</label>
      <input
        id="name"
        bind:value={name}
        type="text"
        class="w-full border-2 border-lime-800 rounded-[25px] px-4 py-3 md:py-4 text-base md:text-lg"
        aria-label="Enter your name"
      />
    </div>

    <div class="flex flex-col mb-8 w-full">
      <label for="email" class="mb-2 text-lg md:text-xl">Email</label>
      <input
        id="email"
        bind:value={email}
        type="email"
        class="w-full border-2 border-lime-800 rounded-[25px] px-4 py-3 md:py-4 text-base md:text-lg"
        aria-label="Enter your Email"
      />
    </div>
    <div class="flex flex-col mb-8 w-full">
      <label for="interest" class="mb-2 text-lg md:text-xl">
        Why are you interested in contributing to this project?
      </label>
      <textarea
        id="interest"
        bind:value={interest}
        class="w-full border-2 border-lime-800 rounded-[25px] px-4 py-3 md:py-4 text-base md:text-lg min-h-[100px] md:min-h-[150px]"
        aria-label="Describe your interest in contributing to this project"
      ></textarea>
    </div>
  
    <div class="flex flex-col mb-8 w-full">
      <label for="skills" class="mb-2 text-lg md:text-xl">
        What skills can you help with?
      </label>
      <input
        id="skills"
        bind:value={skills}
        type="text"
        class="w-full border-2 border-lime-800 rounded-[25px] px-4 py-3 md:py-4 text-base md:text-lg"
        aria-label="Enter the skills you can contribute"
      />
    </div>
  
    <div class="flex flex-col mb-8 w-full">
      <label for="hours" class="mb-2 text-lg md:text-xl">
        How many hours per week can you commit to this project?
      </label>
      <input
        id="hours"
        bind:value={workHours}
        type="number"
        class="w-full border-2 border-lime-800 rounded-[25px] px-4 py-3 md:py-4 text-base md:text-lg"
        aria-label="Enter the number of hours you can commit per week"
      />
    </div>
  
    <div class="flex flex-col mb-8 w-full">
      <label for="questions" class="mb-2 text-lg md:text-xl">
        Any questions towards project or in general?
      </label>
      <textarea
        id="questions"
        bind:value={question}
        class="w-full border-2 border-lime-800 rounded-[25px] px-4 py-3 md:py-4 text-base md:text-lg min-h-[150px] md:min-h-[200px]"
        aria-label="Enter any questions you have about the project"
      ></textarea>
    </div>
  
    <div class="flex justify-center mt-8 w-full">
      <button
        type="submit"
        class="w-full md:w-2/3 lg:w-1/2 px-6 py-4 bg-teal-900 text-gray-200 text-lg md:text-xl font-medium rounded-[40px] hover:bg-teal-800 transition-colors duration-300"
      >
        SUBMIT
      </button>
    </div>
  </form>