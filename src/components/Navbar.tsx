import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { ConnectButton, ConnectEmbed } from "thirdweb/react";
import { defineChain } from "thirdweb";
import { createWallet, walletConnect } from "thirdweb/wallets";
import { client } from '../client';

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

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Nidz</a>
            </div>
            <div className="navbar-end">
                <IconButton
                    aria-label="Toggle color mode"
                    icon={colorMode === 'light' ? <MoonIcon color="purple.500" /> : <SunIcon color="yellow.400" />}
                    onClick={toggleColorMode}
                    variant="ghost"
                />

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
                <div className="flex justify-center">
                    <ConnectButton
                        client={client}
                        chain={tch}
                        wallets={wallets}

                        appMetadata={{
                            name: "Example app",
                            url: "https://example.com",
                        }}
                    />
                </div>
                {/* <div className="flex justify-center mb-10">
                <ConnectEmbed 
                client={client} 
                wallets={wallets}
                />
                </div> */}

            </div>
        </div>
    );
}

export default Navbar;