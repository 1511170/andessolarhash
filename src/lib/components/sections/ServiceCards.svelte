<script lang="ts">
  // Three service/product cards
</script>

<section id="servicios" class="bg-[#0B0D1B] py-20 px-6 relative">
  <!-- Gradient overlay -->
  <div class="absolute inset-0 opacity-30" style="background: linear-gradient(90deg, #1D2242 -2.44%, #000 120.71%)" />
  
  <!-- Decorative Bitcoin Icon -->
  <div class="absolute right-0 top-12 w-[365px] h-[648px] hidden xl:block">
    <img 
      src="https://api.builder.io/api/v1/image/assets/TEMP/4a484b81c5235b15b20921f4de326e8c06c2537e?width=730"
      alt=""
      class="w-full h-full object-contain opacity-40"
    />
  </div>

  <div class="max-w-[1232px] mx-auto relative z-10 grid lg:grid-cols-3 gap-8">
    <!-- Card 1: VENTA DE MINEROS ASIC -->
    <article class="bg-[#1D2242] rounded-[26px] p-6 flex flex-col relative">
      <!-- Shadow -->
      <div class="absolute left-1/2 -translate-x-1/2 -top-12 w-[274px] h-14 rounded-full opacity-50"
           style="background: radial-gradient(50% 50% at 50% 50%, #0B0D1B 0%, rgba(11, 13, 27, 0.00) 80.77%)" />
      
      <!-- Icon -->
      <div class="mb-6 flex justify-center">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/5d6d944672a1cd3b343112d6a46bc35614cbc64d?width=272"
          alt="ASIC Miner"
          class="w-[136px] h-[136px]"
        />
      </div>

      <!-- Title -->
      <h3 class="font-display font-black text-2xl text-white text-center uppercase mb-4">
        Venta de<br />Mineros ASIC
      </h3>

      <!-- Badge -->
      <div class="border border-brand rounded-lg px-3 py-2 mb-4">
        <p class="text-brand font-ui text-sm font-bold text-center leading-5">
          PÚBLICO: Inversor Directo, Comprador final
        </p>
      </div>

      <!-- Description -->
      <p class="text-white font-ui text-sm leading-5 text-center mb-6">
        Adquiere equipos de minería Bitcoin de alto
        rendimiento, seleccionados por eficiencia energética y
        compatibilidad con nuestra infraestructura.
      </p>

      <!-- Features List -->
      <ul class="space-y-2 mb-6">
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 mt-0.5 text-brand flex-shrink-0" viewBox="0 0 16 16" fill="none">
            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-white font-ui text-sm leading-5">Equipos nuevos y verificados (S21 / S21 XP)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 mt-0.5 text-brand flex-shrink-0" viewBox="0 0 16 16" fill="none">
            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-white font-ui text-sm leading-5">Compatibles con energía de bajo costo<br />($0.088/kWh)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 mt-0.5 text-brand flex-shrink-0" viewBox="0 0 16 16" fill="none">
            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-white font-ui text-sm leading-5">Entrega y soporte local en Chile</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 mt-0.5 text-brand flex-shrink-0" viewBox="0 0 16 16" fill="none">
            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-white font-ui text-sm leading-5">Opción de hosting o retiro del equipo</span>
        </li>
      </ul>

      <!-- CTA Button -->
      <a href="/producto-mineria" class="w-full bg-white rounded-full py-4 px-6 flex items-center justify-center gap-2 mb-2 hover:bg-gray-100 transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none">
          <path d="M13.3334 8.33325C13.3334 9.21731 12.9822 10.0652 12.3571 10.6903C11.732 11.3154 10.8841 11.6666 10.0001 11.6666C9.11603 11.6666 8.26818 11.3154 7.64306 10.6903C7.01794 10.0652 6.66675 9.21731 6.66675 8.33325" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.58594 5.02832H17.4143" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.83333 4.55591C2.61696 4.84441 2.5 5.1953 2.5 5.55591V16.6667C2.5 17.1088 2.67559 17.5327 2.98816 17.8453C3.30072 18.1578 3.72464 18.3334 4.16667 18.3334H15.8333C16.2754 18.3334 16.6993 18.1578 17.0118 17.8453C17.3244 17.5327 17.5 17.1088 17.5 16.6667V5.55591C17.5 5.1953 17.383 4.84441 17.1667 4.55591L15.5 2.33341C15.3448 2.12642 15.1434 1.95842 14.912 1.8427C14.6806 1.72699 14.4254 1.66675 14.1667 1.66675H5.83333C5.57459 1.66675 5.3194 1.72699 5.08798 1.8427C4.85655 1.95842 4.65525 2.12642 4.5 2.33341L2.83333 4.55591Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="font-ui text-xl font-bold text-black">COMPRAR EQUIPO AHORA</span>
      </a>

      <!-- Webpay Logo -->
      <div class="flex justify-center mb-4">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b9526f1f3adf9c9317a52e2314617a3b66a8a378?width=280"
          alt="Webpay"
          class="h-[37px] w-auto"
        />
      </div>

      <!-- Link -->
      <a href="/producto-mineria" class="text-brand font-ui text-sm text-center hover:underline">
        O EXPLORA NUESTROS EQUIPOS
      </a>

      <!-- Shadow at bottom -->
      <div class="absolute left-1/2 -translate-x-1/2 -bottom-12 w-[338px] h-20 rounded-full opacity-50"
           style="background: radial-gradient(50% 50% at 50% 50%, #E08324 0%, rgba(11, 13, 27, 0.00) 80.77%)" />
    </article>

    <!-- Card 2: HOSTING MINERO PROFESIONAL -->
    <article class="bg-[#1D2242] rounded-[26px] p-6 flex flex-col relative">
      <!-- Shadow -->
      <div class="absolute left-1/2 -translate-x-1/2 -top-12 w-[274px] h-14 rounded-full opacity-50"
           style="background: radial-gradient(50% 50% at 50% 50%, #0B0D1B 0%, rgba(11, 13, 27, 0.00) 80.77%)" />
      
      <!-- Icon -->
      <div class="mb-6 flex justify-center">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/116dd5d02463a9aac6f70b67328f79b3ee1db3e2?width=378"
          alt="Hosting"
          class="h-[138px] w-auto"
        />
      </div>

      <!-- Title -->
      <h3 class="font-display font-black text-2xl text-white text-center uppercase mb-4">
        Hosting Minero<br />Profesional
      </h3>

      <!-- Badge -->
      <div class="border border-brand rounded-lg px-3 py-2 mb-4">
        <p class="text-brand font-ui text-sm font-bold text-center leading-5">
          PÚBLICO: Operadores / Tickets Mineros / Cuentas
        </p>
      </div>

      <!-- Description -->
      <p class="text-white font-ui text-sm leading-5 text-center mb-6">
        Aloja tu equipo ASIC en infraestructura optimizada para
        minería de Bitcoin, con energía de bajo costo,
        monitoreo continuo y soporte técnico local.
      </p>

      <!-- Features List -->
      <ul class="space-y-2 mb-6">
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 mt-0.5 text-brand flex-shrink-0" viewBox="0 0 16 16" fill="none">
            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-white font-ui text-sm leading-5">Energía eléctrica optimizada ($0.088/kWh<br />competitivo)</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 mt-0.5 text-brand flex-shrink-0" viewBox="0 0 16 16" fill="none">
            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-white font-ui text-sm leading-5">Monitoreo técnico continuo y trazable</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 mt-0.5 text-brand flex-shrink-0" viewBox="0 0 16 16" fill="none">
            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-white font-ui text-sm leading-5">Mantenimiento y soporte local en Chile</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 mt-0.5 text-brand flex-shrink-0" viewBox="0 0 16 16" fill="none">
            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-white font-ui text-sm leading-5">Contratos claros y trazables</span>
        </li>
      </ul>

      <!-- CTA Button -->
      <a href="/contacto" class="w-fit mx-auto block bg-brand rounded-full py-4 px-6 hover:bg-[#e0831f] transition-colors text-center">
        <span class="font-display text-sm font-bold text-[#0B0D1B]">AGENDAR LLAMADA DE EVALUACIÓN</span>
      </a>

      <!-- Shadow at bottom -->
      <div class="absolute left-1/2 -translate-x-1/2 -bottom-12 w-[338px] h-20 rounded-full opacity-50"
           style="background: radial-gradient(50% 50% at 50% 50%, #E08324 0%, rgba(11, 13, 27, 0.00) 80.77%)" />
    </article>

    <!-- Card 3: NFTs PRODUCTIVOS DE MINERÍA BITCOIN -->
    <article class="bg-[#1D2242] rounded-[26px] p-6 flex flex-col relative">
      <!-- Shadow -->
      <div class="absolute left-1/2 -translate-x-1/2 -top-12 w-[274px] h-14 rounded-full opacity-50"
           style="background: radial-gradient(50% 50% at 50% 50%, #0B0D1B 0%, rgba(11, 13, 27, 0.00) 80.77%)" />
      
      <!-- Icon -->
      <div class="mb-6 flex justify-center">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b53493c4a6e2068d545a02853f5c9faf2212ca2e?width=422"
          alt="NFT"
          class="h-[176px] w-auto"
        />
      </div>

      <!-- Title -->
      <h3 class="font-display font-black text-2xl text-white text-center uppercase mb-4">
        NFTs PRODUCTIVOS<br />DE MINERÍA BITCOIN
      </h3>

      <!-- Badge -->
      <div class="border border-brand rounded-lg px-3 py-2 mb-4">
        <p class="text-brand font-ui text-sm font-bold text-center leading-5">
          PÚBLICO: Inversor digital / Web3 / Automatizado
        </p>
      </div>

      <!-- Description -->
      <p class="text-white font-ui text-sm leading-5 text-center mb-6">
        Accede a minería real de Bitcoin mediante NFTs respaldados por infraestructura operativa, sin comprar equipos ni gestionar operación técnica.
      </p>

      <!-- Features List -->
      <ul class="space-y-2 mb-6">
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 mt-0.5 text-brand flex-shrink-0" viewBox="0 0 16 16" fill="none">
            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-white font-ui text-sm leading-5">NFTs vinculados a hashrate real en operación</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 mt-0.5 text-brand flex-shrink-0" viewBox="0 0 16 16" fill="none">
            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-white font-ui text-sm leading-5">Infraestructura minera operada por<br />Andes Solar Hash</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 mt-0.5 text-brand flex-shrink-0" viewBox="0 0 16 16" fill="none">
            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-white font-ui text-sm leading-5">Energía solar integrada como ventaja estructural</span>
        </li>
        <li class="flex items-start gap-2">
          <svg class="w-4 h-4 mt-0.5 text-brand flex-shrink-0" viewBox="0 0 16 16" fill="none">
            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-white font-ui text-sm leading-5">Participación desde montos accesibles<br />(desde USD 60)</span>
        </li>
      </ul>

      <!-- CTA Button -->
      <a href="/marketplace" class="w-fit mx-auto block bg-[#e0831f] rounded-full py-4 px-6 hover:bg-brand transition-colors text-center">
        <span class="font-display text-sm font-bold text-[#0B0D1B]">EXPLORA LOS NFTS DISPONIBLES</span>
      </a>

      <!-- Shadow at bottom -->
      <div class="absolute left-1/2 -translate-x-1/2 -bottom-12 w-[338px] h-20 rounded-full opacity-50"
           style="background: radial-gradient(50% 50% at 50% 50%, #E08324 0%, rgba(11, 13, 27, 0.00) 80.77%)" />
    </article>
  </div>
</section>
