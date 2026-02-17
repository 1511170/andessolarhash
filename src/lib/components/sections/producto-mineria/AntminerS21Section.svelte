<script lang="ts">
  import MinerCard from './MinerCard.svelte';

  const s21Products = [
    {
      title: 'Antminer S21 XP',
      specs: [
        'Poder Hash: 279 TH/s',
        'Consumo Eléctrico: 12.5 J/TH',
        'ROI Estimado (con Hosting Min): 17-24 Meses'
      ],
      price: '$7.999.999 CLP',
      imageSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/bf3c37a8977865906dce2c550d7508ec862fb9ee?width=400',
      productHref: '/producto-mineria/s21-xp'
    },
    {
      title: 'Antminer S21 Pro',
      specs: [
        'Poder Hash: 234 TH/s',
        'Consumo Eléctrico: 21.0 J/TH',
        'ROI Estimado (con Hosting Min): 20-25 Meses'
      ],
      price: '$5.499.999 CLP',
      imageSrc: ''
    },
    {
      title: 'Antminer S21 +',
      specs: [
        'Poder Hash: 216 TH/s',
        'Consumo Eléctrico: 18.5 J/TH',
        'ROI Estimado (con Hosting Min): 15-20 Meses'
      ],
      price: '$4.999.999 CLP',
      imageSrc: ''
    }
  ];
</script>

<section id="antminer-s21" class="bg-[#0B0D1B] py-20 px-6">
  <div class="max-w-[1280px] mx-auto">
    <h2 class="font-display font-black text-3xl md:text-4xl text-white text-center mb-4">
      Serie Antminer S21: El Mejor Margen de la Industria
    </h2>
    <p class="text-white/80 font-ui text-center max-w-2xl mx-auto mb-14">
      Bajo mantenimiento, monitoreo 24/7/365 y hasta 98% de uptime. Entrega y hosting disponible en Chile.
    </p>

    <div class="grid md:grid-cols-3 gap-8 mb-8">
      {#each s21Products as product}
        <MinerCard
          title={product.title}
          specs={product.specs}
          price={product.price}
          imageSrc={product.imageSrc}
          imageAlt={product.title}
          productHref={product.productHref || ''}
        />
      {/each}
    </div>

    <p class="text-white/60 font-ui text-sm text-center max-w-2xl mx-auto">
      ROI variable según precio de Bitcoin y costo de energía. Incluye opción de hosting con tarifa competitiva.
    </p>
  </div>
</section>
