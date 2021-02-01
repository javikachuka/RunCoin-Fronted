import * as Parameters from "./parameters.js";
import {
    CONST_ABI
} from "./abiApp.js";

// aplicacion para la conexión con la blockchain 
const Web3 = require("web3");
//prueba conectar el proveedor de metamask primero sino usa la varabile en Parameters "provider"
let web3 = new Web3(Web3.givenProvider || Parameters.provider);
//se crea el contrato 
const miContrato = new web3.eth.Contract(CONST_ABI, Parameters.addressContractR);


//inicia el juego y retorna su {player:string,timestamp:numeros}
//ejemplo de timestamp = 1287124121241 ; si resto el timestamp del anterior jugador con este serian los segundos que hay 
// de diferencia.
export async function play(_account, _value) {
    //_cost wei

    try {
        const _cost = await miContrato.methods.cost()
            .call((err, result) => result);

        const player = await miContrato.methods
            .game(_value)
            .send({
                    from: _account,
                    value: _cost,
                },
                function (error, transactionHash) {}
            );
        return player;
    } catch (Ex) {
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

export async function listPlayerLastSeassons(cant) {

    try {
        const currentSeassons = await miContrato.methods.currentSeassons()
            .call((err, result) => result);

        const cantPlayer = await miContrato.methods.getCantPlayer(currentSeassons)
            .call((err, result) => result);
        cant = cant > cantPlayer ? cantPlayer - 1 : cant;
        players = [];
        let player = {};
        while (cant > 0) {

            player = await miContrato.methods.getPlayer(currentSeassons, cant)
                .call((err, result) => result);

            players.push(player);
            cant--;
        }
        return players;

    } catch (Ex) {
        return false;
    }
}

//si queres ver mas player en la lista pasas 
//cant= la cantidad de player que queres ver,
// indexPlayer= a partir del indice que queres ver.
//indexseasson= indice de la session, 
export async function getMorePlayer(cant, indexPlayer, indexSeasson) {

    try {

        players = [];
        let player = {};
        while (cant > 0 && indexPlayer > 0) {

            player = await miContrato.methods.getPlayer(currentSeassons, indexPlayer)
                .call((err, result) => result);

            players.push(player);
            indexPlayer--;
        }
        return players;

    } catch (Ex) {
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

//**************Escuchar Eventos en la blockchain */
//docs : https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#id48
//nose si funciona, se supone que escucha cuando el evento se dispara en la blockchain se ejecuta el codigo de adentro.
// este escucha cada vez que alguien juegue.
// si funciona te retorna estos parametros {address owner_play, uint256 cost,uint256 timestamp, uint256 wait}

miContrato.events.Game({
    // filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'},
    fromBlock: 'latest'
}, function (error, event) {
    console.log('Evento activado');
    console.log(event);
});

