<script lang="ts">
  const collections = [
    { name: 'Minería 299 TH/s', ths: '299 TH/s', imageSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/b53493c4a6e2068d545a02853f5c9faf2212ca2e?width=400', ctaVariant: 'brand' },
    { name: 'Andes Solar Hash 234 TH/s', ths: '234 TH/s', imageSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/b53493c4a6e2068d545a02853f5c9faf2212ca2e?width=400', ctaVariant: 'outline' },
    { name: 'Panda 270 TH/s', ths: '270 TH/s', imageSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/b53493c4a6e2068d545a02853f5c9faf2212ca2e?width=400', ctaVariant: 'outline' }
  ];
</script>

<section class="bg-[#15172E] py-20 px-6">
  <div class="max-w-[1280px] mx-auto">
    <h2 class="font-display font-black text-3xl md:text-4xl text-white text-center mb-4">
      Colecciones Andes Solar Hash
    </h2>
    <p class="text-white/80 font-ui text-center max-w-2xl mx-auto mb-14">
      Explora la extracción activa y constante, plataformas operacionales del entramado, siempre al día con nuestro operativo minero real.
    </p>

    <div class="grid md:grid-cols-3 gap-8">
      {#each collections as item}
        <article class="bg-[#1D2242] rounded-2xl overflow-hidden border border-white/10 flex flex-col">
          <div class="aspect-square flex items-center justify-center p-8">
            <img src={item.imageSrc} alt={item.name} class="w-full h-full object-contain" />
          </div>
          <div class="p-6 flex flex-col items-center">
            <p class="text-white/80 font-ui text-sm mb-4">{item.ths}</p>
            {#if item.ctaVariant === 'brand'}
              <a href="/marketplace/compra" class="w-full py-4 px-6 rounded-lg bg-brand hover:bg-[#e0831f] transition-colors font-display font-bold text-[#0B0D1B] text-center">
                COMPRAR
              </a>
            {:else}
              <a href="/marketplace/compra" class="w-full py-4 px-6 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors font-display font-bold text-center">
                COMPRAR NFT
              </a>
            {/if}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
