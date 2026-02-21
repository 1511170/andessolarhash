<script lang="ts">
  import collectionRobotBlack from '$lib/assets/collection-robot-black.png';
  import collectionRobotPanda from '$lib/assets/collection-robot-panda.png';
  import collectionRobotRosa from '$lib/assets/collection-robot-rosa.png';

  const collections = [
    { imageSrc: collectionRobotBlack, cta: 'COMPRAR', href: '/marketplace/compra', active: true },
    { imageSrc: collectionRobotPanda, cta: 'MUY PRONTO', href: '#', active: false },
    { imageSrc: collectionRobotRosa, cta: 'MUY PRONTO', href: '#', active: false }
  ];
</script>

<section class="bg-[#15172E] py-16 md:py-20 px-4 md:px-6">
  <div class="max-w-[1280px] mx-auto">
    <h2 class="font-display font-black text-2xl md:text-[36px] text-center mb-4 uppercase leading-[40px]"
        style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      Colecciones Andes Solar Hash
    </h2>
    <p class="text-white font-ui text-center text-base md:text-lg leading-[29px] max-w-[325px] md:max-w-[817px] mx-auto mb-12 md:mb-14">
      Explora la colección activa y conoce las próximas expansiones del ecosistema, siempre alineadas con respaldo operativo real.
    </p>

    <div class="grid md:grid-cols-3 gap-6 md:gap-8">
      {#each collections as item}
        <article class="flex flex-col items-center">
          <div class="w-full max-w-[315px] md:max-w-[338px] aspect-square flex items-center justify-center overflow-hidden rounded-xl {item.active ? '' : 'mix-blend-luminosity'}">
            <img src={item.imageSrc} alt="Colección NFT" class="w-full h-full object-cover" />
          </div>
          <div class="mt-4 w-full max-w-[315px] md:max-w-[338px] flex justify-center">
            {#if item.active}
              <a href={item.href} class="w-full py-4 px-6 rounded-full bg-brand hover:bg-[#e0831f] transition-colors font-display font-bold text-[#0B0D1B] text-sm md:text-[14px] text-center">
                {item.cta}
              </a>
            {:else}
              <span class="w-full py-4 px-6 rounded-full bg-[#d1d5db] font-display font-bold text-[#0B0D1B] text-sm md:text-[14px] text-center cursor-default">
                {item.cta}
              </span>
            {/if}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
