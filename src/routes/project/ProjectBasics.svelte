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

<div class="w-full space-y-8">
  <!-- Project Images Section -->
  <div class="space-y-4">
    <div class="space-y-2">
      <h3 class="font-semibold text-white text-label-lg">Project Images</h3>
      <p class="text-gray-300 text-body-sm">
        Upload your project's banner and profile images to make it stand out
      </p>
    </div>

    <div class="relative mb-16 h-[250px] md:h-[320px]">
      <Label for="banner-upload" class="cursor-pointer">
        <div
          class="flex items-center justify-center w-full h-full overflow-hidden transition-colors duration-200 border-2 border-dashed rounded-2xl border-dashboard-gray-600 bg-dashboard-gray-800 hover:border-dashboard-gray-500"
        >
          {#if ProjectBannerImage}
            <img
              src={ProjectBannerImage}
              alt="Banner"
              class="object-cover w-full h-full rounded-2xl"
            />
          {:else}
            <div class="p-8 text-center">
              <div class="mb-2 text-gray-400">
                <Icon icon="lucide:image-plus" class="w-12 h-12 mx-auto" />
              </div>
              <p class="font-medium text-gray-300 text-body-lg">Click to upload banner image</p>
              <p class="mt-1 text-gray-400 text-body-sm">PNG, JPG, WEBP up to 10MB</p>
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
          class="absolute flex items-center justify-center w-24 h-24 overflow-hidden transition-shadow duration-200 border-4 rounded-full shadow-xl -bottom-12 left-6 border-dashboard-gray-700 bg-dashboard-gray-800 hover:shadow-2xl"
        >
          {#if ProjectProfileImage}
            <img
              src={ProjectProfileImage}
              alt="Profile"
              class="object-cover w-full h-full rounded-full"
            />
          {:else}
            <div class="p-2 text-center">
              <div class="mb-1 text-gray-400">
                <Icon icon="lucide:user" class="w-6 h-6 mx-auto" />
              </div>
              <p class="font-medium text-gray-300 text-label-sm">Profile</p>
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
  <div class="space-y-6">
    <!-- Project Title -->
    <div class="mt-16 space-y-2">
      <Label for="projectTitle" class="block font-medium text-gray-300 text-label-lg">
        Project Title *
      </Label>
      <Input
        type="text"
        id="projectTitle"
        name="title"
        bind:value={project.title}
        placeholder="Enter your project title"
        class="w-full px-4 py-3 text-white border rounded-lg border-dashboard-gray-600 bg-dashboard-gray-800 text-body-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500"
        required
      />
      <p class="text-gray-400 text-body-sm">Choose a clear, descriptive title for your project</p>
    </div>

    <!-- Project Tags -->
    <div class="space-y-2">
      <Label for="projectTags" class="block font-medium text-gray-300 text-label-lg"
        >Project Tags</Label
      >
      <div
        class="relative flex min-h-[60px] w-full flex-wrap items-center rounded-lg border border-dashboard-gray-600 bg-dashboard-gray-800 px-4 py-3 transition-colors duration-200 focus-within:border-transparent focus-within:ring-2 focus-within:ring-dashboard-purple-500"
      >
        <div class="flex flex-wrap items-center flex-grow gap-2 pr-8">
          {#each selectedTags as tag}
            <span
              class="flex items-center px-3 py-1 font-medium rounded-lg bg-dashboard-purple-400 text-label-md text-dashboard-purple-900"
            >
              {#if tag.image}
                <img
                  src={tag.image || '/placeholder.svg'}
                  alt={tag.title}
                  class="w-4 h-4 mr-2 rounded"
                />
              {/if}
              {tag.title}
              <button
                type="button"
                on:click={() => removeTag(tag)}
                class="ml-2 text-sm font-bold leading-none text-dashboard-purple-900 hover:text-dashboard-purple-800"
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
            class="flex-grow p-0 text-white bg-transparent border-none outline-none text-body-lg focus-visible:ring-0"
          />
          <input type="hidden" name="tags" value={JSON.stringify(selectedTags)} />
        </div>

        <Popover bind:open={isOpen}>
          <PopoverTrigger>
            <button
              type="button"
              class="absolute p-1 transform -translate-y-1/2 rounded-md right-4 top-1/2 hover:bg-dashboard-gray-700 focus:outline-none"
              aria-label="Toggle tag dropdown"
            >
              <Icon
                icon="lucide:chevron-down"
                class="h-5 w-5 text-gray-400 transition-transform duration-200 {isOpen
                  ? 'rotate-180'
                  : ''}"
              />
            </button>
          </PopoverTrigger>
          <PopoverContent
            class="w-[var(--radix-popover-trigger-width)] rounded-lg border border-dashboard-gray-600 bg-dashboard-gray-800 p-0 shadow-xl"
          >
            <Command class="bg-dashboard-gray-800">
              <CommandInput
                placeholder="Search tags..."
                class="text-white border-none bg-dashboard-gray-800"
              />
              <CommandEmpty class="text-gray-400">No tags found.</CommandEmpty>
              <CommandGroup class="overflow-auto max-h-60">
                {#each filteredTags as tag}
                  <CommandItem
                    value={tag.title}
                    onSelect={() => addTag(tag)}
                    class="text-gray-300 cursor-pointer hover:bg-dashboard-gray-700 hover:text-white"
                  >
                    {#if tag.image}
                      <img
                        src={tag.image || '/placeholder.svg'}
                        alt={tag.title}
                        class="w-5 h-5 mr-2 rounded"
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
      <p class="text-gray-400 text-body-sm">
        Select keywords that best describe your project category and focus
      </p>
    </div>

    <!-- Country -->
    <div class="space-y-2">
      <Label for="projectCountry" class="block font-medium text-gray-300 text-label-lg"
        >Country *</Label
      >
      <Popover>
        <PopoverTrigger class="w-full">
          <Button
            variant="outline"
            class="flex items-center justify-between w-full px-4 py-3 border rounded-lg border-dashboard-gray-600 bg-dashboard-gray-800 text-body-lg hover:bg-dashboard-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500"
          >
            <span class="text-left {project.country ? 'text-white' : 'text-gray-400'}">
              {project.country || 'Select a country...'}
            </span>
            <Icon icon="lucide:chevron-down" class="w-5 h-5 text-gray-400" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          class="w-[var(--radix-popover-trigger-width)] rounded-lg border border-dashboard-gray-600 bg-dashboard-gray-800 p-0 shadow-xl"
        >
          <Command class="bg-dashboard-gray-800">
            <CommandInput
              placeholder="Search country..."
              class="text-white border-none bg-dashboard-gray-800"
            />
            <CommandEmpty class="text-gray-400">No country found.</CommandEmpty>
            <CommandGroup class="overflow-auto max-h-60">
              {#each countryList as countryOption (countryOption.name)}
                <CommandItem
                  value={countryOption.name}
                  onSelect={() => {
                    project.country = countryOption.name;
                  }}
                  class="text-gray-300 cursor-pointer hover:bg-dashboard-gray-700 hover:text-white"
                >
                  {#if project.country === countryOption.name}
                    <Icon icon="lucide:check" class="w-4 h-4 mr-2 text-dashboard-purple-400" />
                  {:else}
                    <div class="w-4 h-4 mr-2"></div>
                  {/if}
                  {countryOption.name}
                </CommandItem>
              {/each}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <input type="hidden" name="country" value={project.country || ''} />
      <p class="text-gray-400 text-body-sm">
        Choose the location where you are running the project
      </p>
    </div>

    <!-- Project Details -->
    <div class="space-y-2">
      <Label for="projectDetails" class="block font-medium text-gray-300 text-label-lg">
        Project Details *
      </Label>
      <Textarea
        id="projectDetails"
        name="details"
        bind:value={project.details}
        placeholder="Tell potential contributors more about your project. Provide details that will motivate people to contribute..."
        class="min-h-[180px] w-full resize-none rounded-lg border border-dashboard-gray-600 bg-dashboard-gray-800 px-4 py-3 text-body-lg text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500"
        required
      />
      <p class="text-gray-400 text-body-sm">
        A compelling pitch that's informative and easy to digest. Explain what makes your project
        special and why people should contribute.
      </p>
    </div>
  </div>
</div>
