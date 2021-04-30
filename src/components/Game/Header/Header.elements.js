import styled from "styled-components";
import { Container } from "../../../globalStyles";
import { Link } from "react-scroll";

//#DEDEE0 blanco
//#1F1C2A

export const Nav = styled.nav`
  display: flex;
  position: relative;
  background: #242936;
  height: 60px;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

export const NavBarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;

  ${Container}
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #dedee0;
  font-family: "Lexend Mega", sans-serif;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const NavImg = styled.img`
  width: 2.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;

    cursor: pointer;
  }
`;

export const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    position: relative;
    justify-content: flex-end;
    width: 1.75em;
    height: 0.15em;
    background: #dedee0;

    &:before,
    &:after {
      display: block;
      position: absolute;
      height: 100%;
      transition: all 0.4s ease-out;
      content: "";
      background: #dedee0;
    }
    &:before {
      top: 8px;
      width: 1.5em;
    }

    &:after {
      top: -8px;
      width: 2em;
    }
    &.opened {
      background: transparent;
      transition: all 0.35s ease-out;
    }
    &.opened:before {
      width: 1.5em;
      transform: rotate(45deg);
    }
    &.opened:after {
      width: 1.5em;
      transform: rotate(-45deg);
    }
    &.opened:after,
    &.opened:before {
      top: 0;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 500px) {
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: center;
    justify-self: center;
    max-width: 960px;
    padding: 1rem;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 99;
    height: 72px;
    background: #242936;
    border-radius: 12px 12px 0 0;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
`;
export const NavItem = styled.li`
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.5s ease;
  border: 2px solid transparent;
  border-radius: 0.75rem;
  height: 40px;

  &:hover {
    border: 2px solid #005bea;
  }

  @media screen and (max-width: 500px) {
    align-items: center;
    justify-content: center;
    height: 100%;
    display: flex;
    padding: 1rem;
    transition: none;
    margin-right: 0;
    background: rgba(0, 91, 234, 0.15);
    border: 2px solid #005bea;
  }
`;

export const NavCoin = styled.a`
  cursor: pointer;
  transition: all 0.5s ease;
  margin-right: 10px;
  color: #fff;
  background-image: linear-gradient(to right, #005bea, #00c6fb);
  border-radius: 0.75rem;
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 100%;
  font-weight: 500;
  &:hover {
    opacity: 95%;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    text-align: center;

    padding: 1rem;
  }
`;

export const DropDownMenu = styled.li`
  position: relative;
  height: 100%;
`;

export const NavDropDown = styled.div`
  display: flex;
  margin-top: 0.3rem;
  flex-direction: column;
  opacity: ${({ click }) => (click ? 1 : 0)};
  transition: all ease 0.2s;
  position: absolute;
  background: #242936;
  right: 10px;
  width: 150px;
  border-radius: 0.55rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  z-index: 5;

  @media screen and (max-width: 500px) {
    bottom: 55px;
    width: auto;
  }
`;

export const DropDownOption = styled.a`
  cursor: pointer;
  padding: 0.75rem;
  color: #dedee0;
`;
