<script>
    import { createEventDispatcher } from 'svelte';
  
    export let buttons = [
      { label: 'Donate', active: true, href: '/contribute' },
      { label: 'Apply', active: false, href: '/contribute/apply' }
    ];
    export let activeColor = 'bg-cyan-950 text-lime-100';
    export let inactiveColor = 'text-neutral-400';
    export let borderColor = 'border-teal-950';
  
    const dispatch = createEventDispatcher();
  
    function handleClick(index) {
      buttons = buttons.map((button, i) => ({
        ...button,
        active: i === index
      }));
      dispatch('buttonClick', { index, label: buttons[index].label, href: buttons[index].href });
    }
  </script>
  
  <div class="flex justify-center my-8 w-full">
    <div class="w-[60%] min-w-[300px] max-w-[800px]">
      <div class="flex flex-wrap gap-5 items-center p-2 text-4xl font-semibold leading-none text-center whitespace-nowrap border-solid border-[3px] {borderColor} rounded-[85px] max-md:text-3xl">
        {#each buttons as button, index}
          <a
            href={button.href}
            class="flex-1 gap-1 self-stretch px-4 py-6 my-auto min-w-[120px] rounded-[63px] transition-colors duration-200 ease-in-out no-underline {button.active ? activeColor : inactiveColor}"
            on:click={() => handleClick(index)}
          >
            {button.label}
          </a>
        {/each}
      </div>
    </div>
  </div>
  
  <style>
    a {
      transition: background-color 0.3s, color 0.3s;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  </style>