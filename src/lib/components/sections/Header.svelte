<script lang="ts">
  import { page } from '$app/stores';
  import Button from '$lib/components/ui/Button.svelte';

  let openMenu = false;

  const navLinks = [
    { label: 'Producción de Minería', href: '/producto-mineria' },
    { label: 'Hosting', href: '/hosting' },
    { label: 'NFT', href: '/marketplace' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' }
  ];

  $: currentPath = $page.url.pathname;
  /** Marca el enlace como activo cuando la ruta actual coincide (incl. subrutas y trailing slash). */
  function isActive(href: string): boolean {
    const path = currentPath.replace(/\/$/, '') || '/';
    const base = href.replace(/\/$/, '') || '/';
    if (base === '/') return path === '/';
    return path === base || path.startsWith(base + '/');
  }
</script>

<!-- Top Stats Bar: móvil más compacto (gap menor, texto más pequeño) -->
<div class="w-full bg-black border-b border-white/10 py-1.5 md:py-2">
  <div class="max-w-[1920px] mx-auto px-3 md:px-4 flex items-center flex-wrap gap-3 md:gap-6 overflow-x-auto text-[10px] md:text-xs">
    <div class="flex items-center gap-1 whitespace-nowrap">
      <span class="text-brand text-xs font-normal tracking-[1.2px]">COSTO ENERGÍA:</span>
      <span class="text-white text-xs font-bold tracking-[1.2px] ml-1">$0.007 USD/kWh</span>
    </div>
    <a href="tel:+56957015200" class="flex items-center gap-1 whitespace-nowrap text-white text-xs font-normal tracking-[1.2px] hover:text-brand transition-colors no-underline">
      <span>TEL:</span>
      <span class="font-bold ml-1">+569 5701 5200</span>
    </a>
    <a href="mailto:info@andesolarhash.com" class="flex items-center gap-1 whitespace-nowrap text-white text-xs font-normal tracking-[1.2px] hover:text-brand transition-colors no-underline">
      <span>EMAIL:</span>
      <span class="font-bold ml-1">INFO@ANDESOLARHASH.COM</span>
    </a>
    <div class="flex items-center gap-1 whitespace-nowrap">
      <span class="text-white text-xs font-normal tracking-[1.2px]">+</span>
      <span class="text-white text-xs font-bold tracking-[1.2px] ml-1">LOGÍSTICA + IMPORTE LOCAL EN CHILE</span>
    </div>
  </div>
</div>

<!-- Main Navigation -->
<header
  class="sticky top-0 z-50 w-full border-b border-white/5"
  style="background: rgba(30, 33, 66, 0.6); backdrop-filter: blur(12px);"
>
  <div class="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-[320px] h-[64px] md:h-[82px] flex items-center justify-between">
    <a href="/" class="flex items-center gap-2 text-white no-underline shrink-0">
      <div class="w-8 h-8 flex items-center justify-center">
        <svg class="w-full h-full text-brand" viewBox="0 0 34 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.7735 40.6267C10.0785 40.6267 4.65244 35.2039 4.65244 28.516C4.65244 21.828 10.0798 16.4052 16.7735 16.4052C23.4671 16.4052 28.8945 21.828 28.8945 28.516C28.8945 35.2039 23.4671 40.6267 16.7735 40.6267ZM16.7735 11.7567C7.50931 11.7567 0 19.2596 0 28.5146C0 37.7696 7.50931 45.2739 16.7735 45.2739C26.0376 45.2739 33.5469 37.771 33.5469 28.5146C33.5469 19.2583 26.0376 11.7554 16.7735 11.7554" fill="currentColor"/>
          <path d="M19.0669 32.3504C18.7214 32.6352 18.2223 32.7782 17.5669 32.7782H15.2866V29.2203H17.7534C18.3865 29.2203 18.8502 29.3805 19.1431 29.6994C19.4373 30.0183 19.5844 30.4802 19.5844 31.0839C19.5844 31.643 19.411 32.0656 19.0669 32.3504ZM15.2853 24.249H16.981C17.693 24.249 18.2289 24.3842 18.5875 24.6558C18.9461 24.9275 19.126 25.3475 19.126 25.9184C19.126 26.4381 18.9474 26.8331 18.5914 27.1048C18.2354 27.3764 17.7258 27.5116 17.0651 27.5116H15.2853V24.2503V24.249ZM21.4956 29.2794C21.1252 28.7597 20.5695 28.4211 19.83 28.2636C20.4067 28.0379 20.8454 27.7006 21.1475 27.2518C21.4496 26.8029 21.6006 26.2937 21.6006 25.7228C21.6006 24.5994 21.1935 23.7555 20.3804 23.1899C19.9194 22.8697 19.3519 22.6439 18.686 22.5048V19.8394H17.2135V22.3487C17.136 22.3473 17.0612 22.3434 16.981 22.3434H15.1185V19.8394H13.6461V22.3434H11.4958V23.8343L12.8094 24.0889V32.9397L11.4958 33.1943V34.676H13.6461V37.1905H15.1185V34.676H17.2135V37.1905H18.686V34.6012C19.5857 34.4791 20.3187 34.2022 20.8808 33.7639C21.6611 33.1575 22.0512 32.2638 22.0512 31.0826C22.0512 30.4002 21.866 29.7978 21.4956 29.2781" fill="currentColor"/>
        </svg>
      </div>
      <div class="flex flex-col">
        <span class="font-display font-black text-base leading-none text-brand">ANDES</span>
        <span class="font-ui text-[10px] leading-none tracking-wider">SOLAR HASH</span>
      </div>
    </a>

    <nav class="hidden lg:flex items-center gap-8" aria-label="Principal">
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-sm font-ui font-medium no-underline transition-colors {isActive(link.href) ? 'text-brand font-semibold border-b-2 border-brand pb-0.5' : 'text-white hover:text-brand'}"
        >
          {link.label}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-3">
      <span class="hidden lg:inline">
        <Button href="/contacto" variant="primary" size="md" className="rounded-md">
          COMENZAR
        </Button>
      </span>
      <!-- Mobile menu toggle -->
      <button
        type="button"
        class="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-brand transition-colors"
        aria-label="Abrir menú"
        aria-expanded={openMenu}
        on:click={() => (openMenu = !openMenu)}
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          {#if openMenu}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if openMenu}
    <div class="lg:hidden border-t border-white/10 bg-[#1D2242]/98 backdrop-blur-md" aria-label="Menú de navegación">
      <nav class="max-w-[1920px] mx-auto px-6 py-4 flex flex-col gap-2" aria-label="Principal">
        {#each navLinks as link}
          <a
            href={link.href}
            class="block py-3 text-sm font-ui font-medium no-underline transition-colors {isActive(link.href) ? 'text-brand font-semibold' : 'text-white hover:text-brand'}"
            on:click={() => (openMenu = false)}
          >
            {link.label}
          </a>
        {/each}
        <a
          href="/contacto"
          class="inline-flex justify-center py-3 mt-2 rounded-md bg-brand text-[#0B0D1B] font-display font-bold text-sm"
          on:click={() => (openMenu = false)}
        >
          COMENZAR
        </a>
      </nav>
    </div>
  {/if}
</header>
