<script>
	import { ChevronDown, ChevronUp, Check } from 'lucide-svelte';

  export let project;
	const checklistItems = [
		{ 
			title: "Relevance to Sustainable Development Goals", 
			description: "Evaluate how the project aligns with and contributes to the UN Sustainable Development Goals." 
		},
		{ 
			title: "Use of Approved Open Licenses", 
			description: "Confirm that the project uses licenses approved by Open Source Initiative or Creative Commons." 
		},
		{ 
			title: "Clear Ownership", 
			description: "Establish and document clear ownership and intellectual property rights for the project." 
		},
		{ 
			title: "Platform Independence", 
			description: "Ensure the project can run on multiple platforms and is not restricted to a single technology stack." 
		},
		{ 
			title: "Documentation", 
			description: "Provide comprehensive and clear documentation for project usage, installation, and contribution." 
		},
		{ 
			title: "Mechanism for Extracting Data and Content", 
			description: "Create clear methods for users to extract and use data or content from the project." 
		},
		{ 
			title: "Adherence to Privacy and Applicable Laws", 
			description: "Ensure the project complies with relevant privacy laws and regulations." 
		},
		{ 
			title: "Adherence to Standards & Best Practices", 
			description: "Follow industry standards and best practices in development and implementation." 
		},
		{ 
			title: "Do No Harm By Design", 
			description: "Design the project to minimize potential negative impacts on users or communities." 
		},
		{ 
			title: "Data Privacy & Security", 
			description: "Implement robust data protection and security measures." 
		},
		{ 
			title: "Inappropriate & Illegal Content", 
			description: "Strictly prohibit and prevent the inclusion of inappropriate or illegal content." 
		},
		{ 
			title: "Protection from Harassment", 
			description: "Establish clear policies and mechanisms to prevent and address harassment." 
		}
	];

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
	<h2 class="text-start text-black text-2xl font-semibold font-['Inter'] mb-4">DPG Standard Checklist</h2>
	
	{#each checklistItems as item}
		<div class="border border-[#c9c9c9] rounded-md overflow-hidden">
			<div 
				on:click={() => toggleOpen(item.title)}
				class="flex items-center justify-between p-3 transition-colors cursor-pointer hover:bg-gray-50"
			>
				<div class="flex items-center gap-2">
					<div 
						on:click|stopPropagation={() => toggleChecked(item.title)}
						class="w-5 h-5 border {checkedItems.has(item.title) 
							? 'bg-green-500 border-green-500' 
							: 'border-gray-300'} flex items-center justify-center"
					>
						{#if checkedItems.has(item.title)}
							<Check class="w-4 h-4 text-white" />
						{/if}
					</div>
					<div class="text-black text-lg font-semibold font-['Inter']">{item.title}</div>
				</div>
				{#if openItems.has(item.title)}
					<ChevronUp class="text-gray-500" />
				{:else}
					<ChevronDown class="text-gray-500" />
				{/if}
			</div>
			{#if openItems.has(item.title)}
				<div class="p-4 text-black">
					<div class="flex items-center gap-1 mb-2">
						<div class="text-[#8a8a8a] text-sm font-semibold font-['Inter'] leading-normal">Verdict</div>
						<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.66001 2.01074L8.57514 4.48385L11.0482 5.39898L8.57514 6.31411L7.66001 8.78721L6.74488 6.31411L4.27177 5.39898L6.74488 4.48385L7.66001 2.01074Z" stroke="#8A8A8A" stroke-width="0.75" stroke-linejoin="round"/>
							<path d="M3.42471 7.6578L4.22413 8.83486L5.40118 9.63427L4.22413 10.4337L3.42471 11.6107L2.6253 10.4337L1.44824 9.63427L2.6253 8.83486L3.42471 7.6578Z" stroke="#8A8A8A" stroke-width="0.75" stroke-linejoin="round"/>
						</svg>
					</div>
					<p>{item.description}</p>
				</div>
			{/if}
		</div>
	{/each}
</div>
