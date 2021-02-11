import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Web3 from 'web3';
import {UserProvider, useUser} from '../context/userContext'
const web3 = new Web3(window.web3.currentProvider);

export default () => (
    <UserProvider>
        <ButtonLog>
        </ButtonLog>
    </UserProvider>
)

const ButtonLog = () => {
    const {user, logued, setLogued} = useUser()

    useEffect(
        () => {
            if(logued){
                setLogued(true)
            }
        }
    )

    async function connetWallet() { // funcion para loguearme a metamask

        if (typeof window.ethereum !== 'undefined') {
            window.web3 = new Web3(window.ethereum);
            try {
                // Request account access if needed
                await window.ethereum.enable();
                setLogued(true)
    
            } catch (error) {
                // User denied account access...
                console.log('connect error!')
            }
        }
    }
    async function disconnectWallet() { // funcion para desconectarme de metamask

        if (typeof window.ethereum !== 'undefined') {
            
            try {
                // Request account access if needed
                await web3.clearCachedProvider();
                setLogued(false)
    
            } catch (error) {
                console.log(error)
                console.log('disconnect error')
                // User denied account access...
            }
        }
    }

    if (!logued) {
        return (
            <>
                <Button color="inherit" size="small" onClick={connetWallet} endIcon={<ArrowForwardIcon />}>Connect to a Wallet</Button>
            </>
        );
    } else {
        return (
            <>
                <Button color="inherit" size="small" onClick={disconnectWallet} endIcon={<ExitToAppIcon />}>Disconnect</Button>
            </>
        );
    }
}
