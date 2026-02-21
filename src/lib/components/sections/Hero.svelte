<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="relative w-full min-h-[600px] md:h-[800px] overflow-hidden">
  <!-- Background Gradients -->
  <div class="absolute inset-0 bg-[#0B0D1B]" />
  <div class="absolute inset-0 opacity-100" style="background: linear-gradient(90deg, #1E3A8A -20.71%, #000 120.71%)" />
  <div class="absolute inset-0 opacity-100" style="background: linear-gradient(90deg, #101429 13.96%, rgba(16, 20, 41, 0.00) 120.71%)" />
  <div class="absolute inset-0 opacity-100" style="background: linear-gradient(90deg, #1D2242 -20.71%, rgba(16, 20, 41, 0.00) 120.71%)" />

  <!-- Background Image - Mining Equipment (oculto en móvil para priorizar contenido) -->
  <div class="absolute right-0 top-0 w-[1536px] h-[1024px] -mt-20 ml-auto hidden md:block">
    <img
      src="/images/builder-hero-bg.png"
      alt="Mining Equipment"
      class="w-full h-full object-cover opacity-70"
    />
  </div>

  <!-- Content Container: móvil px-4 py-12, desktop igual -->
  <div class="relative z-10 max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[344px] h-full min-h-[600px] md:min-h-0 py-12 md:py-0 flex flex-col justify-center">
    <!-- Badge: móvil "MINERIA DE BITCOIN" (Figma), desktop compañía chilena -->
    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand w-fit mb-6 md:mb-12 bg-brand/10 md:bg-transparent">
      <div class="w-2 h-2 rounded-full bg-brand shrink-0" />
      <span class="text-brand font-ui text-[10px] md:text-xs font-bold leading-4 tracking-tight">
        <span class="md:hidden">MINERIA DE BITCOIN</span>
        <span class="hidden md:inline">COMPAÑÍA CHILENA | GESTIÓN LEGAL (SII)</span>
      </span>
    </div>

    <!-- Main Heading: móvil una línea más corta y tamaño menor -->
    <h1 class="font-display font-black text-[28px] leading-[1.15] md:text-[72px] md:leading-[72px] mb-5 md:mb-8 max-w-[600px]"
        style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      <span class="md:hidden">Minería de Bitcoin con soporte local en Chile.</span>
      <span class="hidden md:inline">Minería de<br />Bitcoin con<br />soporte local en<br />Chile.</span>
    </h1>

    <!-- Description -->
    <p class="text-white font-ui text-sm md:text-lg font-bold leading-snug md:leading-[29.25px] max-w-[512px] mb-6 md:mb-10">
      <span class="md:hidden">No esperes más para invertir en la minería de Bitcoin en Chile. Accede a equipos de última generación y a la asesoría de expertos en el rubro.</span>
      <span class="hidden md:inline">Compra equipos completos o participa de forma fraccionada<br />en infraestructura minera profesional.</span>
    </p>

    <!-- Separator móvil (Figma) -->
    <hr class="border-white/20 my-4 md:hidden w-full max-w-[280px]" />

    <!-- CTAs: móvil solo "Agenda una llamada" + link; desktop dos botones -->
    <div class="flex flex-col sm:flex-row gap-3 md:gap-4">
      <a href="/contacto" class="md:hidden inline-flex items-center justify-center px-5 py-4 border border-white/40 rounded text-white font-display text-sm font-bold leading-6 hover:bg-white/10 transition-colors w-full">
        Agenda una llamada
      </a>
      <a href="/producto-mineria" class="hidden md:inline-flex items-center gap-2 px-5 py-4 border border-brand rounded text-white font-display text-base font-bold leading-6 hover:bg-brand/10 transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none"><path d="M13.3334 8.33337C13.3334 9.21743 12.9822 10.0653 12.3571 10.6904C11.732 11.3155 10.8841 11.6667 10.0001 11.6667C9.11603 11.6667 8.26818 11.3155 7.64306 10.6904C7.01794 10.0653 6.66675 9.21743 6.66675 8.33337" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.58594 5.02832H17.4143" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.83333 4.55579C2.61696 4.84429 2.5 5.19518 2.5 5.55579V16.6666C2.5 17.1087 2.67559 17.5326 2.98816 17.8451C3.30072 18.1577 3.72464 18.3333 4.16667 18.3333H15.8333C16.2754 18.3333 16.6993 18.1577 17.0118 17.8451C17.3244 17.5326 17.5 17.1087 17.5 16.6666V5.55579C17.5 5.19518 17.383 4.84429 17.1667 4.55579L15.5 2.33329C15.3448 2.1263 15.1434 1.95829 14.912 1.84258C14.6806 1.72687 14.4254 1.66663 14.1667 1.66663H5.83333C5.57459 1.66663 5.3194 1.72687 5.08798 1.84258C4.85655 1.95829 4.65525 2.1263 4.5 2.33329L2.83333 4.55579Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>
        VER EQUIPOS S21 EN STOCK
      </a>
      <a href="/#servicios" class="hidden md:inline-block px-8 py-4 bg-brand rounded font-display text-base font-bold leading-6 text-[#101429] hover:bg-[#e0831f] transition-colors">
        CONOCER FRACCIONAMIENTO
      </a>
    </div>
    <!-- Link móvil: Ver modelo de negocio -->
    <a href="/#servicios" class="mt-4 md:hidden inline-flex items-center gap-2 text-white font-ui text-sm hover:text-brand transition-colors">
      <svg class="w-4 h-4 text-brand" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h12v12H4V4z" /><path d="M7 7h6v6H7V7z" /></svg>
      Ver modelo de negocio
    </a>
  </div>

  <!-- Decorative Bitcoin Icon: oculto en móvil -->
  <div class="absolute left-5 bottom-32 w-[282px] h-[455px] hidden xl:block">
    <img
      src="/images/builder-antminer-card.png"
      alt=""
      class="w-full h-full object-contain opacity-60"
    />
  </div>
</section>
