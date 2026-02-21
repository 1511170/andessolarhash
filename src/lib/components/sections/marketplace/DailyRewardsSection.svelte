<script lang="ts">
  import mockupWalletBalance from '$lib/assets/mockup-wallet-balance.png';
</script>

<section class="bg-brand pt-16 md:pt-20 pb-0 px-4 md:px-6">
  <div class="max-w-[1280px] mx-auto">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="flex justify-center order-2 lg:order-1">
        <div class="relative w-[280px] md:w-[465px] aspect-[465/318] flex items-center justify-center">
          <img src={mockupWalletBalance} alt="Wallet criptomonedas" class="w-full h-full object-contain" />
        </div>
      </div>
      <div class="order-1 lg:order-2 text-center lg:text-left">
        <h2 class="font-display font-black text-[22px] md:text-[36px] leading-[27px] md:leading-[40px] mb-8 uppercase"
            style="background: linear-gradient(90deg, #1D2242 0%, #4a57a8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Recompensas diarias en BTC<br />o en POL directamente a tu wallet de Criptomonedas
        </h2>
        <a href="/producto-mineria" class="inline-flex items-center justify-center py-4 px-8 rounded-[5px] bg-[#1d2242] hover:bg-[#1d2242]/90 transition-colors font-display font-bold text-white text-base md:text-[16px] uppercase">
          Ver mineros disponibles
        </a>
      </div>
    </div>
  </div>
</section>
