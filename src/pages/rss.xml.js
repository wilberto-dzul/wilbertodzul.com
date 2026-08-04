import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/content';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: `${site.name} — textos`,
    description:
      'Notas sobre agentes de IA, arquitectura de software y construir producto solo. Escritas desde Mérida, Yucatán.',
    site: context.site ?? site.url,
    items: posts.map((post) => {
      const [lang, ...rest] = post.id.split('/');
      const slug = rest.join('/');
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        categories: post.data.tags,
        link: lang === 'es' ? `/blog/${slug}/` : `/en/blog/${slug}/`,
      };
    }),
    customData: '<language>es-mx</language>',
  });
}
