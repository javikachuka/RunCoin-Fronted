import React, { useEffect, useContext, useState } from 'react';
import ListContext from '../context/ListContext';
import { listPlayerLastSeasons, getCountDaysCurrentOfSeasons, getReward } from '../services/server';

export const useList = () => {
    const { list, setList } = useContext(ListContext)
    const [newGame, setNewGame] = useState(null)
    const [load, setLoad] = useState(true)
    const [daysCurrentSeassons, setDaysCurrentSeassons] = useState(0)
    const [reward, setReward] = useState({
        recompensa: null,
        nextRecompensa: null
    })
    useEffect(
        () => {
            console.log("el pepe");
            if(newGame == null){
                fetchApi()
            }else {
                setEstado()
            }
            getDaysOfSeason()
            getRew()

        }, [newGame]
    )

    const getDaysOfSeason = () => {
        getCountDaysCurrentOfSeasons().then(
            (result) => {
                console.log(result)
                setDaysCurrentSeassons(result)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    const getRew = () => {
        getReward().then(
            (result) => {
                console.log('entre a reward');
                console.log(result.recompensa)
                setReward({ recompensa: result.recompensa, nextRecompensa: result.nextRecompensa })

            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    const setEstado = () => {
        setList([newGame, ...list])
    }

    async function fetchApi() {
        await listPlayerLastSeasons(9)
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
    return { list, setNewGame, load, daysCurrentSeassons, reward }
}