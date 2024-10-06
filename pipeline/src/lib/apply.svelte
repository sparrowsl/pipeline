<form class="w-[80%] max-w-6xl mx-auto px-4 py-8">
    <div class="flex flex-col mb-8 w-full">
      <label for="name" class="mb-2 text-lg md:text-xl">Name</label>
      <input
        id="name"
        type="text"
        class="w-full border-2 border-lime-800 rounded-[25px] px-4 py-3 md:py-4 text-base md:text-lg"
        aria-label="Enter your name"
      />
    </div>
  
    <div class="flex flex-col mb-8 w-full">
      <label for="interest" class="mb-2 text-lg md:text-xl">
        Why are you interested in contributing to this project?
      </label>
      <textarea
        id="interest"
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