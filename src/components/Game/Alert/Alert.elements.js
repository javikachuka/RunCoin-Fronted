import styled from "styled-components";

const handleBackgroundType = (type) => {
  switch (type) {
    case "success":
      return "rgba(11, 235, 180, 0.15)";
    case "error":
      return "rgba(255, 0, 71, 0.15)";
    default:
      return "#eee";
  }
};

const handleColorType = (type) => {
  switch (type) {
    case "success":
      return "rgb(11, 235, 180)";
    case "error":
      return "rgb(255, 0, 71)";
    default:
      return "#eee";
  }
};

export const AlertContainert = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: -50px;
  right: 0;
  left: 0;
  opacity: 0;
  transition: all 0.5s ease;
  z-index: 5;

  &.toast-visible {
    opacity: 1;
    top: 15px;
  }
`;
export const ToastAlert = styled.div`
  display: flex;
  flex-basis: 390px;
  align-items: center;
  border-radius: 12px;
  padding: 25px;
  background: ${({ type }) => handleBackgroundType(type)};

  @media screen and (max-width: 400px) {
    flex-basis: 90%;
  }
`;
export const ToastIcon = styled.img`
  margin-right: 25px;
`;
export const ToastMsg = styled.span`
  display: flex;
  font-family: Lexend Mega;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;
  color: ${({ type }) => handleColorType(type)};
`;
