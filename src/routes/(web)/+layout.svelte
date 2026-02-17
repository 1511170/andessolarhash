<script lang="ts">
  import Header from '$lib/components/sections/Header.svelte';
  import Footer from '$lib/components/sections/Footer.svelte';
</script>

<div class="min-h-screen flex flex-col bg-base">
  <Header />
  <main class="flex-1">
    <slot />
  </main>
  <Footer />
</div>
