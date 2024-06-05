import { ConnectButton, ConnectEmbed } from "thirdweb/react";
import { client } from "./client";
import { defineChain } from "thirdweb";
import { createWallet, walletConnect } from "thirdweb/wallets";
import Header from './components/Header';
import { ThirdwebResources } from "./components/ThirdwebResources";
import Footer from './components/Footer'
import Navbar from "./components/Navbar";

// @title Determine the most comprehensive Network chains supported on Thirdweb from Chainlist.
// @notice Import defineChain (import { defineChain } from "thirdweb";) and define network information.
// 
// @custom:tch  -  Set the name you want.
// @custom:id  -  Set the chain ID code.
// @custom:rpc  -  Set rpc chain link.
// @custom:nativeCurrency{name, symbol} -  Set Name the native coin.
const tch = defineChain({
  id: 7,
  rpc: `https://rpc.thaichain.org`,
  nativeCurrency: {
    name: "TCH",
    symbol: "TCH",
    decimals: 18,
  },
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
];

export function App() {
  return (
      <div className="">
      {/* 
      // @title Determine the correct use of React components (<Header /> for example).
      // @notice Import Header (import { defineChain } from "thirdweb";).
      // 
      // @custom:<Header />  -  Define code structure and usage data within components as designed.
      // @custom:<ThirdwebResources />  -  Define code structure and usage data within components as designed.
      // @custom:<Footer />  -  Define code structure and usage data within components as designed.
      */}
        <Navbar />
        <Header />

      {/* 
      // @title Use dependencies with Thirdweb SDK (https://thirdweb.com) for Web3 Blockchain.
      // @notice import { ConnectButton } from "thirdweb/react"; Connect Web3 wallet.
      // 
      // @custom:<ConnectButton /> -  Set wallet you want.
      // @custom:client -  Set the api key by .env.
      // @custom:chain -  Set chain you want.
      // @custom:wallets -  Set options wallet.
         others.. https://portal.thirdweb.com/references/typescript/v5/ConnectButtonProps
      */}
        <div className="flex justify-center mb-10">
          <ConnectEmbed 
          client={client} 
          wallets={wallets}
          />
        </div>

        {/* insert */}
        <div className="flex justify-center mb-10">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sa3wVykeJ3o?si=ukdsyrbM-ETXNQtv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        {/* insert */}
        
        <ThirdwebResources />
        <Footer />

      </div>

  );
}