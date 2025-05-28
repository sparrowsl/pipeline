<script>
  import Icon from '@iconify/svelte';
  import * as Popover from '$lib/components/ui/popover';

  export let project;
  $: dpgStatuses = project.dpgStatus?.status;

  // Separate completed and incomplete items for better focus
  $: completedItems = dpgStatuses?.filter((item) => item.overallScore === 1) || [];
  $: incompleteItems = dpgStatuses?.filter((item) => item.overallScore !== 1) || [];

  // DPG Standard icons for better visual representation
  const standardIcons = {
    'Relevance to Sustainable Development Goals (SDGs)': 'mdi:earth',
    'Use of Approved Open Licenses': 'mdi:license',
    'Clear Ownership': 'mdi:account-check',
    'Platform Independence': 'mdi:devices',
    Documentation: 'mdi:file-document',
    'Mechanism for Extracting Data and Content': 'mdi:database-export',
    'Adherence to Privacy and Applicable Laws': 'mdi:shield-lock',
    'Adherence to Standards & Best Practices': 'mdi:check-circle',
    'Do No Harm By Design': 'mdi:heart-plus',
  };

  function getIconForStandard(name) {
    return standardIcons[name] || 'mdi:checkbox-marked-circle';
  }
</script>

<div class="w-full space-y-8">
  {#if dpgStatuses != null}
    <!-- Progress Overview -->
    <div class="space-y-4 text-center">
      <div
        class="inline-flex items-center gap-4 px-6 py-4 border rounded-2xl border-dashboard-gray-700 bg-gradient-to-r from-dashboard-purple-500/10 to-dashboard-yellow-400/10"
      >
        <Icon icon="mdi:trophy" class="w-8 h-8 text-dashboard-yellow-400" />
        <div>
          <div class="font-semibold text-white text-display-lg">
            {project.dpgCount}<span class="text-gray-400">/9</span>
          </div>
          <div class="text-gray-300 text-body-md">Standards Complete</div>
        </div>
      </div>

      <div class="w-full h-4 max-w-md mx-auto overflow-hidden rounded-full bg-dashboard-gray-700">
        <div
          class="h-4 transition-all duration-700 ease-out bg-gradient-to-r from-dashboard-yellow-400 to-dashboard-purple-500"
          style="width: {(project.dpgCount / 9) * 100}%"
        ></div>
      </div>
    </div>

    <!-- Action Required Section - Highlight Incomplete Items -->
    {#if incompleteItems.length > 0}
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <Icon icon="mdi:alert-circle" class="w-6 h-6 text-dashboard-yellow-400" />
          <h3 class="font-semibold text-white text-heading-lg">
            Action Required ({incompleteItems.length} remaining)
          </h3>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          {#each incompleteItems as item}
            <Popover.Root>
              <Popover.Trigger
                class="p-4 text-left transition-all duration-200 border group rounded-xl border-red-500/30 bg-red-500/5 hover:border-red-500/50 hover:bg-red-500/10"
              >
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0 p-2 rounded-lg bg-red-500/10">
                    <Icon icon={getIconForStandard(item.name)} class="w-5 h-5 text-red-400" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="font-medium text-white line-clamp-2 text-heading-sm">
                      {item.name}
                    </h4>
                    <p class="mt-1 text-red-300 text-body-sm">Needs attention</p>
                  </div>
                  <Icon
                    icon="mdi:arrow-right"
                    class="w-4 h-4 text-red-400 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Popover.Trigger>

              <Popover.Content
                class="max-w-lg p-6 space-y-4 border w-96 rounded-2xl border-dashboard-gray-700 bg-dashboard-gray-900 "
              >
                <div class="flex items-center gap-3 mb-4">
                  <Icon
                    icon={getIconForStandard(item.name)}
                    class="w-6 h-6 text-dashboard-yellow-400"
                  />
                  <h4 class="font-semibold text-white text-heading-md">{item.name}</h4>
                </div>

                <div class="space-y-4">
                  <div
                    class="p-4 border rounded-xl border-dashboard-gray-600 bg-dashboard-gray-900"
                  >
                    <div class="flex items-center gap-2 mb-3">
                      <Icon icon="mage:stars-b" class="w-5 h-5 text-dashboard-yellow-400" />
                      <span class="font-medium text-label-lg text-dashboard-yellow-400"
                        >AI Assessment</span
                      >
                    </div>
                    <p class="leading-relaxed text-gray-300 text-body-md">
                      {item.explanation ||
                        'This standard requires further review and documentation.'}
                    </p>
                  </div>

                  <div class="p-4 border rounded-xl border-yellow-500/30 bg-yellow-500/5">
                    <div class="flex items-center gap-2 mb-2">
                      <Icon icon="mdi:lightbulb" class="w-5 h-5 text-yellow-400" />
                      <span class="font-medium text-yellow-400 text-label-md">Next Steps</span>
                    </div>
                    <p class="text-gray-300 text-body-sm">
                      Review the requirements for this standard and update your project
                      documentation accordingly.
                    </p>
                  </div>
                </div>
              </Popover.Content>
            </Popover.Root>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Completed Standards Section -->
    {#if completedItems.length > 0}
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <Icon icon="mdi:check-circle" class="w-6 h-6 text-green-400" />
          <h3 class="font-semibold text-white text-heading-lg">
            Completed Standards ({completedItems.length})
          </h3>
        </div>

        <div class="grid gap-3 md:grid-cols-3">
          {#each completedItems as item}
            <Popover.Root>
              <Popover.Trigger
                class="p-4 text-left transition-all duration-200 border group rounded-xl border-green-500/30 bg-green-500/5 hover:bg-green-500/10"
              >
                <div class="flex items-center gap-3">
                  <div class="flex-shrink-0 p-2 rounded-lg bg-green-500/10">
                    <Icon icon={getIconForStandard(item.name)} class="w-5 h-5 text-green-400" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="font-medium text-white line-clamp-2 text-heading-sm">
                      {item.name}
                    </h4>
                    <div class="flex items-center gap-1 mt-1">
                      <Icon icon="mdi:check" class="w-3 h-3 text-green-400" />
                      <span class="text-green-300 text-body-sm">Complete</span>
                    </div>
                  </div>
                </div>
              </Popover.Trigger>

              <Popover.Content
                class="max-w-lg p-6 space-y-4 border w-96 rounded-2xl border-dashboard-gray-700 bg-dashboard-gray-900 "
              >
                <div class="flex items-center gap-3 mb-4">
                  <Icon icon={getIconForStandard(item.name)} class="w-6 h-6 text-green-400" />
                  <h4 class="font-semibold text-white text-heading-md">{item.name}</h4>
                  <Icon icon="mdi:check-circle" class="w-5 h-5 text-green-400" />
                </div>

                <div class="space-y-4">
                  <div class="p-4 border rounded-xl border-green-500/30 bg-green-500/5">
                    <div class="flex items-center gap-2 mb-2">
                      <Icon icon="mdi:check-circle" class="w-5 h-5 text-green-400" />
                      <span class="font-medium text-green-400 text-label-md">Status: Complete</span>
                    </div>
                    <p class="text-gray-300 text-body-sm">
                      This standard has been successfully met by your project.
                    </p>
                  </div>

                  <div
                    class="p-4 border rounded-xl border-dashboard-gray-600 bg-dashboard-gray-900"
                  >
                    <div class="flex items-center gap-2 mb-3">
                      <Icon icon="mage:stars-b" class="w-5 h-5 text-dashboard-yellow-400" />
                      <span class="font-medium text-label-md text-dashboard-yellow-400"
                        >AI Assessment</span
                      >
                    </div>
                    <p class="leading-relaxed text-gray-300 text-body-md">
                      {item.explanation || 'This standard has been successfully implemented.'}
                    </p>
                  </div>
                </div>
              </Popover.Content>
            </Popover.Root>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Final Recommendation -->
    <div class="p-6 border rounded-2xl border-dashboard-gray-700 bg-dashboard-gray-800/50">
      <div class="flex items-center gap-3 mb-4">
        <Icon icon="mdi:star-check" class="w-6 h-6 text-dashboard-yellow-400" />
        <h3 class="font-semibold text-white text-heading-lg">Overall Assessment</h3>
      </div>

      <div class="p-4 border rounded-xl border-dashboard-gray-600 bg-dashboard-gray-900">
        <p class="mb-4 leading-relaxed text-gray-300 text-body-lg">
          {project.dpgStatus.final_recommendation}
        </p>

        <div class="flex items-center gap-4 pt-4 border-t border-dashboard-gray-700">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-green-400 rounded-full"></div>
            <span class="text-gray-400 text-body-sm">{completedItems.length} Complete</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-red-400 rounded-full"></div>
            <span class="text-gray-400 text-body-sm">{incompleteItems.length} Remaining</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-dashboard-yellow-400"></div>
            <span class="text-gray-400 text-body-sm"
              >{Math.round((project.dpgCount / 9) * 100)}% Complete</span
            >
          </div>
        </div>
      </div>
    </div>
  {:else}
    <!-- Loading State -->
    <div class="space-y-6 text-center">
      <div>
        <h3 class="mb-2 font-semibold text-white text-heading-lg">DPG Standards Evaluation</h3>
        <p class="text-gray-400 text-body-lg">
          Analyzing project compliance with Digital Public Good standards...
        </p>
      </div>

      <div class="flex flex-col items-center gap-4 py-12">
        <div class="relative">
          <Icon icon="lucide:loader-2" class="w-12 h-12 animate-spin text-dashboard-yellow-400" />
        </div>
        <p class="font-medium text-gray-300 text-body-lg">Evaluation in progress</p>
      </div>
    </div>
  {/if}
</div>
