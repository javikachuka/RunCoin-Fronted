import styled, { keyframes } from "styled-components";

const barAnimation = keyframes`
  0%
    {
      background-position: -800px 0
      };
  
   100%{
     background-position: 800px 0
     };
    
`;

export const BarRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;
export const PlayerId = styled.div`
  font-family: Lexend Mega;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;

  text-transform: capitalize;
  color: #dedee0;
  margin-bottom: 5px;
`;
export const GameBar = styled.div`
  height: 16px;
  width: 100%;
  background: #1d212b;
  border-radius: 5px;
  margin-bottom: 3px;
`;

export const Bar = styled.div`
  height: 100%;
  width: ${({ value }) => value}%;
  background: #0ad4a2;
  border-radius: 5px;
  transition: all 0.5s ease;

  &.current-game-animation {
    background-image: linear-gradient(
      90deg,
      #0ad4a2 0px,
      #54f1cb 40px,
      #0ad4a2 80px
    );
    background-size: 800px;
    animation: ${barAnimation} 4s infinite linear;
  }

  &.game-early-ended {
    background: #3a3e4a;
  }

  &.game-early-ended-player {
    background: rgba(11, 235, 180, 0.3);
  }
  &.game-ended-player {
    background: linear-gradient(90deg, #00c2fb 0%, #0ad4a2 100%);
  }
  &.game-ended {
    background: linear-gradient(
      90deg,
      rgba(0, 194, 251, 0.35) 0%,
      rgba(10, 212, 162, 0.35) 100%
    );
  }
`;

export const TimeBar = styled.div`
  display: flex;
  margin-left: auto;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;

  text-transform: capitalize;

  color: #dedee0;
`;
