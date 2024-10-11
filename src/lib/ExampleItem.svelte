<script>
    export let src;
    export let alt;
    export let title;
</script>

<div class="flex flex-col items-center justify-center w-[119px]">
    <img {src} {alt} loading="lazy" class="object-contain aspect-[0.99] w-[82px]" />
    <p class="mt-5 text-2xl text-center w-full">{@html title.replace('\n', '<br />')}</p>
</div>

<style>
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 2.5em; /* Adjust this value based on your design needs */
    }
</style>