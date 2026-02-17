# Andes Solar Hash — Design System

> Extraído de Figma `9Yz7rsHqdK9ITCLH9J2FdX` el 2026-02-17.
> Páginas analizadas: HOME, NFT, HOSTING, PRODUCTO MINERIA.

---

## Colores

### Fondos
| Token                  | Valor            | Uso                           |
|------------------------|------------------|-------------------------------|
| `--color-bg-base`      | `#0b0d1b`        | Fondo principal de página     |
| `--color-bg-secondary` | `#15172e`        | Secciones alternadas          |
| `--color-bg-card`      | `#1d2242`        | Cards, paneles, overlays      |
| `--color-bg-nav`       | `rgba(30,33,66,.6)` | Navbar (glassmorphism)    |
| `--color-bg-nav-top`   | `#000000`        | Barra top del nav             |

### Brand
| Token               | Valor     | Uso                           |
|---------------------|-----------|-------------------------------|
| `--color-brand`     | `#f7ad1f` | Acento principal, CTAs, icons |
| `--color-brand-dark`| `#e0831f` | Inicio del gradiente DEGRA    |

> El diseño en Figma usa 4 variantes muy similares (`#e08324`, `#e3aa34`, `#f5ac21`, `#f7ad1f`).
> Se consolidan en `--color-brand` y `--color-brand-dark`.

### Texto
| Token                    | Valor     | Uso                    |
|--------------------------|-----------|------------------------|
| `--color-text-primary`   | `#ffffff` | Títulos, texto principal |
| `--color-text-secondary` | `#d1d5db` | Párrafos, descripciones |
| `--color-text-muted`     | `#9ca3af` | Labels secundarios     |
| `--color-text-disabled`  | `#6b7280` | Elementos inactivos    |
| `--color-text-brand`     | `#f7ad1f` | Links y acentos        |

### Estado y Accent
| Token                | Valor     | Uso                       |
|----------------------|-----------|---------------------------|
| `--color-error`      | `#ef4444` | Errores, alertas          |
| `--color-error-dark` | `#dc2626` | Variante hover de error   |
| `--color-accent-blue`| `#4a57a8` | Accent secundario (NFT)   |

### Bordes
| Token                  | Valor                      | Uso                      |
|------------------------|----------------------------|--------------------------|
| `--color-border-subtle`| `rgba(255,255,255,0.10)`   | Bordes generales         |
| `--color-border-soft`  | `rgba(255,255,255,0.05)`   | Bordes muy sutiles       |
| `--color-border-medium`| `rgba(255,255,255,0.20)`   | Bordes más visibles, inputs |

---

## Gradientes

| Token              | Valor                                           | Uso                     |
|--------------------|-------------------------------------------------|-------------------------|
| `--gradient-brand` | `linear-gradient(135deg, #e0831f, #f7ad1f)`    | CTAs, badges, highlights |
| `--gradient-bg`    | `linear-gradient(180deg, #1d2242, #101429)`    | Overlays, fondos oscuros |
| `--gradient-hero`  | `linear-gradient(180deg, transparent, #0b0d1b)`| Hero fade-to-dark       |

---

## Tipografía

### Familias
| Variable          | Familia       | Uso                              |
|-------------------|---------------|----------------------------------|
| `--font-display`  | Maven Pro     | H1, H2, H3 — display/headings   |
| `--font-ui`       | Archivo       | Labels, valores, botones, UI     |
| `--font-body`     | Inter         | Párrafos, texto largo            |

### Escala de tamaños
| Token        | rem      | px  |
|--------------|----------|-----|
| `--text-xs`  | 0.75rem  | 12  |
| `--text-sm`  | 0.875rem | 14  |
| `--text-base`| 1rem     | 16  |
| `--text-lg`  | 1.125rem | 18  |
| `--text-xl`  | 1.25rem  | 20  |
| `--text-2xl` | 1.5rem   | 24  |
| `--text-3xl` | 1.875rem | 30  |
| `--text-4xl` | 2.25rem  | 36  |
| `--text-5xl` | 2.75rem  | 44  |
| `--text-6xl` | 4.5rem   | 72  |

### Estilos tipográficos definidos en Figma
| Nombre          | Familia    | Peso | Tamaño | Line-height | Uso                      |
|-----------------|------------|------|--------|-------------|--------------------------|
| Heading 1       | Maven Pro  | 900  | 72px   | 1.1         | Hero principal           |
| Heading 2       | Maven Pro  | 900  | 36px   | 1.11        | Títulos de sección       |
| Heading 3       | Maven Pro  | 700  | 30px   | 1.2         | Subtítulos               |
| Heading 4       | Maven Pro  | 700  | 44px   | 1.1         | Énfasis especial         |
| Price           | Maven Pro  | 900  | 36px   | 1.11        | Precios en productos     |
| Label Bold      | Archivo    | 700  | 18px   | 1.56        | Labels destacados        |
| Label Black     | Archivo    | 900  | 20px   | 1.4         | Valores, datos           |
| Body            | Archivo    | 400  | 18px   | 1.56        | Descripciones generales  |
| Body Small      | Archivo    | 400  | 14px   | 1.43        | Texto auxiliar           |
| Caption         | Archivo    | 400  | 24px   | 1.33        | Subtítulos secundarios   |
| Body Base       | Inter      | 400  | 16px   | 1.4         | Párrafos de contenido    |

---

## Efectos y Elevación

| Propiedad     | Valor           | Uso                              |
|---------------|-----------------|----------------------------------|
| Nav blur      | `blur(12px)`    | Navbar glassmorphism             |
| Border bottom nav | `rgba(255,255,255,0.10) 1px` | Separador nav |
| Border card   | `rgba(255,255,255,0.10) 1px` | Cards y paneles |

---

## Layout

| Token               | Valor    | Descripción                   |
|---------------------|----------|-------------------------------|
| `--container-max`   | 1280px   | Ancho máximo del contenido    |
| Canvas desktop      | 1920px   | Ancho de los frames en Figma  |
| Container padding   | 320px    | Padding lateral (en 1920px)   |

---

## Clases utilitarias disponibles

```css
.container-site   /* Contenedor centrado, max 1280px */
.glass-nav        /* Glassmorphism para navbar */
.gradient-brand   /* Fondo gradiente naranja */
.gradient-bg      /* Fondo gradiente azul oscuro */
.gradient-hero    /* Gradiente hero fade */
.text-gradient-brand /* Texto con gradiente brand */
.divider-brand    /* Separador naranja (61x7px) */
```

## Componentes base disponibles

```css
.btn-primary   /* Botón con gradiente brand, texto negro */
.btn-outline   /* Botón outline blanco, hover naranja */
.card          /* Card base: bg-card + border-subtle */
.badge-brand   /* Badge con gradiente, uppercase */
.section       /* Wrapper con padding vertical 5rem */
.section-dark  /* Section con bg-secondary */
```

---

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `src/lib/styles/tokens.css` | CSS custom properties (fuente de verdad) |
| `src/app.css` | Tailwind v4 + reset + utilities + components |
| `design-system/DESIGN-SYSTEM.md` | Esta documentación |
