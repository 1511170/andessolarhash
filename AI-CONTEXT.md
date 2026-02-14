# 🤖 Contexto Completo para IA - Proyecto Andes Solar Hash

**IMPORTANTE:** Este documento está diseñado para ser leído por otra IA que continúe el proyecto. Contiene TODO el contexto necesario para entender y continuar el trabajo sin pérdida de información.

---

## 📋 Índice de Documentación

```
/home/5toai/andessolarhash/
├── AI-CONTEXT.md              ← ESTE ARCHIVO (contexto para IA)
├── README.md                  ← Resumen ejecutivo
├── FIGMA-ANALYSIS.md          ← Análisis del diseño
├── WEB3-STACK-PROPOSAL.md     ← Stack y arquitectura Web3
└── PIXEL-PERFECT-GUIDE.md     ← Guía pixel-perfect
```

**Orden de lectura recomendado:**
1. **AI-CONTEXT.md** (este archivo) - Contexto general
2. **README.md** - Resumen ejecutivo
3. **FIGMA-ANALYSIS.md** - Entender estado del diseño
4. **WEB3-STACK-PROPOSAL.md** - Stack técnico propuesto
5. **PIXEL-PERFECT-GUIDE.md** - Proceso de implementación

---

## 🎯 RESUMEN EJECUTIVO (30 segundos)

**Proyecto:** Andes Solar Hash
**Tipo:** Marketplace Web3 de NFTs de paneles solares
**Estado:** Fase de planificación (NO hay código aún)
**Documentación:** Completa (4 docs, 96 KB)

**Decisión crítica pendiente:**
¿Refactorizar Figma primero (recomendado) o empezar desarrollo directo?

**Stack propuesto:** SvelteKit + viem + Tailwind CSS 4 + Solidity

**Objetivo:** Implementación pixel-perfect del diseño Figma

---

## 🌍 CONTEXTO DEL PROYECTO

### ¿Qué es Andes Solar Hash?

**Descripción completa:**
Andes Solar Hash es una plataforma Web3 (aplicación descentralizada) que funciona como un marketplace de NFTs. Los NFTs representan paneles solares reales instalados en los Andes (montañas de Sudamérica). Los usuarios pueden:

1. **Comprar NFTs** que representan paneles solares físicos
2. **Generar ingresos pasivos** de la energía producida por esos paneles
3. **Trading secundario** de los NFTs en el marketplace
4. **Servicios de hosting** para minería de criptomonedas con energía solar
5. **Contenido educativo** a través de un blog

**Propuesta de valor:**
- Inversión en energía renovable
- Tokenización de activos físicos (paneles solares)
- Blockchain para transparencia
- Ingresos pasivos por generación de energía

### Público objetivo
- Inversores en cripto interesados en energía renovable
- Early adopters de Web3
- Ambientalistas que usan crypto
- Inversores en LATAM (especialmente países andinos: Perú, Chile, Colombia, Ecuador, Bolivia)

### Páginas del sitio

**Sitio público (sin wallet):**
1. **HOME** - Landing page principal
2. **PRODUCTO MINERIA** - Información de servicios de minería
3. **HOSTING** - Planes y servicios de hosting
4. **BLOG** - Artículos y noticias
5. **CONTACTO** - Formulario y datos de contacto

**App Web3 (requiere wallet):**
6. **MARKETPLACE** - Galería de NFTs disponibles
7. **NFT DETAIL** - Detalles de un NFT específico
8. **NFT COMPRA** - Proceso de compra/checkout
9. **MY NFTS** - Dashboard del usuario con sus NFTs

**Versiones:**
- Desktop: Todas las páginas
- Mobile: Todas las páginas (prefijo M_ en Figma)

---

## 📊 ESTADO ACTUAL DEL PROYECTO

### Fase Actual: PLANIFICACIÓN Y ANÁLISIS

**Completado (100%):**
- ✅ Análisis del Figma existente
- ✅ Propuesta de stack tecnológico
- ✅ Arquitectura del proyecto
- ✅ Guía de implementación pixel-perfect
- ✅ Documentación completa

**NO Completado (0%):**
- ❌ Código (no existe aún)
- ❌ Smart contracts (no desarrollados)
- ❌ Assets exportados del Figma
- ❌ Design system en código
- ❌ Componentes implementados
- ❌ Páginas implementadas

**Decisiones Pendientes:**
Ver sección "DECISIONES CRÍTICAS PENDIENTES" más abajo.

---

## 🎨 ESTADO DEL DISEÑO (FIGMA)

### Análisis Completo

**Archivo Figma:**
- URL: https://www.figma.com/design/PgR2OoW8K0O5Jh5fXW5SCi/ANDES-SOLAR-HASH
- Última modificación: 3 de Febrero 2026
- Páginas: 1 página con 25 frames mezclados

