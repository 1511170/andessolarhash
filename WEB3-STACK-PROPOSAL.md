# 🌐 Propuesta de Stack Web3 - ANDES SOLAR HASH

**Proyecto:** Marketplace de NFTs relacionado con energía solar y minería
**Tipo:** Aplicación Web3 con funcionalidad de compra/venta de NFTs
**Fecha:** 14 de Febrero 2026

---

## 🎯 Objetivo del Proyecto

Crear una plataforma Web3 que permita:
- 🌐 Sitio corporativo (HOME, BLOG, HOSTING, CONTACTO, etc.)
- 🖼️ Marketplace de NFTs (galería, detalles, compra)
- 💰 Conexión de wallet para transacciones
- 🔗 Interacción directa con blockchain
- 📊 Dashboard de usuario (mis NFTs)

---

## ❓ Decisiones Técnicas Pendientes

### 1. Blockchain y Red
**Pregunta:** ¿En qué blockchain van a vivir los NFTs?

**Opciones:**
- **Ethereum Mainnet** (más segura, gas fees altos)
- **Ethereum Testnet** (Sepolia, Goerli - para testing)
- **Polygon** (L2, gas fees muy bajos, popular para NFTs)
- **Binance Smart Chain (BSC)** (gas fees bajos, ecosistema grande)
- **Arbitrum / Optimism** (L2s de Ethereum, gas fees reducidos)
- **Base** (L2 de Coinbase, emergente)
- **Avalanche** (rápida, gas fees bajos)

**Recomendación:**
- **Polygon** para producción (barato, rápido, compatible con Ethereum)
- **Ethereum Sepolia** para desarrollo/testing

---

### 2. Smart Contracts
**Pregunta:** ¿Ya tienen los smart contracts desarrollados?

**Estado:**
- ✅ **Sí, ya existen** → Necesito dirección del contrato y ABI
- ❌ **No, hay que crear** → Necesitamos desarrollarlos
- 🤔 **No sé** → Recomiendo crearlos desde cero

**Si hay que crear, decisiones:**
- **Estándar:** ERC-721 (NFT único) o ERC-1155 (multi-token)
- **Funcionalidades:**
  - Mint (crear NFTs)
  - Buy/Sell (marketplace)
  - Royalties (% al creador original)
  - Whitelist (preventa)
  - Reveal mechanism (para mystery boxes)
  - Staking (opcional)

**Herramientas de desarrollo:**
- **Hardhat** (más popular, plugins)
- **Foundry** (más rápido, escrito en Rust)

---

### 3. Funcionalidades del Marketplace
**Pregunta:** ¿Qué debe poder hacer el usuario?

**Funcionalidades básicas (esenciales):**
- [ ] Conectar wallet (MetaMask, WalletConnect, Coinbase Wallet, etc.)
- [ ] Ver catálogo de NFTs disponibles
- [ ] Ver detalles de cada NFT (imagen, metadata, precio, propiedades)
- [ ] Comprar NFT (mint directo o compra en marketplace)
- [ ] Ver balance de wallet
- [ ] Ver historial de transacciones

**Funcionalidades avanzadas (opcionales):**
- [ ] Ver "Mis NFTs" (wallet del usuario)
- [ ] Vender NFT en marketplace secundario (listing)
- [ ] Transferir NFTs a otra wallet
- [ ] Hacer ofertas por NFTs (bidding)
- [ ] Staking de NFTs (generar rewards)
- [ ] Quemar NFTs (burn)
- [ ] Filtros y búsqueda avanzada
- [ ] Rareza y traits de NFTs

---

### 4. Pagos y Precios
**Pregunta:** ¿Cómo se pagan los NFTs?

**Opciones:**
- **Crypto nativa** (ETH en Ethereum, MATIC en Polygon, BNB en BSC)
- **Stablecoins** (USDC, USDT, DAI)
- **Token custom** del proyecto (crear token ERC-20 propio)
- **Fiat (tarjeta de crédito)** vía pasarela (Stripe, MoonPay, Transak)
- **Híbrido** (crypto + fiat)

**Precio de NFTs:**
- Precio fijo
- Subasta holandesa (precio baja con el tiempo)
- Subasta inglesa (ofertas crecientes)
- Bonding curve (precio sube con cada compra)

