<script lang="ts">
  export let variant: 'primary' | 'outline' | 'ghost' | 'danger' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let href: string | undefined = undefined;
  export let type: 'button' | 'submit' = 'button';
  export let disabled = false;
  export let className: string = '';

  const base = 'inline-flex items-center justify-center font-bold transition-colors rounded-md gap-2';
  const variants = {
    primary: 'bg-brand text-black hover:bg-brand-dark',
    outline: 'border border-white/20 text-white hover:bg-white/10',
    ghost: 'text-brand hover:bg-brand/10',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  };
  const sizes = {
    sm: 'px-4 py-2 text-body-sm',
    md: 'px-7 py-3.5 text-[15px]',
    lg: 'px-6 py-4 text-body-lg'
  };
  $: classes = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`.trim();
</script>

{#if href}
  <a {href} class={classes} {...(disabled ? { 'aria-disabled': 'true' } : {})}>
    <slot />
  </a>
{:else}
  <button {type} {disabled} class={classes}>
    <slot />
  </button>
{/if}
