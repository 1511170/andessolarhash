<script lang="ts">
  import mockupWalletNft from '$lib/assets/mockup-wallet-nft.png';
  import mockupSombra from '$lib/assets/mockup-wallet-nft-sombra.png';

  const sold = 1;
  const total = 100;
  const percent = (sold / total) * 100;

  const benefits = [
    'Activo digital limitado (100 NFTs)',
    'Respaldo en equipos reales de minería',
    'Trazabilidad y transparencia',
    'Propiedad verificable en tu wallet.'
  ];
</script>

<section class="bg-[#15172E] py-16 md:py-20 px-4 md:px-6">
  <div class="max-w-[1280px] mx-auto">
    <div class="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
      <div class="order-2 lg:order-1">
        <h2 class="font-display font-black text-[28px] md:text-[27.877px] text-white uppercase leading-[31px] mb-4">
          NFT productivo respaldado<br />por minería real de Bitcoin
        </h2>
        <p class="text-white font-ui text-[15px] md:text-[18px] leading-[24px] mb-6">
          Accede a una participación digital limitada asociada a infraestructura minera operativa.
        </p>
        <ul class="space-y-1 text-white font-display font-black text-[15px] md:text-[14.758px] leading-[36px] mb-8">
          {#each benefits as item}
            <li>✓ {item}</li>
          {/each}
        </ul>
        <div class="bg-[#161932] rounded-[6.5px] p-6 md:p-8 mb-6">
          <p class="font-display font-black text-white text-[20px] leading-[24px] mb-1">NFTs vendidos: {sold} de {total}</p>
          <div class="h-[14px] rounded-full bg-white overflow-hidden mb-2">
            <div class="h-full rounded-full transition-all duration-500" style="width: {percent}%; background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%)" />
          </div>
          <p class="font-display font-black text-brand text-[15px] md:text-[14.758px] leading-[24px] mb-4">Disponibles actualmente: {total - sold}</p>
          <p class="font-ui font-medium text-white text-[15px] md:text-[18px] leading-[24px]">
            Puedes adquirir uno o más NFTs, según disponibilidad al momento de la compra.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-3">
          <a href="/marketplace/compra" class="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-[#4a57a8] hover:opacity-90 transition-opacity font-display font-bold text-brand text-[15px] md:text-[14.758px]">
            Ver NFT
          </a>
          <a href="/marketplace/compra" class="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-brand hover:bg-[#e0831f] transition-colors font-display font-bold text-[#0B0D1B] text-[15px] md:text-[14.758px]">
            COMPRAR NFT
          </a>
        </div>
        <p class="mt-4 text-brand font-ui font-medium text-[15px] md:text-[14.758px] text-center sm:text-left">
          Pago con tarjeta o MetaMask
        </p>
      </div>
      <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
        <div class="relative w-[310px] md:w-[408px] h-[466px] md:h-[612px] flex items-center justify-center">
          <!-- Sombra/glow según Figma (detrás del teléfono) -->
          <img src={mockupSombra} alt="" class="absolute inset-0 w-full h-full object-contain object-bottom mix-blend-screen opacity-90" aria-hidden="true" />
          <!-- Mockup teléfono con wallet y NFT S21+ -->
          <img src={mockupWalletNft} alt="NFT Andes Solar Hash - Wallet con S21+ 234 TH/s" class="relative z-10 w-full h-full object-contain" />
          <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#15172E] to-transparent pointer-events-none z-20" />
        </div>
      </div>
    </div>
  </div>
</section>
