import * as Parameters from "./parameters.js";
import {
    CONST_ABI
} from "./abiApp.js";
import {
    CONST_ABI_TOKEN
} from "./abiTG.js";

const Web3 = require("web3");
let web3 = new Web3(Web3.givenProvider || Parameters.provider);

export const miContrato = new web3.eth.Contract(
    CONST_ABI,
    Parameters.addressContractOKT
);


export async function play() {


    try {
        const _cost = await miContrato.methods.cost().call((err, result) => result);
        let _account = await getUserLogued();
        let confirm = false;
        const player = await miContrato.methods.game(_cost).send({
            from: _account,
            value: _cost,
        },
            function (error, transactionHash) {
                console.log(error);
                if (transactionHash !== undefined) {
                    confirm = true;
                }else{
                    return false
                }

            }
        );
        return confirm;
    } catch (Ex) {
        console.log(Ex);
        return false;
    }
}

//cant= count player you want see.

//player {player= address , timestamp= the time that the player begin to play, timeGame= time that the player has finished}
//option 1 timeGame=  the time from that the player  play and other  player play too   (the time is fixed).
//option 2 timeGame= if it is the last player then the time change for every query 

export async function listPlayerLastSeasons(cant = -1) {
    try {
        const currentSeassons = await miContrato.methods
            .currentSeason()
            .call((err, result) => result);

        let cantPlayer = await miContrato.methods
            .getCountPlayer(currentSeassons)
            .call((err, result) => result);
        cantPlayer--;
        if (cant <= 0) {
            //trae desde el utlimo jugador hasta el primero
            cant = 0;
        } else {
            //el limite de jugador es

            cant = cant >= cantPlayer ? 0 : cantPlayer - cant;
        }
        var players = [];
        let player = {};

        while (cantPlayer >= cant) {
            player = await miContrato.methods
                .getPlayer(currentSeassons, cantPlayer)
                .call((err, result) => result);

            player.wait = parseInt(player.wait);
            player.timeGame = parseInt(player.timeGame);
            players.push(player);
            cantPlayer--;
        }
        return players;
    } catch (Ex) {
        console.log(Ex);
        return false;
    }
}


export async function getMorePlayer(cant, indexPlayer = -1, indexSeasson = -1) {
    try {
        var players = [];
        let player = {};
        if (indexSeasson == -1) {
            indexSeasson = await miContrato.methods
                .currentSeason()
                .call((err, result) => result);
        }
        if (indexPlayer < 0) {
            return false;
          
        }

        while (cant > 0 && indexPlayer >= 0) {
            player = await miContrato.methods
                .getPlayer(indexSeasson, indexPlayer)
                .call((err, result) => result);
            player.wait = parseInt(player.wait);
            player.timeGame = parseInt(player.timeGame);
            player.index = parseInt(indexPlayer);
            players.push(player);
            indexPlayer--;
            cant--;
        }
        return players;
    } catch (Ex) {
        console.log(Ex);
        return false;
    }
}

//return {recompensa, nextRecompensa}
export async function getReward() {
    try {
        const recompensa = await miContrato.methods
            .getValueReward()
            .call((err, result) => result);
        return recompensa;
    } catch (Ex) {
        return false;
    }
}

