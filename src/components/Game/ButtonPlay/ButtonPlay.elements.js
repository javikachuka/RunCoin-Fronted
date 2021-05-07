import styled from "styled-components";

export const PlayButton = styled.div`
  position: relative;
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
  transition: all 0.5s ease;
  cursor: pointer;

  &.claim {
    background: linear-gradient(90deg, #00c2fb 0%, #0ad4a2 100%);
    color: #fff;
  }

  &:hover {
    background: rgba(11, 235, 180, 0.15);
  }

  &:hover > div {
    visibility: visible;
  }

  @media screen and (max-width: 660px) {
    width: 100px;
    height: 45px;
  }
`;
