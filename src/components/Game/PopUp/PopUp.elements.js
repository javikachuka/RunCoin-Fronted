import styled from "styled-components";

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  min-width: 160px;
  padding: 1rem;
  background: #1f1c2a;
  border-radius: 12px;
  left: 110%;
  visibility: hidden;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    right: 100%; /* To the left of the tooltip */
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent #1f1c2a;
  }

  @media screen and (max-width: 960px) {
    right: 120%;
    left: unset;

    &::after {
      top: 50%;
      left: 100%; /* To the right of the tooltip */
      right: unset;
    }
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0.5rem;

  & > img {
    margin-right: 12px;
  }
`;
export const Title = styled.h3`
  font-family: Lexend Mega;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  /* identical to box height */

  text-transform: capitalize;

  color: #dedee0;
`;
export const Info = styled.h4`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  text-transform: capitalize;

  color: #dedee0;
`;
