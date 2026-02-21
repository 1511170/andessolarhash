<script lang="ts">
  const socials = [
    { name: 'Discord', icon: 'discord', href: '#' },
    { name: 'LinkedIn', icon: 'linkedin', href: '#' },
    { name: 'Twitter', icon: 'twitter', href: '#' },
    { name: 'Instagram', icon: 'instagram', href: '#' },
    { name: 'Email', icon: 'email', href: '#' }
  ];
</script>

<!-- Título en fila superior; debajo grid imagen | contenido (Figma node 196-200) -->
<section class="bg-[#0B0D1B] py-16 md:py-20 px-4 md:px-6">
  <div class="max-w-[1280px] mx-auto">
    <!-- Fila superior: título ancho completo -->
    <div class="mb-10 md:mb-12 text-center">
      <h2 class="font-display font-black text-2xl md:text-[56px] lg:text-[72px] leading-tight max-w-[564px] mx-auto"
          style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        Únete a la comunidad<br />Andes Solar Hash
      </h2>
    </div>
    <!-- Grid: imagen | contenido -->
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="relative rounded-[29px] overflow-hidden bg-[#1D2242] aspect-[570/472] flex items-center justify-center">
          <img src="/images/comunidad-hero.png" alt="Comunidad Andes Solar Hash - S21+, S21P, S21XP" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#5865F2] flex items-center justify-center text-white z-10">
              <svg class="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>
            </div>
          </div>
      </div>
      <!-- Columna derecha: texto, CTA y redes -->
      <div>
        <p class="text-white font-ui text-base md:text-lg leading-[29px] mb-6">
          Accede a nuestro Discord exclusivo, con espacios y contenidos diseñados específicamente para miembros e inversores del ecosistema Andes Solar Hash. Un punto de encuentro para seguir de cerca la evolución del proyecto, nuevas colecciones y actualizaciones relevantes sobre minería de Bitcoin e infraestructura digital.
        </p>
        <p class="text-white font-ui text-base md:text-lg leading-[29px] mb-8">
          Mantente informado también a través de nuestras redes sociales, donde compartimos novedades, hitos del proyecto y contenidos clave del sector de la minería de criptomonedas.
        </p>
        <!-- CTA Comunidad privada: igual a Figma node 162-68 -->
        <a href="#" class="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-[17px] border-2 border-[#F7AD1F] text-white font-display font-black text-xl md:text-[32px] uppercase tracking-wide leading-tight hover:bg-[#F7AD1F]/10 transition-colors mb-8">
          <svg class="w-6 h-6 md:w-8 md:h-8 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>
          comunidad privada
        </a>
        <p class="font-display font-black text-xl md:text-[24px] uppercase mb-4"
           style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Canales oficiales disponibles
        </p>
        <!-- Fila de redes: igual a Figma node 162-70 -->
        <div class="flex flex-wrap items-center gap-3">
          {#each socials as s}
            <a href={s.href} class="size-10 shrink-0 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white transition-colors hover:bg-brand/30 hover:border-brand/50" aria-label={s.name}>
              {#if s.icon === 'discord'}
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>
              {:else if s.icon === 'linkedin'}
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              {:else if s.icon === 'twitter'}
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              {:else if s.icon === 'instagram'}
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/></svg>
              {:else}
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              {/if}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
