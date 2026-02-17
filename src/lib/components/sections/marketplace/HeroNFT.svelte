<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="relative bg-[#0B0D1B] overflow-hidden pt-12 pb-20">
  <div class="absolute inset-0 opacity-30" style="background: linear-gradient(180deg, #1D2242 0%, transparent 50%)" />
  <div class="max-w-[1280px] mx-auto px-6 relative z-10">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <h1 class="font-display font-black text-3xl md:text-4xl lg:text-5xl leading-tight mb-6"
          style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        NFTs productivos basados en la minería de Bitcoin
      </h1>
      <p class="text-white/90 font-ui text-lg leading-relaxed">
        Accede a un porcentaje de producción minera real de nuestros equipos ASIC adquiriendo una de nuestras NFTs.
      </p>
    </div>
    <div class="flex justify-center gap-4 md:gap-8 items-end flex-wrap">
      <div class="w-32 md:w-44 flex flex-col items-center">
        <div class="aspect-square w-full rounded-2xl bg-[#1D2242] border border-white/10 flex items-center justify-center p-4 overflow-hidden">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/b53493c4a6e2068d545a02853f5c9faf2212ca2e?width=300" alt="NFT Minería" class="w-full h-full object-contain" />
        </div>
        <span class="text-white/60 font-ui text-xs mt-2">299 TH/s</span>
      </div>
      <div class="w-36 md:w-52 flex flex-col items-center">
        <div class="aspect-square w-full rounded-2xl bg-[#1D2242] border-2 border-brand/50 flex items-center justify-center p-4 overflow-hidden">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/b53493c4a6e2068d545a02853f5c9faf2212ca2e?width=350" alt="NFT Andes Solar Hash" class="w-full h-full object-contain" />
        </div>
        <span class="text-brand font-ui text-sm font-bold mt-2">234 TH/s</span>
      </div>
      <div class="w-32 md:w-44 flex flex-col items-center">
        <div class="aspect-square w-full rounded-2xl bg-[#1D2242] border border-white/10 flex items-center justify-center p-4 overflow-hidden">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/b53493c4a6e2068d545a02853f5c9faf2212ca2e?width=300" alt="NFT Panda" class="w-full h-full object-contain" />
        </div>
        <span class="text-white/60 font-ui text-xs mt-2">270 TH/s</span>
      </div>
    </div>
  </div>
</section>
