<script lang="ts">
  // Figma node 147:291 — Hosting hero, layout y tipografía exactos
</script>

<section class="relative bg-[#0B0D1B] overflow-hidden">
  <div class="max-w-[1280px] mx-auto px-6 py-16 lg:py-24">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Columna izquierda: label, título, párrafo, CTA -->
      <div class="flex flex-col">
        <p class="text-white font-ui text-sm font-bold tracking-[1.4px] uppercase leading-5 mb-4">
          INFRAESTRUCTURA Y EFICIENCIA
        </p>
        <h1
          class="font-display font-black text-[40px] md:text-[50px] lg:text-[60px] leading-[1] mb-6 max-w-[568px]"
          style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          Hosting Minero con<br />Costo Eléctrico de<br />Fábrica.
        </h1>
        <p class="text-[#d1d5db] font-ui text-base md:text-[20px] leading-7 max-w-[544px] mb-8">
          Asegure el margen de su inversión con nuestra <strong class="text-white">tarifa fija de $0.088 USD/kWh</strong> en infraestructura optimizada para el largo plazo. No más costos variables, solo acumulación eficiente.
        </p>
        <a
          href="/contacto"
          class="inline-flex items-center gap-3 h-[60px] px-8 rounded-[4px] bg-[#F7AD1F] hover:bg-[#e0831f] transition-colors w-full sm:w-auto sm:max-w-[499px] justify-center">
          <svg class="w-6 h-6 text-[#0B0D1B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          <span class="font-display font-black text-[20px] text-[#0B0D1B] uppercase leading-7">
            AGENDAR LLAMADA DE EVALUACIÓN
          </span>
        </a>
      </div>

      <!-- Columna derecha: imagen hosting + card tarifa (Figma 147:302) -->
      <div class="relative flex justify-center lg:justify-end">
        <div class="relative w-full max-w-[338px] lg:max-w-none">
          <div class="aspect-[4/3] max-h-[320px] lg:max-h-[400px] bg-[#1D2242] rounded-2xl flex items-center justify-center overflow-hidden">
            <img
              src="/images/builder-hosting-hero.png"
              alt="Infraestructura de hosting minero"
              class="w-full h-full object-cover object-center"
            />
          </div>
          <div
            class="absolute -bottom-4 left-0 right-0 lg:left-auto lg:right-0 lg:ml-6 lg:bottom-0 w-full max-w-[373px] border-4 border-[#E08324] rounded-xl bg-[#0B0D1B]/95 backdrop-blur p-6 text-center shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <p class="text-white font-ui text-sm font-bold tracking-widest uppercase leading-5 mb-3">
              TARIFA ELÉCTRICA GARANTIZADA
            </p>
            <p
              class="font-display font-black text-[48px] md:text-[60px] lg:text-[72px] leading-[1] mb-1"
              style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
              $0.088
            </p>
            <p class="text-white font-ui text-2xl md:text-[30px] leading-9 mb-3">
              USD/kWh
            </p>
            <p class="text-white font-ui text-sm leading-5">
              El factor decisivo para mantener la rentabilidad post-Halving.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
