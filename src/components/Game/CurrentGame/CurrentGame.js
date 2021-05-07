import React, { useState, useEffect } from "react";
import ListOfPlays from "../ListOfPlays/ListOfPlays";
import {
  CurrentGameContainer,
  GameRow,
  JackPot,
  PlayButton,
  JackPotAmount,
  JackPotText,
  MoreButton,
} from "./CurrentGame.elements";
import ButtonPlay from "../ButtonPlay/ButtonPlay";
import Alert from "../Alert/Alert";
import { getPriceInEth, getReward, miContrato } from "../../../services/server";
import { BarContextProvider } from "../../../context/BarContext";
import { useFullBar } from "../../../hooks/useFullBar";
import ButtonClaim from "../ButtonClaim/ButtonClaim";

function CurrentGame() {
  const [cost, setCost] = useState(0);
  const { isFull } = useFullBar();

  useEffect(() => {
    loadCost();
    console.log("Completaa bar");
    console.log(isFull);
    miContrato.events.Game(
      {
        // filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'},
        fromBlock: "latest",
      },
      (error, event) => {
        loadCost();
      }
    );
  }, []);

  const loadCost = () => {
    getReward().then((res) => {
      if (res !== false) {
        getPriceInEth(res.recompensa).then((val) => setCost(val));
      }
    });
  };

  return (
    <>
      <CurrentGameContainer>
        <GameRow>
          <JackPot>
            <JackPotAmount>≈$ {cost}</JackPotAmount>
            <JackPotText>current jackpot</JackPotText>
          </JackPot>
          {!isFull ? <ButtonPlay /> : <ButtonClaim />}
        </GameRow>
        <ListOfPlays />
        {/* <BarRow>
          <PlayerId>you: 0x34...f9F7</PlayerId>
          <GameBar>
            <Bar className="current-game-animation"></Bar>
          </GameBar>
          <TimeBar>End In: 1 day 45 min</TimeBar>
        </BarRow>
        <BarRow>
          <PlayerId>Id: 0x6A...AdE8</PlayerId>
          <GameBar>
            <Bar className="game-ended"></Bar>
          </GameBar>
          <TimeBar>Ended</TimeBar>
        </BarRow>
        <BarRow>
          <PlayerId>Id: 0x6A...AdE8</PlayerId>
          <GameBar>
            <Bar className="game-ended"></Bar>
          </GameBar>
          <TimeBar>Ended</TimeBar>
        </BarRow>
        <BarRow>
          <PlayerId>you: 0x34...f9F7</PlayerId>
          <GameBar>
            <Bar className="game-ended-player"></Bar>
          </GameBar>
          <TimeBar>Ended</TimeBar>
        </BarRow>
        <BarRow>
          <PlayerId>Id: 0x6A...AdE8</PlayerId>
          <GameBar>
            <Bar className="game-ended"></Bar>
          </GameBar>
          <TimeBar>Ended</TimeBar>
        </BarRow>
        <BarRow>
          <PlayerId>Id: 0x6A...AdE8</PlayerId>
          <GameBar>
            <Bar className="game-ended"></Bar>
          </GameBar>
          <TimeBar>Ended</TimeBar>
        </BarRow> */}
      </CurrentGameContainer>
    </>
  );
}

export default CurrentGame;
