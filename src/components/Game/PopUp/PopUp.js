import React, { useEffect, useState } from "react";
import { PopupContainer, Row, Title, Info } from "./PopUp.elements";
import infoIcon from "../../../images/infoIcon.svg";
import { getCostPlay, getPriceInEth, getWaitForPlay } from "../../../services/server";
import { transformSecondsToHuman } from "../../../utils/transformSecondsToHuman";

const PopUp = () => {

  const [cost, setCost] =  useState(0) 
  const [timeWait, setTimeWait] = useState(0)
  const [passport, setPassport] = useState(0)

  useEffect(
    () => {
      load()
    }, []
  )

  const load = () => {
    getCostPlay().then(
      (res) => {
        getPriceInEth(res).then((r) => setCost(r))
      }
    )
    getWaitForPlay().then(
      (res) => {
        setTimeWait(transformSecondsToHuman(res))
      }
    )
  }

  return (
    <>
      <PopupContainer>
        <Row>
          <img alt="infoIcon" src={infoIcon} />
          <Title>PLAY INFO</Title>
        </Row>
        <Info>Cost: {cost} ETH</Info>
        <Info>Wait time: {timeWait}</Info>
        <Info>Passport: 0 RUN</Info>
      </PopupContainer>
    </>
  );
};

export default PopUp;