---

### 5. Metadata de NFTs
**Pregunta:** ¿Dónde se almacena la metadata de los NFTs?

**Opciones:**
- **IPFS** (descentralizado, inmutable, más usado)
  - Pinata (servicio de pinning)
  - Infura IPFS
  - NFT.Storage (gratis para NFTs)
  - Web3.Storage

- **Arweave** (storage permanente, pago único)

- **Servidor centralizado** (más rápido pero menos descentralizado)
  - Pros: rápido, fácil de actualizar
  - Contras: punto único de falla, no descentralizado

**Estructura de metadata (JSON):**
```json
{
  "name": "Andes Solar Hash #001",
  "description": "NFT representando panel solar en los Andes",
  "image": "ipfs://QmXxx.../001.png",
  "attributes": [
    {
      "trait_type": "Location",
      "value": "Peru - Andes"
    },
    {
      "trait_type": "Power Output",
      "value": "500W"
    },
    {
      "trait_type": "Rarity",
      "value": "Legendary"
    }
  ]
}
```

**Recomendación:** IPFS con Pinata o NFT.Storage

---

### 6. Autenticación de Usuarios
**Pregunta:** ¿Necesitas autenticación tradicional o solo wallet?

**Opciones:**

**A) Solo Wallet (Web3 nativo)**
- User se identifica con su wallet address
- Sign-in with Ethereum (SIWE)
- No hay cuentas tradicionales
- Todo on-chain o local storage
- Más descentralizado

**B) Backend + Wallet (Híbrido)**
- Cuentas tradicionales (email + password)
- Wallet vinculada opcional
- Base de datos con usuarios
- Más control, analytics
- Menos descentralizado

**C) Sin autenticación**
- Todo público
- Solo lectura de blockchain
- No hay "mi cuenta"

**Recomendación:** Sign-in with Ethereum (opción A) para marketplace Web3

---

## 💻 Stack Tecnológico Recomendado

### Opción A: SvelteKit + viem (RECOMENDADO) ⭐

**¿Por qué SvelteKit?**
- ✅ Framework moderno y ligero
- ✅ SSR/SSG cuando lo necesites
- ✅ API routes nativas
- ✅ Perfecto para sitio híbrido (web + app)
- ✅ Mejor performance que Next.js
- ✅ Menos boilerplate que React

**Stack completo:**

```
┌─────────────────────────────────────────┐
│         FRONTEND (SvelteKit)            │
├─────────────────────────────────────────┤
│ • SvelteKit (framework)                 │
│ • Tailwind CSS 4 (styling)              │
│ • viem (Web3 interactions)              │
│ • Svelte stores (global state)          │
│ • TypeScript                            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│         WEB3 LIBRARIES                  │
├─────────────────────────────────────────┤
│ • viem (blockchain interactions)        │
│ • @wagmi/connectors (wallet connectors) │
│ • ethers (fallback si necesario)        │
│ • ipfs-http-client (IPFS)               │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│         BACKEND (Opcional)              │
├─────────────────────────────────────────┤
│ • SvelteKit endpoints (+server.ts)      │
│ • Prisma ORM                            │
│ • PostgreSQL (si necesitas DB)          │
│ • IPFS pinning service                  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│         BLOCKCHAIN                      │
├─────────────────────────────────────────┤
│ • Smart Contracts (Solidity)            │
│ • Hardhat o Foundry (dev)               │
│ • OpenZeppelin (contracts base)         │
│ • IPFS (metadata storage)               │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│         DEPLOYMENT                      │
├─────────────────────────────────────────┤
│ • Vercel o Cloudflare Pages (frontend)  │
│ • IPFS (assets estáticos)               │
│ • Infura/Alchemy (RPC provider)         │
└─────────────────────────────────────────┘
```

**Ventajas:**
- ✅ SvelteKit es más ligero y rápido que Next.js
- ✅ viem es moderno, type-safe, y mejor que ethers
- ✅ No necesitas ecosistema React solo por Web3
- ✅ Svelte stores perfectos para Web3 state management
- ✅ Mejor DX (developer experience)