export async function getCostPlay() {
    try {
        const cost = await miContrato.methods.cost().call((err, result) => result);
        return cost;
    } catch (Ex) {
        return false;
    }
}
//obtiene los dias que faltan que termine los atributos con el tiempo en segundos que falta para que termine 
// por ejemplo temporada 1 , 3124124 segundos para que termine en caso que termino es 0
//get the days in  the sesason will finish
export async function getCountDaysCurrentOfSeasons() {
    try {
        let time = 0;
        let countDaysCurrent = await miContrato.methods
            .countDaysCurrent()
            .call((err, result) => result);
        countDaysCurrent--;
        let lastTimstamp = await miContrato.methods
            .lastDayTimestamp()
            .call((err, result) => result);

        lastTimstamp = parseInt(lastTimstamp) + 86400
        time = lastTimstamp - Math.floor(Date.now() / 1000);
        if (time < 0) {
            time = 0;
        }

        return {
            countDays: countDaysCurrent,
            time: time
        };
    } catch (Ex) {
        return {};
    }
}
//Get only winner of season + the current player 
//returns [  {address , cantGame, reward },{}]
export async function getWinnersSeason(indexSeasson = -1) {
    try {
        let account = await getUserLogued();
        if (indexSeasson == -1) {
            indexSeasson = await miContrato.methods
                .currentSeason()
                .call((err, result) => result);
        }
        let allWinners = [];
        let winners = await miContrato.methods
            .getWinnersSeason(indexSeasson)
            .call((err, result) => result);

        let entrar = true;
        for (let i = 0; i < winners.players.length; i++) {
            if (winners.players[i] == account) {
                entrar = false;
            }
            let auxWinner = {
                address: winners.players[i],
                cantGame: winners.countGame[i],
                reward: 0,
            }
            auxWinner.reward = await getPriceInEth(winners.reward[i]);
            allWinners.push(auxWinner);
        }
        if (entrar) {
            let cantGame = await miContrato.methods
                .countPlayForSeason(account, indexSeasson)
                .call((err, result) => result);
            allWinners.push({
                address: account,
                cantGame: cantGame,
                reward: 0
            });
        }

        return allWinners;
    } catch (Ex) {
        console.log(Ex);
        return [];
    }
}


export async function getPoolSeason(indexSeasson = -1) {
    try {
        if (indexSeasson == -1) {
            indexSeasson = await miContrato.methods
                .currentSeason()
                .call((err, result) => result);
        }
        // winners.players son address   winner.cantGame la cantidad de veces que jugaron

        let poolSeasson = await miContrato.methods
            .poolSeason(indexSeasson)
            .call((err, result) => result);

        return poolSeasson;
    } catch (Ex) {
        console.log(Ex);
        return 0;
    }
}

export async function checkWinnerSeason(indexSeasson = -1) {
    try {
        let account = await getUserLogued();
        if (indexSeasson < 0) {
            indexSeasson = await miContrato.methods
                .currentSeason()
                .call((err, result) => result);
        }

        let winners = await miContrato.methods
            .getWinnersSeason(indexSeasson)
            .call((err, result) => result);
        for (let i = 0; i < winners.players.length; i++) {
            if (winners.players[i] == account) {
                return true;
            }
        }
        return false;
    } catch (Ex) {
        console.log(Ex);
        return 0;
    }
}

export async function claimWinnerSeason(indexSeasson = -1) {
    try {
        let account = await getUserLogued();
        if (indexSeasson < 0) {
            indexSeasson = await miContrato.methods
                .currentSeason()
                .call((err, result) => result);
        }


        await miContrato.methods.claimWinnerSeasonPool(indexSeasson).send({
            from: account,
            value: 0,
        },
            function (error, transactionHash) {
                console.log(transactionHash);
            }
        );
        return true;
    } catch (Ex) {
        console.log(Ex);
        return false;
    }
}

//retorna true
export async function checkWinnerPool() {
    try {
        let account = await getUserLogued();
        let address = await miContrato.methods
            .winVerify(0)
            .call((err, result) => result);
        if (address == account) {
            return true;
        }
        return false;
    } catch (Ex) {
        console.log(Ex);
        return 0;
    }
}

export async function claimWinnerPool() {
    try {

        let account = await getUserLogued();
        await miContrato.methods.claimLastPlayer().send({
            from: account,
            value: 0,
        },
            function (error, transactionHash) {
                console.log(transactionHash);
            }
        );
        return true;
    } catch (Ex) {
        console.log(Ex);
        return false;
    }
}
//it get the token count  of the current player
export async function countToken() {
    try {
        let account = await getUserLogued();

        let TokenContract = new web3.eth.Contract(
            CONST_ABI_TOKEN,
            Parameters.TG_ContratOKT
        );

        let decimals = await TokenContract.methods.decimals().call((err, result) => result);

        let countToken = await miContrato.methods
            .amountTokenGForOwner(account)
            .call((err, result) => result);
        // console.log(decimals);
        let aux = countToken / Math.pow(10, decimals)
        return aux;
    } catch (Ex) {
        console.log(Ex);
        return 0;
    }
}


