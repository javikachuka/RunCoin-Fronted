import React, {useEffect, useState} from "react";
import CurrentGame from "../CurrentGame/CurrentGame";
import SeasonContent from "../SeasonContent/SeasonContent";
import {
  ContentBody,
  ContentContainer,
  GameRow,
  SeasonRow,
} from "./Content.elements";

function Content({reload, setReload}) {

  return (
    <ContentBody>
      <ContentContainer>
        <GameRow>
          <CurrentGame reload={reload} setReload={setReload} />
        </GameRow>
        <SeasonRow>
          <SeasonContent reload={reload} setReload={setReload} />
        </SeasonRow>
      </ContentContainer>
    </ContentBody>
  );
}

export default Content;
