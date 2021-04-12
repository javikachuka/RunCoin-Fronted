import styled from "styled-components";

export const CurrentGameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #242936;
  border-radius: 12px;
  padding: 40px;
`;

export const GameRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 35px;
`;

export const JackPot = styled.div``;

export const JackPotAmount = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;

  color: #0bebb4;
`;

export const JackPotText = styled.div`
  font-family: Lexend Mega;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;

  color: #dedee0;
`;

export const PlayButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 52px;
  color: #0bebb4;
  background: rgba(11, 235, 180, 0.05);
  border-radius: 5px;
  font-family: Lexend Mega;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
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
  width: 65%;
  background: #0ad4a2;
  border-radius: 5px;
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
export const MoreButton = styled.div`
  font-family: Lexend Mega;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  text-transform: uppercase;

  color: #dedee0;
`;
