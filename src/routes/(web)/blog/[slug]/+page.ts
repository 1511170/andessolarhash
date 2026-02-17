import { getPostBySlug, blogPosts } from '$lib/data/blog';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const entries = () => blogPosts.map((p) => ({ slug: p.slug }));

export const load: PageLoad = ({ params }) => {
  const post = getPostBySlug(params.slug);
  if (!post) throw error(404, 'Entrada no encontrada');
  return { post };
};
