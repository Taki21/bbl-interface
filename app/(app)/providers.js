'use client';

import { WagmiProvider, createConfig, http, useAccount, useConnect, useDisconnect } from "wagmi";
import { coinbaseWallet, walletConnect } from "wagmi/connectors";
import { sepolia, mainnet, polygon } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 

import Web3AuthConnectorInstance from "./Web3AuthConnectorInstance";

const queryClient = new QueryClient() 

// Set up client
const config = createConfig({
  chains: [mainnet, sepolia, polygon],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
  },
  connectors: [
    Web3AuthConnectorInstance([mainnet, sepolia, polygon]),
  ],
});

export function Providers(props) {
  //const { locale } = useRouter();

  return (
    <WagmiProvider config={config} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>
          {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}