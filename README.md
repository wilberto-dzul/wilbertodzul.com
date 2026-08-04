# wilbertodzul.com

Sitio personal: portfolio + blog. Astro 5, sin frameworks de UI, sin analítica.
Español como idioma principal, inglés en `/en/`.

## Correr

```bash
npm run dev       # http://localhost:4321  (aquí SÍ se ven los borradores)
npm run build     # genera dist/
npm run preview   # sirve dist/
```

## Dónde se edita cada cosa

| Qué quieres cambiar | Archivo |
| --- | --- |
| Bio, casos, empleos, textos de la home | `src/data/content.ts` |
| Menú, etiquetas de interfaz, correo, redes | `src/data/content.ts` (`site`, `ui`) |
| Colores, tipografía, espaciados | `src/styles/global.css` (bloque `:root`) |
| La greca (marca del sitio) | `src/components/Greca.astro` |
| Imagen que se ve al compartir | `public/og.png` |

Todo el contenido de la home vive en objetos `es` / `en`. Si agregas algo en uno,
agrégalo en el otro: TypeScript se queja si falta.

## Escribir un texto

Crea un `.md` en `src/content/blog/es/` (o `en/` para inglés):

```markdown
---
title: 'Título del texto'
description: 'Una línea. Sale en el índice, en Google y al compartir.'
date: 2026-08-10
tags: ['Agentes', 'Arquitectura']
draft: true
---

El cuerpo, en Markdown normal.
```

- `draft: true` → se ve en `npm run dev`, **no** se publica.
- El nombre del archivo es la URL: `mi-texto.md` → `/blog/mi-texto`.
- Si escribes el mismo texto en ambos idiomas con el mismo nombre de archivo, el
  botón ES/EN salta directo entre las dos versiones.

## Publicar

Cloudflare Pages, proyecto `wilbertodzul` (subida directa, no conectado a Git):

```bash
npm run deploy    # build + wrangler pages deploy dist
```

Requiere estar logueado: `npx wrangler login`.

`public/_headers` ya trae cache y cabeceras de seguridad; `robots.txt` y el
sitemap se generan solos.
