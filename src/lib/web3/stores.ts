import { writable, derived } from 'svelte/store';
import type { Address } from 'viem';

export interface WalletState {
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

export const isConnected = derived(walletStore, ($w) => $w.connected);
export const userAddress = derived(walletStore, ($w) => $w.address);
export const shortAddress = derived(userAddress, ($addr) =>
  $addr ? `${$addr.slice(0, 6)}...${$addr.slice(-4)}` : null
);