**Calificación: 4/10** ⚠️

**Desglose:**
```
Aspecto               Puntos  Máximo  Estado
─────────────────────────────────────────────
Páginas completas     2       2       ✅ BIEN
Componentes           0       3       ❌ CRÍTICO
Design System         0.5     2       🟡 INCOMPLETO
Organización          0.5     1       🟡 MEJORABLE
Naming                0.5     1       🟡 MEJORABLE
Diseño Visual         1       1       ✅ BIEN
─────────────────────────────────────────────
TOTAL                 4       10      ⚠️
```

### Páginas Identificadas

**Desktop (7 páginas):**
1. HOME (id: 6:2)
2. NFT (id: 92:295)
3. NFT COMPRA (id: 97:774) - duplicado (id: 158:328)
4. HOSTING (id: 147:132)
5. PRODUCTO MINERIA (id: 239:92)
6. CONTACTO (id: 120:30)
7. BLOG (id: 170:262)

**Mobile (7 páginas, prefijo M_):**
1. M_HOME (id: 317:30)
2. M_PRODUCTO (id: 321:2617) - duplicado (id: 324:3375)
3. M_HOSTING (id: 326:4151)
4. M_NFT (id: 330:130)
5. M_NFT COMPRA (id: 331:591) - duplicado (id: 333:969)
6. M_BLOG (id: 335:1489)
7. M_CONTACTO (id: 335:1755)

### Design System Actual

**Estilos definidos: 3 (muy poco)**

1. **DEGRA** (gradiente naranja):
   - Start: `rgb(224, 131, 31)` = `#e0831f`
   - End: `rgb(247, 173, 31)` = `#f7ad1f`
   - Tipo: Linear gradient horizontal
   - Uso: Botones CTA, acentos, elementos de energía solar

2. **Linear** (gradiente azul oscuro):
   - Start: `rgb(29, 34, 66)` = `#1d2242` (alpha 100%)
   - End: `rgb(16, 20, 41)` = `#101429` (alpha 0%)
   - Tipo: Linear gradient diagonal
   - Uso: Overlays, fondos de secciones, header

3. **Body Base** (texto):
   - Font: Inter
   - Size: 16px
   - Weight: Regular (400)
   - Line height: 140% (22.4px)
   - Usa variables de Figma (parcialmente configuradas)

### Componentes Actuales

**Componentes definidos: 0** ❌ **PROBLEMA CRÍTICO**

Todo son frames y grupos sueltos. No hay componentes reutilizables. Esto significa:
- ❌ Imposible extraer componentes directamente
- ❌ Cambios deben hacerse manualmente en cada página
- ❌ Alto riesgo de inconsistencias
- ❌ Difícil validar implementación pixel-perfect

**Elementos repetidos identificados (deberían ser componentes):**
- Botones (aparecen ~15+ veces sin componente)
- Cards de NFT (aparecen ~8+ veces)
- Inputs de formulario (aparecen ~6+ veces)
- Header/Navigation (aparece en todas las páginas)
- Footer (aparece en todas las páginas)
- Links (aparecen ~30+ veces)

### Paleta de Colores Extraída

**Del análisis del Figma:**

```javascript
// Colores primarios (naranja - energía solar)
primary: {
  400: '#f7ad1f',  // Del gradiente (end)
  500: '#e0831f',  // Del gradiente (start) - PRINCIPAL
  // Falta escala completa 50-900
}

// Colores secundarios (azul oscuro - tech/profesional)
secondary: {
  500: '#1d2242',  // Del gradiente (start)
  800: '#101429',  // Del gradiente (end)
  // Falta escala completa 50-900
}

// Neutrals (grises)
// NO están definidos en Figma
// Hay que crearlos desde cero

// Semantic colors
// NO están definidos en Figma
// Hay que crearlos: success, error, warning, info
```

**Lo que FALTA definir:**
- Escala completa de primary (50, 100, 200, 300, 600, 700, 900)
- Escala completa de secondary
- Escala completa de neutrals/grises (50-900)
- Colores semantic (success, error, warning, info)
- Backgrounds (light, dark, muted)

### Tipografía Detectada

**Font family:** Inter (del Figma)
**Nota:** Debe cambiarse o complementarse según preferencia

**Estilos de texto definidos:** Solo 1 (Body Base)

**Lo que FALTA:**
- Display sizes (64px, 56px para headlines grandes)
- Headings (H1: 48px, H2: 36px, H3: 30px, H4: 24px, H5: 20px, H6: 16px)
- Body variants (Large: 18px, Small: 14px)
- Utility text (Caption: 12px, Label: 14px)

### Problemas Identificados

**1. 🔴 CRÍTICO: Cero componentes**
- Todo es flat (frames y grupos)
- No hay reutilización
- Imposible mantener consistencia
- Dificulta desarrollo pixel-perfect

