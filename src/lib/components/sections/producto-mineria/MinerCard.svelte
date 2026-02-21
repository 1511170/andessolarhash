<script lang="ts">
  export let title: string;
  /** Simple list (legacy) */
  export let specs: string[] = [];
  /** Figma: label + value rows (e.g. Poder Hashrate / 270 TH/s) */
  export let specRows: Array<{ label: string; value: string; highlight?: boolean }> = [];
  export let price: string;
  export let priceSuffix: string = 'CLP';
  export let imageSrc: string = '';
  export let imageAlt: string = '';
  export let productHref: string = '';
  /** Badge text above card (Figma: MÁXIMA EFICIENCIA, ROI MÁS RÁPIDO, etc.) */
  export let badge: string = '';
</script>

<article class="rounded-xl overflow-hidden flex flex-col border-t-4 border-brand bg-[#1D2242]/90 border border-white/5">
  {#if badge}
    <div class="flex items-center justify-between px-6 pt-6 pb-1">
      <span class="font-ui font-bold text-brand text-xs tracking-wide">{badge}</span>
      {#if productHref}
        <a href={productHref} class="text-white/70 hover:text-brand transition-colors" aria-label="Ver detalle">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>
      {/if}
    </div>
  {/if}
  <div class="px-6 pt-4 pb-6 flex flex-col flex-1">
    <div class="aspect-[1] max-h-[320px] bg-[#0B0D1B]/50 rounded-lg flex items-center justify-center mb-4">
      {#if imageSrc}
        <img src={imageSrc} alt={imageAlt} class="max-h-full w-auto object-contain" />
      {:else}
        <div class="w-24 h-24 rounded-xl bg-white/5 flex items-center justify-center">
          <svg class="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
        </div>
      {/if}
    </div>
    <h3 class="font-display font-black text-2xl md:text-3xl text-white mb-4">
      {#if productHref}
        <a href={productHref} class="text-white hover:text-brand transition-colors no-underline">{title}</a>
      {:else}
        {title}
      {/if}
    </h3>

    {#if specRows.length > 0}
      <div class="space-y-2 mb-6">
        {#each specRows as row}
          <div class="border-b border-white/10 pb-1.5">
            <p class="text-[#d1d5db] font-ui text-sm leading-5">{row.label}</p>
            <p class="font-mono font-bold text-lg {row.highlight ? 'text-brand' : 'text-white'} leading-7">{row.value}</p>
          </div>
        {/each}
      </div>
    {:else}
      <ul class="space-y-2 mb-6 flex-1">
        {#each specs as spec}
          <li class="text-white/80 font-ui text-sm leading-5">{spec}</li>
        {/each}
      </ul>
    {/if}

    <p class="font-ui font-black text-2xl md:text-3xl text-white mb-4">
      {price} <span class="text-lg text-white/80">{priceSuffix}</span>
    </p>
    <a href="/contacto" class="w-full py-4 px-6 rounded bg-brand hover:bg-[#e0831f] transition-colors font-ui font-bold text-lg md:text-xl text-[#0B0D1B] text-center">
      COMPRAR CON WEBPAY
    </a>
  </div>
</article>
