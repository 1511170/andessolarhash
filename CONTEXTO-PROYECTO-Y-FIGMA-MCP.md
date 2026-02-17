# 🌞 Andes Solar Hash – Contexto total y uso de Figma MCP

**Objetivo:** Tener el contexto completo del proyecto y usar el **Figma MCP** como fuente de verdad para diseño y desarrollo pixel-perfect.

---

## 1. De qué va el proyecto

**Andes Solar Hash** es un **marketplace Web3** y sitio corporativo que combina:

- **Sitio público:** HOME, Producto Minería, Hosting, Blog, Contacto.
- **App Web3:** Marketplace de NFTs, detalle NFT, compra, “Mis NFTs”.
- **Tema:** Minería de Bitcoin con energía solar, soporte local en Chile, NFTs que representan capacidad minera/paneles solares.

**Valor:** Inversión en energía renovable, tokenización de activos (minería/paneles), transparencia on-chain, ingresos pasivos.

**Público:** Inversores cripto, early adopters Web3, LATAM (Chile, Perú, Colombia, etc.).

---

## 2. Stack elegido (y por qué)

| Capa | Tecnología | Uso |
|------|------------|-----|
| **Frontend** | SvelteKit + TypeScript | App + sitio, SSR/SSG, rutas API |
| **Estilos** | Tailwind CSS 4 | Design tokens, componentes, responsive |
| **Web3** | viem + @wagmi/connectors | Wallet, contratos, estado |
| **Blockchain** | Polygon (recomendado) | NFTs, gas bajo |
| **Contratos** | Solidity + Hardhat/Foundry | ERC-721, marketplace |
| **Metadata** | IPFS (Pinata / NFT.Storage) | Imágenes y JSON de NFTs |
| **Deploy** | Vercel o Cloudflare Pages | Frontend |

**Resumen:** SvelteKit + viem + Tailwind es el stack principal; Figma MCP se usa para **extraer diseño y mantener coherencia**, no para cambiar el stack.

---

## 3. Figma actual – estado y enlace

- **URL (archivo de diseño actual):** https://www.figma.com/design/9Yz7rsHqdK9ITCLH9J2FdX/ANDES-SOLAR-HASH---KINTO  
- **fileKey (para MCP):** `9Yz7rsHqdK9ITCLH9J2FdX`  
- **Nombre en Figma:** ANDES SOLAR HASH - KINTO

**Estado (resumen):**

- ✅ 14 páginas (desktop + mobile) diseñadas.
- ✅ Diseño visual claro: azul oscuro, naranja/dorado, hero con equipo, cards de servicios, newsletter, footer.
- ❌ 0 componentes en Figma (todo frames/grupos).
- ❌ Design system incompleto (pocos estilos/variables).

**IDs de frames principales (para MCP):**

| Página | Node ID | Notas |
|--------|--------|--------|
| HOME | `6:2` | Landing principal |
| NFT | `92:295` | Galería/marketplace |
| NFT COMPRA | `97:774` o `158:328` | Checkout |
| HOSTING | `147:132` | Servicios hosting |
| PRODUCTO MINERIA | `239:92` | Productos/minería |
| CONTACTO | `120:30` | Contacto |
| BLOG | `170:262` | Blog |
| M_HOME (mobile) | `317:30` | HOME mobile |
| M_NFT (mobile) | `330:130` | NFT mobile |
| … | … | Resto con prefijo M_ |

**Design tokens ya detectados en Figma:**

- **DEGRA:** gradiente naranja `#e0831f` → `#f7ad1f` (CTAs, acentos).
- **Linear:** gradiente azul `#1d2242` → `#101429` (overlays, fondos).
- **Body Base:** Inter 16px, Regular, line-height 140%.

**Orden de trabajo recomendado:** Primero crear **Design System** y **componentes** dentro de Figma; después pasar a Tailwind + SvelteKit + viem. Así el MCP y el código tienen una sola fuente de verdad (ver PIXEL-PERFECT-GUIDE.md).

---

## 4. Cómo usar el Figma MCP para los mejores resultados

El **Figma MCP** permite:

1. **Obtener contexto de diseño** de un nodo (página o componente) y generar código alineado al diseño.
2. **Ver capturas** de pantalla del diseño para comparar con el código.
3. **Obtener variables** (colores, etc.) cuando existan en el archivo.
4. **Trabajar nodo a nodo** para implementar secciones o componentes concretos.

### Uso recomendado en este proyecto

- **Para cada página o sección:**  
  Llamar a `get_design_context` con `fileKey: 9Yz7rsHqdK9ITCLH9J2FdX` y el `nodeId` correspondiente (ej. `6:2` para HOME).  
  Usar el código y las especificaciones que devuelva como base para Svelte + Tailwind.

