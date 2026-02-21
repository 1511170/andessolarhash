<script lang="ts">
  import HeroProducto from '$lib/components/sections/producto-mineria/HeroProducto.svelte';
  import AntminerS21Section from '$lib/components/sections/producto-mineria/AntminerS21Section.svelte';
  import DiversificacionSection from '$lib/components/sections/producto-mineria/DiversificacionSection.svelte';
  import FAQGlossarySection from '$lib/components/sections/producto-mineria/FAQGlossarySection.svelte';
  import ProductHighlightCards from '$lib/components/sections/producto-mineria/ProductHighlightCards.svelte';
  import Newsletter from '$lib/components/sections/Newsletter.svelte';
</script>

<svelte:head>
  <title>Producción de Minería · Antminer S21, L9 | Andes Solar Hash</title>
  <meta name="description" content="Mineros ASIC de alta eficiencia: Antminer S21 XP, S21 Pro, S21 + y L9 (LTC/DOGE). Precios en CLP, ROI estimado y compra con Webpay. Hosting en Chile." />
</svelte:head>

<HeroProducto />
<AntminerS21Section />
<DiversificacionSection />
<FAQGlossarySection />
<ProductHighlightCards />
<Newsletter
  title="RECIBE LA TESIS DE INVERSIÓN ASH."
  description="Ingresa tu correo para recibir la tesis de inversión y novedades de Andes Solar Hash."
  placeholder="Su correo electrónico aquí..."
  buttonText="SUSCRIBIRME"
/>
