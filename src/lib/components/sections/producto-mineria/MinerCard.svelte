<script lang="ts">
  export let title: string;
  export let specs: string[];
  export let price: string;
  export let imageSrc: string = '';
  export let imageAlt: string = '';
  export let productHref: string = '';
</script>

<article class="bg-[#1D2242] rounded-2xl overflow-hidden border border-white/5 flex flex-col">
  <div class="aspect-[4/3] bg-[#0B0D1B]/50 flex items-center justify-center p-6">
    {#if imageSrc}
      <img src={imageSrc} alt={imageAlt} class="max-h-full w-auto object-contain" />
    {:else}
      <div class="w-24 h-24 rounded-xl bg-white/5 flex items-center justify-center">
        <svg class="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
      </div>
    {/if}
  </div>
  <div class="p-6 flex flex-col flex-1">
    <h3 class="font-display font-bold text-xl text-white mb-4">
      {#if productHref}
        <a href={productHref} class="text-white hover:text-brand transition-colors no-underline">{title}</a>
      {:else}
        {title}
      {/if}
    </h3>
    <ul class="space-y-2 mb-6 flex-1">
      {#each specs as spec}
        <li class="text-white/80 font-ui text-sm leading-5">{spec}</li>
      {/each}
    </ul>
    <p class="text-brand font-display font-black text-2xl mb-4">{price}</p>
    <a href="/contacto" class="w-full py-4 px-6 rounded-lg bg-brand hover:bg-[#e0831f] transition-colors font-display font-bold text-[#0B0D1B] text-center">
      COMPRAR CON WEBPAY
    </a>
  </div>
</article>
