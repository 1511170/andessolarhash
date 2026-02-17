<script lang="ts">
  const faqItems = [
    '¿Qué significa ROI y cuánto tiempo tarda?',
    '¿BTC (Bitcoin) es la única opción de minado?',
    '¿Por qué es tan importante la eficiencia J/TH?',
    '¿Qué garantía tengo sobre el equipo?'
  ];
  const glossaryItems = [
    'LTM (Líneas por Traspasar)',
    'Hashrate (TH/s o MH/s)',
    'Smart Contracts y HapiMint'
  ];
</script>

<section class="bg-[#0B0D1B] py-20 px-6">
  <div class="max-w-[1280px] mx-auto">
    <div class="grid lg:grid-cols-2 gap-16">
      <!-- FAQ -->
      <div>
        <h2 class="font-display font-bold text-2xl text-white mb-4">
          Preguntas Frecuentes y Definiciones Clave
        </h2>
        <p class="text-white/80 font-ui text-base leading-relaxed mb-8">
          Respuestas a las dudas más comunes sobre minería, equipos, hosting y ROI.
        </p>
      </div>

      <!-- Aspectos clave + Glosario -->
      <div class="space-y-10">
        <div>
          <h3 class="font-display font-bold text-xl text-white mb-6">
            Aspectos Clave del Negocio
          </h3>
          <ul class="space-y-3">
            {#each faqItems as item}
              <li class="flex items-start gap-3 text-white/90 font-ui text-sm leading-relaxed">
                <span class="w-2 h-2 rounded-full bg-[#4a57a8] flex-shrink-0 mt-1.5" aria-hidden="true" />
                {item}
              </li>
            {/each}
          </ul>
        </div>
        <div>
          <h3 class="font-display font-bold text-xl text-white mb-6">
            Glosario para Inversores Nuevos
          </h3>
          <ul class="space-y-3">
            {#each glossaryItems as item}
              <li class="flex items-start gap-3 text-white/90 font-ui text-sm leading-relaxed">
                <span class="w-2 h-2 rounded-full bg-[#4a57a8] flex-shrink-0 mt-1.5" aria-hidden="true" />
                {item}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
