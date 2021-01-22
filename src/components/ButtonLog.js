import React from 'react';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


var eth = ""

const ButtonLog = () => {
    if (typeof window.ethereum !== 'undefined') {
        eth = window.ethereum
        console.log(eth.isConnected())
    }
    if(eth.isConnected() == false){
        return (  
            <>  
                <Button color="inherit" size="small" onClick={connetWallet} endIcon={<ArrowForwardIcon/>}>Connect to a Wallet</Button>
            </>
        );
    }else{
        return (  
            <>  
                <Button color="inherit" size="small" onClick={disconnectWallet} endIcon={<ExitToAppIcon/>}>Disconnect</Button>
            </>
        );
    }
}
async function connetWallet () {

    console.log("conectando")
    const accounts = await eth.request({
        method: "eth_requestAccounts",
      });
    const  account = accounts[0];
}
async function disconnectWallet () {

    eth.disable()
    console.log("desconectando")
}


 
export default ButtonLog;