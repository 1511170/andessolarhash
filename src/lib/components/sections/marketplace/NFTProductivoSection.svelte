<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';

  const sold = 1;
  const total = 100;
  const percent = (sold / total) * 100;

  const benefits = [
    'Accede a una participación digital sobre hashrate real en operación.',
    'Supera las barreras de entrada sin comprar equipos ni gestionar infraestructura.',
    'Flexibilidad y transparencia: resultados trazables en blockchain.',
    'Potencial de retorno atractivo con recompensas diarias en BTC o stablecoins.'
  ];
</script>

<section class="bg-[#15172E] py-20 px-6">
  <div class="max-w-[1280px] mx-auto">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="font-display font-black text-2xl md:text-3xl text-white mb-6 uppercase tracking-tight">
          NFT productivo respaldado por minería real de Bitcoin
        </h2>
        <ul class="space-y-3 mb-8">
          {#each benefits as item}
            <li class="flex items-start gap-2 text-white/90 font-ui text-sm leading-relaxed">
              <span class="text-brand mt-1">✓</span>
              {item}
            </li>
          {/each}
        </ul>
        <div class="mb-6">
          <p class="text-white/80 font-ui text-sm mb-2">NFTs vendidos: {sold} de {total}</p>
          <div class="h-3 rounded-full bg-[#0B0D1B] overflow-hidden">
            <div class="h-full rounded-full bg-accent-blue transition-all duration-500" style="width: {percent}%" />
          </div>
        </div>
        <div class="flex flex-wrap gap-4">
          <Button href="/marketplace/compra" variant="primary" size="lg" className="rounded-lg bg-accent-blue hover:opacity-90">
            COMPRAR NFT
          </Button>
          <Button href="/contacto" variant="outline" size="lg" className="rounded-lg">
            Registrar cuenta
          </Button>
        </div>
      </div>
      <div class="flex justify-center lg:justify-end">
        <div class="relative w-64 h-[480px] rounded-[2.5rem] border-4 border-[#1D2242] bg-[#0B0D1B] p-3 shadow-2xl">
          <div class="w-full h-full rounded-[2rem] bg-[#1D2242] overflow-hidden flex flex-col items-center justify-center p-4">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/b53493c4a6e2068d545a02853f5c9faf2212ca2e?width=200" alt="NFT" class="w-24 h-24 object-contain mb-4" />
            <p class="text-white font-display font-bold text-2xl">$28,478.23</p>
            <p class="text-white/60 font-ui text-xs mt-1">Valor estimado</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
