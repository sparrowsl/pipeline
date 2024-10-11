<script>
    export let icon;
    export let text;
    </script>
    
    <li class="flex gap-4 items-center mt-6 w-full whitespace-nowrap first:mt-0">
      <img loading="lazy" src={icon} alt="" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[17px]" />
      <span class="self-stretch my-auto">{text}</span>
    </li>