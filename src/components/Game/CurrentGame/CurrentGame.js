import React from "react";
import {
  CurrentGameContainer,
  GameRow,
  JackPot,
  PlayButton,
  JackPotAmount,
  JackPotText,
  BarRow,
  PlayerId,
  GameBar,
  TimeBar,
  Bar,
  MoreButton,
} from "./CurrentGame.elements";

function CurrentGame() {
  return (
    <>
      <CurrentGameContainer>
        <GameRow>
          <JackPot>
            <JackPotAmount>≈$ 15,23</JackPotAmount>
            <JackPotText>current jackpot</JackPotText>
          </JackPot>
          <PlayButton>PLAY</PlayButton>
        </GameRow>
        <BarRow>
          <PlayerId>you: 0x34...f9F7</PlayerId>
          <GameBar>
            <Bar></Bar>
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
        </BarRow>
        <MoreButton>Show More</MoreButton>
      </CurrentGameContainer>
    </>
  );
}

export default CurrentGame;
