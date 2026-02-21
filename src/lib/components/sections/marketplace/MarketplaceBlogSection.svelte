<script lang="ts">
  const posts = [
    { date: '20 NOV 2025', category: 'TENDENCIAS', title: 'El Impacto del Halving en la Rentabilidad Minera y la Tesis de Largo Plazo.', image: '/images/builder-blog-halving.png', href: '/blog' },
    { date: '15 NOV 2025', category: 'INFRAESTRUCTURA', title: 'Por qué el costo de $0.088 USD/kWh es nuestra mayor ventaja.', image: '/images/builder-blog-kwh.png', href: '/blog' },
    { date: '01 NOV 2025', category: 'REGULACIÓN', title: 'Guía Legal: Minería de Bitcoin y su Posición frente al SII en Chile.', image: '/images/builder-blog-legal.png', href: '/blog' }
  ];
</script>

<section class="bg-[#15172E] py-16 md:py-20 px-4 md:px-6">
  <div class="max-w-[1280px] mx-auto">
    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-12">
      <h2 class="font-display font-bold text-xl md:text-[30px] text-brand leading-[36px]">
        Aprende más sobre minería con nuestro blog informativo
      </h2>
      <a href="/blog" class="inline-flex items-center gap-2 text-white font-ui font-bold text-sm hover:text-brand transition-colors no-underline shrink-0">
        VER TODO EL BLOG
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </a>
    </div>

    <div class="grid md:grid-cols-3 gap-6 md:gap-8">
      {#each posts as post}
        <a href={post.href} class="group block">
          <article class="relative rounded-xl overflow-hidden border border-white/10 bg-[#1D2242] hover:border-brand/30 transition-colors h-[300px] md:h-[300px] flex flex-col justify-end">
            <div class="absolute inset-0 opacity-40 md:opacity-50">
              <img src={post.image} alt="" class="w-full h-full object-cover" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div class="relative p-6 flex flex-col gap-2">
              <p class="font-ui font-bold text-xs text-white">{post.date} | {post.category}</p>
              <h3 class="font-display font-bold text-lg md:text-[20px] text-white leading-[27px] md:leading-[27.5px] group-hover:text-brand transition-colors">{post.title}</h3>
            </div>
          </article>
        </a>
      {/each}
    </div>
  </div>
</section>
