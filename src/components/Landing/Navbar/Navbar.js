import React, { useState } from "react";
import logoImg from "../../../images/logo-runcoin.svg";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavImg,
  MobileIcon,
  Hamburger,
  NavMenu,
  NavLink,
  NavItem,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Nav className="shadow-sm">
      <NavBarContainer>
        <NavLogo to="/" onClick={() => scroll.scrollToTop()}>
          <NavImg src={logoImg} alt="logo-img"></NavImg>
        </NavLogo>
        {/* <Hamburger onClick={handleClick} className={click ? '' : 'opened'}/> */}
        <MobileIcon onClick={handleClick}>
          {click ? <Hamburger className="opened" /> : <Hamburger />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLink
              to="about"
              smooth={true}
              duration={1000}
              onClick={handleClick}
              exact="true"
              offset={-60}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="projects"
              smooth={true}
              duration={1000}
              onClick={handleClick}
              exact="true"
              offset={-60}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="contact"
              smooth={true}
              duration={1000}
              onClick={handleClick}
              exact="true"
              offset={-60}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavBarContainer>
    </Nav>
  );
};

export default Navbar;
