import { getPostBySlug } from '$lib/data/blog';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const post = getPostBySlug(params.slug);
  if (!post) throw error(404, 'Entrada no encontrada');
  return { post };
};
