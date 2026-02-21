<script lang="ts">
  import MinerCard from './MinerCard.svelte';

  const s21Products = [
    {
      badge: 'MÁXIMA EFICIENCIA',
      title: 'Antminer S21 XP',
      specRows: [
        { label: 'Poder (Hashrate):', value: '270 TH/s' },
        { label: 'Consumo (Eficiencia):', value: '13.5 J/TH', highlight: true },
        { label: 'ROI Estimado (con Hosting ASH):', value: '17–24 Meses' }
      ],
      price: '$7.999.999',
      imageSrc: '/images/builder-antminer-s21-xp.png',
      productHref: '/producto-mineria/s21-xp'
    },
    {
      badge: 'BALANCE Y POTENCIA',
      title: 'Antminer S21 Pro',
      specRows: [
        { label: 'Poder (Hashrate):', value: '234 TH/s' },
        { label: 'Consumo (Eficiencia):', value: '15.0 J/TH', highlight: true },
        { label: 'ROI Estimado (con Hosting ASH):', value: '18–25 Meses' }
      ],
      price: '$5.499.999',
      imageSrc: ''
    },
    {
      badge: 'ALTA CAPACIDAD',
      title: 'Antminer S21 +',
      specRows: [
        { label: 'Poder (Hashrate):', value: '216 TH/s' },
        { label: 'Consumo (Eficiencia):', value: '16.5 J/TH', highlight: true },
        { label: 'ROI Estimado (con Hosting ASH):', value: '18–26 Meses' }
      ],
      price: '$4.999.999',
      imageSrc: ''
    }
  ];
</script>

<section id="antminer-s21" class="bg-[#0B0D1B] py-16 md:py-20 px-4 md:px-6">
  <div class="max-w-[1280px] mx-auto">
    <h2 class="font-display font-black text-2xl md:text-4xl text-white text-center mb-4">
      Serie Antminer S21: El Mejor Margen de la Industria
    </h2>
    <p class="text-white font-ui text-center text-base md:text-lg leading-7 max-w-2xl mx-auto mb-12 md:mb-14">
      La eficiencia del hardware, combinada con nuestro costo eléctrico de $0.088 USD/kWh, determina la rentabilidad de su inversión.
    </p>

    <div class="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
      {#each s21Products as product}
        <MinerCard
          badge={product.badge}
          title={product.title}
          specRows={product.specRows}
          price={product.price}
          priceSuffix="CLP"
          imageSrc={product.imageSrc}
          imageAlt={product.title}
          productHref={product.productHref || ''}
        />
      {/each}
    </div>

    <p class="text-[#6b7280] font-ui text-sm text-center max-w-xl mx-auto leading-5">
      *Nota: Todos los precios son para la venta del equipo en Chile y no incluyen el contrato de hosting anual.
    </p>
  </div>
</section>
