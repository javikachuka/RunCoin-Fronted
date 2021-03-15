import React, { useEffect, useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Web3 from 'web3';
import { UserProvider, useUser } from '../context/userContext'
import LoginContext from '../context/LoginContext'
import WalletModel from '../models/WalletModel';
import { useLogin } from '../hooks/useLogin';

// const web3 = new Web3(window.web3.currentProvider);

// export default () => (
//     <UserProvider>
//         <ButtonLog>
//         </ButtonLog>
//     </UserProvider>
// )

const ButtonLog = () => {
    // const {user, logued, setLogued} = useUser()
    const { user, setUser, logued, setLogued } = useLogin()
    const { web3Loading, getweb3, disconnect } = WalletModel();
    const [myWeb3, setMyWeb3] = useState(null);

    const transformAddress = (address) => {
        if(address == "" || address == null){
            return address
        }
        let first = address.slice(0,5)
        let last = address.slice(37,42)
        let newAddress = first + "..." + last
        return newAddress
    }

    // useEffect(
    //     () => {
    //         if(!logued){
    //             connetWallet().then(
    //                 (res) => {
    //                     setLogued(true)
    //                     setUser({
    //                         player: res
    //                     })
    //                     console.log(user);
    //                 }
    //             )
    //         }
    //     }
    // )

    // async function connetWallet() { // funcion para loguearme a metamask // vieja

    //     if (typeof window.ethereum !== 'undefined') {
    //         window.web3 = new Web3(window.ethereum);
    //         try {
    //             // Request account access if needed
    //             const res = await window.ethereum.enable();
    //             console.log(res[0]);
    //             setLogued(true)
    //             setUser({
    //                 player: res[0]
    //             })

    //         } catch (error) {
    //             // User denied account access...
    //             console.log('connect error!')
    //         }
    //     }
    // }
    // async function disconnectWallet() { // funcion para desconectarme de metamask // viejo

    //     if (typeof window.ethereum !== 'undefined') {

    //         try {
    //             // Request account access if needed
    //             await web3.clearCachedProvider();
    //             setLogued(false)

    //         } catch (error) {
    //             console.log(error)
    //             console.log('disconnect error')
    //             // User denied account access...
    //         }
    //     }
    // }

    // Implementation with web3Modal

    async function connectWallet() {
        await getweb3().then((response) => {
            setMyWeb3(response);
            setLogued(true)
            response.web3.eth.getAccounts().then((result) => {
                setUser(
                    {
                        player: result[0]
                    }
                )
                transformAddress(result[0])
            }
            );
        });
    };

    async function disconnectWallet() {
        const res = await myWeb3.web3.setProvider(null)
        if (myWeb3.provider.close) {
            await myWeb3.provider.close()
            await myWeb3.web3Modal.clearCachedProvider()
            myWeb3.provider = null
        }
        // await disconnect().then(res => console.log(res)).catch(er => console.log(er))
    }


    if (!logued) {
        return (
            <>
                <Button color="inherit" size="small" onClick={connectWallet} endIcon={<ArrowForwardIcon />}>Connect to a Wallet</Button>
            </>
        );
    } else {
        return (
            <>
                <Button color="inherit" size="small" endIcon={<ExitToAppIcon />}>{transformAddress(user.player)}</Button>
            </>
        );
    }
}

export default ButtonLog