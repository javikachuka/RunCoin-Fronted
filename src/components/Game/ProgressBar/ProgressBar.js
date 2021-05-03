import React, { useState, useEffect } from "react";
import { transformSecondsToHuman } from "../../../utils/transformSecondsToHuman";
import { transformAddress } from "../../../utils/transformAddress";
import { useLogin } from "../../../hooks/useLogin";
import {
  BarRow,
  PlayerId,
  GameBar,
  Bar,
  TimeBar,
} from "./ProgressBar.elements";
import { useFullBar } from "../../../hooks/useFullBar";

export default function ProgressBar(props) {
  //login de user
  const { user } = useLogin();

  const [value, setValue] = useState(20);
  const [aux, setAux] = useState(props.timeGame);
  const [isLast, setIsLast] = useState(props.index === 0 ? true : false);
  // const [porcent, setPorcent] = useState(20)
  const [esperar, setEsperar] = useState(props.wait - props.timeGame);
  const [end, setEnd] = useState(props.wait);
  const [timeGame, setTimeGame] = useState(props.timeGame);
  const begin = 20;
  const {setIsFull} = useFullBar()

  const getHours = (seconds) => {
    return transformSecondsToHuman(seconds);
  };

  const getWaitPorcent = () => {
    let difference = (aux * 80) / end;
    if (difference > 0) {
      return difference;
    } else {
      return 0;
    }
  };

  const getDay = (timestamp) => {
    const milliseconds = timestamp * 1000;
    const date = new Date(milliseconds);
    return date.toLocaleDateString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  useEffect(() => {
    let montado = true;
    if (props.index === 0) {
      setIsLast(true);
    } else {
      setIsLast(false);
    }
    if (isLast && timeGame < end) {
      const timer = setTimeout(() => {
        if (esperar >= 0) {
          setAux(aux + 1);
          setEsperar(esperar - 1);
          setValue(begin + getWaitPorcent());
        } else {
          return () => clearTimeout(timer);
        }
      }, 1000);
    } else {
      if (timeGame >= end) {
        setValue(100);
        setIsFull(true); 
      } else {
        setValue(begin + getWaitPorcent());
      }
    }

    return () => console.log("desmontando");
  }, [esperar, value]);

  if (isLast && timeGame < end) {
    return (
      <>
        <BarRow>
          {user.player == props.player ? (
            <PlayerId>you: {transformAddress(props.player)}</PlayerId>
          ) : (
            <PlayerId>id: {transformAddress(props.player)}</PlayerId>
          )}
          <GameBar>
            <Bar value={value} className="current-game-animation"></Bar>
          </GameBar>
          <TimeBar>End In: {getHours(esperar)}</TimeBar>
        </BarRow>
      </>
    );
  } else if (timeGame >= end) {
    return (
      <>
        <BarRow>
          {user.player == props.player ? (
            <>
              <PlayerId>you: {transformAddress(props.player)}</PlayerId>
              <GameBar>
                <Bar value={value} className="game-ended-player"></Bar>
              </GameBar>
            </>
          ) : (
            <>
              <PlayerId>id: {transformAddress(props.player)}</PlayerId>
              <GameBar>
                <Bar value={value} className="game-ended"></Bar>
              </GameBar>
            </>
          )}
          <TimeBar>Ended</TimeBar>
        </BarRow>
      </>
    );
  } else {
    return (
      <>
        <>
          <BarRow>
            {user.player == props.player ? (
              <>
                <PlayerId>you: {transformAddress(props.player)}</PlayerId>
                <GameBar>
                  <Bar value={value} className="game-early-ended-player"></Bar>
                </GameBar>
              </>
            ) : (
              <>
                <PlayerId>id: {transformAddress(props.player)}</PlayerId>
                <GameBar>
                  <Bar value={value} className="game-early-ended"></Bar>
                </GameBar>
              </>
            )}
            <TimeBar>Ended</TimeBar>
          </BarRow>
        </>
      </>
    );
  }
}
