import React from "react";
import CurrentGame from "../CurrentGame/CurrentGame";
import SeasonContent from "../SeasonContent/SeasonContent";
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
        <SeasonRow>
          <SeasonContent />
        </SeasonRow>
      </ContentContainer>
    </ContentBody>
  );
}

export default Content;
