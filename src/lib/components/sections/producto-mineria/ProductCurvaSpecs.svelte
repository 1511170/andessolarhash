<script lang="ts">
  const specsProducto = [
    { label: 'Modelo', value: 'S21 XP' },
    { label: 'Hashrate Típico (TH/s)', value: '270' },
    { label: 'Crypto Algoritmo', value: 'SHA256 (BTC/BCH/BSV)' }
  ];
  const specsRendimiento = [
    { label: 'Eficiencia en Pared (J/T)', value: '13.5 J/T' },
    { label: 'Consumo en Pared (W)', value: '3645 W' },
    { label: 'Fase de Suministro AC', value: '1 (Monofásico)' },
    { label: 'Voltaje (V)', value: '220-277 V' }
  ];
  const specsHardware = [
    { label: 'Peso Neto', value: '18.7 kg' },
    { label: 'Ruido (@25°C)', value: '76 dBA' },
    { label: 'Dimensión (L×A×H)', value: '400 x 195.5 x 290 mm' }
  ];
  const specsAmbientales = [
    { label: 'Temperatura de Operación (°C)', value: '-20 a 45°C' },
    { label: 'Humedad de Operación (RH)', value: '10% - 90%' },
    { label: 'Altitud Máxima (m)', value: '< 2000 m (Aplica reducción de temperatura)' }
  ];
</script>

<div class="max-w-[1280px] mx-auto px-6 py-12">
  <div class="grid lg:grid-cols-5 gap-12">
    <!-- Left: Curva de Rendimiento + Garantía -->
    <div class="lg:col-span-3 space-y-10">
      <section>
        <h2 class="font-display font-bold text-xl text-white mb-6">Curva de Rendimiento</h2>
        <div class="space-y-6">
          <div class="bg-[#1D2242] rounded-xl p-6 border border-white/5">
            <p class="text-white/70 font-ui text-sm mb-4">Hashrate vs Temperatura</p>
            <div class="h-48 flex items-center justify-center text-white/40 font-ui text-sm rounded-lg bg-[#0B0D1B]/50">
              Gráfico (placeholder)
            </div>
          </div>
          <div class="bg-[#1D2242] rounded-xl p-6 border border-white/5">
            <p class="text-white/70 font-ui text-sm mb-4">Eficiencia vs Temperatura</p>
            <div class="h-48 flex items-center justify-center text-white/40 font-ui text-sm rounded-lg bg-[#0B0D1B]/50">
              Gráfico (placeholder)
            </div>
          </div>
        </div>
        <p class="text-white/80 font-ui text-sm leading-relaxed mt-6">
          La eficiencia de 13.5 J/T se mantiene estable bajo condiciones ideales de 25°C. Las fluctuaciones en potencia y eficiencia son típicamente del ±15%.
        </p>
      </section>

      <section>
        <h3 class="font-display font-bold text-lg text-white mb-4">Garantía</h3>
        <ul class="space-y-2 text-white/80 font-ui text-sm leading-relaxed">
          <li>Se proporciona una garantía de <strong class="text-white">365 días</strong> desde la fecha de envío de Bitmain. Esta garantía cubre la reparación o el reemplazo de la unidad.</li>
          <li>La garantía aplica solo al comprador original.</li>
          <li>Anulada si el usuario no sigue las instrucciones de uso.</li>
          <li>No incluye daños por fuente de poder incorrecta.</li>
        </ul>
      </section>
    </div>

    <!-- Right: Especificaciones Detalladas -->
    <div class="lg:col-span-2">
      <h2 class="font-display font-bold text-xl text-white mb-6">Especificaciones Detalladas</h2>
      <div class="space-y-6">
        <div>
          <h4 class="text-brand font-ui text-sm font-bold mb-3">Producto y Algoritmo</h4>
          <dl class="space-y-2">
            {#each specsProducto as row}
              <div class="flex justify-between gap-4 text-sm">
                <dt class="text-white/70">{row.label}</dt>
                <dd class="text-white font-medium">{row.value}</dd>
              </div>
            {/each}
          </dl>
        </div>
        <div>
          <h4 class="text-brand font-ui text-sm font-bold mb-3">Rendimiento Energético</h4>
          <dl class="space-y-2">
            {#each specsRendimiento as row}
              <div class="flex justify-between gap-4 text-sm">
                <dt class="text-white/70">{row.label}</dt>
                <dd class="text-white font-medium">{row.value}</dd>
              </div>
            {/each}
          </dl>
        </div>
        <div>
          <h4 class="text-brand font-ui text-sm font-bold mb-3">Detalles de Hardware</h4>
          <dl class="space-y-2">
            {#each specsHardware as row}
              <div class="flex justify-between gap-4 text-sm">
                <dt class="text-white/70">{row.label}</dt>
                <dd class="text-white font-medium">{row.value}</dd>
              </div>
            {/each}
          </dl>
        </div>
        <div>
          <h4 class="text-brand font-ui text-sm font-bold mb-3">Requisitos Ambientales ASH</h4>
          <dl class="space-y-2">
            {#each specsAmbientales as row}
              <div class="flex justify-between gap-4 text-sm">
                <dt class="text-white/70">{row.label}</dt>
                <dd class="text-white font-medium">{row.value}</dd>
              </div>
            {/each}
          </dl>
        </div>
        <div>
          <h4 class="text-brand font-ui text-sm font-bold mb-3">Notas Importantes</h4>
          <ul class="space-y-2 text-white/70 font-ui text-sm leading-relaxed">
            <li><strong class="text-white/90">(1-1)</strong> El Hashrate y la Eficiencia son valores típicos, pueden fluctuar hasta ±5%.</li>
            <li><strong class="text-white/90">(2-3)</strong> Se recomienda ambiente ventilado; el polvo y el calor extremo afectan el rendimiento.</li>
            <li><strong class="text-white/90">(2-5)</strong> La operación a gran altitud puede reducir la temperatura operativa.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
