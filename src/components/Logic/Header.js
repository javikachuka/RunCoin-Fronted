import React, { useState } from 'react';
import { Nav, NavBarContainer, NavLogo, NavImg, NavMenu, NavItem, NavLink, MobileIcon, Hamburger } from './Header.elements';
import logoImg from "../images/runcoin-logo-img.svg";
import ButtonLog from './ButtonLog';
import { useLogin } from '../hooks/useLogin';


const Header = () => {
    const [click, setClick] = useState(false);
    const {logued} = useLogin()

    const handleClick = () => setClick(!click);

    return (
        <Nav className="shadow-sm">
            <NavBarContainer>
                <NavLogo>
                    <NavImg src={logoImg} alt="logo-img"></NavImg>RUNCOIN
                    </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <Hamburger className="opened" /> : <Hamburger />}
                </MobileIcon>
                <NavMenu >
                    {
                        logued 
                            ? 
                                <NavItem>
                                    <NavLink>10 RUN</NavLink>
                                </NavItem>
                            : null
                    }
                    <NavItem>
                        <ButtonLog/>
                    </NavItem>
                </NavMenu>
            </NavBarContainer>
        </Nav>
    );
}

export default Header;