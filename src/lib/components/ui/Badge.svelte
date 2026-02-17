<script lang="ts">
  export let variant: 'brand' | 'card' | 'accent' | 'error' = 'brand';
  export let className: string = '';

  const base = 'inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide';
  const variants = {
    brand: 'bg-brand text-black',
    card: 'bg-base-card text-brand',
    accent: 'bg-accent-blue text-white',
    error: 'bg-red-500 text-white'
  };
  $: classes = `${base} ${variants[variant]} ${className}`.trim();
</script>

<span class={classes}>
  <slot />
</span>
