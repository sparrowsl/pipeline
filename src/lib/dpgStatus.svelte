<script>
  import { ChevronDown, ChevronUp, Check } from 'lucide-svelte';
  import Icon from '@iconify/svelte';

  export let project;

  $: dpgStatuses = project.dpgStatus.status;

  let openItems = new Set();
  let checkedItems = new Set();

  function toggleOpen(title) {
    if (openItems.has(title)) {
      openItems.delete(title);
    } else {
      openItems.add(title);
    }
    openItems = openItems;
  }

  function toggleChecked(title) {
    if (checkedItems.has(title)) {
      checkedItems.delete(title);
    } else {
      checkedItems.add(title);
    }
    checkedItems = checkedItems;
  }
</script>

<div class="w-full space-y-2">
  {#if dpgStatuses}
    <h2 class="mb-4 text-start font-['Inter'] text-2xl font-semibold text-black">
      DPG Standard Checklist - {project.dpgCount}/9
    </h2>

    {#each dpgStatuses as item}
      <div class="overflow-hidden rounded-md border border-[#c9c9c9]">
        <div
          on:click={() => toggleOpen(item.name)}
          class="flex cursor-pointer items-center justify-between p-3 transition-colors hover:bg-gray-50"
        >
          <div class="flex items-center gap-2">
            <div
              on:click|stopPropagation={() => toggleChecked(item.name)}
              class="h-5 w-5 border
              {item.overallScore === 1
                ? 'border-green-500 bg-green-500'
                : checkedItems.has(item.name)
                  ? 'border-gray-500 bg-gray-500'
                  : 'border-gray-300'}
              flex items-center justify-center"
            >
              {#if checkedItems.has(item.name) || item.overallScore === 1}
                <Check class="h-4 w-4 text-white" />
              {/if}
            </div>
            <div class="font-['Inter'] text-lg font-semibold text-black">{item.name}</div>
          </div>
          {#if openItems.has(item.name)}
            <ChevronUp class="text-gray-500" />
          {:else}
            <ChevronDown class="text-gray-500" />
          {/if}
        </div>
        {#if openItems.has(item.name)}
          <div class="p-4 text-black">
            <div class="mb-2 flex items-center gap-1">
              <div class="font-['Inter'] text-sm font-semibold leading-normal text-[#8a8a8a]">
                Verdict
              </div>
              <Icon icon="mage:stars-b" class="text-2xl" />
            </div>
            <p>{item.explanation || 'Evaluating...'}</p>
          </div>
        {/if}
      </div>
    {/each}
    <p class="text-left text-sm text-[#8a8a8a]">{project.dpgStatus.final_recommendation}</p>
  {:else}
    <h2 class="mb-4 text-start font-['Inter'] text-2xl font-semibold text-black">
      DPG Standard Checklist
    </h2>
    <div class="flex flex-col items-center gap-4">
      <p class="text-center font-['Inter'] text-lg font-semibold text-[#8a8a8a]">
        DPG Standard Checklist evaluating...
      </p>
    </div>
  {/if}
</div>
