import React , { useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import Authereum from "authereum";
import WalletConnectProvider from "@walletconnect/web3-provider";

export default function WalletModel() {
    const [loading, setLoading] = useState(false);
    // const [provide, setProvide] = useState()
    // const [webtre, setWebtre] = useState()
    
    return {
        get web3Loading() {
            return loading
        },
        async getweb3() {
            setLoading(true);
            let providerOptions;
            let web3Modal;
            let provider;
            let web3;
            providerOptions = {
                metamask: {
                    id: "injected",
                    name: "MetaMask",
                    type: "injected",
                    check: "isMetaMask"
                },
                walletconnect: {
                    package: WalletConnectProvider, // required
                    options: {
                        infuraId: "INFURA_ID", // Required
                        network: "rinkeby",
                        qrcodeModalOptions: {
                            mobileLinks: [
                                "rainbow",
                                "metamask",
                                "argent",
                                "trust",
                                "imtoken",
                                "pillar"
                            ]
                        }
                    }
                },
                authereum: {
                    package: Authereum // required
                },
            };
            web3Modal = new Web3Modal({
                network: "rinkeby",
                cacheProvider: false,
                providerOptions
            });
            provider = await web3Modal.connect();
            provider.on('error', e => console.error('WS Error', e));
            provider.on('end', e => console.error('WS End', e));

            provider.on("disconnect", (error) => {
                console.log(error);
            });
            provider.on("connect", (info) => {
                console.log('conectandooo perriririri')
                console.log(info);
            });
            web3 = new Web3(provider);
            console.log('cuanto termino de conectar');
            console.log(provider);
            setLoading(false);
            return {web3, web3Modal, provider};
        },
        async disconnect(){
            // if(provider.close) {
            //     await provider.close();
            
            //     // If the cached provider is not cleared,
            //     // WalletConnect will default to the existing session
            //     // and does not allow to re-scan the QR code with a new wallet.
            //     // Depending on your use case you may want or want not his behavior.
            //     await web3.clearCachedProvider();
            //     provider = null;
            // } 
        },
    }
}