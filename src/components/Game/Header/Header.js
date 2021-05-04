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
import { countToken } from "../../../services/server";

const Header = () => {
  const [click, setClick] = useState(false);
  const [countRun , setCountRun] = useState(0) ;
  const { logued } = useLogin();
  const ref = useRef(null);

  const handleClick = () =>{ 
    setClick(!click)
  };

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setClick(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    countToken().then(
      (res) =>{
        setCountRun(res)
      }
    )
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const handleClaim = () => {
    console.log('Claim');
  }

  return (
    <Nav className="shadow-sm">
      <NavBarContainer>
        <NavLogo>
          <NavImg src={logoImg} alt="logo-img"></NavImg>RUNCOIN
        </NavLogo>
        <NavMenu>
          {logued ? (
            <DropDownMenu ref={ref}>
              <NavCoin onClick={handleClick}>{countRun} RUN</NavCoin>
              <NavDropDown click={click}>
                <DropDownOption onClick={handleClaim}>Claim Run</DropDownOption>
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
