<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="relative w-full h-[800px] overflow-hidden">
  <!-- Background Gradients -->
  <div class="absolute inset-0 bg-[#0B0D1B]" />
  <div class="absolute inset-0 opacity-100" style="background: linear-gradient(90deg, #1E3A8A -20.71%, #000 120.71%)" />
  <div class="absolute inset-0 opacity-100" style="background: linear-gradient(90deg, #101429 13.96%, rgba(16, 20, 41, 0.00) 120.71%)" />
  <div class="absolute inset-0 opacity-100" style="background: linear-gradient(90deg, #1D2242 -20.71%, rgba(16, 20, 41, 0.00) 120.71%)" />

  <!-- Background Image - Mining Equipment -->
  <div class="absolute right-0 top-0 w-[1536px] h-[1024px] -mt-20 ml-auto">
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/0dbc0291f79bb3a13cbd9273562d913916155838?width=3072"
      alt="Mining Equipment"
      class="w-full h-full object-cover opacity-70"
    />
  </div>

  <!-- Content Container -->
  <div class="relative z-10 max-w-[1920px] mx-auto px-[344px] h-full flex flex-col justify-center">
    <!-- Badge -->
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand w-fit mb-12">
      <div class="w-2 h-2 rounded-full bg-brand" />
      <span class="text-brand font-ui text-xs font-bold leading-4 tracking-tight">
        COMPAÑÍA CHILENA | GESTIÓN LEGAL (SII)
      </span>
    </div>

    <!-- Main Heading -->
    <h1 class="font-display font-black text-[72px] leading-[72px] mb-8 max-w-[600px]"
        style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      Minería de
      Bitcoin con
      soporte local en
      Chile.
    </h1>

    <!-- Description -->
    <p class="text-white font-ui text-lg font-bold leading-[29.25px] max-w-[512px] mb-10">
      Compra equipos completos o participa de forma fraccionada
      en infraestructura minera profesional.
    </p>

    <!-- CTAs -->
    <div class="flex gap-4">
      <a href="/producto-mineria" class="inline-flex items-center gap-2 px-5 py-4 border border-brand rounded text-white font-display text-base font-bold leading-6 hover:bg-brand/10 transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3334 8.33337C13.3334 9.21743 12.9822 10.0653 12.3571 10.6904C11.732 11.3155 10.8841 11.6667 10.0001 11.6667C9.11603 11.6667 8.26818 11.3155 7.64306 10.6904C7.01794 10.0653 6.66675 9.21743 6.66675 8.33337" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.58594 5.02832H17.4143" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.83333 4.55579C2.61696 4.84429 2.5 5.19518 2.5 5.55579V16.6666C2.5 17.1087 2.67559 17.5326 2.98816 17.8451C3.30072 18.1577 3.72464 18.3333 4.16667 18.3333H15.8333C16.2754 18.3333 16.6993 18.1577 17.0118 17.8451C17.3244 17.5326 17.5 17.1087 17.5 16.6666V5.55579C17.5 5.19518 17.383 4.84429 17.1667 4.55579L15.5 2.33329C15.3448 2.1263 15.1434 1.95829 14.912 1.84258C14.6806 1.72687 14.4254 1.66663 14.1667 1.66663H5.83333C5.57459 1.66663 5.3194 1.72687 5.08798 1.84258C4.85655 1.95829 4.65525 2.1263 4.5 2.33329L2.83333 4.55579Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        VER EQUIPOS S21 EN STOCK
      </a>

      <a href="/#servicios" class="px-8 py-4 bg-brand rounded font-display text-base font-bold leading-6 text-[#101429] hover:bg-[#e0831f] transition-colors inline-block">
        CONOCER FRACCIONAMIENTO
      </a>
    </div>
  </div>

  <!-- Decorative Bitcoin Icon -->
  <div class="absolute left-5 bottom-32 w-[282px] h-[455px]">
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/275b45d5001dc298a90f7d0d73f19d3c144e6b7d?width=564"
      alt=""
      class="w-full h-full object-contain opacity-60"
    />
  </div>
</section>
