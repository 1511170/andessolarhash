<script lang="ts">
  const news = [
    {
      title: 'El Impacto del Halving en la Rentabilidad Minera y la Tesis de Largo Plazo.',
      date: '20 NOV 2025',
      category: 'TENDENCIAS',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/5f7078439de44e6f0734c0bab6f9ba1e89e2858b?width=798',
      href: '/blog/halving-rentabilidad'
    },
    {
      title: 'Por qué el costo de $0.088 USD/kWh es nuestra mayor ventaja.',
      date: '15 NOV 2025',
      category: 'INFRAESTRUCTURA',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/4468f585352a304995b5043f4c8efc99ffc00413?width=779',
      href: '/blog/costo-energia'
    },
    {
      title: 'Guía Legal: Minería de Bitcoin y su Posición frente al SII en Chile.',
      date: '01 NOV 2025',
      category: 'REGULACIÓN',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/9cdcc3e8a91c832e2d23d0e3b911d1082f46bbee?width=779',
      href: '/blog/guia-legal-sii'
    }
  ];
</script>

<section class="bg-[#15172E] py-12 md:py-24 px-4 md:px-6">
  <div class="max-w-[1280px] mx-auto">
    <!-- Header: móvil columna -->
    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-12 px-0 md:px-6">
      <h2 class="font-display font-bold text-2xl md:text-[44px] leading-tight md:leading-9"
          style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        Últimas Noticias
      </h2>
      
      <a href="/blog" class="flex items-center gap-2 text-white font-ui text-sm font-bold hover:text-brand transition-colors">
        <span>VER TODO EL BLOG</span>
        <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M3.33337 8H12.6667" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 3.33325L12.6667 7.99992L8 12.6666" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>

    <!-- News Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-0 md:px-6">
      {#each news as article}
        <a href={article.href} class="group block">
          <article class="relative h-[260px] md:h-[300px] rounded-xl overflow-hidden flex flex-col justify-end">
            <!-- Background Image -->
            <div class="absolute inset-0">
              <img 
                src={article.image}
                alt={article.title}
                class="w-full h-full object-cover opacity-[0.47] group-hover:opacity-60 transition-opacity"
              />
            </div>
            
            <!-- Gradient Overlay -->
            <div class="absolute inset-0" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%)" />
            
            <!-- Content -->
            <div class="relative z-10 p-6 space-y-2">
              <!-- Date and Category -->
              <div class="text-white font-ui text-xs font-bold leading-4">
                {article.date} | {article.category}
              </div>
              
              <!-- Title -->
              <h3 class="text-white font-display text-xl font-bold leading-[27.5px]">
                {article.title}
              </h3>
            </div>
          </article>
        </a>
      {/each}
    </div>
  </div>
</section>