export async function getPoolRun() {
    try {
        return await miContrato.methods
            .poolRun()
            .call((err, result) => result);

    } catch (Ex) {
        console.log(Ex);
        return 0;
    }
}

export async function claimToken() {
    try {
        let account = await getUserLogued();
        await miContrato.methods.claimToken().send({
            from: account,
            value: 0,
        },
            function (error, transactionHash) {
                console.log(transactionHash);
            }
        );
        return true;
    } catch (Ex) {
        console.log(Ex);
        return false;
    }
}

export async function getSeasonCurrent() {
    try {
        return await miContrato.methods
            .currentSeason()
            .call((err, result) => result);
    } catch (Ex) {
        console.log(Ex);
        return false;
    }
}

export async function getUserLogued() {
    try {
        let data = null;
        getWaitForPlay().then(res => console.log(res))
        await web3.eth.getAccounts(function (err, accounts) {
            if (err != null) {
                console.error("An error occurred: " + err);
            } else if (accounts.length == 0) {
                console.log("User is not logged in to MetaMask");
            } else {
                console.log("User is logged in to MetaMask");
                data = accounts["0"];
            }
        });
        return data;
    } catch (Ex) {
        console.log(Ex);
        return false;
    }
}

export async function getCountPlayersSeason(season = -1) {
    try {
        if (season == -1) {
            season = await miContrato.methods
                .currentSeason()
                .call((err, result) => result);
        }
        const count = await miContrato.methods
            .getCountPlayer(season)
            .call((err, result) => result);
        return count - 1;
    } catch (Ex) {
        return false;
    }
}


// devuelve el tiempo que el jugador debe esperar para ganar el pozo del juego cuando se llene la barrita
export async function getWaitForPlay() {
    try {
        let cost = await miContrato.methods
            .cost()
            .call((err, result) => result);
        let helper = await miContrato.methods
            .helper()
            .call((err, result) => result);
        let calc = (cost - (cost * helper / 100))
        calc = (calc - (calc * helper / 100))
        return await miContrato.methods
            .getSecondMax(calc)
            .call((err, result) => result);
    } catch (Ex) {
        console.log(Ex);
        return false;
    }
}
//devuelve la cantidad de token necesario para poder Darle PLAY al juego
export async function getPassport() {
    try {

        return await miContrato.methods
            .passport()
            .call((err, result) => result);
    } catch (Ex) {
        console.log(Ex);
        return 0;
    }
}

export async function getIfClaim(season = -1) {
    try {
        let account = await getUserLogued();
        if(season == -1){
            season= await miContrato.methods
            .currentSeason()
            .call((err, result) => result);
        }
        let listWinner=await getWinnersSeason(season);
        let amount=0;
        listWinner.forEach((winner)=>{
            if(winner.address == account){
                amount=winner.reward;
            }
        })
        let claim = await miContrato.methods
            .playerWithdraw(account,season)
            .call((err, result) => result);
            getWinnersSeason()                    
        return {claimed:claim,reward:amount};
    } catch (Ex) {
        
        console.log(Ex);
        return {claimed:false,reward:0};
    }
}


export async function watch() {
    web3.eth.getBlockNumber().then((n) => {
        n = n - 10;
        miContrato
            .getPastEvents("Game", {
                fromBlock: "latest",
                toBlock: n,
            })
            .then((events) => {
                console.log(events);
            });
    });

}

export async function getPriceInEth(wei) {
    if (wei == 0 || wei == null) {
        return 0
    } else {
        let aux = await web3.utils.fromWei(wei, 'ether')
        return aux
    }
}


export async function addToken() {
    return await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: Parameters.TG_ContratOKT, // The address that the token is at.
            symbol: 'RUN', // A ticker symbol or shorthand, up to 5 chars.
            decimals: 18, // The number of decimals in the token
            // image: tokenImage, // A string url of the token logo
          },
        },
      });
       
}





export async function getIdNetwork() {
    return await web3.eth.net.getId();
}

try{
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.on('chainChanged', () => {
            document.location.reload()
        });
        window.ethereum.on('accountsChanged', function (accounts) {
            document.location.reload()
        })
    }else{
        alert("you need install metamask")
    }
    
}catch(Ex){

}



