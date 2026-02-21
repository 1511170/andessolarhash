# Changelog

Todos los cambios notables del proyecto se documentan en este archivo.

---

## [Unreleased] - 2025-02-21

### Añadido

- **Imágenes locales (sin CDN Builder.io)**
  - Script `scripts/download-builder-io-images.mjs` para descargar las imágenes que antes servía Builder.io y guardarlas en `static/images/` con nombres estables (`builder-*`).
  - Comando npm: `npm run builder:images`.
  - Documentación en `static/images/README.md`.

- **Scripts**
  - `scripts/export-figma-images.mjs`: exporta imágenes desde Figma (ya existía).
  - `scripts/download-builder-io-images.mjs`: descarga y localiza imágenes de Builder.io.

### Cambiado

- **Referencias a imágenes**: Todas las URLs de `api.builder.io` sustituidas por rutas locales `/images/...` en:
  - ProductHighlightCards, MarketplaceBlogSection, AntminerS21Section, AntminerBlock, ServiceCards, Hero, NewsSection, CheckoutContent, NFTCompraContent, HeroHosting, ProductHeroDetail.

- **Sección Technology Video (Figma 335:2002)**
  - Título en dos líneas: "Trabajando con tecnología" / "del más alto nivel".
  - Tipografía: `text-[36px]`, `leading-[40px]`, gradiente naranja.
  - Logo BITMAIN: contenedor `h-[72px]`, `max-w-[300px]`, `rounded-[20px]`.

- **Sección Daily Rewards**
  - Padding inferior de la sección: `pb-0` (antes `py-16 md:py-20`).

- **Sección Hosting Hero (Figma 147:291)**
  - Ajustada al diseño exacto de Figma: label "INFRAESTRUCTURA Y EFICIENCIA", título en tres líneas, párrafo 20px #d1d5db, CTA "AGENDAR LLAMADA DE EVALUACIÓN" con estilo de botón (60px, #F7AD1F), card de tarifa con borde 4px naranja, precio $0.088 en gradiente 72px.

- **NFT FAQ**
  - Color del párrafo intro forzado a blanco (inline style) para consistencia visual.

### Documentación

- `static/images/README.md`: sección sobre imágenes Builder.io locales y uso del script.
- `package.json`: script `builder:images` para re-descargar imágenes Builder.io si hace falta.

---

## Notas

- **Build estático**: El proyecto usa `@sveltejs/adapter-static`. Para generar la versión estática: `npm run build`. La salida queda en `/build` (según configuración de SvelteKit).
- **Repos**: Cambios subidos al repositorio principal (origin). Si usas un repo aparte para publicar la versión estática (p. ej. GitHub Pages), añade el remote y sube el contenido de la carpeta de build.
