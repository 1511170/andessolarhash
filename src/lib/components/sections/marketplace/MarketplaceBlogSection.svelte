<script lang="ts">
  const posts = [
    { title: 'Bitcoin blockchain', description: 'Rentabilidad minera y blockchain. Cómo se relacionan.', image: 'https://api.builder.io/api/v1/image/assets/TEMP/5f7078439de44e6f0734c0bab6f9ba1e89e2858b?width=400', href: '/blog' },
    { title: 'Por qué el equipo de 14.000 USD es una inversión de minería con mayor ventaja', description: 'Análisis de equipos ASIC y ventajas competitivas.', image: 'https://api.builder.io/api/v1/image/assets/TEMP/4468f585352a304995b5043f4c8efc99ffc00413?width=400', href: '/blog' },
    { title: 'Guía Legal: Minería de Bitcoin y su Posición Actual en Chile', description: 'Marco regulatorio y SII.', image: 'https://api.builder.io/api/v1/image/assets/TEMP/9cdcc3e8a91c832e2d23d0e3b911d1082f46bbee?width=400', href: '/blog' }
  ];
</script>

<section class="bg-[#0B0D1B] py-20 px-6">
  <div class="max-w-[1280px] mx-auto">
    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
      <h2 class="font-display font-black text-2xl md:text-3xl text-white">
        Aprende más sobre minería con nuestro blog informativo
      </h2>
      <a href="/blog" class="text-white font-ui text-sm font-bold hover:text-brand transition-colors no-underline shrink-0">
        VER EL BLOG
      </a>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      {#each posts as post}
        <a href={post.href} class="group block">
          <article class="rounded-xl overflow-hidden border border-white/10 bg-[#1D2242] hover:border-brand/30 transition-colors">
            <div class="aspect-[16/10] overflow-hidden">
              <img src={post.image} alt={post.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-brand transition-colors">{post.title}</h3>
              <p class="text-white/70 font-ui text-sm leading-relaxed">{post.description}</p>
            </div>
          </article>
        </a>
      {/each}
    </div>
  </div>
</section>
