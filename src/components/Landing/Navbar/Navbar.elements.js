import styled from "styled-components";
import { Container } from "../../../globalStyles";
import { Link } from "react-scroll";
import { Link as PLink } from "wouter";

export const Nav = styled.nav`
  display: flex;
  background: #f8faff;
  height: 60px;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 3;
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
  color: #3f3f46;
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
    background: #354d5c;

    &:before,
    &:after {
      display: block;
      position: absolute;
      height: 100%;
      transition: all 0.4s ease-out;
      content: "";
      background: #354d5c;
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

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #f8faff;
  }

  @media screen and (max-width: 768px) {
    /* text-align: center; */
    top: 60px;
  }
`;

export const NavLink = styled(Link)`
  color: #354d5c;
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 100%;
  font-weight: 500;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;

export const PlayLink = styled(PLink)`
  color: #fff;
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 100%;
  font-weight: 500;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;

export const PlayItem = styled.li`
  margin-right: 10px;
  transition: all 0.5s ease;
  border-radius: 0.75rem;
  height: 40px;
  background-image: linear-gradient(to right, #005bea, #00c6fb);

  &:hover {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transform: scale(1.08);
  }

  @media screen and (max-width: 960px) {
    height: 80px;
    transition: none;
    margin-right: 0;
    margin-bottom: 20px;
    /* border-radius: 0; */
    width: 95%;
    &:hover {
      background: none;
      border: none;
    }
  }
`;
export const NavItem = styled.li`
  margin-right: 10px;
  transition: all 0.5s ease;
  border: 2px solid transparent;
  border-radius: 0.75rem;
  height: 40px;

  &:hover {
    border: 2px solid #005bea;
  }

  @media screen and (max-width: 960px) {
    height: 80px;
    transition: none;
    margin-right: 0;
    margin-bottom: 20px;
    /* border-radius: 0; */
    width: 95%;
    &:hover {
      background: none;
      border: none;
    }
  }
`;