**2. 🟡 IMPORTANTE: Design system incompleto**
- Solo 3 estilos de 50+ necesarios
- Sin variables consistentes
- Sin documentación de valores

**3. 🟡 IMPORTANTE: Desorganización**
- Todo en 1 página (debería ser 5+ páginas organizadas)
- Nombres duplicados (confusión)
- Sin jerarquía clara

**4. 🟡 MEJORABLE: Nombres genéricos**
- "Container" (aparece múltiples veces sin contexto)
- "Gradient" (múltiples sin distinguir)
- "Link" (múltiples sin propósito claro)
- "Group 10", "Group 13" (sin descripción)

---

## 💻 STACK TECNOLÓGICO PROPUESTO

### Stack Completo

```
┌─────────────────────────────────────────┐
│           FRONTEND                      │
├─────────────────────────────────────────┤
│ Framework:       SvelteKit              │
│ Styling:         Tailwind CSS 4         │
│ Language:        TypeScript              │
│ State:           Svelte Stores           │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│           WEB3                          │
├─────────────────────────────────────────┤
│ Blockchain lib:  viem                   │
│ Wallet connect:  @wagmi/connectors      │
│ Alternative:     ethers.js (fallback)   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│           BACKEND (Opcional)            │
├─────────────────────────────────────────┤
│ API:             SvelteKit endpoints    │
│ Database:        PostgreSQL + Prisma    │
│ Storage:         IPFS (metadata NFTs)   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│           BLOCKCHAIN                    │
├─────────────────────────────────────────┤
│ Network:         Polygon (recomendado)  │
│ Contracts:       Solidity               │
│ Development:     Hardhat o Foundry      │
│ Standards:       ERC-721 (NFTs)         │
│ Base contracts:  OpenZeppelin           │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│           DEPLOYMENT                    │
├─────────────────────────────────────────┤
│ Frontend:        Vercel / Cloudflare    │
│ Assets:          IPFS (NFT images)      │
│ RPC Provider:    Infura o Alchemy       │
│ IPFS Pinning:    Pinata / NFT.Storage   │
└─────────────────────────────────────────┘
```

### Por Qué Este Stack

**SvelteKit (vs Next.js):**
- ✅ Más ligero y rápido
- ✅ Menos boilerplate
- ✅ SSR/SSG nativo
- ✅ API routes incluidas
- ✅ Mejor DX (developer experience)
- ✅ Svelte stores perfectos para Web3 state
- ⚠️ Menos ejemplos Web3 que React (pero suficientes)

**viem (vs ethers.js):**
- ✅ Moderno y type-safe
- ✅ Más rápido
- ✅ Mejor TypeScript support
- ✅ Tree-shakeable (bundle más pequeño)
- ✅ Mejor documentación
- ✅ Futuro del ecosistema Web3

**Polygon (vs Ethereum):**
- ✅ Gas fees muy bajos (~$0.01 vs ~$50 en Ethereum)
- ✅ Transacciones rápidas (2 segundos)
- ✅ Compatible 100% con Ethereum (EVM)
- ✅ Ecosistema maduro
- ✅ Popular para NFTs
- ✅ Fácil bridge a Ethereum si es necesario

**IPFS (vs servidor centralizado):**
- ✅ Descentralizado
- ✅ Inmutable
- ✅ Estándar de la industria para NFTs
- ✅ Metadata permanente
- ✅ Resistente a censura

### Arquitectura del Proyecto

