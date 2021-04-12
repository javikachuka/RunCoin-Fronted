import * as Parameters from "./parameters.js";
import {
    CONST_ABI
} from "./abiApp.js";

// aplicacion para la conexión con la blockchain
const Web3 = require("web3");
//prueba conectar el proveedor de metamask primero sino usa la varabile en Parameters "provider"
let web3 = new Web3(Web3.givenProvider || Parameters.provider);
//se crea el contrato
// export const miContrato = new web3.eth.Contract(CONST_ABI, Parameters.addressContractR);
export const miContrato = new web3.eth.Contract(
    CONST_ABI,
    Parameters.addressContractOKT
);

//inicia el juego y retorna su {player:string,timestamp:uint ,wait: uint}
//ejemplo de timestamp = 1287124121241 ; si resto el timestamp del anterior jugador con este serian los segundos que hay
// de diferencia.


// Account
export async function play() {
    //_cost wei

    try {
        const _cost = await miContrato.methods.cost().call((err, result) => result);
        let _account=await getUserLogued();
        let confirm = false;
        const player = await miContrato.methods.game(_cost).send({
                from: _account,
                value: _cost,
            },
            function (error, transactionHash) {
                console.log(transactionHash);
                if (transactionHash !== undefined) {
                    confirm = true;
                }
            }
        );
        return confirm;
    } catch (Ex) {
        console.log(Ex);
        //ocurrieron los siguientes errores,
        //1- No esta habilitado para jugar.
        //2- el valor ingresado es menor al costo del juego el costo esta en WEI.
        //3 - el valor ingresado no es el mismo que el valor enviado.
        return false;
    }
}

//count= countidad de player que se quiere visualizar

//player {player= address , timestamp= el tiempo en el que empezo a jugar, timeGame= el tiempo en que termino de jugar}

//opcion 1 timeGame= seria el tiempo desde que empezo a jugar hasta que otro jugador le corto el tiempo (cada vez que consultas siempre va ser el mismo tiempo).
//opcion 2 timeGame= si es el ultimo jugador del array te devuelve el tiempo desde que empezo a jugar hasta que se consulto en la blockchain (cada vez que consultas va a cmbiar el tiempo)

export async function listPlayerLastSeasons(count = -1) {
    try {
        const currentSeasons = await miContrato.methods
            .currentSeason()
            .call((err, result) => result);

        let countPlayer = await miContrato.methods
            .getCountPlayer(currentSeasons)
            .call((err, result) => result);
        countPlayer--;
        if (count <= 0) {
            //trae desde el utlimo jugador hasta el primero
            count = 0;
        } else {
            //el limite de jugador es

            count = count >= countPlayer ? 0 : countPlayer - count;
        }
        var players = [];
        let player = {};

        while (countPlayer >= count) {
            player = await miContrato.methods
                .getPlayer(currentSeasons, countPlayer)
                .call((err, result) => result);

            player.wait = parseInt(player.wait);
            player.timeGame = parseInt(player.timeGame);
            players.push(player);
            countPlayer--;
        }
        return players;
    } catch (Ex) {
        console.log(Ex);
        return false;
    }
}

