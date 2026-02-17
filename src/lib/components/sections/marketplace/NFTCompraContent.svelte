<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';

  const nft = {
    id: 'S21+',
    title: 'ANDES SOLAR HASH #S21+',
    subtitle: 'NFT productivo respaldado por infraestructura minera real de Bitcoin.',
    model: 'S21+',
    hashrate: '234 TH/s',
    algorithm: 'SHA-256',
    status: 'Operativo',
    sold: 1,
    total: 100,
    imageSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/b53493c4a6e2068d545a02853f5c9faf2212ca2e?width=500'
  };
</script>

<section class="bg-[#0B0D1B] py-16 px-6 min-h-[60vh]">
  <div class="max-w-[1280px] mx-auto">
    <div class="grid lg:grid-cols-12 gap-10 lg:gap-12">
      <!-- Left: Product image + CTA -->
      <div class="lg:col-span-4">
        <div class="bg-[#1D2242] rounded-2xl overflow-hidden border border-white/10 p-8 flex items-center justify-center aspect-square mb-6">
          <img src={nft.imageSrc} alt={nft.title} class="w-full h-full object-contain" />
        </div>
        <Button href="/marketplace/compra/checkout" variant="primary" size="lg" className="w-full rounded-xl py-5 text-lg">
          COMPRAR NFT
        </Button>
        <p class="text-white/70 font-ui text-sm text-center mt-4">
          Pago con tarjeta o MetaMask
        </p>
      </div>

      <!-- Middle: Description + specs -->
      <div class="lg:col-span-4">
        <h1 class="font-display font-black text-2xl md:text-3xl text-white mb-2">
          {nft.title}
        </h1>
        <p class="text-white/80 font-ui text-sm leading-relaxed mb-6">
          {nft.subtitle}
        </p>
        <div class="inline-block px-4 py-2 rounded-lg bg-brand/20 border border-brand text-brand font-ui text-sm font-bold mb-8">
          Colección limitada — {nft.total} NFTs
        </div>

        <dl class="space-y-4 mb-8">
          <div class="flex justify-between gap-4 py-2 border-b border-white/10">
            <dt class="text-white/70 font-ui text-sm">Modelo:</dt>
            <dd class="text-white font-ui font-medium text-sm text-right">{nft.model}<br /><span class="text-brand">{nft.hashrate}</span></dd>
          </div>
          <div class="flex justify-between gap-4 py-2 border-b border-white/10">
            <dt class="text-white/70 font-ui text-sm">Hashrate asociado:</dt>
            <dd class="text-white font-ui font-medium text-sm">{nft.algorithm}</dd>
          </div>
          <div class="flex justify-between gap-4 py-2 border-b border-white/10">
            <dt class="text-white/70 font-ui text-sm">Estado:</dt>
            <dd class="text-white font-ui font-medium text-sm text-right">{nft.status}<br /><span class="text-white/70">{nft.sold} / {nft.total}</span></dd>
          </div>
        </dl>

        <p class="text-white/60 font-ui text-xs leading-relaxed">
          Este NFT no constituye un instrumento financiero ni garantiza retornos. Representa una participación digital asociada a infraestructura minera operativa.
        </p>
      </div>

      <!-- Right: ¿Qué representa este NFT? -->
      <div class="lg:col-span-4 relative">
        <div class="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/b53493c4a6e2068d545a02853f5c9faf2212ca2e?width=400" alt="" class="w-full h-full object-contain" />
        </div>
        <div class="relative z-10">
          <h2 class="font-display font-bold text-lg text-white uppercase tracking-wide mb-4">
            ¿Qué representa este NFT?
          </h2>
          <p class="text-white/85 font-ui text-sm leading-relaxed">
            Este NFT representa una participación digital limitada asociada a infraestructura minera operativa de Bitcoin. La propiedad es verificable en blockchain y permite al titular formar parte del ecosistema Andes Solar Hash.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