**Desventajas:**
- ⚠️ Menos librerías Web3 específicas para Svelte
- ⚠️ Menos ejemplos/templates que React
- ⚠️ Tendrías que adaptar componentes de React a Svelte

---

### Opción B: Next.js + wagmi + viem (Alternativa React)

**¿Cuándo usar Next.js?**
- Si prefieres React
- Si necesitas el ecosistema completo de Web3 en React
- Si quieres usar RainbowKit out-of-the-box

**Stack completo:**

```
┌─────────────────────────────────────────┐
│         FRONTEND (Next.js)              │
├─────────────────────────────────────────┤
│ • Next.js 14 (App Router)               │
│ • Tailwind CSS 4                        │
│ • wagmi (React hooks para Web3)         │
│ • viem (low-level Web3)                 │
│ • RainbowKit (wallet UI)                │
│ • TanStack Query (data fetching)        │
│ • TypeScript                            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│         WEB3 LIBRARIES                  │
├─────────────────────────────────────────┤
│ • wagmi (React hooks)                   │
│ • viem (blockchain)                     │
│ • RainbowKit (wallet connection UI)     │
│ • ConnectKit (alternativa)              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│         BACKEND                         │
├─────────────────────────────────────────┤
│ • Next.js API Routes                    │
│ • Prisma ORM                            │
│ • PostgreSQL                            │
└─────────────────────────────────────────┘
```

**Ventajas:**
- ✅ Ecosistema Web3 maduro (wagmi, RainbowKit)
- ✅ Muchos ejemplos y templates
- ✅ Comunidad grande en Web3
- ✅ RainbowKit = wallet connection lista

**Desventajas:**
- ⚠️ Más pesado que SvelteKit
- ⚠️ React tiene más boilerplate
- ⚠️ Next.js 14 App Router aún madurando

---

## 🏗️ Arquitectura Propuesta (SvelteKit)

### Estructura de Carpetas

```
/andessolarhash
├── src/
│   ├── routes/
│   │   ├── (web)/                    # Sitio público (sin wallet)
│   │   │   ├── +layout.svelte        # Layout del sitio
│   │   │   ├── +page.svelte          # HOME
│   │   │   ├── blog/
│   │   │   │   ├── +page.svelte      # Blog listing
│   │   │   │   └── [slug]/
│   │   │   │       └── +page.svelte  # Blog post
│   │   │   ├── hosting/
│   │   │   │   └── +page.svelte
│   │   │   ├── producto-mineria/
│   │   │   │   └── +page.svelte
│   │   │   └── contacto/
│   │   │       └── +page.svelte
│   │   │
│   │   ├── (app)/                    # App Web3 (requiere wallet)
│   │   │   ├── +layout.svelte        # Layout con Web3Provider
│   │   │   ├── marketplace/
│   │   │   │   ├── +page.svelte      # NFT Marketplace
│   │   │   │   ├── +page.server.ts   # Load NFTs
│   │   │   │   └── [id]/
│   │   │   │       ├── +page.svelte  # NFT Detail
│   │   │   │       └── +page.server.ts
│   │   │   ├── my-nfts/
│   │   │   │   └── +page.svelte      # User's NFTs
│   │   │   ├── compra/
│   │   │   │   └── +page.svelte      # Buy flow
│   │   │   └── profile/
│   │   │       └── +page.svelte      # User profile
│   │   │
│   │   └── api/                      # API endpoints
│   │       ├── nfts/
│   │       │   └── +server.ts        # GET /api/nfts
│   │       ├── metadata/
│   │       │   └── [id]/+server.ts   # GET /api/metadata/:id
│   │       └── ipfs/
│   │           └── +server.ts        # Upload to IPFS
│   │
│   ├── lib/
│   │   ├── web3/                     # Web3 logic
│   │   │   ├── wallet.ts             # Wallet connection
│   │   │   ├── contract.ts           # Contract interactions
│   │   │   ├── ipfs.ts               # IPFS helpers
│   │   │   ├── stores.ts             # Svelte stores
│   │   │   └── utils.ts              # Web3 utils
│   │   │
│   │   ├── components/
│   │   │   ├── ui/                   # UI components
│   │   │   │   ├── Button.svelte
│   │   │   │   ├── Card.svelte
│   │   │   │   ├── Input.svelte
│   │   │   │   └── Modal.svelte
│   │   │   │
│   │   │   ├── web3/                 # Web3 components
│   │   │   │   ├── ConnectWallet.svelte
│   │   │   │   ├── WalletInfo.svelte
│   │   │   │   ├── NetworkSwitch.svelte
│   │   │   │   ├── NFTCard.svelte
│   │   │   │   ├── NFTGrid.svelte
│   │   │   │   ├── BuyNFT.svelte
│   │   │   │   └── TransactionStatus.svelte
│   │   │   │
│   │   │   └── sections/             # Page sections
│   │   │       ├── Hero.svelte
│   │   │       ├── Features.svelte
│   │   │       └── Footer.svelte
│   │   │
│   │   ├── contracts/                # Contract ABIs
│   │   │   ├── AndesSolarNFT.json    # ABI del contrato
│   │   │   └── config.ts             # Addresses por network
│   │   │
│   │   ├── types/                    # TypeScript types
│   │   │   ├── nft.ts
│   │   │   ├── wallet.ts
│   │   │   └── contract.ts
│   │   │
│   │   └── utils/                    # Utilities
│   │       ├── formatters.ts
│   │       └── validators.ts
│   │
│   ├── styles/
│   │   └── global.css                # Tailwind + custom
│   │
│   └── app.html                      # HTML template
│
├── smart-contracts/                  # Blockchain contracts
│   ├── contracts/
│   │   ├── AndesSolarNFT.sol         # Main NFT contract
│   │   ├── Marketplace.sol           # Marketplace contract
│   │   └── interfaces/
│   │       └── INFT.sol
│   │
│   ├── scripts/
│   │   ├── deploy.ts                 # Deploy script
│   │   └── mint.ts                   # Mint script
│   │
│   ├── test/
│   │   └── AndesSolarNFT.test.ts     # Tests
│   │
│   ├── hardhat.config.ts             # Hardhat config
│   └── package.json
│
├── static/                           # Static assets
│   ├── images/
│   ├── nfts/                         # NFT images (temp)
│   └── icons/
│
├── .env.example                      # Environment variables
├── svelte.config.js                  # SvelteKit config
├── tailwind.config.js                # Tailwind config
├── vite.config.ts                    # Vite config
└── package.json
```

