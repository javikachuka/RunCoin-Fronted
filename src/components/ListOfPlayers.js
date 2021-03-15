import React, { useState, useEffect } from 'react';
import { listPlayerLastSeassons } from '../services/server'
import { miContrato } from '../services/server'
import ItemGame from '../components/ItemGame'
import { Button, List } from '@material-ui/core';
import { useList } from '../hooks/useList';

const ListOfPlayers = () => {


    const {list, setList} = useList()

    useEffect(
        () => {
            console.log("render list of players");
            miContrato.events.Game({
                // filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'},
                fromBlock: 'latest'
            }, function (error, event) {
                console.log('Evento activado');
                console.log(event);
                let newGame = {
                    player: event.returnValues.owner_play,
                    timeGame: 0,
                    timestamp: event.returnValues.timestamp,
                    wait: event.returnValues.wait
                }
                setList([...list, newGame])

            });
            console.log('saliendo');
        }, []
    )


    return (
        <>
            {
                list.map(
                    (l, index) => {
                        if (index === 0) {
                            console.log('el true')
                            return (
                                <ItemGame player={l.player} timeGame={l.timeGame} timestamp={l.timestamp} wait={l.wait} isLast={true} key={l.player + l.timestamp}></ItemGame>
                            )
                        } else {
                            console.log('el false')
                            return (
                                <ItemGame player={l.player} timeGame={l.timeGame} timestamp={l.timestamp} wait={l.wait} isLast={false} key={l.player + l.timestamp}></ItemGame>
                            )
                        }
                    }
                )
            }
            <Button onClick={() => console.log(list)}>Apretame</Button>
        </>
    );
}

export default ListOfPlayers;