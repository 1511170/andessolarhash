<script lang="ts">
  const pillars = [
    {
      title: 'Eficiencia Energética Superior',
      description: 'Tarifa fija de $0.088 USD/kWh que maximiza el margen operativo y posiciona su producción de Bitcoin (mineros S21) entre los costos más competitivos del mercado.',
      icon: 'lightning'
    },
    {
      title: 'Uptime Garantizado 99.9%',
      description: 'Estabilidad operativa garantizada por contrato. Infraestructura de datacenter optimizada para disipación de calor, redundancia eléctrica y minimización de interrupciones y downtime.',
      icon: 'shield'
    },
    {
      title: 'Gestión y Soporte en Chile',
      description: 'Gestión legal y operativa del equipo desde Chile. Contratos claros y soporte técnico local para simplificar la complejidad logística internacional.',
      icon: 'pin'
    }
  ];
</script>

<section class="bg-[#15172E] py-20 px-6">
  <div class="max-w-[1280px] mx-auto">
    <h2 class="font-display font-black text-3xl md:text-4xl text-center mb-16"
        style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      Los Tres Pilares de Nuestro Servicio de Hosting
    </h2>

    <div class="grid md:grid-cols-3 gap-8">
      {#each pillars as pillar}
        <article class="bg-[#1D2242] rounded-2xl p-8 border border-white/10 flex flex-col">
          <div class="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-brand mb-6">
            {#if pillar.icon === 'lightning'}
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            {:else if pillar.icon === 'shield'}
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            {:else}
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            {/if}
          </div>
          <h3 class="font-display font-bold text-xl text-brand mb-4">{pillar.title}</h3>
          <p class="text-white/80 font-ui text-sm leading-relaxed flex-1">{pillar.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