---

## 🔧 Configuración de Web3

### 1. Wallet Connection Store (Svelte)

```typescript
// lib/web3/stores.ts
import { writable, derived } from 'svelte/store';
import type { Address } from 'viem';

interface WalletState {
  address: Address | null;
  chainId: number | null;
  connected: boolean;
  balance: string | null;
  isConnecting: boolean;
  error: string | null;
}

const initialState: WalletState = {
  address: null,
  chainId: null,
  connected: false,
  balance: null,
  isConnecting: false,
  error: null
};

export const walletStore = writable<WalletState>(initialState);

// Derived stores
export const isConnected = derived(
  walletStore,
  $wallet => $wallet.connected
);

export const userAddress = derived(
  walletStore,
  $wallet => $wallet.address
);

export const shortAddress = derived(
  userAddress,
  $address => $address
    ? `${$address.slice(0, 6)}...${$address.slice(-4)}`
    : null
);
```

### 2. Wallet Connection Logic

```typescript
// lib/web3/wallet.ts
import { createWalletClient, createPublicClient, custom, http } from 'viem';
import { mainnet, polygon } from 'viem/chains';
import { walletStore } from './stores';

export async function connectWallet() {
  walletStore.update(state => ({ ...state, isConnecting: true, error: null }));

  try {
    // Check if MetaMask is installed
    if (!window.ethereum) {
      throw new Error('Please install MetaMask');
    }

    // Request account access
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    const address = accounts[0] as Address;

    // Get chain ID
    const chainId = await window.ethereum.request({
      method: 'eth_chainId'
    });

    // Get balance
    const publicClient = createPublicClient({
      chain: polygon, // o tu chain
      transport: http()
    });

    const balance = await publicClient.getBalance({ address });

    walletStore.set({
      address,
      chainId: parseInt(chainId, 16),
      connected: true,
      balance: formatEther(balance),
      isConnecting: false,
      error: null
    });

    // Listen to account changes
    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);

  } catch (error) {
    walletStore.update(state => ({
      ...state,
      isConnecting: false,
      error: error.message
    }));
  }
}

export async function disconnectWallet() {
  walletStore.set(initialState);
  window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
  window.ethereum?.removeListener('chainChanged', handleChainChanged);
}

function handleAccountsChanged(accounts: string[]) {
  if (accounts.length === 0) {
    disconnectWallet();
  } else {
    connectWallet();
  }
}

function handleChainChanged() {
  window.location.reload();
}
```

