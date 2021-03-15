import React, { useEffect, useContext } from 'react';
import ListContext from '../context/ListContext';
import { listPlayerLastSeassons } from '../services/server';

export const useList = () => {
    const { list, setList } = useContext(ListContext)
    useEffect(
        () => {
            listPlayerLastSeassons(50)
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

                    }
                ).catch(
                    (error) => {
                        console.log(error)
                    }
                )
        }, [list,setList]
    )

    return {list, setList}
}