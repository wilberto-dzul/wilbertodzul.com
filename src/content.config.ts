import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Los textos viven en src/content/blog/<idioma>/<slug>.md
// El idioma sale de la carpeta: es/ o en/
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // draft: true → visible en `npm run dev`, invisible en producción.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