### 3. Contract Interaction

```typescript
// lib/web3/contract.ts
import { createPublicClient, createWalletClient, http, parseEther } from 'viem';
import { polygon } from 'viem/chains';
import { get } from 'svelte/store';
import { walletStore } from './stores';
import NFTContractABI from '$lib/contracts/AndesSolarNFT.json';
import { CONTRACT_ADDRESS } from '$lib/contracts/config';

const publicClient = createPublicClient({
  chain: polygon,
  transport: http()
});

export async function getNFTMetadata(tokenId: number) {
  const metadata = await publicClient.readContract({
    address: CONTRACT_ADDRESS,
    abi: NFTContractABI.abi,
    functionName: 'tokenURI',
    args: [tokenId]
  });

  // Fetch metadata from IPFS
  const response = await fetch(metadata.replace('ipfs://', 'https://ipfs.io/ipfs/'));
  return await response.json();
}

export async function buyNFT(tokenId: number, price: string) {
  const wallet = get(walletStore);

  if (!wallet.connected || !wallet.address) {
    throw new Error('Wallet not connected');
  }

  const walletClient = createWalletClient({
    chain: polygon,
    transport: custom(window.ethereum)
  });

  // Execute transaction
  const hash = await walletClient.writeContract({
    address: CONTRACT_ADDRESS,
    abi: NFTContractABI.abi,
    functionName: 'mint',
    args: [tokenId],
    value: parseEther(price),
    account: wallet.address
  });

  // Wait for confirmation
  const receipt = await publicClient.waitForTransactionReceipt({ hash });

  return receipt;
}

export async function getUserNFTs(address: Address) {
  const balance = await publicClient.readContract({
    address: CONTRACT_ADDRESS,
    abi: NFTContractABI.abi,
    functionName: 'balanceOf',
    args: [address]
  });

  const nfts = [];
  for (let i = 0; i < balance; i++) {
    const tokenId = await publicClient.readContract({
      address: CONTRACT_ADDRESS,
      abi: NFTContractABI.abi,
      functionName: 'tokenOfOwnerByIndex',
      args: [address, i]
    });

    const metadata = await getNFTMetadata(tokenId);
    nfts.push({ tokenId, ...metadata });
  }

  return nfts;
}
```

### 4. ConnectWallet Component

```svelte
<!-- lib/components/web3/ConnectWallet.svelte -->
<script lang="ts">
  import { walletStore, shortAddress } from '$lib/web3/stores';
  import { connectWallet, disconnectWallet } from '$lib/web3/wallet';
  import Button from '$lib/components/ui/Button.svelte';

  async function handleConnect() {
    await connectWallet();
  }

  async function handleDisconnect() {
    await disconnectWallet();
  }
</script>

<div class="wallet-container">
  {#if $walletStore.isConnecting}
    <Button disabled>
      Connecting...
    </Button>
  {:else if $walletStore.connected}
    <div class="wallet-info">
      <div class="address">
        {$shortAddress}
      </div>
      <div class="balance">
        {parseFloat($walletStore.balance).toFixed(4)} MATIC
      </div>
      <button on:click={handleDisconnect} class="disconnect-btn">
        Disconnect
      </button>
    </div>
  {:else}
    <Button variant="primary" on:click={handleConnect}>
      Connect Wallet
    </Button>
  {/if}

  {#if $walletStore.error}
    <div class="error">
      {$walletStore.error}
    </div>
  {/if}
</div>

<style>
  .wallet-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .wallet-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--bg-secondary);
    border-radius: 12px;
  }

  .error {
    color: var(--error);
    font-size: 0.875rem;
  }
</style>
```

### 5. NFT Card Component

