import { http, type Config, createConfig } from 'wagmi'
import { base, mainnet , sepolia} from 'wagmi/chains'
import {  metaMask,  walletConnect } from 'wagmi/connectors'

// const projectId = '544e44d1841d3d47019a4892a72f7678'

const isMetaMaskInstalled = typeof window !== 'undefined' && typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask;
const connectors = [
  // walletConnect({projectId}),
  metaMask({
    dappMetadata: {
      name: "Metamask",
    },
  }),
];

export const config: Config = createConfig({
  chains: [sepolia, base, mainnet],
  connectors: isMetaMaskInstalled ? [] : connectors,
  ssr:true,
  transports: {
    [mainnet.id]:http(),
    [sepolia.id]: http(),
    [base.id]: http(),
  },
})