- **Para validar visualmente:**  
  Usar `get_screenshot` con el mismo `fileKey` y `nodeId` para comparar con la implementación en el navegador.

- **Para tokens/variables:**  
  Usar `get_variable_defs` en un nodo que use estilos (ej. HOME `6:2`) para reforzar colores y variables en `tailwind.config` o CSS.

- **Para componentes:**  
  Cuando en Figma se definan componentes (tras refactor), usar sus nodeIds con `get_design_context` para generar componentes Svelte 1:1.

### Ejemplo de flujo con MCP

```
1. Decidir qué implementar (ej. Hero de HOME).
2. get_metadata(fileKey, nodeId) → ver estructura del frame.
3. get_design_context(fileKey, nodeId) → código + especificaciones.
4. get_screenshot(fileKey, nodeId) → referencia visual.
5. Implementar en Svelte/Tailwind siguiendo ese contexto.
6. Validar en navegador (y, si hace falta, con overlay de la screenshot).
```

---

## 5. Estructura de código propuesta (resumen)

```
/andessolarhash
├── src/
│   ├── routes/
│   │   ├── (web)/           # Sitio público: HOME, blog, hosting, producto-mineria, contacto
│   │   ├── (app)/           # Web3: marketplace, [id], my-nfts, compra
│   │   └── api/             # nfts, metadata, ipfs
│   ├── lib/
│   │   ├── web3/            # wallet, contract, stores, ipfs
│   │   ├── components/
│   │   │   ├── ui/          # Button, Input, Card, Modal, etc.
│   │   │   ├── web3/        # ConnectWallet, NFTCard, etc.
│   │   │   └── sections/    # Hero, Header, Footer, etc.
│   │   ├── contracts/       # ABIs, config
│   │   └── types/
│   └── styles/
│       └── global.css
├── static/
│   ├── images/
│   └── icons/
├── smart-contracts/         # Solidity, Hardhat/Foundry
└── docs/                    # README, FIGMA-ANALYSIS, etc.
```

Los **design tokens** (colores, tipografía, sombras) se llevan a `tailwind.config.js` y/o `global.css`, usando tanto lo extraído del Figma como lo definido en FIGMA-ANALYSIS.md y PIXEL-PERFECT-GUIDE.md.

---

## 6. Decisiones pendientes (recordatorio)

Para cerrar el contexto y avanzar con implementación:

- **Blockchain:** Polygon (recomendado) u otra red.
- **Contratos:** ¿Existen ya o se crean? (ERC-721, marketplace.)
- **Figma:** ¿Refactorizar primero (componentes + design system) o desarrollar con el diseño actual y usar MCP por secciones?
- **Funcionalidades marketplace:** Conectar wallet, listar NFTs, compra, “Mis NFTs”, filtros, etc.
- **Pago:** crypto nativa (MATIC), stablecoins, o híbrido.
- **Metadata:** IPFS (recomendado) y servicio de pinning.
- **Auth:** solo wallet (SIWE) o híbrido con backend.

---

## 7. Próximos pasos recomendados

1. **Confirmar** las decisiones anteriores (al menos blockchain, contratos y enfoque Figma).
2. **Inicializar** el proyecto (SvelteKit, Tailwind, viem) si aún no existe.
3. **Por cada pantalla o sección:**
   - Usar Figma MCP (`get_design_context` + `get_screenshot`) con el `nodeId` correcto.
   - Implementar en Svelte/Tailwind.
   - Ajustar design tokens en Tailwind según FIGMA-ANALYSIS y variables de Figma.
4. **Opcional pero recomendable:** Refactorizar Figma (design system + componentes) para que futuras llamadas a MCP devuelvan componentes y tokens más claros.

---

## 8. Referencia rápida Figma MCP

- **fileKey:** `9Yz7rsHqdK9ITCLH9J2FdX` (ANDES-SOLAR-HASH---KINTO)
- **NodeIds útiles:** HOME `6:2`, NFT `92:295`, HOSTING `147:132`, PRODUCTO MINERIA `239:92`, CONTACTO `120:30`, BLOG `170:262`; mobile M_HOME `317:30`, M_NFT `330:130`.
- **Herramientas:** `get_design_context` (código + especificaciones), `get_screenshot` (referencia visual), `get_variable_defs` (variables/tokens), `get_metadata` (estructura del nodo).

Con este contexto y el uso sistemático del Figma MCP, el proyecto puede desarrollarse alineado al diseño existente y, si se refactoriza Figma, acercarse a resultados pixel-perfect de forma más eficiente.
