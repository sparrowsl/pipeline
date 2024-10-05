<script>
    export let imageSrc;
    export let imageAlt;
    export let title;
</script>

<div class="flex flex-col justify-center items-center p-6 bg-lime-300 rounded-[32px] w-full max-w-[270px] aspect-square">
    <img src={imageSrc} alt={imageAlt} loading="lazy" class="object-contain w-[99px] aspect-[0.93]" />
    <h3 class="mt-8 text-center whitespace-normal">{@html title}</h3>
</div>

<style>
    h3 {
        font-size: 2rem;
        line-height: 1.2;
    }

    @media (max-width: 768px) {
        h3 {
            font-size: 1.5rem;
            line-height: 1.2;
        }
    }
</style>