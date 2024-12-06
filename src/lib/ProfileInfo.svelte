<script>
  import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';

  let user = {};
  let error = null;
  const defaultImageUrl = 'https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg';

  onMount(async () => {
    try {
      const response = await fetch('/api/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        user = result.user;
      } else {
        const result = await response.json();
        error = result.error;
      }
    } catch (err) {
      error = 'Failed to fetch user data';
    }
  });
</script>

<section class="mt-10 flex w-full max-w-[505px] flex-col max-md:mt-10 max-md:max-w-full">
  <div class="flex flex-col max-md:max-w-full">
    <div class="flex w-full flex-col max-md:max-w-full">
      <div class="relative flex w-full flex-col max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8030ec6426e85620456b5636b4a5396ca24f43b5e55a6739527e90baef3c9203?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
          alt="Profile background"
          class="z-0 aspect-[3.33] h-[250px] w-full rounded-[43px] object-cover max-md:max-w-full"
        />

        {#if user && user.id}
          <img
            loading="lazy"
            src={user.image_url && user.image_url !== '' ? user.image_url : defaultImageUrl}
            alt="Profile picture"
            class="absolute bottom-[-65px] left-[30px] z-0 aspect-[1.01] h-[120px] w-[120px] max-w-full items-center gap-2.5 rounded-[106px] object-contain"
          />
        {/if}
      </div>
    </div>
  </div>
</section>

<section class="flex w-full flex-col max-md:mt-10 max-md:max-w-full">
  <div
    class="flex w-full flex-wrap items-center justify-between gap-4 text-black max-md:max-w-full"
  >
    <h1 class="my-auto mt-20 self-stretch text-3xl font-semibold leading-none max-md:text-4xl">
      {user?.display_name || ''}
    </h1>
    <div class="mt-20 flex flex-wrap items-center gap-2 self-stretch">
      <a href="/">
        <Icon icon="mingcute:github-fill" class="text-2xl" />
      </a>
      <a href="/">
        <Icon icon="ph:discord-logo-fill" class="text-2xl" />
      </a>
      <a href="/">
        <Icon icon="prime:twitter" class="text-2xl" />
      </a>
      <a href="/">
        <Icon icon="material-symbols-light:globe" class="text-2xl" />
      </a>
      <a href="/">
        <Icon icon="material-symbols-light:mail" class="text-2xl" />
      </a>
    </div>
  </div>
  <p class="mt-11 text-2xl font-light leading-9 text-black max-md:mt-10 max-md:max-w-full">
    {user?.bio || ''}
  </p>
  <div
    class="mt-11 flex w-full flex-wrap items-center justify-between gap-4 max-md:mt-10 max-md:max-w-full"
  >
    <div
      class="my-auto flex min-w-[240px] flex-wrap items-center gap-4 self-stretch whitespace-nowrap max-md:max-w-full"
    >
      <h2 class="my-auto self-stretch text-center text-lg leading-none text-black">Interests</h2>
      <div
        class="my-auto flex min-w-[140px] flex-wrap items-center gap-3 self-stretch text-base leading-none text-lime-800"
      >
        {#if user.interests && user.interests.length > 0}
          {#each user.interests as interest}
            <span
              class="my-auto self-stretch rounded-[72px] border-2 border-solid border-lime-800 py-3.5 pl-6 pr-6 text-base max-md:px-5"
            >
              {interest}
            </span>
          {/each}
        {:else}
          <span
            class="my-auto self-stretch rounded-[72px] border-2 border-solid border-lime-800 py-3 pl-6 pr-6 text-sm max-md:px-5"
          >
            No interests specified
          </span>
        {/if}
      </div>
    </div>
  </div>
  <div
    class="mt-11 flex w-full flex-wrap items-center justify-around gap-2 text-2xl font-medium leading-none max-md:mt-10 max-md:max-w-full"
  >
    <a href="/project/create" class="max-w-xs flex-1 md:max-w-sm">
      <button
        class="flex w-full items-center justify-center gap-2 rounded-full bg-teal-900 px-6 py-4 text-xl text-white"
      >
        Create Project
      </button>
    </a>

    <a href="/profile/edit" class="max-w-xs flex-1 md:max-w-sm">
      <button
        class="flex w-full items-center justify-center gap-2 rounded-full border-2 border-lime-800 bg-lime-200 px-6 py-4 text-xl text-lime-800"
      >
        Edit Profile
        <Icon icon="mdi:pen" class="text-2xl" />
      </button>
    </a>
  </div>
</section>
