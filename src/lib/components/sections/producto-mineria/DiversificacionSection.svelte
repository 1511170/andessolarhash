<script lang="ts">
  import MinerCard from './MinerCard.svelte';

  const l9Products = [
    {
      title: 'Antminer L9 17000',
      specs: [
        'Hashrate: 17.000 MH/s',
        'ROI Estimado (con Hosting): 11-15 Meses',
        'Minable: LTC + DOGE'
      ],
      price: '$8.600.000 CLP',
      imageSrc: ''
    },
    {
      title: 'Antminer L9 16000',
      specs: [
        'Hashrate: 16.000 MH/s',
        'ROI Estimado (con Hosting): 14-18 Meses',
        'Minable: LTC + DOGE'
      ],
      price: '$8.200.000 CLP',
      imageSrc: ''
    },
    {
      title: 'Antminer L9 15000',
      specs: [
        'Hashrate: 15.000 MH/s',
        'ROI Estimado (con Hosting): 16-20 Meses',
        'Minable: LTC + DOGE'
      ],
      price: '$7.700.000 CLP',
      imageSrc: ''
    }
  ];
</script>

<section class="bg-[#15172E] py-20 px-6">
  <div class="max-w-[1280px] mx-auto">
    <h2 class="font-display font-black text-3xl md:text-4xl text-white text-center mb-4">
      Diversificación: Retorno Más Rápido (LTC + DOGE)
    </h2>
    <p class="text-white/80 font-ui text-center max-w-2xl mx-auto mb-14">
      Mineros Antminer L9 para ROI más rápido (11-15 meses) y diversificación además de Bitcoin.
    </p>

    <div class="grid md:grid-cols-3 gap-8">
      {#each l9Products as product}
        <MinerCard
          title={product.title}
          specs={product.specs}
          price={product.price}
          imageSrc={product.imageSrc}
          imageAlt={product.title}
        />
      {/each}
    </div>
  </div>
</section>