```
/andessolarhash
│
├── src/
│   │
│   ├── routes/                      # Routing de SvelteKit
│   │   │
│   │   ├── (web)/                   # Grupo: Sitio público (sin wallet)
│   │   │   ├── +layout.svelte       # Layout del sitio público
│   │   │   ├── +page.svelte         # HOME
│   │   │   │
│   │   │   ├── blog/
│   │   │   │   ├── +page.svelte                  # Blog listing
│   │   │   │   ├── +page.server.ts               # Load posts
│   │   │   │   └── [slug]/
│   │   │   │       ├── +page.svelte              # Blog post detail
│   │   │   │       └── +page.server.ts           # Load post
│   │   │   │
│   │   │   ├── hosting/
│   │   │   │   └── +page.svelte
│   │   │   │
│   │   │   ├── producto-mineria/
│   │   │   │   └── +page.svelte
│   │   │   │
│   │   │   └── contacto/
│   │   │       └── +page.svelte
│   │   │
│   │   ├── (app)/                   # Grupo: App Web3 (requiere wallet)
│   │   │   ├── +layout.svelte       # Layout con Web3Provider
│   │   │   │
│   │   │   ├── marketplace/         # Marketplace de NFTs
│   │   │   │   ├── +page.svelte                  # Grid de NFTs
│   │   │   │   ├── +page.server.ts               # Load NFTs from contract
│   │   │   │   └── [id]/
│   │   │   │       ├── +page.svelte              # NFT detail
│   │   │   │       └── +page.server.ts           # Load NFT metadata
│   │   │   │
│   │   │   ├── my-nfts/             # Dashboard del usuario
│   │   │   │   └── +page.svelte                  # User's NFTs
│   │   │   │
│   │   │   ├── compra/              # Checkout/Buy flow
│   │   │   │   └── +page.svelte
│   │   │   │
│   │   │   └── profile/             # User profile
│   │   │       └── +page.svelte
│   │   │
│   │   └── api/                     # API endpoints
│   │       │
│   │       ├── nfts/
│   │       │   └── +server.ts                    # GET /api/nfts
│   │       │
│   │       ├── metadata/
│   │       │   └── [id]/+server.ts               # GET /api/metadata/:id
│   │       │
│   │       └── ipfs/
│   │           └── +server.ts                    # POST /api/ipfs (upload)
│   │
│   ├── lib/                         # Lógica compartida
│   │   │
│   │   ├── web3/                    # Web3 específico
│   │   │   ├── wallet.ts            # Wallet connection logic
│   │   │   ├── contract.ts          # Contract interactions
│   │   │   ├── ipfs.ts              # IPFS helpers
│   │   │   ├── stores.ts            # Svelte stores para Web3
│   │   │   └── utils.ts             # Web3 utilities
│   │   │
│   │   ├── components/              # Componentes Svelte
│   │   │   │
│   │   │   ├── ui/                  # Componentes UI base
│   │   │   │   ├── Button.svelte
│   │   │   │   ├── Input.svelte
│   │   │   │   ├── Textarea.svelte
│   │   │   │   ├── Checkbox.svelte
│   │   │   │   ├── Card.svelte
│   │   │   │   ├── Modal.svelte
│   │   │   │   ├── Badge.svelte
│   │   │   │   └── Avatar.svelte
│   │   │   │
│   │   │   ├── web3/                # Componentes Web3
│   │   │   │   ├── ConnectWallet.svelte
│   │   │   │   ├── WalletInfo.svelte
│   │   │   │   ├── NetworkSwitch.svelte
│   │   │   │   ├── NFTCard.svelte
│   │   │   │   ├── NFTGrid.svelte
│   │   │   │   ├── BuyNFT.svelte
│   │   │   │   ├── TransactionStatus.svelte
│   │   │   │   └── WalletBalance.svelte
│   │   │   │
│   │   │   └── sections/            # Secciones de páginas
│   │   │       ├── Hero.svelte
│   │   │       ├── Features.svelte
│   │   │       ├── CTA.svelte
│   │   │       ├── Header.svelte
│   │   │       └── Footer.svelte
│   │   │
│   │   ├── contracts/               # Contract ABIs y config
│   │   │   ├── AndesSolarNFT.json   # ABI del contrato NFT
│   │   │   ├── Marketplace.json     # ABI del marketplace
│   │   │   └── config.ts            # Addresses por network
│   │   │
│   │   ├── types/                   # TypeScript types
│   │   │   ├── nft.ts               # NFT types
│   │   │   ├── wallet.ts            # Wallet types
│   │   │   └── contract.ts          # Contract types
│   │   │
│   │   └── utils/                   # Utilities
│   │       ├── formatters.ts        # Format utils
│   │       └── validators.ts        # Validation utils
│   │
│   ├── styles/
│   │   └── global.css               # Tailwind + customs
│   │
│   └── app.html                     # HTML template
│
├── smart-contracts/                 # Blockchain contracts (Solidity)
│   │
│   ├── contracts/
│   │   ├── AndesSolarNFT.sol        # Main NFT contract
│   │   ├── Marketplace.sol          # Marketplace contract
│   │   └── interfaces/
│   │       └── INFT.sol             # NFT interface
│   │
│   ├── scripts/
│   │   ├── deploy.ts                # Deploy scripts
│   │   └── mint.ts                  # Mint NFT script
│   │
│   ├── test/
│   │   ├── AndesSolarNFT.test.ts    # Contract tests
│   │   └── Marketplace.test.ts
│   │
│   ├── hardhat.config.ts            # Hardhat configuration
│   └── package.json
│
├── static/                          # Assets estáticos
│   ├── images/
│   │   ├── hero/
│   │   ├── nfts/                    # NFT images (temp, luego IPFS)
│   │   └── blog/
│   │
│   ├── icons/
│   │   ├── social/
│   │   └── ui/
│   │
│   └── fonts/                       # Si se usan custom fonts
│
├── docs/                            # Documentación (estos archivos)
│   ├── AI-CONTEXT.md
│   ├── README.md
│   ├── FIGMA-ANALYSIS.md
│   ├── WEB3-STACK-PROPOSAL.md
│   └── PIXEL-PERFECT-GUIDE.md
│
├── .env.example                     # Environment variables template
├── svelte.config.js                 # SvelteKit config
├── tailwind.config.js               # Tailwind config
├── vite.config.ts                   # Vite config
├── tsconfig.json                    # TypeScript config
├── package.json
└── README.md
```

