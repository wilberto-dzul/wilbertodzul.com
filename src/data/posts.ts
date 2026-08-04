import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './content';

export type Post = CollectionEntry<'blog'>;

/** El id es "<idioma>/<slug>" porque los archivos viven en carpetas por idioma. */
export const postLang = (post: Post): Lang => (post.id.split('/')[0] as Lang) ?? 'es';
export const postSlug = (post: Post): string => post.id.split('/').slice(1).join('/');

/** Posts de un idioma, más nuevos primero. Los borradores solo salen en dev. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const all = await getCollection('blog', ({ data }) => import.meta.env.PROD !== true || !data.draft);
  return all
    .filter((post) => postLang(post) === lang)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-MX' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function readingTime(post: Post): number {
  const words = (post.body ?? '').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