//si queres ver mas player en la lista pasas
//count= la countidad de player que queres ver,
// indexPlayer= a partir del indice que queres ver.
//indexseason= indice de la session,
export async function getMorePlayer(count, indexPlayer = -1, indexSeason = -1) {
    try {
        var players = [];
        let player = {};
        if (indexSeason == -1) {
            indexSeason = await miContrato.methods
                .currentSeason()
                .call((err, result) => result);
        }
        if (indexPlayer == -1) {
            indexPlayer = await miContrato.methods
                .getCountPlayer(indexSeason)
                .call((err, result) => result - 1);
        }

        while (count > 0 && indexPlayer >= 0) {
            player = await miContrato.methods
                .getPlayer(indexSeason, indexPlayer)
                .call((err, result) => result);
            player.wait = parseInt(player.wait);
            player.timeGame = parseInt(player.timeGame);
            player.index = parseInt(indexPlayer);
            players.push(player);
            indexPlayer--;
            count--;
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

export async function getCountDaysCurrentOfSeasons() {
    try {
        const countDaysCurrent = await miContrato.methods
            .countDaysCurrent()
            .call((err, result) => result);
        return countDaysCurrent;
    } catch (Ex) {
        return false;
    }
}
//trae solamente las direcciones de los ganadores y el jugador actual aunque no haya ganado, si la temporada tiene 3 ganadores solo trae los 3
//retorna [  {address , countGame, reward },{}]
export async function getWinnersSeason(indexSeason = -1) {
    try {
        let account=await getUserLogued();
        if (indexSeason == -1) {
            indexSeason = await miContrato.methods
                .currentSeason()
                .call((err, result) => result);
        }
        // winners.players son address   winner.countGame la countidad de veces que jugaron
        let allWinners = [];
        let winners = await miContrato.methods
            .getWinnersSeason(indexSeason)
            .call((err, result) => result);

        let entrar = true;
        for (let i = 0; i < winners.players.length; i++) {
            //si el jugador actual no esta en la lista hay que agregarlo al final
            if (winners.players[i] == account) {
                entrar = false;
            }
            allWinners.push({
                address: winners.players[i],
                countGame: winners.countGame[i],
                reward: winners.reward[i],
            });
        }
        if (entrar) {
            let countGame = await miContrato.methods
                .countPlayForSeason(account, indexSeason, 0)
                .call((err, result) => result);
            allWinners.push({
                address: account,
                countGame: countGame,
                reward: 0
            });
        }

        return allWinners;
    } catch (Ex) {
        console.log(Ex);
        return [];
    }
}
//obteiene todas las direcciones de todos los jugadores y la countidad de vecees que jugaron
export async function getAllGameOfPlayer(indexSeason = -1) {
    try {
        if (indexSeason == -1) {
            indexSeason = await miContrato.methods
                .currentSeason()
                .call((err, result) => result);
        }
        // winners.players son address   winner.countGame la countidad de veces que jugaron
        let allPlayers = [];
        let players = await miContrato.methods
            .getCountGameForPlayer(indexSeason)
            .call((err, result) => result);
        for (let i = 0; i < players.player.length; i++) {
            allPlayers.push({
                address: players.player[i],
                countGame: players.countGame[i],
            });
        }

        return allPlayers;
    } catch (Ex) {
        console.log(Ex);
        return [];
    }
}

export async function getPoolSeason(indexSeason = -1) {
    try {
        if (indexSeason == -1) {
            indexSeason = await miContrato.methods
                .currentSeason()
                .call((err, result) => result);
        }
        // winners.players son address   winner.countGame la countidad de veces que jugaron

        let poolSeason = await miContrato.methods
            .poolSeason(indexSeason)
            .call((err, result) => result);

        return poolSeason;
    } catch (Ex) {
        console.log(Ex);
        return 0;
    }
}
//checkea si el ganador de la temporada seleccionada
export async function checkWinnerSeason(indexSeason = -1) {
    try {
        let account=await getUserLogued();
        if (indexSeason < 0) {
            indexSeason = await miContrato.methods
                .currentSeason()
                .call((err, result) => result);
        }

        let winners = await miContrato.methods
            .getWinnersSeason(indexSeason)
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
//reclama el premio uno de los ganadores de la temporada seleccionada
export async function claimWinnerSeason(indexSeason = -1) {
    try {
        let account=await getUserLogued();
        if (indexSeason < 0) {
            indexSeason = await miContrato.methods
                .currentSeason()
                .call((err, result) => result);
        }


        await miContrato.methods.claimWinnerSeasonPool(indexSeason).send({
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
//checkea si el ultimo jugador es el ganador del POOL global
//retorna true
export async function checkWinnerPool() {
    try {
        let account=await getUserLogued();
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
//se reclama el pool global
export async function claimWinnerPool() {
    try {

        let account=await getUserLogued();
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
//obtener la countidad de token de la direccion actual
export async function countToken() {
    try {
        let account=await getUserLogued();
        return await miContrato.methods
            .countTokenGForOwner(account)
            .call((err, result) => result);

    } catch (Ex) {
        console.log(Ex);
        return 0;
    }
}

//reclama los token que tiene
export async function claimToken() {
    try {
        let account=await getUserLogued();
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
        await web3.eth.getAccounts(function (err, accounts) {
            // chequea si hay un provider para poder conectarme la block
            if (err != null) {
                console.error("An error occurred: " + err);
            } else if (accounts.length == 0) {
                // checkea si hay algun usuario ya logueado a metamask
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

    // await miContrato.events.Game({
    //     // filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'},
    //     fromBlock: 'latest'
    // }, function (error, event) {
    //     console.log('Evento activado');
    //     console.log(event);
    //     console.log(error)
    // });
}

//**************Escuchar Eventos en la blockchain */
//docs : https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#id48
//nose si funciona, se supone que escucha cuando el evento se dispara en la blockchain se ejecuta el codigo de adentro.
// este escucha cada vez que alguien juegue.
// si funciona te retorna estos parametros {address owner_play, uint256 cost,uint256 timestamp, uint256 wait}

// miContrato.events.Game({
//     // filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'},
//     fromBlock: 'latest'
// }, function (error, event) {
//     console.log('Evento activado');
//     console.log(event);
// });