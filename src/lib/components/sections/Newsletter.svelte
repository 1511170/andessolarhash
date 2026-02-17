<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="py-12 md:py-24 bg-base border-t border-border">
  <div class="max-w-3xl mx-auto px-4 md:px-6 text-center">
    <h2 class="font-display font-black text-xl md:text-3xl text-white mb-3 uppercase">
      Reciba la tasa de inversión ASIC
    </h2>
    <p class="text-body-lg text-secondary mb-8">
      Para recibir una simulación personalizada y detallada de su inversión en minería de Bitcoin, ingrese su correo electrónico.
    </p>
    <form
      class="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto"
      action="/api/newsletter"
      method="post"
    >
      <label for="newsletter-email" class="sr-only">Correo electrónico</label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        placeholder="Correo electrónico"
        required
        class="flex-1 min-w-0 px-4 py-3.5 rounded-md bg-base-card border border-border text-primary placeholder-muted text-body focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
      />
      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        CALCULAR AHORA
      </Button>
    </form>
  </div>
</section>
