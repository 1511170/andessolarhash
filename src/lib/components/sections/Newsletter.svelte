<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';

  /** Optional override for product-mineria (Figma: "RECIBE LA TESIS DE INVERSIÓN ASH.") */
  export let title: string = 'Reciba la tasa de inversión ASIC';
  export let description: string = 'Para recibir una simulación personalizada y detallada de su inversión en minería de Bitcoin, ingrese su correo electrónico.';
  export let placeholder: string = 'Correo electrónico';
  export let buttonText: string = 'CALCULAR AHORA';
</script>

<section class="py-12 md:py-24 bg-base border-t border-border">
  <div class="max-w-3xl mx-auto px-4 md:px-6 text-center">
    <h2 class="font-display font-black text-xl md:text-3xl text-white mb-3 uppercase">
      {title}
    </h2>
    <p class="text-body-lg text-secondary mb-8">
      {description}
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
        placeholder={placeholder}
        required
        class="flex-1 min-w-0 px-4 py-3.5 rounded-md bg-base-card border border-border text-primary placeholder-muted text-body focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
      />
      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        {buttonText}
      </Button>
    </form>
  </div>
</section>
