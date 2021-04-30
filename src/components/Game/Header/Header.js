import React, { useState, useEffect, useRef } from "react";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavImg,
  NavMenu,
  NavItem,
  NavCoin,
  DropDownMenu,
  NavDropDown,
  DropDownOption,
} from "./Header.elements";
import logoImg from "../../../images/runcoin-logo-img.svg";
import ButtonLog from "../../ButtonLog";
import { useLogin } from "../../../hooks/useLogin";

const Header = () => {
  const [click, setClick] = useState(false);
  const { logued } = useLogin();
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClick();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleClick = () => setClick(!click);

  return (
    <Nav className="shadow-sm">
      <NavBarContainer>
        <NavLogo>
          <NavImg src={logoImg} alt="logo-img"></NavImg>RUNCOIN
        </NavLogo>
        <NavMenu>
          {logued ? (
            <DropDownMenu ref={ref}>
              <NavCoin onClick={handleClick}>10 RUN</NavCoin>
              <NavDropDown click={click}>
                <DropDownOption>CLAIM RUN</DropDownOption>
              </NavDropDown>
            </DropDownMenu>
          ) : null}
          <NavItem>
            <ButtonLog />
          </NavItem>
        </NavMenu>
      </NavBarContainer>
    </Nav>
  );
};

export default Header;
