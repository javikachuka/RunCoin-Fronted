import React, { useEffect, useState } from "react";
import Header from "../components/Game/Header/Header";
import {
  getCostPlay,
  getCantDaysCurrentOfSeassons,
  getReward,
} from "../services/server";
import * as Parameters from "../services/parameters.js";
import { miContrato } from "../services/server";
import { useList } from "../hooks/useList";
import ListPlayersTop from "../components/ListPlayersTop";
import Content from "../components/Game/Content/Content";
// aplicacion para la conexión con la blockchain
const Web3 = require("web3");
//prueba conectar el proveedor de metamask primero sino usa la varabile en Parameters "provider"
let web3 = new Web3(Web3.givenProvider || Parameters.provider);

const Game2 = () => {
  const [daysCurrentSeassons, setDaysCurrentSeassons] = useState(0);
  const [reward, setReward] = useState({
    recompensa: null,
    nextRecompensa: null,
  });
  // const {reward, daysCurrentSeassons} = useList()

  useEffect(
    () => {
      getDays();
      getRew();
      miContrato.events.Game(
        {
          // filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'},
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
    getCantDaysCurrentOfSeassons()
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
      <Header />
      <Content />
    </>
  );
};

export default Game2;
