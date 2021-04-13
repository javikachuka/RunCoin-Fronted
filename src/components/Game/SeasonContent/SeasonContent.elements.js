import styled from "styled-components";

export const CardRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const SeasonCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  justify-content: center;
  border-radius: 12px;
  padding: 40px 10px;
  background: #242936;

  &:first-child {
    margin-right: 20px;
  }

  @media screen and (max-width: 660px) {
    padding: 20px 10px;
  }
`;

export const PoolHeader = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;

  /* color: #19e3f0; */
  color: #ff9e31;

  @media screen and (max-width: 660px) {
    font-size: 22px;
  }
`;
export const Subtitle = styled.div`
  font-family: Lexend Mega;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  text-transform: uppercase;

  color: #dedee0;

  @media screen and (max-width: 660px) {
    font-size: 12px;
  }
`;
export const EndHeader = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;

  /* color: #ff5f57; */
  color: #ae34ff;

  @media screen and (max-width: 660px) {
    font-size: 22px;
  }
`;

//TOP LIST ITEMS

export const TopListCard = styled.div`
  margin-top: 20px;
  border-radius: 12px;
  background: #242936;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
`;
export const TopHeader = styled.div`
  text-align: center;
  font-family: Lexend Mega;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 20px;

  text-transform: uppercase;

  color: #dedee0;
`;
export const ListHeader = styled.ul`
  width: 100%;
  display: flex;
  margin-bottom: 16px;
`;
export const HeaderNumber = styled.li`
  list-style-type: none;

  font-family: Lexend Mega;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  width: 15%;
  text-align: start;
  text-transform: uppercase;

  color: #dedee0;
`;
export const HeaderPlayer = styled.li`
  list-style-type: none;

  font-family: Lexend Mega;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  width: 55%;
  text-align: start;
  text-transform: uppercase;

  color: #dedee0;
`;
export const HeaderAmount = styled.li`
  list-style-type: none;

  font-family: Lexend Mega;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  width: 30%;
  text-align: end;
  text-transform: uppercase;

  color: #dedee0;
`;

export const ListItem = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid rgba(222, 222, 224, 0.2);
  &:last-child {
    border-bottom: 0;
  }
  &.player > li {
    color: #0bebb4;
  }
`;

export const ItemNumber = styled.li`
  list-style-type: none;

  font-family: Lexend Mega;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  width: 15%;
  text-align: start;
  text-transform: uppercase;

  color: #dedee0;
`;
export const ItemPlayer = styled.li`
  list-style-type: none;

  font-family: Lexend Mega;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  width: 55%;
  text-align: start;
  text-transform: uppercase;

  color: #dedee0;
`;
export const ItemAmount = styled.li`
  list-style-type: none;

  font-family: Lexend Mega;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  width: 30%;
  text-align: end;
  text-transform: uppercase;

  color: #dedee0;
`;
