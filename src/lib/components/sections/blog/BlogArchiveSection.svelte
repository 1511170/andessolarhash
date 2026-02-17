<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';
  import { blogPosts } from '$lib/data/blog';

  let searchQuery = '';
  const perPage = 12;
  const posts = blogPosts;

  function goToPage(num: number) {
    if (!browser) return;
    const params = new URLSearchParams($page.url.searchParams);
    params.set('page', String(num));
    goto(`${$page.url.pathname}?${params.toString()}`, { replaceState: true });
  }

  $: filteredPosts = searchQuery.trim() === ''
    ? posts
    : posts.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
  $: totalPages = Math.max(1, Math.ceil(filteredPosts.length / perPage));
  $: currentPage = browser
    ? Math.max(1, Math.min(totalPages, parseInt($page.url.searchParams.get('page') || '1', 10) || 1))
    : 1;
  $: paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );
</script>

<section class="bg-base py-16 md:py-24">
  <div class="max-w-[1280px] mx-auto px-6">
    <h2 class="font-display font-black text-xl md:text-2xl text-white uppercase tracking-tight mb-6">
      Archivo
    </h2>
    <div class="mb-8">
      <label for="blog-search" class="sr-only">Buscar publicaciones</label>
      <input
        id="blog-search"
        type="search"
        placeholder="Buscar publicaciones..."
        bind:value={searchQuery}
        class="w-full max-w-md px-4 py-3 rounded-lg bg-base-card border border-border text-primary placeholder-muted text-body focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
      />
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {#each paginatedPosts as post}
        <a href="/blog/{post.slug}" class="group block rounded-xl overflow-hidden bg-base-card border border-border hover:border-brand/40 transition-colors no-underline">
          <div class="aspect-[16/10] bg-base-secondary flex items-center justify-center overflow-hidden">
            <div class="w-full h-full bg-gradient-to-br from-brand/10 to-accent-blue/10 flex items-center justify-center">
              <svg class="w-12 h-12 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
            </div>
          </div>
          <div class="p-5">
            <p class="text-caption text-muted font-ui mb-2">{post.date}</p>
            <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-brand transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p class="text-body-sm text-secondary line-clamp-2">{post.excerpt}</p>
          </div>
        </a>
      {/each}
    </div>

    {#if filteredPosts.length === 0}
      <p class="text-secondary font-ui text-center py-12">No se encontraron publicaciones para "{searchQuery}".</p>
    {:else if totalPages > 1}
      <nav class="flex flex-wrap items-center justify-center gap-2 mt-12" aria-label="Paginación del blog">
        <button
          type="button"
          class="px-4 py-2 rounded-lg border border-border text-body-sm font-ui text-secondary hover:bg-base-card hover:text-primary transition-colors"
          on:click={() => goToPage(1)}
          disabled={currentPage <= 1}
        >Primera</button>
        <button
          type="button"
          class="px-4 py-2 rounded-lg border border-border text-body-sm font-ui text-secondary hover:bg-base-card hover:text-primary transition-colors disabled:opacity-50 disabled:pointer-events-none"
          on:click={() => goToPage(currentPage - 1)}
          disabled={currentPage <= 1}
        >Anterior</button>
        {#each Array(totalPages) as _, i}
          {@const pageNum = i + 1}
          <button
            type="button"
            class="px-4 py-2 rounded-lg border text-body-sm font-ui transition-colors {currentPage === pageNum ? 'border-brand bg-brand/10 text-brand' : 'border-border text-secondary hover:bg-base-card hover:text-primary'}"
            on:click={() => goToPage(pageNum)}
          >{pageNum}</button>
        {/each}
        <button
          type="button"
          class="px-4 py-2 rounded-lg border border-border text-body-sm font-ui text-secondary hover:bg-base-card hover:text-primary transition-colors disabled:opacity-50 disabled:pointer-events-none"
          on:click={() => goToPage(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >Siguiente</button>
        <button
          type="button"
          class="px-4 py-2 rounded-lg border border-border text-body-sm font-ui text-secondary hover:bg-base-card hover:text-primary transition-colors"
          on:click={() => goToPage(totalPages)}
          disabled={currentPage >= totalPages}
        >Última</button>
      </nav>
    {/if}
  </div>
</section>
