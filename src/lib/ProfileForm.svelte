  <script>
    let bannerImage = null;
    let profileImage = null;
  
    function handleBannerUpload(event) {
      const file = event.target.files[0];
      if (file) {
        bannerImage = URL.createObjectURL(file);
      }
    }
  
    function handleProfileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        profileImage = URL.createObjectURL(file);
      }
    }
  </script>
  
  <form class="flex flex-col w-full text-[30.91px] font-normal font-['PP Mori'] leading-[34px]">
    <div class="self-stretch h-[295.61px] relative mb-[141px]">
      <label for="banner-upload" class="cursor-pointer">
        <div class="w-full h-full bg-[#d9d9d9] rounded-[37.69px] flex justify-center items-center overflow-hidden">
          {#if bannerImage}
            <img src={bannerImage} alt="Banner" class="object-cover w-full h-full" />
          {:else}
            <div class="text-center">Click to upload banner image</div>
          {/if}
        </div>
      </label>
      <input type="file" id="banner-upload" class="hidden" accept="image/*" on:change={handleBannerUpload} />
      
      <label for="profile-upload" class="cursor-pointer">
        <div class="absolute bottom-[-92.6px] left-[46.69px] w-[185.19px] h-[185.19px] bg-[#d9d9d9] rounded-full border-8 border-white flex justify-center items-center overflow-hidden">
          {#if profileImage}
            <img src={profileImage} alt="Profile" class="object-cover w-full h-full rounded-full" />
          {:else}
            <div class="text-sm text-center">Click to upload profile picture</div>
          {/if}
        </div>
      </label>
      <input type="file" id="profile-upload" class="hidden" accept="image/*" on:change={handleProfileUpload} />
    </div>
  
    <div class="flex flex-col gap-[47px]">
      <div class="flex items-center justify-between">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" placeholder="Enter your first name" class="w-[838.93px] h-[73.02px] rounded-[60.59px] border-2 border-[#516027] px-4" />
      </div>
      <div class="flex items-center justify-between">
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" placeholder="Enter your last name" class="w-[838.93px] h-[73.02px] rounded-[60.59px] border-2 border-[#516027] px-4" />
      </div>
      <div class="flex items-center justify-between">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Choose a username" class="w-[838.93px] h-[73.02px] rounded-[60.59px] border-2 border-[#516027] px-4" />
      </div>
      <div class="flex items-center justify-between">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email address" class="w-[838.93px] h-[73.02px] rounded-[60.59px] border-2 border-[#516027] px-4" />
      </div>
      <div class="flex items-center justify-between">
        <label for="country">Country</label>
        <input type="text" id="country" placeholder="Enter your country" class="w-[838.93px] h-[73.02px] rounded-[60.59px] border-2 border-[#516027] px-4" />
      </div>
      <div class="flex items-start justify-between">
        <label for="bio">Bio</label>
        <textarea id="bio" placeholder="Write a short bio about yourself" class="w-[838.93px] h-[368.20px] rounded-[37.29px] border-2 border-[#516027] p-4"></textarea>
      </div>
    </div>
  
    <button type="submit" class="self-end mt-[47px] px-[59.89px] py-8 bg-[#516027] rounded-[127.56px] text-[#ebebeb] text-3xl font-medium font-['Inter'] leading-[32.91px]">
      save & continue
    </button>
  </form>