<script lang="ts">
  import MinerCard from './MinerCard.svelte';

  const l9Products = [
    {
      badge: 'ROI MÁS RÁPIDO',
      title: 'Antminer L9 17000',
      specRows: [
        { label: 'Hashrate:', value: '17.000 MH/s' },
        { label: 'ROI Estimado (con Hosting ASH):', value: '13–21 Meses' },
        { label: 'Criptomoneda:', value: 'LTC + DOGE' }
      ],
      price: '$8.600.000',
      imageSrc: ''
    },
    {
      badge: 'ALTA CAPACIDAD',
      title: 'Antminer L9 16000',
      specRows: [
        { label: 'Hashrate:', value: '16.000 MH/s' },
        { label: 'ROI Estimado (con Hosting ASH):', value: '14–20 Meses' },
        { label: 'Criptomoneda:', value: 'LTC + DOGE' }
      ],
      price: '$8.200.000',
      imageSrc: ''
    },
    {
      badge: 'ALTA CAPACIDAD',
      title: 'Antminer L9 15000',
      specRows: [
        { label: 'Hashrate:', value: '15.000 MH/s' },
        { label: 'ROI Estimado (con Hosting ASH):', value: '16–22 Meses' },
        { label: 'Criptomoneda:', value: 'LTC + DOGE' }
      ],
      price: '$7.700.000',
      imageSrc: ''
    }
  ];
</script>

<section class="bg-[#15172E] py-16 md:py-20 px-4 md:px-6">
  <div class="max-w-[1280px] mx-auto">
    <h2 class="font-display font-black text-2xl md:text-4xl text-white text-center mb-4">
      Diversificación y Retorno Más Rápido (LTC + DOGE)
    </h2>
    <p class="text-white font-ui text-center text-base md:text-lg leading-7 max-w-2xl mx-auto mb-12 md:mb-14">
      Los Antminer L9 ofrecen la opción de un ROI acelerado (hasta 13 meses), ideal para perfiles que buscan diversificar la producción de activos.
    </p>

    <div class="grid md:grid-cols-3 gap-6 md:gap-8">
      {#each l9Products as product}
        <MinerCard
          badge={product.badge}
          title={product.title}
          specRows={product.specRows}
          price={product.price}
          priceSuffix="CLP"
          imageSrc={product.imageSrc}
          imageAlt={product.title}
        />
      {/each}
    </div>
  </div>
</section>
