import React, { useState } from "react";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavImg,
  NavMenu,
  NavItem,
  MobileIcon,
  Hamburger,
  NavCoin,
} from "./Header.elements";
import logoImg from "../../../images/runcoin-logo-img.svg";
import ButtonLog from "../../ButtonLog";
import { useLogin } from "../../../hooks/useLogin";

const Header = () => {
  const [click, setClick] = useState(false);
  const { logued } = useLogin();

  const handleClick = () => setClick(!click);

  return (
    <Nav className="shadow-sm">
      <NavBarContainer>
        <NavLogo>
          <NavImg src={logoImg} alt="logo-img"></NavImg>RUNCOIN
        </NavLogo>
        <NavMenu onClick={handleClick} click={click}>
          {logued ? <NavCoin>10 RUN</NavCoin> : null}
          <NavItem>
            <ButtonLog />
          </NavItem>
        </NavMenu>
      </NavBarContainer>
    </Nav>
  );
};

export default Header;
