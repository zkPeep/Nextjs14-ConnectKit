'use client'

import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
  
    alchemyId: process.env.ALCHEMY_ID,
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID || "",

    
    appName: 'Nextjs14 ConnectKit',
    appDescription: 'Nextjs14 - ConnectKit',
    appUrl: 'https://family.co',
    appIcon: 'https://family.co/logo.png',
  }),
);

export const ConnectkitProvider = ({ children }: any) => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider
      theme="retro"
      >
        {children}

      </ConnectKitProvider>
    </WagmiConfig>
  );
}