---

## ⚠️ DECISIONES CRÍTICAS PENDIENTES

**IMPORTANTE:** El proyecto NO puede avanzar sin estas decisiones.

### 1. Diseño: ¿Refactorizar Figma? (CRÍTICO)

**Pregunta:** ¿Invertir 1-2 días en refactorizar el Figma primero?

**Opción A: Refactorizar Figma → Desarrollo** (RECOMENDADO)
- Tiempo: 1-2 días Figma + 18-25 días desarrollo = 20-27 días
- Precisión: 98-100% pixel-perfect
- Ventajas: Single source of truth, fácil validar, consistencia
- Desventajas: No muestra código inmediatamente

**Opción B: Desarrollo Directo con Figma Actual**
- Tiempo: 25-35 días (más lento por iteraciones)
- Precisión: ~90%
- Ventajas: Empieza código ya
- Desventajas: Inconsistencias, difícil validar, más tiempo total

**Impacto de esta decisión:**
- Afecta toda la metodología de desarrollo
- Afecta timeline
- Afecta calidad final
- Afecta mantenibilidad

### 2. Blockchain: ¿Qué red usar?

**Pregunta:** ¿En qué blockchain van a vivir los NFTs?

**Opciones:**
- **Polygon** (RECOMENDADO): Gas fees bajos, rápido, EVM-compatible
- **Ethereum Mainnet**: Más seguro, gas fees altos (~$50/tx)
- **Ethereum Testnet** (Sepolia): Solo para desarrollo
- **BSC**: Gas fees bajos, ecosistema diferente
- **Arbitrum/Optimism**: L2s de Ethereum
- **Base**: L2 de Coinbase, emergente

**Impacto:**
- Afecta configuración de viem
- Afecta deployment de contracts
- Afecta costos de transacción
- Afecta user experience

### 3. Smart Contracts: ¿Existen o hay que crear?

**Pregunta:** ¿Ya tienen los smart contracts desarrollados y deployed?

**Caso A: YA EXISTEN**
- Necesito: Dirección del contrato, ABI, documentación
- Tiempo ahorrado: 2-3 días
- Siguiente paso: Integrar con frontend

**Caso B: HAY QUE CREAR**
- Necesito decidir:
  - Estándar: ERC-721 o ERC-1155
  - Funcionalidades: mint, marketplace, royalties, etc.
  - Herramienta: Hardhat o Foundry
- Tiempo: 2-3 días desarrollo + testing
- Siguiente paso: Desarrollar contracts

**Impacto:**
- Afecta timeline (±2-3 días)
- Afecta funcionalidades disponibles
- Afecta arquitectura del frontend

### 4. Funcionalidades del Marketplace

**Pregunta:** ¿Qué debe poder hacer el usuario?

**Funcionalidades básicas (marcar las que aplican):**
- [ ] Conectar wallet (MetaMask, WalletConnect, etc.)
- [ ] Ver catálogo de NFTs disponibles
- [ ] Ver detalles de NFT (metadata, precio, propiedades)
- [ ] Comprar NFT (mint directo del contrato)
- [ ] Ver balance de wallet
- [ ] Ver historial de transacciones

**Funcionalidades avanzadas (marcar las que aplican):**
- [ ] Ver "Mis NFTs" (NFTs del usuario)
- [ ] Vender NFT en marketplace secundario
- [ ] Hacer ofertas por NFTs (bidding)
- [ ] Staking de NFTs (generar rewards)
- [ ] Transferir NFTs a otra wallet
- [ ] Quemar NFTs (burn)
- [ ] Whitelist para preventa
- [ ] Mystery box reveal mechanism

**Impacto:**
- Afecta complejidad del proyecto
- Afecta smart contracts necesarios
- Afecta UI/UX del marketplace
- Afecta timeline

### 5. Método de Pago

**Pregunta:** ¿Cómo se pagan los NFTs?

**Opciones (puede ser múltiple):**
- [ ] **Crypto nativa** (MATIC en Polygon, ETH en Ethereum)
- [ ] **Stablecoins** (USDC, USDT, DAI)
- [ ] **Token custom** del proyecto (crear token ERC-20 propio)
- [ ] **Fiat** (tarjeta de crédito) vía MoonPay/Transak

**Configuración de precios:**
- [ ] Precio fijo por NFT
- [ ] Subasta holandesa (precio baja con tiempo)
- [ ] Subasta inglesa (ofertas crecientes)
- [ ] Bonding curve (precio sube con cada compra)

