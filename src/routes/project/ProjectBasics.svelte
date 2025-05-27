<script>
  import { onMount } from 'svelte';
  import { countries } from 'countries-list';
  import Icon from '@iconify/svelte';

  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Textarea } from '$lib/components/ui/textarea';
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from '$lib/components/ui/command';
  import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';

  export let project = {};

  const countryList = Object.values(countries).sort((a, b) => a.name.localeCompare(b.name));

  let selectedTags = project.tags ? [...project.tags] : [];

  let isOpen = false;
  let inputValue = '';

  let availableTags = [];

  function toggleDropdown(event) {
    event.preventDefault();
    isOpen = !isOpen;
  }

  function addTag(tag) {
    if (!selectedTags.some((selected) => selected.title === tag.title)) {
      selectedTags = [...selectedTags, tag];
    }

    inputValue = '';
    isOpen = false;
  }

  function removeTag(tag) {
    selectedTags = selectedTags.filter((t) => t.title !== tag.title);
  }

  $: filteredTags = availableTags.filter(
    (tag) =>
      tag.title.toLowerCase().includes(inputValue.toLowerCase()) &&
      !selectedTags.some((selected) => selected.title === tag.title),
  );

  let ProjectBannerImage = project.banner_image || null;
  let ProjectProfileImage = project.image || null;

  const authorizedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

  async function handleBannerUpload(event) {
    const file = event.target.files[0];

    if (file) {
      if (ProjectBannerImage) URL.revokeObjectURL(ProjectBannerImage);
      ProjectBannerImage = URL.createObjectURL(file);
    }
  }

  async function handleProfileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      if (ProjectProfileImage) URL.revokeObjectURL(ProjectProfileImage);
      ProjectProfileImage = URL.createObjectURL(file);
    }
  }

  async function fetchAllCategories() {
    try {
      const response = await fetch('/api/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      availableTags = data.categories;
    } catch (error) {}
  }

  onMount(async () => {
    fetchAllCategories();
  });
</script>

<div class="w-full space-y-10">
  <!-- Project Images Section -->
  <div class="space-y-6">
    <div class="space-y-2">
      <h3 class="text-xl font-bold text-gray-900">Project Images</h3>
      <p class="text-gray-600">
        Upload your project's banner and profile images to make it stand out
      </p>
    </div>

    <div class="relative mb-16 h-[250px] md:h-[320px]">
      <Label for="banner-upload" class="cursor-pointer">
        <div
          class="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-gray-100 transition-colors duration-200 hover:border-gray-400"
        >
          {#if ProjectBannerImage}
            <img
              src={ProjectBannerImage}
              alt="Banner"
              class="h-full w-full rounded-2xl object-cover"
            />
          {:else}
            <div class="p-8 text-center">
              <div class="mb-2 text-gray-400">
                <svg
                  class="mx-auto h-12 w-12"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p class="text-lg font-medium text-gray-700">Click to upload banner image</p>
              <p class="mt-1 text-sm text-gray-500">PNG, JPG, WEBP up to 10MB</p>
            </div>
          {/if}
        </div>
      </Label>
      <input
        type="file"
        id="banner-upload"
        name="banner_image"
        class="hidden"
        accept={authorizedExtensions.join(',')}
        on:change={handleBannerUpload}
      />

      <Label for="profile-upload" class="cursor-pointer">
        <div
          class="absolute -bottom-12 left-6 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-xl transition-shadow duration-200 hover:shadow-2xl"
        >
          {#if ProjectProfileImage}
            <img
              src={ProjectProfileImage}
              alt="Profile"
              class="h-full w-full rounded-full object-cover"
            />
          {:else}
            <div class="p-2 text-center">
              <div class="mb-1 text-gray-400">
                <svg class="mx-auto h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p class="text-xs font-medium text-gray-600">Profile</p>
            </div>
          {/if}
        </div>
      </Label>
      <input
        type="file"
        id="profile-upload"
        class="hidden"
        name="image"
        accept={authorizedExtensions.join(',')}
        on:change={handleProfileUpload}
      />
    </div>
  </div>

  <!-- Form Fields -->
  <div class="space-y-8">
    <!-- Project Title -->
    <div class="space-y-3">
      <Label for="projectTitle" class="text-base font-semibold text-gray-800">
        Project Title *
      </Label>
      <Input
        type="text"
        id="projectTitle"
        name="title"
        bind:value={project.title}
        placeholder="Enter your project title"
        class="h-14 w-full rounded-xl border-2 border-gray-200 px-4 text-base focus:border-teal-500"
        required
      />
      <p class="text-sm text-gray-500">Choose a clear, descriptive title for your project</p>
    </div>

    <!-- Project Bio -->
    <div class="space-y-3">
      <Label for="projectBio" class="text-base font-semibold text-gray-800">Project Bio *</Label>
      <Textarea
        id="projectBio"
        name="bio"
        bind:value={project.bio}
        placeholder="Give a short description of your project..."
        class="min-h-[140px] w-full resize-none rounded-xl border-2 border-gray-200 px-4 py-3 text-base focus:border-teal-500"
        required
      />
      <p class="text-sm text-gray-500">
        Provide a compelling summary that captures the essence of your project
      </p>
    </div>

    <!-- Project Tags -->
    <div class="space-y-3">
      <Label for="projectTags" class="text-base font-semibold text-gray-800">Project Tags</Label>
      <div
        class="relative flex min-h-[60px] w-full flex-wrap items-center rounded-xl border-2 border-gray-200 bg-white px-4 py-3 transition-colors duration-200 focus-within:border-teal-500"
      >
        <div class="flex flex-grow flex-wrap items-center gap-2 pr-8">
          {#each selectedTags as tag}
            <span
              class="flex items-center rounded-lg bg-teal-100 px-3 py-2 text-sm font-medium text-teal-800"
            >
              {#if tag.image}
                <img
                  src={tag.image || '/placeholder.svg'}
                  alt={tag.title}
                  class="mr-2 h-5 w-5 rounded"
                />
              {/if}
              {tag.title}
              <button
                type="button"
                on:click={() => removeTag(tag)}
                class="ml-2 text-lg font-bold leading-none text-teal-600 hover:text-teal-800"
              >
                ×
              </button>
            </span>
          {/each}
          <Input
            type="text"
            bind:value={inputValue}
            on:click={() => (isOpen = true)}
            on:focus={() => (isOpen = true)}
            placeholder="Type to add tags..."
            class="flex-grow border-none bg-transparent p-0 text-base outline-none focus-visible:ring-0"
          />
          <input type="hidden" name="tags" value={JSON.stringify(selectedTags)} />
        </div>

        <Popover bind:open={isOpen}>
          <PopoverTrigger>
            <button
              type="button"
              class="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-md p-1 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle tag dropdown"
            >
              <Icon
                icon="radix-icons:chevron-down"
                class="h-5 w-5 text-gray-400 transition-transform duration-200 {isOpen
                  ? 'rotate-180'
                  : ''}"
              />
            </button>
          </PopoverTrigger>
          <PopoverContent
            class="w-[var(--radix-popover-trigger-width)] rounded-xl border border-gray-200 bg-white p-0 shadow-xl"
          >
            <Command>
              <CommandInput placeholder="Search tags..." class="border-none" />
              <CommandEmpty>No tags found.</CommandEmpty>
              <CommandGroup class="max-h-60 overflow-auto">
                {#each filteredTags as tag}
                  <CommandItem
                    value={tag.title}
                    onSelect={() => addTag(tag)}
                    class="cursor-pointer"
                  >
                    {#if tag.image}
                      <img
                        src={tag.image || '/placeholder.svg'}
                        alt={tag.title}
                        class="mr-2 h-5 w-5 rounded"
                      />
                    {/if}
                    {tag.title}
                  </CommandItem>
                {/each}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <p class="text-sm text-gray-500">
        Select keywords that best describe your project category and focus
      </p>
    </div>

    <!-- Country -->
    <div class="space-y-3">
      <Label for="projectCountry" class="text-base font-semibold text-gray-800">Country *</Label>
      <Popover>
        <PopoverTrigger class="w-full">
          <Button
            variant="outline"
            class="flex h-14 w-full items-center justify-between rounded-xl border-2 border-gray-200 bg-white px-4 text-base hover:bg-gray-50 focus:border-teal-500"
          >
            <span class="text-left {project.country ? 'text-gray-900' : 'text-gray-500'}">
              {project.country || 'Select a country...'}
            </span>
            <Icon icon="radix-icons:chevron-down" class="h-5 w-5 text-gray-400" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          class="w-[var(--radix-popover-trigger-width)] rounded-xl border border-gray-200 p-0 shadow-xl"
        >
          <Command>
            <CommandInput placeholder="Search country..." class="border-none" />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup class="max-h-60 overflow-auto">
              {#each countryList as countryOption (countryOption.name)}
                <CommandItem
                  value={countryOption.name}
                  onSelect={() => {
                    project.country = countryOption.name;
                  }}
                  class="cursor-pointer"
                >
                  {#if project.country === countryOption.name}
                    <Icon icon="mdi:check" class="mr-2 h-4 w-4 text-teal-600" />
                  {:else}
                    <div class="mr-2 h-4 w-4"></div>
                  {/if}
                  {countryOption.name}
                </CommandItem>
              {/each}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <input type="hidden" name="country" value={project.country || ''} />
      <p class="text-sm text-gray-500">Choose the location where you are running the project</p>
    </div>

    <!-- Project Details -->
    <div class="space-y-3">
      <Label for="projectDetails" class="text-base font-semibold text-gray-800">
        Project Details *
      </Label>
      <Textarea
        id="projectDetails"
        name="details"
        bind:value={project.details}
        placeholder="Tell potential contributors more about your project. Provide details that will motivate people to contribute..."
        class="min-h-[180px] w-full resize-none rounded-xl border-2 border-gray-200 px-4 py-3 text-base focus:border-teal-500"
        required
      />
      <p class="text-sm text-gray-500">
        A compelling pitch that's informative and easy to digest. Explain what makes your project
        special and why people should contribute.
      </p>
    </div>
  </div>
</div>
