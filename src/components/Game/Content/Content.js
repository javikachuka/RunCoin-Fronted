import React from "react";
import CurrentGame from "../CurrentGame/CurrentGame";
import {
  ContentBody,
  ContentContainer,
  GameRow,
  SeasonRow,
} from "./Content.elements";

function Content() {
  return (
    <ContentBody>
      <ContentContainer>
        <GameRow>
          <CurrentGame />
        </GameRow>
        <SeasonRow></SeasonRow>
      </ContentContainer>
    </ContentBody>
  );
}

export default Content;