**Impacto:**
- Afecta código de compra
- Afecta UX del checkout
- Si fiat: requiere integración con pasarela

### 6. Storage de Metadata

**Pregunta:** ¿Dónde se almacena la metadata de los NFTs?

**Opciones:**
- **IPFS** (RECOMENDADO): Descentralizado, inmutable, estándar
  - Servicio: Pinata, Infura IPFS, NFT.Storage, Web3.Storage
- **Arweave**: Storage permanente, pago único
- **Servidor centralizado**: Más rápido, menos descentralizado

**Estructura de metadata:**
```json
{
  "name": "Andes Solar Hash #001",
  "description": "Panel solar en Perú, Andes",
  "image": "ipfs://Qm.../001.png",
  "attributes": [
    {"trait_type": "Location", "value": "Peru - Andes"},
    {"trait_type": "Power Output", "value": "500W"},
    {"trait_type": "Rarity", "value": "Legendary"}
  ]
}
```

**Impacto:**
- Afecta dónde se suben imágenes y JSON
- Afecta código de integración
- Afecta descentralización del proyecto

### 7. Autenticación

**Pregunta:** ¿Necesitas sistema de cuentas de usuarios?

**Opciones:**

**A) Solo Wallet (Web3 nativo)** (RECOMENDADO)
- User se identifica con wallet address
- Sign-in with Ethereum (SIWE)
- No hay backend de usuarios
- Todo on-chain o local storage
- Más descentralizado

**B) Backend + Wallet (Híbrido)**
- Cuentas con email + password
- Wallet vinculada opcional
- Base de datos de usuarios
- Analytics y control
- Menos descentralizado

**C) Sin autenticación**
- Solo lectura de blockchain
- No hay "mi cuenta"

**Impacto:**
- Afecta si necesitas base de datos
- Afecta arquitectura de backend
- Afecta UX de la app

---

## 🎨 PIXEL-PERFECT: PROCESO COMPLETO

### ¿Es Posible Pixel-Perfect? SÍ

**Con el proceso correcto:** 98-100% de precisión alcanzable

### Proceso Recomendado (Opción A)

#### Semana 1-2: Refactorizar Figma

**Día 1-2: Design System**
1. Crear página "Design System" en Figma
2. Definir paleta completa de colores:
   - Primary: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
   - Secondary: igual
   - Neutrals: igual
   - Semantic: success, error, warning, info
3. Crear color styles para cada uno
4. Crear variables de Figma
5. Definir tipografía completa:
   - Display: 64px, 56px
   - Headings: H1-H6 (48, 36, 30, 24, 20, 16px)
   - Body: Large, Base, Small (18, 16, 14px)
   - Utility: Caption, Label (12, 14px)
6. Crear text styles para cada uno
7. Definir spacing scale (4, 8, 16, 24, 32, 48, 64, 80, 96px)
8. Definir shadows (sm, md, lg, xl, 2xl, card, button, nft)
9. Crear effect styles

**Día 3-4: Componentes**
1. Crear página "Components" en Figma
2. Crear component sets:
   - Button (variants: primary/secondary/outline/ghost, sizes: sm/md/lg, states: default/hover/active/disabled)
   - Input (types: text/email/password, states: default/focus/error/success/disabled)
   - Textarea
   - Checkbox
   - Radio
   - Select
   - NFTCard
   - BlogCard
   - ProductCard
3. Aplicar auto layout a todos
4. Usar variables y styles consistentemente
5. Documentar cada componente

**Día 5: Aplicar y Organizar**
1. Reemplazar elementos en páginas con components
2. Crear páginas separadas:
   - 00 - Cover
   - 01 - Design System
   - 02 - Components
   - 03 - Desktop Pages
   - 04 - Mobile Pages
3. Mover frames a páginas correspondientes
4. Eliminar duplicados
5. Estandarizar nombres

#### Semana 3: Setup + Extracción

**Día 1-2: Setup Proyecto**
1. Inicializar proyecto SvelteKit
2. Instalar dependencias (Tailwind, viem, etc.)
3. Configurar estructura de carpetas
4. Setup Web3 infrastructure básica

**Día 3-5: Extracción**
1. Activar Dev Mode en Figma
2. Extraer design tokens (manual o con plugin)
3. Crear `tailwind.config.js` con todos los valores
4. Exportar assets (SVG, imágenes)
5. Crear `global.css` con customs

#### Semana 4-5: Componentes Base

Para cada componente:
1. Abrir componente en Figma Dev Mode
2. Anotar todos los valores (padding, gap, colors, etc.)
3. Crear archivo `.svelte` correspondiente
4. Implementar con Tailwind siguiendo valores exactos
5. Abrir Figma y navegador lado a lado
6. Validar visualmente
7. Ajustar hasta match perfecto
8. Repetir

