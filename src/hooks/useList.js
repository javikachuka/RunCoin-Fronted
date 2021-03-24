import React, { useEffect, useContext, useState } from 'react';
import ListContext from '../context/ListContext';
import { listPlayerLastSeassons } from '../services/server';

export const useList = () => {
    const { list, setList } = useContext(ListContext)
    const [newGame, setNewGame] = useState(null)
    const [load, setLoad] = useState(true)
    useEffect(
        () => {
            if(newGame == null){
                fetchApi()
            }else {
                setEstado()
            }
        }, [newGame]
    )

    const setEstado = () => {
        setList([newGame, ...list])
    }

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
                    console.log(array);
                    setList(array);
                    setLoad(false);

                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
    }
    return { list, setNewGame, load }
}