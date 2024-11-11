<script>
  import "./app.css";
  import Nav from "$lib/Nav.svelte";
  import Footer from "$lib/Footer.svelte";
  export let data;
</script>

<div class="w-full min-h-screen bg-white">
  <Nav {data} />
  <slot />

  <Footer />
</div>
