import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThirdwebProvider } from "thirdweb/react";
import "./index.css";
import { ChakraProvider } from '@chakra-ui/react'

import { WagmiProvider } from 'wagmi'
import { config } from './config'

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <ThirdwebProvider>
    <WagmiProvider config={config}>
     <ChakraProvider>
      <App />
     </ChakraProvider>
     </WagmiProvider>
   </ThirdwebProvider>
  </React.StrictMode>
);
