<script>
    export let update;
</script>



<div class="relative flex items-start gap-3 text-[#0B383C] border border-gray-200 shadow-lg p-6 bg-white rounded-2xl w-full">
  <img src={update.user.avatar_url} alt="Avatar" class="border-2 border-[#0B383C] rounded-full shadow-md w-16 h-16" />

  <div class="flex flex-col w-full ">

    <div class="flex justify-between">
        <a href={update.user.html_url} target="_blank" class="text-2xl font-bold text-[#0B383C] hover:underline">
          {update.user.login}
        </a>
      
        <div class="flex justify-end mt-2">
          <a href={update.merged_url} target="_blank" class="px-1 py-1 font-mediu text-[0.625rem] text-white bg-[#0B383C] rounded-md hover:bg-opacity-80 transition">
            View PR Code
          </a>
        </div>
      </div>
      
    <p class="w-full mt-1 text-sm text-gray-700">
      <!-- {description} -->
    </p>


  </div>
</div>
