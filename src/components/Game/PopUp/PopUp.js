import React from "react";
import { PopupContainer, Row, Title, Info } from "./PopUp.elements";
import infoIcon from "../../../images/infoIcon.svg";

const PopUp = () => {
  return (
    <>
      <PopupContainer>
        <Row>
          <img alt="infoIcon" src={infoIcon} />
          <Title>PLAY INFO</Title>
        </Row>
        <Info>Cost: 0.012 ETH</Info>
        <Info>Wait time: 1h 32min</Info>
        <Info>Passport: 0 RUN</Info>
      </PopupContainer>
    </>
  );
};

export default PopUp;
