<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="relative w-full min-h-[420px] overflow-hidden flex items-center">
  <div class="absolute inset-0 bg-[#0B0D1B]" />
  <div class="absolute inset-0 opacity-90" style="background: linear-gradient(90deg, #1D2242 0%, rgba(16, 20, 41, 0.6) 60%, transparent 100%)" />
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f393ba0?w=1920')] bg-cover bg-center opacity-20" />

  <div class="relative z-10 max-w-[1280px] mx-auto px-6 py-20">
    <h1 class="font-display font-black text-4xl md:text-5xl leading-tight mb-6 max-w-3xl"
        style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      Inversión Principal: Mineros de Alta Eficiencia (BTC).
    </h1>
    <p class="text-white font-ui text-lg leading-relaxed max-w-2xl mb-10">
      Seleccionamos mineros ASIC de alta eficiencia energética para maximizar márgenes de minería y ROI estimado de 1.5 a 25 meses. Operación y hosting disponibles en Chile.
    </p>
    <Button href="#antminer-s21" variant="outline" size="lg" className="rounded-md border-accent-blue text-white hover:bg-white/10">
      <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h12v12H4V4zm2 2v8h8V6H6zm2 2h4v4H8V8z" stroke="currentColor" stroke-width="1.5" fill="none"/>
      </svg>
      VER FICHA TÉCNICA Y PRECIOS
    </Button>
  </div>
</section>