**Componentes a crear:**
- Button.svelte
- Input.svelte
- Textarea.svelte
- Checkbox.svelte
- Radio.svelte
- Card.svelte
- Modal.svelte
- Badge.svelte
- Avatar.svelte
- ConnectWallet.svelte
- NFTCard.svelte
- etc.

#### Semana 6-7: Páginas

Para cada página:
1. Exportar screenshot de Figma a 1x
2. Usar extensión "Perfect Pixel" para overlay
3. Construir sección por sección
4. Validar cada sección con checklist:
   - [ ] Spacing vertical
   - [ ] Container width
   - [ ] Padding horizontal
   - [ ] Gap entre elementos
   - [ ] Tamaños de texto
   - [ ] Colores exactos
   - [ ] Sombras
   - [ ] Border radius
   - [ ] Responsive breakpoints
5. Ajustar hasta overlay perfecto

#### Semana 8: Validación

1. Visual regression testing (Chromatic/Percy)
2. Responsive testing (375px, 768px, 1024px, 1440px)
3. Overlay validation en todas las páginas
4. Lighthouse audit
5. Accessibility check
6. Ajustes finales

### Herramientas Necesarias

**Para Diseño:**
- Figma Desktop App
- Plugins: "Design Tokens", "Figma to Code"

**Para Desarrollo:**
- VS Code
- Extensions: Tailwind IntelliSense, Svelte, Color Highlight
- Chrome Extensions: Perfect Pixel, WhatFont, ColorZilla

**Para Validación:**
- Perfect Pixel (overlay)
- Browser DevTools
- Chromatic o Percy (visual regression)

### Métricas de Precisión

**Nivel 1: Functional (85-90%)**
- Layout general correcto
- Colores aproximados
- Spacing variable (±5px)

**Nivel 2: High Quality (90-95%)**
- Layout exacto
- Colores exactos
- Spacing consistente (±2px)

**Nivel 3: Pixel-Perfect (98-100%)** ⭐ OBJETIVO
- Todo exacto
- 0 diferencias visuales
- Validado con overlay

---

## 📊 TIMELINE Y ESTIMACIONES

### Opción A: Con Figma Refactorizado (RECOMENDADO)

```
Semana 1-2: Refactorizar Figma
├── Días 1-2: Design System           │████████│
├── Días 3-4: Componentes             │████████│
└── Día 5: Aplicar y Organizar        │████│

Semana 3: Setup + Extracción
├── Días 1-2: Setup proyecto          │████████│
└── Días 3-5: Extracción tokens       │████████████│

Semana 4-5: Componentes Base
├── UI components                     │████████████████│
└── Web3 components                   │████████████████│

Semana 6-7: Páginas
├── Sitio público                     │████████████████│
└── App Web3                          │████████████████│

Semana 8: Validación y Deploy
├── Testing                           │████████│
├── Ajustes                           │████│
└── Deploy                            │████│

TOTAL: 8 semanas (20-27 días laborables)
PRECISIÓN: 98-100%
```

### Opción B: Sin Refactorizar Figma

```
Semana 1: Setup + Extracción Manual
├── Setup proyecto                    │████████│
└── Extracción manual (imprecisa)     │████████████████│

Semana 2-4: Componentes
├── Trial & error                     │████████████████████████│
├── Ajustes múltiples                 │████████████████│
└── Inconsistencias                   │████████│

Semana 5-7: Páginas
├── Construcción                      │████████████████████████│
├── Comparación con Figma             │████████████│
└── Ajustes                           │████████████│

Semana 8-9: Re-trabajo
├── Encontrar inconsistencias         │████████████│
├── Ajustar                           │████████████│
└── Deploy                            │████│

TOTAL: 9+ semanas (25-35 días laborables)
PRECISIÓN: ~90%
```

### Comparativa

| Aspecto | Con Refactorizar | Sin Refactorizar |
|---------|------------------|------------------|
| **Tiempo Figma** | 1-2 días | 0 días |
| **Tiempo Desarrollo** | 18-25 días | 25-35 días |
| **Tiempo TOTAL** | 20-27 días | 25-35 días |
| **Precisión** | 98-100% | ~90% |
| **Inconsistencias** | Ninguna | Múltiples |
| **Mantenibilidad** | Excelente | Difícil |
| **Validación** | Fácil | Difícil |
| **Single source of truth** | ✅ Sí | ❌ No |

**Recomendación:** Opción A (refactorizar)
- Ahorra 5-8 días totales
- Garantiza pixel-perfect
- Mucho más mantenible

---

## 📚 REFERENCIAS Y RECURSOS

### Documentación Externa

