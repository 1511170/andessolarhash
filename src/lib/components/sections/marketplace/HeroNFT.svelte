<script lang="ts">
  // Imagen importada para que Vite la sirva correctamente (evita problemas con static/)
  import heroRobots from '$lib/assets/hero-robots-nft.png';
</script>

<section class="relative bg-[#0B0D1B] overflow-hidden pt-8 md:pt-16 pb-12 md:pb-20">
  <div class="absolute inset-0 opacity-90" style="background: linear-gradient(90deg, #1D2242 20.711%, rgba(16,20,41,0) 120.71%)" />
  <div class="max-w-[1280px] mx-auto px-4 md:px-6 relative z-10">
    <div class="text-center max-w-[1115px] mx-auto mb-8 md:mb-12">
      <h1 class="font-display font-black text-[32px] md:text-5xl lg:text-[72px] leading-tight mb-4 md:mb-6"
          style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        NFTs productivos basados en la minería de Bitcoin
      </h1>
      <p class="text-white font-ui text-base md:text-lg leading-[29px] md:leading-[29.25px] max-w-[350px] md:max-w-[817px] mx-auto">
        Accedé a un porcentaje de la producción minera real de nuestros equipos ASIC adquiriendo uno o más de nuestros NFTs.
      </p>
    </div>
    <div class="flex justify-center items-end">
      <div class="w-full max-w-[388px] md:max-w-[984px] aspect-[388/219] md:aspect-[983/553] flex items-end justify-center">
        <img src={heroRobots} alt="NFTs minería Bitcoin" class="w-full h-full object-contain object-bottom" />
      </div>
    </div>
  </div>
</section>
