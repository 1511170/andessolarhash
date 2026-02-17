# Andes Solar Hash

Marketplace Web3 de NFTs relacionados con energía solar y minería en los Andes.

## Stack

- **SvelteKit** + **TypeScript**
- **Tailwind CSS 3** (design tokens desde Pencil)
- **viem** (Web3 interactions)
- **Polygon** (blockchain)

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

El servidor debería estar disponible en **http://localhost:5173**

## Estructura

- `src/routes/(web)/` - Sitio público (HOME, blog, hosting, marketplace)
- `src/lib/components/ui/` - Componentes UI base (Button, Badge)
- `src/lib/components/sections/` - Secciones (Header, Footer, Hero, ServiceCards)
- `src/lib/web3/` - Lógica Web3 (stores, wallet, contracts)

## Design System

Los tokens de diseño están en `tailwind.config.js` y provienen del design system de Pencil (`design-system/pencil-design-system.pen`).
