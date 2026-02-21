<script lang="ts">
  const videoUrl = 'https://www.youtube.com/watch?v=example';
</script>

<section
  class="relative py-16 md:py-20 px-4 md:px-6 bg-cover bg-center bg-no-repeat"
  style="background-image: url('/technology-video-bg.png');"
>
  <div class="absolute inset-0 bg-[#0B0D1B]/80" aria-hidden="true"></div>
  <div class="relative z-10 max-w-[1280px] mx-auto">
    <!-- Bitmain strip - Figma node 335:2002: dos líneas + BITMAIN -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
      <p
        class="font-display font-black text-[36px] leading-[40px] uppercase mb-0"
        style="background: linear-gradient(90deg, #E08324 0%, #F7AD1F 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
        Trabajando con tecnología<br />del más alto nivel
      </p>
      <div class="flex items-center justify-center md:justify-end shrink-0">
        <img src="/bitmain-logo.png" alt="BITMAIN" class="h-[72px] w-auto max-w-[300px] object-contain rounded-[20px]" width="106" height="32" />
      </div>
    </div>

    <div class="grid lg:grid-cols-5 gap-8 items-start">
      <div class="lg:col-span-3">
        <div class="aspect-video rounded-xl bg-[#f3f7ff] flex items-center justify-center overflow-hidden border border-white/10 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" class="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors">
            <svg class="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </a>
        </div>
      </div>
      <div class="lg:col-span-2 space-y-3 md:space-y-4">
        <p class="text-[#ef4444] font-ui font-bold text-sm uppercase tracking-[1.4px]">YOUTUBE: EDUCACIÓN FINANCIERA</p>
        <h3 class="font-display font-bold text-2xl md:text-[30px] text-white leading-[36px]">"Cómo funciona - paso a paso"</h3>
        <p class="text-white font-ui text-base leading-[24px]">
          En nuestro último video, explicamos cómo la minería industrial opera en ciclos, enfocándose en la acumulación a bajo costo para capturar el valor del próximo máximo histórico.
        </p>
        <a href={videoUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[5px] bg-brand hover:bg-[#e0831f] transition-colors font-display font-bold text-[#0B0D1B] text-base md:text-[16px]">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          VER VIDEO COMPLETO
        </a>
      </div>
    </div>
  </div>
</section>
