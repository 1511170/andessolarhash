<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="relative bg-[#0B0D1B] overflow-hidden">
  <div class="max-w-[1280px] mx-auto px-6 py-16 lg:py-24">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p class="text-white/80 font-ui text-sm font-bold tracking-widest uppercase mb-3">
          Infraestructura y Eficiencia
        </p>
        <h1 class="font-display font-black text-3xl md:text-4xl lg:text-5xl leading-tight mb-6"
            style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Hosting Minero con Costo Eléctrico de Fábrica.
        </h1>
        <p class="text-white/90 font-ui text-lg leading-relaxed mb-8 max-w-xl">
          Asegure el margen de su inversión con nuestra tarifa fija de <strong class="text-white">$0.088 USD/kWh</strong> en infraestructura optimizada para el largo plazo. No más costos variables, solo acumulación eficiente.
        </p>
        <Button href="/contacto" variant="primary" size="lg" className="rounded-lg">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          Agendar Llamada de Evaluación
        </Button>
      </div>

      <div class="relative">
        <div class="aspect-[4/3] max-h-[400px] bg-[#1D2242] rounded-2xl flex items-center justify-center overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/116dd5d02463a9aac6f70b67328f79b3ee1db3e2?width=800"
            alt="Infraestructura de hosting minero"
            class="w-full h-full object-cover opacity-90"
          />
        </div>
        <div class="absolute -bottom-6 left-0 right-0 lg:right-auto lg:left-full lg:ml-6 lg:bottom-0 lg:max-w-[280px] border-2 border-brand rounded-xl bg-[#0B0D1B]/95 backdrop-blur p-6 shadow-xl">
          <p class="text-white/80 font-ui text-xs font-bold tracking-widest uppercase mb-2">
            Tarifa Eléctrica Garantizada
          </p>
          <p class="font-display font-black text-3xl text-white leading-none">
            $0.088 <span class="text-xl text-white/90">USD/kWh</span>
          </p>
          <p class="text-white/70 font-ui text-sm mt-3 leading-snug">
            El factor decisivo para mantener la rentabilidad post-Halving.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
