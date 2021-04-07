import React, { useState, useEffect } from 'react';
import { listPlayerLastSeassons } from '../services/server'
import { miContrato } from '../services/server'
import ItemGame from '../components/ItemGame'
import { Button, List } from '@material-ui/core';
import { useList } from '../hooks/useList';
import { player } from '../services/server';
import AlertPop from './AlertPop'
import Loading from './Loading';

const ListOfPlayers = () => {

    // const { list, setNewGame, load } = useList()

    const [list, setList] = useState([])
    const [load, setLoad] = useState(true)
    // const [newGame, setNewGame] = useState(null)


    useEffect(
        () => {
            fetchApi()
            miContrato.events.Game(
                {
                    // filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'},
                    fromBlock: 'latest'
                }
                , (error, event) => {
                    console.log('Evento activado');
                    setLoad(true)
                    fetchApi()
                }
            )
            console.log('saliendo');
        }, [] 
    )

    async function fetchApi() {
        await listPlayerLastSeassons(9)
            .then(
                (result) => {
                    var array = result.map(
                        (r) => {
                            return {
                                ...r,
                                player: r.player,
                                timeGame: r.timeGame,
                                timestamp: r.timestamp,
                                wait: r.wait,
                            }
                        }
                    )
                    setList(array);
                    setLoad(false)
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    return (
        <>
            {
                load
                    ? <Loading />
                    : list.map(
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
        </>
    );
}

export default ListOfPlayers;