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
import { transformSecondsToHuman } from "../../../utils/transformSecondsToHuman";
import { transformSecondsToHumanMin } from "../../../utils/transformSecondsToHumanMin";
import { reduceDecimal } from "../../../utils/reduceDecimal";


function SeasonContent({ reload, setReload }) {
  const [daysCurrentSeassons, setDaysCurrentSeassons] = useState(0)
  const [rewardInEth, setRewardInEth] = useState(0)
  const [showTimeShort, setShowTimeShort] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [stopReload, setStopReload] = useState(false);


  useEffect(
    () => {
      if (reload) {
        getDays()
        getRew()
        const timer = setTimeout(() => {
          setStopReload(!stopReload)
        }, 60000)
      }
    }, [reload, stopReload]
  )

  useEffect(
    () => {
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

  useEffect(
    () => {
      if (seconds > 0) {
        const timer = setTimeout(() => {
          setSeconds(seconds - 1)
        }, 1000)
      }
    }, [seconds]
  )

  const getDays = () => {
    getCountDaysCurrentOfSeasons().then(
      (result) => {
        if (result.countDays != 0) {
          setDaysCurrentSeassons(result.countDays + " days")
        } else {
          setShowTimeShort(true)
          setSeconds(result.time)
        }
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

          <PoolHeader>≈ {reduceDecimal(rewardInEth, 6)} BNB</PoolHeader>
          <Subtitle>SEASON POOL</Subtitle>
        </SeasonCard>
        <SeasonCard>
          {
            !showTimeShort
              ? <EndHeader>{daysCurrentSeassons}</EndHeader>
              : <EndHeader>{transformSecondsToHumanMin(seconds)}</EndHeader>
          }
          <Subtitle>END OF SEASON</Subtitle>
        </SeasonCard>
      </CardRow>
      <TopPlayers reload={reload} setReload={setReload} />
    </>
  );
}

export default SeasonContent;
