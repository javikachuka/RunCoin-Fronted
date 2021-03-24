import * as Parameters from "./parameters.js";
import {
    CONST_ABI
} from "./abiApp.js";

// aplicacion para la conexión con la blockchain 
const Web3 = require("web3");
//prueba conectar el proveedor de metamask primero sino usa la varabile en Parameters "provider"
let web3 = new Web3(Web3.givenProvider || Parameters.provider);
//se crea el contrato 
export const miContrato = new web3.eth.Contract(CONST_ABI, Parameters.addressContractR);


//inicia el juego y retorna su {player:string,timestamp:uint ,wait: uint}
//ejemplo de timestamp = 1287124121241 ; si resto el timestamp del anterior jugador con este serian los segundos que hay 
// de diferencia.

// Account
export async function play(_account) {
    //_cost wei

    try {
        const _cost = await miContrato.methods.cost()
            .call((err, result) => result);

        let confirm = false
        const player = await miContrato.methods
            .game(_cost)
            .send({
                    from: _account,
                    value: _cost,
                },
                function (error, transactionHash) {
                    console.log(transactionHash);
                    if(transactionHash !== undefined){
                        confirm = true
                    }
                }
            );
        return confirm;
    } catch (Ex) {
        console.log(Ex)
        //ocurrieron los siguientes errores,
        //1- No esta habilitado para jugar.
        //2- el valor ingresado es menor al costo del juego el costo esta en WEI.
        //3 - el valor ingresado no es el mismo que el valor enviado. 
        return false;
    }
}

//cant= cantidad de player que se quiere visualizar

//player {player= address , timestamp= el tiempo en el que empezo a jugar, timeGame= el tiempo en que termino de jugar}

//opcion 1 timeGame= seria el tiempo desde que empezo a jugar hasta que otro jugador le corto el tiempo (cada vez que consultas siempre va ser el mismo tiempo).
//opcion 2 timeGame= si es el ultimo jugador del array te devuelve el tiempo desde que empezo a jugar hasta que se consulto en la blockchain (cada vez que consultas va a cmbiar el tiempo)

export async function listPlayerLastSeassons(cant = -1) {

    try {
        const currentSeassons = await miContrato.methods.currentSeasson()
            .call((err, result) => result);

        let cantPlayer = await miContrato.methods.getCantPlayer(currentSeassons)
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

            player = await miContrato.methods.getPlayer(currentSeassons, cantPlayer)
                .call((err, result) => result);

            player.wait = parseInt(player.wait)
            player.timeGame = parseInt(player.timeGame)
            players.push(player);
            cantPlayer--;
        }
        return players;

    } catch (Ex) {
        console.log(Ex)
        return false;
    }
}

//si queres ver mas player en la lista pasas 
//cant= la cantidad de player que queres ver,
// indexPlayer= a partir del indice que queres ver.
//indexseasson= indice de la session, 
export async function getMorePlayer(cant, indexPlayer=-1, indexSeasson=-1) {

    try {

        var players = [];
        let player = {};
        if(indexSeasson== -1){

            indexSeasson = await miContrato.methods.currentSeasson()
                .call((err, result) => result);
        }
        if(indexPlayer == -1){

            indexPlayer = await miContrato.methods.getCantPlayer(indexSeasson)
                .call((err, result) => result -1)  ;
        }
    

            
        while (cant > 0 && indexPlayer >= 0) {

            player = await miContrato.methods.getPlayer(indexSeasson, indexPlayer)
                .call((err, result) => result);
            player.wait = parseInt(player.wait)
            player.timeGame = parseInt(player.timeGame)
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
        const recompensa = await miContrato.methods.getValueReward()
            .call((err, result) => result);
        return recompensa;
    } catch (Ex) {
        return false;
    }
}

export async function getCostPlay() {

    try {
        const cost = await miContrato.methods.cost()
            .call((err, result) => result);
        return cost;
    } catch (Ex) {
        return false;
    }
}

export async function getCantDaysCurrentOfSeassons() {

    try {
        const cantDaysCurrent = await miContrato.methods.cantDaysCurrent()
            .call((err, result) => result);
        return cantDaysCurrent;
    } catch (Ex) {
        return false;
    }
}
export async function getWinnersSeasson(indexSeasson =-1) {

    try {
        if(indexSeasson ==-1){

            indexSeasson= await miContrato.methods.currentSeasson()
            .call((err, result) => result);
        }
        // winners.players son address   winner.cantGame la cantidad de veces que jugaron
        let allWinners=[];
        let winners = await miContrato.methods.getWinnersSeasson(indexSeasson)
            .call((err, result) => result);
            for(let i=0;i<winners.players.length;i++){
                allWinners.push({address: winners.players[i] , cantGame: winners.cantGame[i] });
            }
           
        return allWinners;
    } catch (Ex) {
        console.log(Ex);
        return [];
    }
}
export async function getPoolSeasson(indexSeasson =-1) {

    try {
        if(indexSeasson ==-1){

            indexSeasson= await miContrato.methods.currentSeasson()
            .call((err, result) => result);
        }
        // winners.players son address   winner.cantGame la cantidad de veces que jugaron
       
        let poolSeasson = await miContrato.methods.getPoolSeasson(indexSeasson)
            .call((err, result) => result);
          
           
        return poolSeasson;
    } catch (Ex) {
        console.log(Ex);
        return 0;
    }
}

export async function getUserLogued() {
    try {
        let data = null
        await web3.eth.getAccounts(function (err, accounts) { // chequea si hay un provider para poder conectarme la block
            if (err != null) {
                console.error("An error occurred: " + err);
            } else if (accounts.length == 0) { // checkea si hay algun usuario ya logueado a metamask
                console.log("User is not logged in to MetaMask");
            } else {
                console.log("User is logged in to MetaMask");
                data = accounts["0"];
            }
        });
        return data
    } catch (Ex) {
        console.log(Ex)
        return false;
    }
}






export async function watch() {
    web3.eth.getBlockNumber().then(
        n => {
            n = n - 10
            miContrato.getPastEvents(
                'Game', {
                    fromBlock: 'latest',
                    toBlock: n
                }
            ).then(
                events => {
                    console.log(events);
                }
            )
        }

    );

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