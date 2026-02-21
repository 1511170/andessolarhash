<script lang="ts">
  const questions = [
    '¿Qué es un NFT productivo en Andes Solar Hash?',
    '¿Puedo comprar más de un NFT?',
    '¿En qué se diferencia este NFT de otros proyectos de minería digital?',
    '¿Qué infraestructura minera respalda este NFT?',
    '¿Dónde se almacena el NFT después de la compra?',
    '¿Dónde están ubicados los equipos de minería?',
    '¿Puedo transferir o vender mi NFT?',
    '¿Este NFT garantiza ingresos o retornos?',
    '¿Qué nivel de conocimiento necesito para participar?',
    '¿Cuántos NFTs existen y por qué el suministro es limitado?',
    '¿Cómo puedo verificar que el NFT es real y que soy el propietario?',
    '¿Dónde puedo ver los detalles técnicos del NFT antes de comprar?'
  ];
</script>

<section class="bg-[#15172E] py-16 md:py-20 px-4 md:px-6">
  <div class="max-w-[1280px] mx-auto">
    <div class="grid lg:grid-cols-5 gap-10 md:gap-12">
      <div class="lg:col-span-2">
        <h2 class="font-display font-black text-xl md:text-[28px] text-white mb-4 uppercase leading-tight">
          Preguntas Frecuentes y Definiciones Clave
        </h2>
        <p class="text-white font-ui text-sm md:text-base leading-relaxed" style="color: rgba(255, 255, 255, 1);">
          Respuestas esenciales para entender cómo funciona el NFT productivo, su respaldo en infraestructura minera real y la forma en que se verifica la propiedad en blockchain.
        </p>
      </div>
      <div class="lg:col-span-3">
        <ul class="space-y-0 divide-y divide-white/10">
          {#each questions as q}
            <li>
              <a href="/contacto" class="flex items-center justify-between gap-4 py-4 text-white font-display font-bold text-sm md:text-[18px] hover:text-brand transition-colors no-underline group">
                <span class="flex-1">{q}</span>
                <span class="w-5 h-5 text-accent-blue shrink-0 flex items-center justify-center">
                  <svg class="w-full h-full rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </span>
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>
