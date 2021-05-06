import React, { useEffect, useState } from "react";
import TopPlayers from "../TopPlayers/TopPlayers";
import {
  CardRow,
  SeasonCard,
  PoolHeader,
  EndHeader,
  Subtitle,
} from "./SeasonContent.elements";
import { getPoolSeason, miContrato } from '../../../services/server'
import { getCountDaysCurrentOfSeasons, getReward, getPriceInEth } from "../../../services/server";


function SeasonContent() {
  const [daysCurrentSeassons, setDaysCurrentSeassons] = useState(0)
  const [rewardInEth, setRewardInEth] = useState(0)
  const [reward, setReward] = useState({
    recompensa: null,
    nextRecompensa: null
  })

  useEffect(
    () => {
      getDays()
      getRew()
      miContrato.events.Game(
        {
          // filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'},
          fromBlock: 'latest'
        }
        , (error, event) => {
          console.log('Evento activado2');
          getDays()
          getRew()
        }
      )
    }, [] // las llaves sirven para ejecutar solamente una vez el useEffect de esta manera copiamos el comportamiento de componentDidMount
  )

  const getDays = () => {
    getCountDaysCurrentOfSeasons().then(
      (result) => {
        console.log(result)
        setDaysCurrentSeassons(result.countDays)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }

  const getRew = () => {
    getPoolSeason().then(
      (result) => {
        console.log(result)
        getPriceInEth(result).then(res => setRewardInEth(res))

      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }


  return (
    <>
      <CardRow>
        <SeasonCard>
          <PoolHeader>≈$ {rewardInEth}</PoolHeader>
          <Subtitle>SEASON POOL</Subtitle>
        </SeasonCard>
        <SeasonCard>
          <EndHeader>{daysCurrentSeassons} days </EndHeader>
          <Subtitle>END OF SEASON</Subtitle>
        </SeasonCard>
      </CardRow>
      <TopPlayers />
    </>
  );
}

export default SeasonContent;
