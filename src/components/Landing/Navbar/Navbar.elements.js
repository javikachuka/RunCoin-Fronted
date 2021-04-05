import styled from "styled-components";
import { Container } from "../../../globalStyles";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  display: flex;
  background: #f8faff;
  height: 80px;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 3;

  @media screen and (max-width: 768px) {
    height: 60px;
  }
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
`;

export const NavImg = styled.img`
  width: 45px;
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
    width: 1.5em;
    height: 0.2em;
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
      width: 1em;
    }

    &:after {
      top: -8px;
      width: 2em;
    }
    &.opened {
      background: transparent;
    }
    &.opened:before {
      width: 1.5em;
      transform: rotate(-45deg);
    }
    &.opened:after {
      width: 1.5em;
      transform: rotate(45deg);
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
    height: 90vh;
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

export const NavItem = styled.li`
  margin-right: 10px;
  transition: all 0.5s ease;
  border-radius: 0.75rem;
  height: 40px;

  &:hover {
    /* background: #22d3ee; */
    background: #00c6fb;
  }

  &:hover > ${NavLink} {
    color: #fff;
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
