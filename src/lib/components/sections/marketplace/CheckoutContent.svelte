<script lang="ts">
  const pricePerUnit = 123; // USDT
  let quantity = 1;
  let paymentMethod = 'metamask'; // 'metamask' | 'card'

  $: total = pricePerUnit * quantity;
  $: available = 99;

  const nft = {
    title: 'ANDES SOLAR HASH #S21+',
    subtitle: 'NFT productivo respaldado por infraestructura minera real de Bitcoin.',
    collection: 'Andes Solar Hash',
    model: 'S21+',
    hashrate: '234 TH/s',
    algorithm: 'SHA-256',
    supplyTotal: 100,
    imageSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/b53493c4a6e2068d545a02853f5c9faf2212ca2e?width=500'
  };
</script>

<section class="bg-[#0B0D1B] py-16 px-6 min-h-[70vh] relative overflow-hidden">
  <!-- Background texture -->
  <div class="absolute inset-0 opacity-20 pointer-events-none">
    <img src="https://api.builder.io/api/v1/image/assets/TEMP/116dd5d02463a9aac6f70b67328f79b3ee1db3e2?width=1200" alt="" class="w-full h-full object-cover" />
  </div>

  <div class="max-w-[1100px] mx-auto relative z-10">
    <div class="grid lg:grid-cols-12 gap-10">
      <!-- Left: NFT image -->
      <div class="lg:col-span-5">
        <div class="bg-[#1D2242] rounded-2xl overflow-hidden border border-white/10 p-8 flex items-center justify-center aspect-square sticky top-28">
          <img src={nft.imageSrc} alt={nft.title} class="w-full h-full object-contain" />
        </div>
      </div>

      <!-- Right: Details + quantity + payment + summary -->
      <div class="lg:col-span-7 space-y-8">
        <div>
          <h1 class="font-display font-black text-2xl md:text-3xl text-white mb-2">{nft.title}</h1>
          <p class="text-white/80 font-ui text-sm leading-relaxed mb-6">{nft.subtitle}</p>
          <dl class="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <div class="flex justify-between"><dt class="text-white/60">Colección:</dt><dd class="text-white font-medium">{nft.collection}</dd></div>
            <div class="flex justify-between"><dt class="text-white/60">Modelo:</dt><dd class="text-white font-medium">{nft.model}</dd></div>
            <div class="flex justify-between"><dt class="text-white/60">Hashrate:</dt><dd class="text-white font-medium">{nft.hashrate}</dd></div>
            <div class="flex justify-between"><dt class="text-white/60">Algoritmo:</dt><dd class="text-white font-medium">{nft.algorithm}</dd></div>
            <div class="flex justify-between"><dt class="text-white/60">Supply total:</dt><dd class="text-white font-medium">{nft.supplyTotal} NFTs</dd></div>
            <div class="flex justify-between"><dt class="text-white/60">Disponibles:</dt><dd class="text-white font-medium">{available}</dd></div>
          </dl>
          <p class="text-white/70 font-ui text-sm mt-6 leading-relaxed">
            Cada NFT representa una participación digital limitada asociada a equipos de minería operativos.
          </p>
        </div>

        <!-- Cantidad -->
        <div>
          <label class="block text-white font-ui font-bold text-sm mb-2">Cantidad de NFTs</label>
          <p class="text-white/60 font-ui text-xs mb-4">Puedes adquirir uno o más NFTs, sujeto a disponibilidad al momento de la compra.</p>
          <div class="flex items-center gap-4">
            <div class="flex items-center border border-white/20 rounded-lg overflow-hidden bg-[#1D2242]">
              <button
                type="button"
                class="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-40"
                aria-label="Menos"
                disabled={quantity <= 1}
                on:click={() => quantity = Math.max(1, quantity - 1)}
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
              </button>
              <span class="w-14 h-12 flex items-center justify-center text-white font-ui font-bold border-x border-white/20">{quantity}</span>
              <button
                type="button"
                class="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-40"
                aria-label="Más"
                disabled={quantity >= available}
                on:click={() => quantity = Math.min(available, quantity + 1)}
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Método de pago -->
        <div>
          <label class="block text-white font-ui font-bold text-sm mb-4">Método de pago</label>
          <div class="space-y-3">
            <button
              type="button"
              class="w-full flex items-start gap-4 p-4 rounded-xl border-2 transition-colors text-left {paymentMethod === 'metamask' ? 'border-accent-blue bg-accent-blue/10' : 'border-white/10 bg-[#1D2242] hover:border-white/20'}"
              on:click={() => (paymentMethod = 'metamask')}
            >
              <div class="w-12 h-12 rounded-lg bg-[#E2761B]/20 flex items-center justify-center shrink-0">
                <span class="text-xl font-bold text-[#E2761B]" aria-hidden="true">M</span>
              </div>
              <div>
                <p class="text-white font-ui font-bold">Pagar con MetaMask</p>
                <p class="text-white/60 font-ui text-xs mt-1">Compra directa on-chain. El NFT será entregado inmediatamente a tu wallet.</p>
              </div>
            </button>
            <button
              type="button"
              class="w-full flex items-start gap-4 p-4 rounded-xl border-2 transition-colors text-left {paymentMethod === 'card' ? 'border-accent-blue bg-accent-blue/10' : 'border-white/10 bg-[#1D2242] hover:border-white/20'}"
              on:click={() => (paymentMethod = 'card')}
            >
              <div class="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
              </div>
              <div>
                <p class="text-white font-ui font-bold">Pagar con tarjeta</p>
                <p class="text-white/60 font-ui text-xs mt-1">Compra mediante proveedor de pago. El NFT se entregará al wallet indicado.</p>
              </div>
            </button>
          </div>
        </div>

        <!-- Resumen + CTA -->
        <div class="bg-[#1D2242] rounded-xl p-6 border border-white/10">
          <div class="flex justify-between items-center text-sm mb-2">
            <span class="text-white/70">NFTs seleccionados: {quantity}</span>
            <span class="text-white font-bold">${pricePerUnit * quantity} USDT</span>
          </div>
          <div class="flex justify-between items-center pt-4 border-t border-white/10">
            <span class="text-white font-ui font-bold">Precio total:</span>
            <span class="font-display font-black text-xl text-brand">${total} USDT</span>
          </div>
          <a
            href="/contacto"
            class="mt-6 w-full py-5 px-6 rounded-xl bg-brand hover:bg-[#e0831f] transition-colors font-display font-bold text-[#0B0D1B] text-lg flex items-center justify-center"
          >
            COMPRAR NFT
          </a>
        </div>

        <p class="text-white/50 font-ui text-xs leading-relaxed">
          Este NFT representa una participación digital asociada a infraestructura minera operativa. No constituye un instrumento financiero ni garantiza retornos. La propiedad es verificable en blockchain.
        </p>
      </div>
    </div>
  </div>
</section>
