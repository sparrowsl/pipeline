<script>
  import { Toaster } from 'svelte-sonner';
</script>

<Toaster richColors position="top-right" closeButton />
<main class="-mb-16 h-screen overflow-hidden bg-white md:pr-0">
  <div class="flex h-full flex-col gap-0 md:flex-row md:gap-5">
    <section class="w-full flex-shrink-0 md:w-5/12">
      <div
        class="flex flex-col items-center justify-center gap-2.5 bg-cyan-950 pb-10 pl-0 pr-0 pt-10 md:h-full md:py-24 md:pl-12 md:pr-2"
      >
        <div class="mx-auto flex w-full min-w-[240px] max-w-[534px] flex-col items-center">
          <a href="/">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad49722deb9607c50bec0aa4159ff15d8108741c5e49ac832886fb785b83c09b?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
              alt="Pipeline logo"
              class="aspect-[5.95] h-[48px] max-w-full object-contain md:ml-36"
            />
          </a>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2c87d36d522646afc65e2334ae141b78ca66fc63c07d8edf349286480639e46?placeholderIfAbsent=true&apiKey=567aaefef2da4f73a3149c6bc21f1ea8"
            alt=""
            class="mt-6 aspect-[1.34] w-3/4 object-contain md:mt-48 md:w-full"
          />
        </div>
      </div>
    </section>

    <div class="flex min-h-0 flex-1 items-center justify-center">
      <slot></slot>
    </div>
  </div>
</main>
