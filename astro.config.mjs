import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wilbertodzul.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // El blog está apagado (ver BLOG_ENABLED en src/data/content.ts):
      // que no salga en el sitemap mientras tanto.
      filter: (page) => !page.includes('/blog'),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-MX', en: 'en-US' },
      },
    }),
  ],
  markdown: {
    // El resaltado toma los colores del sitio (ver --astro-code-* en global.css),
    // así funciona igual en claro y en oscuro.
    shikiConfig: { theme: 'css-variables', wrap: true },
  },
});
