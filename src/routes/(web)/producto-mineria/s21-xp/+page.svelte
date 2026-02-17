<script lang="ts">
  import ProductHeroDetail from '$lib/components/sections/producto-mineria/ProductHeroDetail.svelte';
  import ProductTabs from '$lib/components/sections/producto-mineria/ProductTabs.svelte';
  import ProductCurvaSpecs from '$lib/components/sections/producto-mineria/ProductCurvaSpecs.svelte';

  let activeTab = 'curva';
</script>

<svelte:head>
  <title>Bitcoin Miner S21 XP | Andes Solar Hash</title>
  <meta name="description" content="Antminer S21 XP: 270 TH/s, 13.5 J/TH, SHA256. Precio $7.999.999 CLP. Garantía 365 días. Hosting disponible en Chile." />
</svelte:head>

<ProductHeroDetail />
<ProductTabs {activeTab} on:select={(e) => (activeTab = e.detail)} />

{#if activeTab === 'curva' || activeTab === 'especificaciones'}
  <ProductCurvaSpecs />
{:else if activeTab === 'garantia'}
  <section class="bg-[#0B0D1B] py-16 px-6">
    <div class="max-w-[1280px] mx-auto">
      <h2 class="font-display font-bold text-2xl text-white mb-6">Garantía</h2>
      <ul class="space-y-3 text-white/80 font-ui text-base leading-relaxed max-w-2xl">
        <li>Garantía de <strong class="text-white">365 días</strong> desde la fecha de envío de Bitmain. Cubre reparación o reemplazo de la unidad.</li>
        <li>Aplica solo al comprador original.</li>
        <li>Anulada si no se siguen las instrucciones de uso.</li>
        <li>No incluye daños por fuente de poder incorrecta.</li>
      </ul>
    </div>
  </section>
{:else}
  <section class="bg-[#0B0D1B] py-16 px-6">
    <div class="max-w-[1280px] mx-auto text-center text-white/70 font-ui">
      <p>{activeTab === 'guia' ? 'Guía de compra próximamente.' : 'Preguntas y reviews próximamente.'}</p>
    </div>
  </section>
{/if}
