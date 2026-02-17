<script lang="ts">
  import HeroHosting from '$lib/components/sections/hosting/HeroHosting.svelte';
  import HostingPillars from '$lib/components/sections/hosting/HostingPillars.svelte';
  import HostingContractDetails from '$lib/components/sections/hosting/HostingContractDetails.svelte';
  import HostingCTA from '$lib/components/sections/hosting/HostingCTA.svelte';
  import Newsletter from '$lib/components/sections/Newsletter.svelte';
</script>

<svelte:head>
  <title>Hosting Minero · Tarifa $0.088 USD/kWh | Andes Solar Hash</title>
  <meta name="description" content="Hosting minero con tarifa eléctrica fija $0.088 USD/kWh. Uptime 99.9%, monitoreo 24/7, soporte en Chile. Contrato anual renovable." />
</svelte:head>

<HeroHosting />
<HostingPillars />
<HostingContractDetails />
<HostingCTA />
<Newsletter />
