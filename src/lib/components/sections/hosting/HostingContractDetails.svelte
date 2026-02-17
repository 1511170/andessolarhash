<script lang="ts">
  const contractItems = [
    { label: 'Tarifa Eléctrica Fija', value: '$0.088 USD/kWh' },
    { label: 'Monitoreo Técnico', value: '24 Horas / 7 Días a la semana', icon: 'clock' },
    { label: 'Uptime Garantizado', value: '99.9% (SLA en contrato)' },
    { label: 'Mantenimiento de Hardware', value: 'Soporte Local y Preventivo', icon: 'wrench' },
    { label: 'Duración Estándar', value: '12 Meses (Renovable)' }
  ];
</script>

<section class="bg-[#0B0D1B] py-20 px-6">
  <div class="max-w-[1280px] mx-auto">
    <h2 class="font-display font-black text-3xl md:text-4xl text-center mb-14"
        style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      Detalles del Contrato de Hosting Anual
    </h2>

    <div class="max-w-2xl mx-auto space-y-4">
      {#each contractItems as item}
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-4 border-b border-white/10">
          <span class="text-white/80 font-ui text-base">{item.label}</span>
          <span class="text-white font-ui font-medium text-base flex items-center gap-2">
            {#if item.icon === 'clock'}
              <svg class="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            {:else if item.icon === 'wrench'}
              <svg class="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            {/if}
            {item.value}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>