```svelte
<!-- lib/components/web3/NFTCard.svelte -->
<script lang="ts">
  import { buyNFT } from '$lib/web3/contract';
  import Button from '$lib/components/ui/Button.svelte';
  import { walletStore } from '$lib/web3/stores';

  export let nft: {
    tokenId: number;
    name: string;
    description: string;
    image: string;
    price: string;
    attributes: Array<{ trait_type: string; value: string }>;
  };

  let isBuying = false;
  let error = '';

  async function handleBuy() {
    if (!$walletStore.connected) {
      error = 'Please connect your wallet first';
      return;
    }

    isBuying = true;
    error = '';

    try {
      const receipt = await buyNFT(nft.tokenId, nft.price);
      console.log('Purchase successful!', receipt);
      // Redirect or show success message
    } catch (err) {
      error = err.message;
    } finally {
      isBuying = false;
    }
  }
</script>

<div class="nft-card">
  <div class="image-wrapper">
    <img src={nft.image} alt={nft.name} />
  </div>

  <div class="content">
    <h3 class="title">{nft.name}</h3>
    <p class="description">{nft.description}</p>

    <div class="attributes">
      {#each nft.attributes as attr}
        <div class="attribute">
          <span class="trait">{attr.trait_type}</span>
          <span class="value">{attr.value}</span>
        </div>
      {/each}
    </div>

    <div class="footer">
      <div class="price">
        <span class="label">Price</span>
        <span class="amount">{nft.price} MATIC</span>
      </div>

      <Button
        variant="primary"
        on:click={handleBuy}
        disabled={isBuying || !$walletStore.connected}
      >
        {isBuying ? 'Buying...' : 'Buy NFT'}
      </Button>
    </div>

    {#if error}
      <div class="error">{error}</div>
    {/if}
  </div>
</div>

<style>
  .nft-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }

  .nft-card:hover {
    transform: translateY(-4px);
  }

  .image-wrapper {
    aspect-ratio: 1;
    overflow: hidden;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    padding: 1.5rem;
  }

  .title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .description {
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  .attributes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .attribute {
    padding: 0.5rem;
    background: var(--bg-secondary);
    border-radius: 8px;
    font-size: 0.75rem;
  }

  .trait {
    display: block;
    color: var(--text-tertiary);
    text-transform: uppercase;
  }

  .value {
    display: block;
    font-weight: 600;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .price {
    display: flex;
    flex-direction: column;
  }

  .label {
    font-size: 0.75rem;
    color: var(--text-tertiary);
  }

  .amount {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary);
  }

  .error {
    margin-top: 1rem;
    padding: 0.75rem;
    background: var(--error-bg);
    color: var(--error);
    border-radius: 8px;
    font-size: 0.875rem;
  }
</style>
```

---

## 🎨 Extracción de Colores del Figma para Tailwind

### Colores Base Detectados

```javascript
// tailwind.config.js
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Primary (Naranja - energía solar)
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#f7ad1f',  // Del Figma (gradiente end)
          500: '#e0831f',  // Del Figma (gradiente start) - PRINCIPAL
          600: '#c87319',
          700: '#a65f14',
          800: '#844c10',
          900: '#713f0d',
        },

        // Secondary (Azul oscuro - profesional/tech)
        secondary: {
          50: '#f5f7fa',
          100: '#e4e9f2',
          200: '#cdd5e5',
          300: '#a9b5ce',
          400: '#7e8fb3',
          500: '#1d2242',  // Del Figma (gradiente start)
          600: '#151a35',
          700: '#0f1329',
          800: '#101429',  // Del Figma (gradiente end)
          900: '#0a0d1c',
        },

        // Neutrals (Grises)
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },

        // Semantic colors
        success: '#10b981',  // Verde
        error: '#ef4444',    // Rojo
        warning: '#f59e0b',  // Amarillo
        info: '#3b82f6',     // Azul
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        // Basado en Body Base del Figma
        'body-base': ['16px', { lineHeight: '140%' }],
        'body-lg': ['18px', { lineHeight: '150%' }],
        'body-sm': ['14px', { lineHeight: '143%' }],
      },

      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'nft': '0 4px 12px rgba(224, 131, 31, 0.15)',
      },

      borderRadius: {
        'card': '16px',
        'button': '12px',
      },
    },
  },
  plugins: [],
}
```

