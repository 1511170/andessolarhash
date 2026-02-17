<script lang="ts">
  const questions = [
    '¿Qué es un NFT productivo Andes Solar Hash?',
    '¿Qué es un minero ASIC de última generación de energía digital?',
    '¿Qué infraestructura minera emplea este NFT?',
    '¿Dónde comprar un NFT?',
    '¿Cómo puedo verificar que el NFT es real y posee el procesamiento?',
    '¿Puedo comprar más de un NFT?',
    '¿Dónde se almacena el NFT después de la compra?',
    '¿Puedo transferir o vender un NFT?',
    '¿Cuáles son los detalles técnicos del NFT antes de comprar?'
  ];
</script>

<section class="bg-[#15172E] py-20 px-6">
  <div class="max-w-[1280px] mx-auto">
    <div class="grid lg:grid-cols-5 gap-12">
      <div class="lg:col-span-2">
        <h2 class="font-display font-black text-2xl md:text-3xl text-white mb-4">
          Preguntas frecuentes y definiciones clave
        </h2>
        <p class="text-white/80 font-ui text-sm leading-relaxed">
          Respuestas a las dudas más comunes sobre NFTs productivos, minería real, recompensas y verificación on-chain.
        </p>
      </div>
      <div class="lg:col-span-3">
        <ul class="space-y-2">
          {#each questions as q}
            <li>
              <a href="/contacto" class="flex items-center justify-between gap-4 py-4 border-b border-white/10 text-white font-ui text-sm hover:text-brand transition-colors no-underline group">
                <span class="flex-1">{q}</span>
                <span class="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center group-hover:border-brand shrink-0">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </span>
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>
