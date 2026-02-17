<script lang="ts">
  const productLinks = [
    { label: 'Venta de ASICS', href: '/#servicios' },
    { label: 'Hosting Profesional', href: '/hosting' },
    { label: 'Fraccionamiento', href: '/#servicios' },
    { label: 'Inversión', href: '/marketplace' }
  ];
  const companyLinks = [
    { label: 'Transparencia Online', href: '/transparencia' },
    { label: 'Blog y Noticias', href: '/blog' },
    { label: 'Términos de Inversión', href: '/terminos' }
  ];
  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Telegram', href: '#', icon: 'telegram' }
  ];
</script>

<footer class="bg-brand text-[#0B0D1B]">
  <div class="max-w-[1280px] mx-auto px-6 md:px-10 py-12">
    <div class="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center justify-between">
      <!-- Logo + copyright -->
      <div class="flex flex-col gap-4 max-w-[280px]">
        <a href="/" class="flex items-center gap-2 no-underline text-[#0B0D1B]">
          <svg class="w-10 h-10" viewBox="0 0 34 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7735 40.6267C10.0785 40.6267 4.65244 35.2039 4.65244 28.516C4.65244 21.828 10.0798 16.4052 16.7735 16.4052C23.4671 16.4052 28.8945 21.828 28.8945 28.516C28.8945 35.2039 23.4671 40.6267 16.7735 40.6267ZM16.7735 11.7567C7.50931 11.7567 0 19.2596 0 28.5146C0 37.7696 7.50931 45.2739 16.7735 45.2739C26.0376 45.2739 33.5469 37.771 33.5469 28.5146C33.5469 19.2583 26.0376 11.7554 16.7735 11.7554" fill="currentColor"/>
            <path d="M19.0669 32.3504C18.7214 32.6352 18.2223 32.7782 17.5669 32.7782H15.2866V29.2203H17.7534C18.3865 29.2203 18.8502 29.3805 19.1431 29.6994C19.4373 30.0183 19.5844 30.4802 19.5844 31.0839C19.5844 31.643 19.411 32.0656 19.0669 32.3504ZM15.2853 24.249H16.981C17.693 24.249 18.2289 24.3842 18.5875 24.6558C18.9461 24.9275 19.126 25.3475 19.126 25.9184C19.126 26.4381 18.9474 26.8331 18.5914 27.1048C18.2354 27.3764 17.7258 27.5116 17.0651 27.5116H15.2853V24.2503V24.249ZM21.4956 29.2794C21.1252 28.7597 20.5695 28.4211 19.83 28.2636C20.4067 28.0379 20.8454 27.7006 21.1475 27.2518C21.4496 26.8029 21.6006 26.2937 21.6006 25.7228C21.6006 24.5994 21.1935 23.7555 20.3804 23.1899C19.9194 22.8697 19.3519 22.6439 18.686 22.5048V19.8394H17.2135V22.3487C17.136 22.3473 17.0612 22.3434 16.981 22.3434H15.1185V19.8394H13.6461V22.3434H11.4958V23.8343L12.8094 24.0889V32.9397L11.4958 33.1943V34.676H13.6461V37.1905H15.1185V34.676H17.2135V37.1905H18.686V34.6012C19.5857 34.4791 20.3187 34.2022 20.8808 33.7639C21.6611 33.1575 22.0512 32.2638 22.0512 31.0826C22.0512 30.4002 21.866 29.7978 21.4956 29.2781" fill="currentColor"/>
          </svg>
          <div class="flex flex-col">
            <span class="font-display font-black text-lg leading-none">ANDES</span>
            <span class="font-ui text-[10px] leading-none tracking-wider">SOLAR HASH</span>
          </div>
        </a>
        <p class="text-sm font-ui text-[#0B0D1B]/90 leading-relaxed">
          Copyright 2024 Andes Solar Hash. No somos Brokers, somos innovadores.
        </p>
      </div>

      <!-- Productos Rápidos + Empresa & Legal -->
      <div class="flex flex-wrap gap-12">
        <div class="flex flex-col gap-3">
          <span class="text-sm font-ui font-bold text-[#0B0D1B]">Productos Rápidos</span>
          {#each productLinks as link}
            <a href={link.href} class="text-sm font-ui text-[#0B0D1B]/80 hover:text-[#0B0D1B] transition-colors no-underline">
              {link.label}
            </a>
          {/each}
        </div>
        <div class="flex flex-col gap-3">
          <span class="text-sm font-ui font-bold text-[#0B0D1B]">Empresa & Legal</span>
          {#each companyLinks as link}
            <a href={link.href} class="text-sm font-ui text-[#0B0D1B]/80 hover:text-[#0B0D1B] transition-colors no-underline">
              {link.label}
            </a>
          {/each}
        </div>
      </div>

      <!-- Social + email -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3 flex-wrap">
          {#each socialLinks as social}
            <a href={social.href} class="w-9 h-9 rounded-full bg-[#0B0D1B]/10 hover:bg-[#0B0D1B]/20 flex items-center justify-center text-[#0B0D1B] transition-colors" aria-label={social.name}>
              {#if social.icon === 'linkedin'}
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              {:else if social.icon === 'twitter'}
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              {:else if social.icon === 'instagram'}
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.849-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              {:else if social.icon === 'youtube'}
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              {:else if social.icon === 'facebook'}
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              {:else if social.icon === 'telegram'}
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              {:else}
                <span class="text-xs font-bold">{social.name.charAt(0)}</span>
              {/if}
            </a>
          {/each}
          <a href="mailto:info@andesolarhash.com" class="w-9 h-9 rounded-full bg-[#0B0D1B]/10 hover:bg-[#0B0D1B]/20 flex items-center justify-center text-[#0B0D1B]" aria-label="Email">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <div class="mt-10 pt-6 border-t border-[#0B0D1B]/20 text-center">
      <p class="text-xs font-ui text-[#0B0D1B]/70">powered by Cursor</p>
    </div>
  </div>
</footer>