---

## 🚀 Roadmap de Implementación

### Fase 0: Setup (1-2 días)
- [ ] Decidir blockchain (Polygon recomendado)
- [ ] Crear smart contracts o obtener existentes
- [ ] Configurar Infura/Alchemy para RPC
- [ ] Configurar IPFS (Pinata o NFT.Storage)
- [ ] Crear proyecto SvelteKit
- [ ] Instalar dependencias Web3

### Fase 1: Smart Contracts (2-3 días si no existen)
- [ ] Desarrollar contrato NFT (ERC-721)
- [ ] Desarrollar contrato Marketplace (opcional)
- [ ] Tests unitarios
- [ ] Deploy a testnet
- [ ] Verificar contrato en explorer

### Fase 2: Infraestructura Web3 (2-3 días)
- [ ] Configurar wallet connection (MetaMask)
- [ ] Configurar viem/ethers
- [ ] Crear stores de Svelte para Web3 state
- [ ] Implementar contract interactions
- [ ] Crear helpers de IPFS

### Fase 3: Componentes UI (3-4 días)
- [ ] Componentes base (Button, Card, Input)
- [ ] Componentes Web3 (ConnectWallet, NFTCard)
- [ ] Layout principal
- [ ] Header con wallet connection
- [ ] Footer

### Fase 4: Marketplace (4-5 días)
- [ ] Página de galería NFTs
- [ ] Página de detalle NFT
- [ ] Funcionalidad de compra
- [ ] Página "Mis NFTs"
- [ ] Filtros y búsqueda

### Fase 5: Sitio Corporativo (3-4 días)
- [ ] HOME page
- [ ] BLOG
- [ ] HOSTING/Producto
- [ ] CONTACTO
- [ ] Integrar con marketplace

### Fase 6: Testing y Optimización (2-3 días)
- [ ] Tests de transacciones
- [ ] Tests de UI
- [ ] Optimización de performance
- [ ] SEO
- [ ] Responsive final

### Fase 7: Deploy (1 día)
- [ ] Deploy smart contracts a mainnet
- [ ] Deploy frontend a Vercel/Cloudflare
- [ ] Configurar dominio
- [ ] Monitoring y analytics

**TIEMPO TOTAL ESTIMADO: 18-25 días**

---

## 📚 Recursos y Referencias

### Documentación
- **viem:** https://viem.sh
- **SvelteKit:** https://kit.svelte.dev
- **Hardhat:** https://hardhat.org
- **OpenZeppelin:** https://docs.openzeppelin.com

### Ejemplos de código
- **viem examples:** https://github.com/wagmi-dev/viem/tree/main/examples
- **Scaffold-ETH (adaptable):** https://github.com/scaffold-eth/scaffold-eth-2

### Servicios
- **Infura:** https://infura.io (RPC provider)
- **Alchemy:** https://alchemy.com (alternativa RPC)
- **Pinata:** https://pinata.cloud (IPFS pinning)
- **NFT.Storage:** https://nft.storage (IPFS gratis para NFTs)

---

## ✅ Checklist de Decisiones Pendientes

**Para continuar necesito que me confirmes:**

- [ ] **Blockchain:** ¿Polygon, Ethereum, otra?
- [ ] **Smart Contracts:** ¿Existen o hay que crear?
- [ ] **Stack:** ¿SvelteKit + viem (recomendado) o Next.js?
- [ ] **Funcionalidades:** ¿Qué features del marketplace son prioridad?
- [ ] **Pagos:** ¿MATIC/crypto nativa o también stablecoins?
- [ ] **Metadata:** ¿IPFS (recomendado) o servidor?
- [ ] **Autenticación:** ¿Solo wallet o también backend?

---

**Una vez tengas estas respuestas, podemos:**
1. Crear la arquitectura exacta del proyecto
2. Setup inicial de SvelteKit + Web3
3. Desarrollar/configurar smart contracts
4. Implementar wallet connection y marketplace
5. Integrar con el diseño del Figma (una vez mejorado)

**Estado:** ⏳ Esperando decisiones técnicas para continuar
