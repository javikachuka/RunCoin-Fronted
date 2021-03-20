import React, { useState, useEffect } from 'react';
import { listPlayerLastSeassons } from '../services/server'
import { miContrato } from '../services/server'
import ItemGame from '../components/ItemGame'
import { Button, List } from '@material-ui/core';
import { useList } from '../hooks/useList';
import { player } from '../services/server';

const ListOfPlayers = () => {

    const { list, setNewGame } = useList()

    // const [list, setList] = useState([])
    // const [newGame, setNewGame] = useState(null)

    // useEffect(
    //     () => {
    //         const response = miContrato.events.Game(
    //             {
    //                 // filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'},
    //                 fromBlock: 'latest'
    //             }
    //             // , (error, event) => {
    //             //     const { listado, setListado } = useList()
    //             //     console.log(listado);
    //             //     console.log('Evento activado');
    //             //     console.log(event);
    //             //     let newGame = {
    //             //         player: event.returnValues.owner_play,
    //             //         timeGame: 0,
    //             //         timestamp: event.returnValues.timestamp,
    //             //         wait: event.returnValues.wait
    //             //     }
    //             //     return newGame
    //             //     // setList([...list, newGame])
    //             // }
    //         )
    //         .on('data', 
    //             // res => actualizarList(res)
    //             res => {
    //                 console.log(res);
    //                 console.log(list);
    //                 // console.log('Evento activado');
    //                 // console.log(res);
    //                 let newGame = {
    //                     player: res.returnValues.owner_play,
    //                     timeGame: 0,
    //                     timestamp: res.returnValues.timestamp,
    //                     wait: res.returnValues.wait
    //                 }
    //                 return newGame
    //                 // setList([...list, newGame])
    //             }
    //         )
    //         console.log(response);
    //         console.log('saliendo');
    //     }, []
    // )


    useEffect(
        () => {

            miContrato.events.Game(
                {
                    // filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'},
                    fromBlock: 'latest'
                }
                , (error, event) => {
                    console.log('Evento activado');
                    let newGame = {
                        player: event.returnValues.owner_play,
                        timeGame: 0,
                        timestamp: event.returnValues.timestamp,
                        wait: event.returnValues.wait
                    }
                    // return newGame
                    setNewGame(newGame)
                    console.log(newGame);
                }
            )
            // setList([newGame, ...list])

            console.log('saliendo');
        }, []
    )

    // async function fetchApi() {
    //     await listPlayerLastSeassons(80)
    //         .then(
    //             (result) => {
    //                 var array = result.map(
    //                     (r) => {
    //                         return {
    //                             ...r,
    //                             player: r.player,
    //                             timeGame: r.timeGame,
    //                             timestamp: r.timestamp,
    //                             wait: r.wait,
    //                         }
    //                     }
    //                 )
    //                 console.log(array);
    //                 setList(array);

    //             }
    //         ).catch(
    //             (error) => {
    //                 console.log(error)
    //             }
    //         )
    // }

    return (
        <>
            {
                list.map(
                    (l, index) => {
                        return (
                            <ItemGame player={l.player} timeGame={l.timeGame} timestamp={l.timestamp} wait={l.wait} index={index} key={l.player + l.timestamp}></ItemGame>
                        )
                        // if (index === 0) {
                        //     return (
                        //         <ItemGame player={l.player} timeGame={l.timeGame} timestamp={l.timestamp} wait={l.wait} isLast={true} key={l.player + l.timestamp}></ItemGame>
                        //     )
                        // } else {
                        //     return (
                        //         <ItemGame player={l.player} timeGame={l.timeGame} timestamp={l.timestamp} wait={l.wait} isLast={false} key={l.player + l.timestamp}></ItemGame>
                        //     )
                        // }
                    }
                )
            }
            <Button onClick={() => console.log(list)}>Apretame</Button>
        </>
    );
}

export default ListOfPlayers;