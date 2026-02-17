<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="bg-[#15172E] py-20 px-6">
  <div class="max-w-[1280px] mx-auto">
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Hosting -->
      <article class="bg-[#1D2242] rounded-2xl p-8 md:p-10 relative overflow-hidden border border-white/5">
        <div class="relative z-10">
          <div class="flex items-center gap-3 mb-4">
            <span class="w-10 h-10 rounded-lg bg-brand/20 flex items-center justify-center text-brand">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            </span>
            <h3 class="font-display font-bold text-xl text-white">Hosting: El Componente de Costo</h3>
          </div>
          <p class="text-white/80 font-ui text-sm leading-relaxed mb-6">
            Monitoreo 24/7, seguridad, mantenimiento y energía estable. Cotiza hosting y tarifa para tus equipos en Chile.
          </p>
          <Button href="/hosting" variant="primary" size="lg" className="rounded-lg">
            COTIZAR HOSTING Y TARIFA
          </Button>
        </div>
        <div class="absolute right-0 bottom-0 w-48 h-48 opacity-10 pointer-events-none">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/5d6d944672a1cd3b343112d6a46bc35614cbc64d?width=200" alt="" class="w-full h-full object-contain" />
        </div>
      </article>

      <!-- NFTs productivas -->
      <article class="bg-[#1D2242] rounded-2xl p-8 md:p-10 relative overflow-hidden border border-white/5">
        <div class="relative z-10">
          <div class="flex items-center gap-3 mb-4">
            <span class="w-10 h-10 rounded-lg bg-brand/20 flex items-center justify-center text-brand">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </span>
            <h3 class="font-display font-bold text-xl text-white">NFTs productivas: Inversión Accesible</h3>
          </div>
          <p class="text-white/80 font-ui text-sm leading-relaxed mb-6">
            Inversión fraccionada mediante NFTs productivos respaldados por hashrate real. Sin comprar equipo físico.
          </p>
          <Button href="/marketplace" variant="primary" size="lg" className="rounded-lg">
            VER PLANES DE FRACCIONAMIENTO
          </Button>
        </div>
        <div class="absolute right-0 bottom-0 w-40 h-40 opacity-10 pointer-events-none">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/b53493c4a6e2068d545a02853f5c9faf2212ca2e?width=200" alt="" class="w-full h-full object-contain" />
        </div>
      </article>
    </div>
  </div>
</section>
