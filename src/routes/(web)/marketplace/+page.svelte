<script lang="ts">
  import HeroNFT from '$lib/components/sections/marketplace/HeroNFT.svelte';
  import NFTProductivoSection from '$lib/components/sections/marketplace/NFTProductivoSection.svelte';
  import DailyRewardsSection from '$lib/components/sections/marketplace/DailyRewardsSection.svelte';
  import TechnologyVideoSection from '$lib/components/sections/marketplace/TechnologyVideoSection.svelte';
  import NFTCollectionsSection from '$lib/components/sections/marketplace/NFTCollectionsSection.svelte';
  import MarketplaceBlogSection from '$lib/components/sections/marketplace/MarketplaceBlogSection.svelte';
  import NFTFAQSection from '$lib/components/sections/marketplace/NFTFAQSection.svelte';
  import CommunitySection from '$lib/components/sections/marketplace/CommunitySection.svelte';
  import Newsletter from '$lib/components/sections/Newsletter.svelte';
</script>

<svelte:head>
  <title>NFTs Productivos · Minería Bitcoin | Andes Solar Hash</title>
  <meta name="description" content="NFTs productivos respaldados por minería real de Bitcoin. Recompensas diarias en BTC o stablecoins. Colecciones Andes Solar Hash." />
</svelte:head>

<HeroNFT />
<NFTProductivoSection />
<DailyRewardsSection />
<TechnologyVideoSection />
<NFTCollectionsSection />
<MarketplaceBlogSection />
<NFTFAQSection />
<CommunitySection />
<Newsletter />
