<script>
  import { goto } from '$app/navigation';
  import { countries } from 'countries-list';
  import { toast } from 'svelte-sonner';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Button } from '$lib/components/ui/button';
  import { Textarea } from '$lib/components/ui/textarea';
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '$lib/components/ui/select';
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from '$lib/components/ui/command';
  import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
  import { Check, ChevronsUpDown, Sparkles, Send } from 'lucide-svelte';
  import { cn } from '$lib/utils';
  import Icon from '@iconify/svelte';
  import { fly, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let id;
  export let selectedContributionType = null;
  export let selectedItem = null;

  let loading = false;
  let interest = '';
  let resourceType = '';
  let resourceTitle = '';
  let resourceLink = '';
  let country = '';

  const categories = [
    {
      value: 'design',
      label: 'Design',
      icon: 'mdi:palette',
      description: 'UI/UX designs, mockups, graphics',
    },
    {
      value: 'research',
      label: 'Research Data',
      icon: 'mdi:chart-line',
      description: 'Analysis, reports, insights',
    },
    {
      value: 'documentation',
      label: 'Documentation',
      icon: 'mdi:file-document',
      description: 'Guides, tutorials, specifications',
    },
    {
      value: 'code',
      label: 'Code/Development',
      icon: 'mdi:code-braces',
      description: 'Code samples, implementations',
    },
    {
      value: 'testing',
      label: 'Testing',
      icon: 'mdi:bug',
      description: 'Test results, QA reports',
    },
    {
      value: 'analysis',
      label: 'Analysis',
      icon: 'mdi:magnify',
      description: 'Technical analysis, reviews',
    },
    {
      value: 'other',
      label: 'Other',
      icon: 'mdi:dots-horizontal',
      description: 'Other helpful resources',
    },
  ];

  const countryList = Object.entries(countries)
    .map(([code, data]) => ({
      code,
      name: data.name,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleApplySubmit = async () => {
    try {
      loading = true;
      const response = await fetch(`/api/projects/${id}/contribute`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resourceType,
          resourceTitle,
          resourceLink,
          country,
          interest,
          contributionType: selectedContributionType,
          contributionTarget:
            selectedContributionType === 'issue'
              ? {
                  type: 'github_issue',
                  number: selectedItem?.number,
                  title: selectedItem?.title,
                  url: selectedItem?.html_url,
                }
              : selectedContributionType === 'dpg'
                ? {
                    type: 'dpg_standard',
                    name: selectedItem?.name,
                    explanation: selectedItem?.explanation,
                  }
                : null,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Resource submitted successfully!');
        goto(`/project/${id}`);
      } else {
        toast.error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      loading = false;
    }
  };

  // Auto-suggest resource type based on contribution type
  $: if (selectedContributionType && !resourceType) {
    if (selectedContributionType === 'dpg') {
      if (selectedItem?.name?.toLowerCase().includes('documentation')) {
        resourceType = 'documentation';
      } else if (selectedItem?.name?.toLowerCase().includes('license')) {
        resourceType = 'documentation';
      } else {
        resourceType = 'analysis';
      }
    } else if (selectedContributionType === 'issue') {
      // Try to guess based on issue title/labels
      const title = selectedItem?.title?.toLowerCase() || '';
      if (title.includes('design') || title.includes('ui') || title.includes('ux')) {
        resourceType = 'design';
      } else if (title.includes('doc') || title.includes('readme')) {
        resourceType = 'documentation';
      } else if (title.includes('test')) {
        resourceType = 'testing';
      } else if (title.includes('bug') || title.includes('fix')) {
        resourceType = 'code';
      } else {
        resourceType = 'other';
      }
    }
  }

  // Form validation
  $: isFormValid = resourceType && resourceTitle && resourceLink && selectedContributionType;

  // Selected category
  $: selectedCategory = categories.find((cat) => cat.value === resourceType);
</script>

<!-- Form container with enhanced styling -->
<div
  class="rounded-2xl border border-dashboard-gray-700 bg-dashboard-gray-900 p-6 shadow-card"
  in:fly={{ y: 20, duration: 400 }}
>
  <!-- Header with enhanced styling -->
  <div class="mb-8 flex items-center gap-3" in:scale={{ duration: 300, delay: 100 }}>
    <div class="rounded-lg bg-dashboard-yellow-400/10 p-2">
      <Sparkles class="h-6 w-6 text-dashboard-yellow-400" />
    </div>
    <div>
      <h2 class="text-heading-xl text-white">Submit Your Resource</h2>
      <p class="text-body-md text-gray-400">Help make this project better with your contribution</p>
    </div>
  </div>

  {#if !selectedContributionType}
    <div
      class="mb-8 rounded-xl border border-dashboard-yellow-400/30 bg-dashboard-yellow-400/5 p-6"
      in:fly={{ y: 10, duration: 300, delay: 200 }}
    >
      <div class="mb-3 flex items-center gap-3">
        <Icon icon="mdi:lightbulb" class="h-5 w-5 text-dashboard-yellow-400" />
        <span class="text-label-lg font-medium text-dashboard-yellow-400">Get Started</span>
      </div>
      <p class="text-body-md text-gray-300">
        Please select a specific issue or DPG standard above to contribute to. This helps ensure
        your resource directly addresses the project's needs.
      </p>
    </div>
  {/if}

  <form on:submit|preventDefault={handleApplySubmit} class="space-y-6">
    <!-- Contributing To Display -->
    {#if selectedContributionType && selectedItem}
      <div
        class="rounded-xl border border-dashboard-gray-600 bg-dashboard-gray-800 p-4"
        in:fly={{ y: 10, duration: 300, delay: 150 }}
      >
        <div class="mb-3 flex items-center gap-3">
          <div class="rounded-lg bg-dashboard-purple-500/10 p-2">
            <Icon icon="mdi:target" class="h-5 w-5 text-dashboard-purple-500" />
          </div>
          <span class="text-label-lg font-medium text-dashboard-purple-300">Contributing To</span>
        </div>
        <div class="flex items-start gap-3">
          <div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-dashboard-purple-400"></div>
          <p class="text-body-lg leading-relaxed text-white">
            {#if selectedContributionType === 'issue'}
              <strong>GitHub Issue #{selectedItem.number}:</strong> {selectedItem.title}
            {:else}
              <strong>DPG Standard:</strong> {selectedItem.name}
            {/if}
          </p>
        </div>
      </div>
    {/if}

    <!-- Resource Type Field with enhanced design -->
    <div class="space-y-3" in:fly={{ y: 10, duration: 300, delay: 200 }}>
      <Label for="category" class="block text-label-lg font-medium text-gray-300">
        Type of Resource
      </Label>
      <Select onValueChange={(value) => (resourceType = value)} value={resourceType}>
        <SelectTrigger
          class="w-full rounded-lg border border-dashboard-gray-600 bg-dashboard-gray-800 px-4 py-3 text-body-lg text-white focus:border-dashboard-purple-500 focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500"
        >
          <div class="flex items-center gap-3 text-white">
            {#if selectedCategory}
              <Icon icon={selectedCategory.icon} class="h-5 w-5 text-dashboard-purple-400" />
            {/if}
            <SelectValue placeholder="Select resource type" class="text-white" />
          </div>
        </SelectTrigger>
        <SelectContent class="border-dashboard-gray-600 bg-dashboard-gray-800">
          {#each categories as category}
            <SelectItem
              value={category.value}
              class="px-3 py-2 text-gray-300 hover:bg-dashboard-gray-700 focus:bg-dashboard-gray-700"
            >
              <div class="flex items-center gap-3 text-gray-300">
                <Icon icon={category.icon} class="h-4 w-4 text-dashboard-purple-400" />
                <div>
                  <div class="font-medium text-gray-300">{category.label}</div>
                  <div class="text-body-sm text-gray-500">{category.description}</div>
                </div>
              </div>
            </SelectItem>
          {/each}
        </SelectContent>
      </Select>
    </div>

    <!-- Resource Title Field with better styling -->
    <div class="space-y-3" in:fly={{ y: 10, duration: 300, delay: 250 }}>
      <Label for="resourceTitle" class="block text-label-lg font-medium text-gray-300">
        Resource Title
      </Label>
      <Input
        id="resourceTitle"
        bind:value={resourceTitle}
        type="text"
        placeholder="Give your resource a descriptive title"
        class="w-full rounded-lg border border-dashboard-gray-600 bg-dashboard-gray-800 px-4 py-3 text-body-lg text-white placeholder:text-gray-500 focus:border-dashboard-purple-500 focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500"
        aria-label="Enter the resource title"
      />
    </div>

    <!-- Resource Link Field with validation -->
    <div class="space-y-3" in:fly={{ y: 10, duration: 300, delay: 300 }}>
      <Label for="resourceLink" class="block text-label-lg font-medium text-gray-300">
        Resource Link
      </Label>
      <Input
        id="resourceLink"
        bind:value={resourceLink}
        type="url"
        placeholder="https://example.com/your-resource"
        class="w-full rounded-lg border border-dashboard-gray-600 bg-dashboard-gray-800 px-4 py-3 text-body-lg text-white placeholder:text-gray-500 focus:border-dashboard-purple-500 focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500"
        aria-label="Enter the resource link"
      />
    </div>

    <!-- Country Field with improved UX -->
    <div class="space-y-3" in:fly={{ y: 10, duration: 300, delay: 350 }}>
      <Label for="country" class="block text-label-lg font-medium text-gray-300">Country</Label>
      <Popover let:open>
        <PopoverTrigger class="w-full">
          <Button
            variant="outline"
            class="flex w-full justify-between rounded-lg border border-dashboard-gray-600 bg-dashboard-gray-800 px-4 py-3 text-body-lg text-white hover:bg-dashboard-gray-700 focus:border-dashboard-purple-500 focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500"
          >
            <span class="text-left text-white">
              {country ? countryList.find((c) => c.code === country)?.name : 'Select your country'}
            </span>
            <ChevronsUpDown class="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-full border-dashboard-gray-600 bg-dashboard-gray-800 p-0">
          <Command class="bg-dashboard-gray-800">
            <CommandInput
              placeholder="Search country..."
              class="border-dashboard-gray-600 bg-dashboard-gray-800 text-white"
            />
            <CommandEmpty class="text-gray-400">No country found.</CommandEmpty>
            <CommandGroup class="max-h-60 overflow-auto">
              {#each countryList as countryItem}
                <button
                  type="button"
                  class="w-full cursor-pointer"
                  on:click={() => {
                    country = countryItem.code;
                    document.body.click();
                  }}
                >
                  <CommandItem class="text-gray-300 hover:bg-dashboard-gray-700">
                    {#if country === countryItem.code}
                      <Check class="mr-2 h-4 w-4" />
                    {:else}
                      <div class="mr-2 h-4 w-4"></div>
                    {/if}
                    {countryItem.name}
                  </CommandItem>
                </button>
              {/each}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>

    <!-- Comment Field with enhanced styling -->
    <div class="space-y-3" in:fly={{ y: 10, duration: 300, delay: 400 }}>
      <Label for="interest" class="block text-label-lg font-medium text-gray-300">
        How This Resource Helps
      </Label>
      <Textarea
        id="interest"
        bind:value={interest}
        placeholder={selectedContributionType
          ? `Explain how your resource will help address this ${selectedContributionType === 'issue' ? 'issue' : 'DPG standard'}...`
          : 'Tell us more about your resource and how it can benefit the project...'}
        class="min-h-[120px] w-full resize-none rounded-lg border border-dashboard-gray-600 bg-dashboard-gray-800 px-4 py-3 text-body-lg text-white placeholder:text-gray-500 focus:border-dashboard-purple-500 focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500"
      />
    </div>

    <!-- Submit Button with enhanced design -->
    <div
      class="flex justify-center pt-4 md:justify-end"
      in:fly={{ y: 10, duration: 300, delay: 450 }}
    >
      <Button
        type="submit"
        class="rounded-xl bg-dashboard-purple-500 px-8 py-3 text-label-lg font-medium text-white transition-colors hover:bg-dashboard-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dashboard-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={loading || !isFormValid}
      >
        <div class="flex items-center gap-2">
          {#if loading}
            <div class="animate-spin">
              <Icon icon="lucide:loader-2" class="h-4 w-4" />
            </div>
            <span>Submitting...</span>
          {:else}
            <Send class="h-4 w-4" />
            <span>Submit Resource</span>
          {/if}
        </div>
      </Button>
    </div>
  </form>
</div>
