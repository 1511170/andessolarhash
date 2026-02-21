<script lang="ts">
  const faqItems = [
    '¿Qué significa ROI y cuánto tiempo tarda?',
    '¿Por qué es tan importante la eficiencia (J/TH)?',
    '¿Qué garantía tengo sobre el equipo?'
  ];
  const glossaryItems = [
    'J/TH (Julios por Terahash)',
    'Hashrate (TH/s o MH/s)',
    'Smart Contract y MetaMask'
  ];
</script>

<section class="bg-[#0B0D1B] py-16 md:py-20 px-4 md:px-6">
  <div class="max-w-[1280px] mx-auto">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
      <!-- FAQ -->
      <div>
        <h2 class="font-display font-black text-2xl md:text-3xl text-white mb-4 uppercase tracking-wide">
          Preguntas Frecuentes y Definiciones Clave
        </h2>
        <p class="text-white/80 font-ui text-sm md:text-base leading-relaxed mb-8">
          Conocé los términos, métricas y criterios fundamentales que impactan en la eficiencia, el retorno y la toma de decisiones dentro del ecosistema minero.
        </p>
      </div>

      <!-- Aspectos clave + Glosario -->
      <div class="space-y-8 md:space-y-10">
        <div>
          <h3 class="font-display font-bold text-brand text-lg md:text-xl mb-4 uppercase tracking-wide">
            Aspectos Clave del Negocio
          </h3>
          <ul class="space-y-2 divide-y divide-white/10">
            {#each faqItems as item}
              <li class="flex items-center justify-between gap-3 py-3 text-white font-display font-bold text-sm md:text-base">
                <span>{item}</span>
                <span class="shrink-0 w-[18px] h-[18px] text-accent-blue" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </span>
              </li>
            {/each}
          </ul>
        </div>
        <div>
          <h3 class="font-display font-bold text-brand text-lg md:text-xl mb-4 uppercase tracking-wide">
            Glosario para Inversores Nuevos
          </h3>
          <ul class="space-y-2 divide-y divide-white/10">
            {#each glossaryItems as item}
              <li class="flex items-center justify-between gap-3 py-3 text-white font-display font-bold text-sm md:text-base">
                <span>{item}</span>
                <span class="shrink-0 w-[18px] h-[18px] text-accent-blue" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
