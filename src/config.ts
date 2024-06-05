import { http, createConfig } from 'wagmi'
import { sepolia, thaiChain } from 'wagmi/chains'

export const config = createConfig({
  chains: [thaiChain, sepolia],
  transports: {
    [thaiChain.id]: http(),
    [sepolia.id]: http(),
  },
})