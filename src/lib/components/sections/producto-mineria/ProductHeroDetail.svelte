<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';

  let quantity = 1;

  const product = {
    name: 'Bitcoin Miner S21 XP',
    function: 'BTC/BCH/BSV - SHA256',
    efficiency: '13.5 J/T',
    price: '$7.999.999 CLP',
    imageSrc: '/images/builder-antminer-s21-xp.png'
  };
</script>

<section class="bg-[#0B0D1B] border-b border-white/5">
  <div class="max-w-[1280px] mx-auto px-6 py-12">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Product Image -->
      <div class="aspect-square max-h-[480px] bg-[#1D2242] rounded-2xl flex items-center justify-center p-8">
        <img
          src={product.imageSrc}
          alt={product.name}
          class="w-full h-full object-contain"
        />
      </div>

      <!-- Product Details -->
      <div>
        <div class="inline-block px-3 py-1 rounded bg-white/10 text-white/70 font-ui text-xs font-bold mb-4">
          SPOT
        </div>
        <h1 class="font-display font-black text-3xl md:text-4xl text-white mb-2">
          {product.name}
        </h1>
        <p class="text-white/80 font-ui text-sm mb-1">Función: {product.function}</p>
        <p class="text-white/80 font-ui text-sm mb-6">Eficiencia: {product.efficiency}</p>

        <p class="font-display font-black text-4xl text-brand mb-8">{product.price}</p>

        <div class="flex flex-wrap items-center gap-4 mb-6">
          <div class="flex items-center border border-white/20 rounded-lg overflow-hidden">
            <button
              type="button"
              class="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Menos"
              on:click={() => quantity = Math.max(1, quantity - 1)}
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
            </button>
            <span class="w-14 h-12 flex items-center justify-center text-white font-ui font-bold border-x border-white/20">
              {quantity}
            </span>
            <button
              type="button"
              class="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Más"
              on:click={() => quantity++}
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </button>
          </div>
          <Button href="/contacto" variant="outline" size="lg" className="rounded-lg">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            Añadir a Cotización
          </Button>
          <Button href="/contacto" variant="primary" size="lg" className="rounded-lg">
            COMPRAR
          </Button>
        </div>

        <p class="text-white/80 font-ui text-sm">
          ¿Necesita hosting? Asegure el margen con nuestra tarifa de $0.088 USD/kWh.
          <a href="/hosting" class="text-brand hover:underline ml-1">Ver tarifas.</a>
        </p>
      </div>
    </div>
  </div>
</section>