**SvelteKit:**
- Docs: https://kit.svelte.dev
- Tutorial: https://learn.svelte.dev

**Tailwind CSS:**
- Docs: https://tailwindcss.com
- V4 (beta): https://tailwindcss.com/docs/v4-beta

**viem:**
- Docs: https://viem.sh
- Examples: https://github.com/wagmi-dev/viem/tree/main/examples

**Hardhat:**
- Docs: https://hardhat.org
- Tutorial: https://hardhat.org/tutorial

**OpenZeppelin:**
- Contracts: https://docs.openzeppelin.com/contracts
- Wizard: https://wizard.openzeppelin.com

### Servicios Necesarios

**RPC Providers:**
- Infura: https://infura.io
- Alchemy: https://alchemy.com

**IPFS:**
- Pinata: https://pinata.cloud
- NFT.Storage: https://nft.storage (gratis para NFTs)
- Web3.Storage: https://web3.storage

**Deployment:**
- Vercel: https://vercel.com
- Cloudflare Pages: https://pages.cloudflare.com

### Tools

**Figma Plugins:**
- "Design Tokens" - Exportar tokens
- "Figma to Code" - Generar código
- "Iconify" - Iconos

**Chrome Extensions:**
- "Perfect Pixel" - Overlay validation
- "WhatFont" - Identificar fuentes
- "ColorZilla" - Color picker

---

## 🎯 CÓMO CONTINUAR ESTE PROYECTO

### Si eres otra IA leyendo esto:

**1. Lee la documentación en orden:**
   - AI-CONTEXT.md (este archivo) ✅
   - README.md
   - FIGMA-ANALYSIS.md
   - WEB3-STACK-PROPOSAL.md
   - PIXEL-PERFECT-GUIDE.md

**2. Verifica decisiones pendientes:**
   - Lee la sección "DECISIONES CRÍTICAS PENDIENTES"
   - Pregunta al usuario cada decisión que falta
   - No asumas nada

**3. Una vez con decisiones:**
   - Si refactorizar Figma: empieza con semana 1 del timeline
   - Si no refactorizar: empieza con setup + extracción manual

**4. Durante desarrollo:**
   - Sigue la arquitectura propuesta en WEB3-STACK-PROPOSAL.md
   - Sigue el proceso pixel-perfect en PIXEL-PERFECT-GUIDE.md
   - Valida cada componente contra Figma antes de seguir
   - Mantén consistencia con design system

**5. Actualiza documentación:**
   - Documenta decisiones tomadas
   - Actualiza estado de progreso
   - Documenta desviaciones del plan

### Checklist Inicial (Antes de Codear)

```
DECISIONES:
[ ] Blockchain decidida
[ ] Smart contracts (existen o crear)
[ ] Stack confirmado (SvelteKit + viem)
[ ] Funcionalidades priorizadas
[ ] Método de pago definido
[ ] Storage de metadata decidido
[ ] Sistema de auth decidido
[ ] Refactorizar Figma o no (CRÍTICO)

SETUP:
[ ] Figma refactorizado (si se decidió)
[ ] Proyecto inicializado
[ ] Dependencias instaladas
[ ] Estructura de carpetas creada
[ ] tailwind.config.js configurado
[ ] Design tokens extraídos

LISTO PARA DESARROLLO:
[ ] Todas las decisiones tomadas
[ ] Setup completo
[ ] Assets exportados
[ ] Design system en código
```

---

## 📝 NOTAS FINALES

### Estado del Proyecto
- **Fase:** Planificación completada
- **Código:** 0% (no existe)
- **Documentación:** 100%
- **Decisiones:** Pendientes (ver lista)

### Lo Más Importante
1. **No hay código aún** - Todo está por hacer
2. **Figma necesita trabajo** - 0 componentes es crítico
3. **Refactorizar es MUY recomendado** - Ahorra tiempo y garantiza calidad
4. **Stack propuesto es sólido** - SvelteKit + viem + Polygon
5. **Pixel-perfect ES posible** - Con el proceso correcto

### Para el Usuario
Si estás leyendo esto y eres el dueño del proyecto:
- Revisa las DECISIONES PENDIENTES
- Decide si refactorizar Figma (muy recomendado)
- Confirma el stack tecnológico
- Define prioridades de funcionalidades
- Una vez decidido, la implementación puede empezar

### Para la IA que Continúe
- Lee TODO este documento primero
- NO asumas decisiones
- PREGUNTA todo lo pendiente
- SIGUE la arquitectura propuesta
- VALIDA contra Figma constantemente
- DOCUMENTA tus decisiones
- ACTUALIZA este archivo con progreso

---

**Documentado por:** Claude Code (Opus 4.6)
**Fecha:** 14 de Febrero 2026
**Versión:** 1.0
**Estado:** COMPLETO - Listo para decisiones y desarrollo
