<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="py-16 md:py-24 bg-base border-t border-border">
  <div class="max-w-3xl mx-auto px-6 text-center">
    <h2 class="font-display font-black text-2xl md:text-3xl text-white mb-3 uppercase">
      Recibe la tesis de inversión ASH
    </h2>
    <p class="text-body-lg text-secondary mb-8">
      Únete a nuestro newsletter exclusivo. Recibe análisis críticos y noticias de infraestructura que realmente importan e impactan.
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
        placeholder="Tu correo electrónico aquí."
        required
        class="flex-1 min-w-0 px-4 py-3.5 rounded-md bg-base-card border border-border text-primary placeholder-muted text-body focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
      />
      <Button type="submit" variant="primary" size="lg">
        SUSCRIBIRME
      </Button>
    </form>
  </div>
</section>
