<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="bg-[#15172E] py-20 px-6">
  <div class="max-w-[720px] mx-auto text-center">
    <h2 class="font-display font-black text-3xl md:text-4xl mb-6"
        style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      ¿Listo para Optimizar su Margen?
    </h2>
    <p class="text-white/90 font-ui text-lg leading-relaxed mb-10">
      El hosting ASIC es una inversión de alta seriedad. Permítanos entender su escala y proponerle una solución a la medida.
    </p>
    <Button href="/contacto" variant="primary" size="lg" className="rounded-lg">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
      Solicitar Cotización Consultiva
    </Button>
  </div>
</section>
