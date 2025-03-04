<script>
	import { ChevronDown, ChevronUp, Check } from 'lucide-svelte';

  export let project;

  
  const dpgStatuses = project.dpgStatuses;

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
	<h2 class="text-start text-black text-2xl font-semibold font-['Inter'] mb-4">DPG Standard Checklist	- {project.dpgCount}/9</h2>
	
	

	{#each dpgStatuses as item}
		<div class="border border-[#c9c9c9] rounded-md overflow-hidden">
			<div 
				on:click={() => toggleOpen(item.name)}
				class="flex items-center justify-between p-3 transition-colors cursor-pointer hover:bg-gray-50"
			>
				<div class="flex items-center gap-2">
					<div 
						on:click|stopPropagation={() => toggleChecked(item.name)}
						class="w-5 h-5 border 
							{item.score === 1 
								? 'bg-green-500 border-green-500' 
								: checkedItems.has(item.name) 
									? 'bg-gray-500 border-gray-500' 
									: 'border-gray-300'} 
							flex items-center justify-center"
					>
						{#if checkedItems.has(item.name) || item.score === 1}
							<Check class="w-4 h-4 text-white" />
						{/if}
					</div>
					<div class="text-black text-lg font-semibold font-['Inter']">{item.name}</div>
				</div>
				{#if openItems.has(item.name)}
					<ChevronUp class="text-gray-500" />
				{:else}
					<ChevronDown class="text-gray-500" />
				{/if}
			</div>
			{#if openItems.has(item.name)}
				<div class="p-4 text-black">
					<div class="flex items-center gap-1 mb-2">
						<div class="text-[#8a8a8a] text-sm font-semibold font-['Inter'] leading-normal">Verdict</div>
						<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.66001 2.01074L8.57514 4.48385L11.0482 5.39898L8.57514 6.31411L7.66001 8.78721L6.74488 6.31411L4.27177 5.39898L6.74488 4.48385L7.66001 2.01074Z" stroke="#8A8A8A" stroke-width="0.75" stroke-linejoin="round"/>
							<path d="M3.42471 7.6578L4.22413 8.83486L5.40118 9.63427L4.22413 10.4337L3.42471 11.6107L2.6253 10.4337L1.44824 9.63427L2.6253 8.83486L3.42471 7.6578Z" stroke="#8A8A8A" stroke-width="0.75" stroke-linejoin="round"/>
						</svg>
					</div>
					<p>{item.explanation}</p>
				</div>
			{/if}
		</div>

		{:else}

		<div class="w-full space-y-2">
			<h2 class="text-start text-black text-2xl font-semibold font-['Inter'] mb-4">
				DPG Standard Checklist - {project.dpgCount}/9
			</h2>
		</div>
	{/each}



</div>
