import React, { useState, useEffect } from "react";
import {
  getCountDaysCurrentOfSeasons,
  getReward,
  miContrato,
} from "../../../services/server";
import * as Parameters from "../../../services/parameters.js";
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

// aplicacion para la conexión con la blockchain
const Web3 = require("web3");
//prueba conectar el proveedor de metamask primero sino usa la varabile en Parameters "provider"
let web3 = new Web3(Web3.givenProvider || Parameters.provider);

function CurrentGame() {
  const [daysCurrentSeassons, setDaysCurrentSeassons] = useState(0);
  const [reward, setReward] = useState({
    recompensa: null,
    nextRecompensa: null,
  });
  useEffect(
    () => {
      getDays();
      getRew();
      miContrato.events.Game(
        {
          fromBlock: "latest",
        },
        (error, event) => {
          console.log("Evento activado2");
          getDays();
          getRew();
        }
      );
    },
    [] // las llaves sirven para ejecutar solamente una vez el useEffect de esta manera copiamos el comportamiento de componentDidMount
  );

  const getDays = () => {
    getCountDaysCurrentOfSeasons()
      .then((result) => {
        console.log(result);
        setDaysCurrentSeassons(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getRew = () => {
    getReward()
      .then((result) => {
        console.log(result.recompensa);
        setReward({
          recompensa: result.recompensa,
          nextRecompensa: result.nextRecompensa,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getRealPriceEth = (wei) => {
    if (wei == 0 || wei == null) {
      return 0;
    } else {
      return web3.utils.fromWei(wei, "ether");
    }
  };

  return (
    <>
      <CurrentGameContainer>
        <GameRow>
          <JackPot>
            <JackPotAmount>
              ≈$ {getRealPriceEth(reward.recompensa)}
            </JackPotAmount>
            <JackPotText>current jackpot</JackPotText>
          </JackPot>
          <ButtonPlay />
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
        <MoreButton>Show More</MoreButton>
      </CurrentGameContainer>
    </>
  );
}

export default CurrentGame;
