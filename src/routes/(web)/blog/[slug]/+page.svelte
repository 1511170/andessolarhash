<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  const post = data.post;
</script>

<svelte:head>
  <title>{post.title} | Blog · Andes Solar Hash</title>
  <meta name="description" content={post.excerpt} />
</svelte:head>

<article class="bg-base min-h-[60vh]">
  <div class="max-w-[720px] mx-auto px-6 py-16">
    <a href="/blog" class="text-brand font-ui text-sm hover:underline mb-6 inline-block no-underline text-brand">← Volver al blog</a>
    <p class="text-caption text-muted font-ui mb-2">{post.date}</p>
    <h1 class="font-display font-black text-2xl md:text-3xl text-white mb-6">{post.title}</h1>
    <p class="text-body-lg text-secondary mb-8">{post.excerpt}</p>
    <div class="prose prose-invert max-w-none text-secondary font-ui text-body">
      <p>Contenido de la entrada en desarrollo. Este es un placeholder para la entrada «{post.title}».</p>
    </div>
    <Button href="/blog" variant="outline" className="mt-10">Ver más entradas</Button>
  </div>
</article>
