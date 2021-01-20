import React from 'react';
import Button from '@material-ui/core/Button';


var eth = ""

const ButtonLog = () => {
    if (typeof window.ethereum !== 'undefined') {
        eth = window.ethereum
        console.log(eth.isConnected())
    }
    if(eth.isConnected() == false){
        return (  
            <>  
                <Button color="inherit" size="small" onClick={connetWallet}>Connect to a Wallet</Button>
            </>
        );
    }else{
        return (  
            <>  
                <Button color="inherit" size="small" onClick={disconnectWallet}>Disconnect</Button>
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