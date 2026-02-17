# Resumen del Design System en Pencil

**Archivo:** `design-system/pencil-design-system.pen`  
**Revisado con:** Pencil MCP (batch_get, get_variables, snapshot_layout)

---

## 1. Variables (design tokens)

Todas las variables están definidas y listas para llevar a Tailwind/CSS.

### Colores

| Variable | Valor | Uso |
|----------|--------|-----|
| `--color-brand` | `#f7ad1f` | CTAs, acentos, logo |
| `--color-brand-dark` | `#e0831f` | Gradiente, botones hover |
| `--color-accent-blue` | `#4a57a8` | Badges, secundario |
| `--color-error` | `#ef4444` | Errores, danger |
| `--color-bg-base` | `#0b0d1b` | Fondo principal |
| `--color-bg-secondary` | `#15172e` | Fondos elevados |
| `--color-bg-card` | `#1d2242` | Cards, surfaces |
| `--color-border` | `#2a3060` | Bordes |
| `--color-text-primary` | `#ffffff` | Título, texto principal |
| `--color-text-secondary` | `#d1d5db` | Body, descripciones |
| `--color-text-muted` | `#9ca3af` | Labels, hints |

### Tipografía

| Variable | Valor | Uso |
|----------|--------|-----|
| `--font-display` | Maven Pro | Headings, hero, títulos |
| `--font-ui` | Archivo | Body, labels, botones, UI |
| `--font-body` | Inter | (Definido; en el .pen se usa más Archivo/Maven) |

---

## 2. Secciones del design system (frames)

| # | Nombre | Contenido principal |
|---|--------|----------------------|
| **01** | Colores | Brand, fondos, texto (swatches con hex) |
| **02** | Tipografía | Maven Pro (H1 64px, H2 36px, H3 30px); Archivo (24 Bold, 16 Reg, 12 Reg) |
| **03** | Botones & Badges | Primary, Outline, Ghost, Danger; badges DISPONIBLE, NUEVO, WEB3, AGOTADO |
| **04** | Cards | NFT card, Product card (Antminer), Stat card (hashrate) |
| **05** | Formularios | Input (default/focus/error), checkbox, radio, select, textarea |
| **06** | Navegación | Navbar glassmorphism, Footer (columnas, Polygon Mainnet) |
| **07** | Web3 | Conectar Wallet, wallet conectada, network badge, estados tx (pending/success/fail), NFT mini cards, stat cards |
| **08** | Gradientes & Efectos | DEGRA (#e0831f→#f7ad1f), Linear (fondos), Hero fade; bordes subtle/medium/brand |
| **09** | Hero Section | “Minería Solar, Rentabilidad Real.”, badge pill, CTAs, scroll hint |
| **10** | Service Cards | “Nuestros Servicios”, card ASIC (Venta ASIC Miner) |

---

## 3. Componentes / patrones documentados

Aunque en el .pen no hay nodos marcados como `reusable: true`, estos patrones están claramente definidos y se pueden implementar como componentes en código:

- **Botones:** Primary (brand), Outline (borde blanco), Ghost (texto brand), Danger (error).
- **Badges:** Pill con variantes (brand, bg-card, accent-blue, error). Texto 11px Bold Archivo.
- **Cards:** nftCard (imagen + badge + título + desc + precio + CTA), prodCard (Antminer, 2 botones), statCard (icono + valor + label).
- **Formularios:** Input con label, estados default/focus/error y mensaje de error; checkbox/radio; select; textarea.
- **Navbar:** Logo (icon sun + “Andes Solar Hash”), links (Inicio, NFTs, Hosting, Blog), CTA “Conectar Wallet” con icono wallet. Fondo `rgba(30,33,66,0.70)`, borde inferior.
- **Footer:** Brand + descripción, columnas (Producto, Empresa), copyright, “Polygon Mainnet” con dot verde.
- **Web3:** Botón Conectar Wallet; estado conectado (dirección cortada + disconnect); network badge (Polygon); estados de transacción (pending, success, fail); NFT mini cards; stat cards (BTC ganado, Hashrate).
- **Hero:** Badge pill “COMPAÑÍA CHILENA · GESTIÓN LEGAL (SII)”, H1 Maven Pro 72px, subtítulo Archivo 18px, dos CTAs (primary + outline), “Scroll para explorar”.

---

## 4. Valores clave para implementación

- **Border radius:** Botones 6px, cards 12px, badges pill (999), inputs 6px.
- **Padding botones:** 14px vertical, 28px horizontal (primary/outline/ghost/danger).
- **Padding cards:** 20px (nft/prod body), 24px (stat card).
- **Iconos:** Lucide (sun, wallet, chevron-down, loader, check, x, cpu, bitcoin, zap, log-out).
- **Gradientes:** DEGRA 135° (CTAs), Linear 180° (overlays), Hero fade transparent→#0b0d1b.

---

## 5. Siguiente paso recomendado

1. **En código:** Crear `tailwind.config.js` (o equivalente) y `global.css` con estas variables para que SvelteKit + Tailwind usen los mismos tokens.
2. **Componentes Svelte:** Implementar en este orden: Button, Badge, Card (NFT + Product + Stat), Input/Select/Textarea/Checkbox/Radio, Navbar, Footer, ConnectWallet y estados de tx, Hero, Service Cards.
3. **Opcional en Pencil:** Marcar como componentes reutilizables (reusable: true) los frames que representen cada UI component para mantener el .pen como referencia única.

Si quieres, el siguiente paso puede ser generar el `tailwind.config.js` y las clases CSS a partir de estas variables.
