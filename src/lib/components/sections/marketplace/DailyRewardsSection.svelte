<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="bg-brand py-20 px-6">
  <div class="max-w-[1280px] mx-auto">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="flex justify-center order-2 lg:order-1">
        <div class="relative w-56 h-[420px] rounded-[2rem] border-4 border-[#0B0D1B]/20 bg-[#0B0D1B] p-3 shadow-xl">
          <div class="w-full h-full rounded-[1.5rem] bg-[#1D2242] p-5 text-[#0B0D1B]">
            <p class="font-ui font-bold text-sm mb-4">Tu wallet</p>
            <div class="space-y-3">
              <div class="flex justify-between items-center py-2 border-b border-[#0B0D1B]/20">
                <span class="font-ui text-sm">Bitcoin</span>
                <span class="font-display font-bold">0.0001 BTC</span>
              </div>
              <div class="flex justify-between items-center py-2">
                <span class="font-ui text-sm">USDC</span>
                <span class="font-display font-bold">2,000.00 USDC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="order-1 lg:order-2 text-center lg:text-left">
        <h2 class="font-display font-black text-2xl md:text-3xl text-[#0B0D1B] mb-6 uppercase tracking-tight">
          Recompensas diarias en BTC o en POL directamente a tu wallet de criptomonedas
        </h2>
        <Button href="/contacto" variant="outline" size="lg" className="rounded-lg border-[#0B0D1B] text-[#0B0D1B] hover:bg-[#0B0D1B]/10">
          VER RECOMPENSAS
        </Button>
      </div>
    </div>
  </div>
</section>
