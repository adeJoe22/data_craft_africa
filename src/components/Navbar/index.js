import React from "react";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.png";
import { navLinkItems } from "../navData";
import { useState } from "react";

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBcg = () => {
    if (window.scrollY >= 220) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBcg);
  return (
    <>
      <Nav className={navbar && "active"}>
        <NavbarContainer>
          <NavLogo>
            <img src={logo} alt="DataCraft" />
            <div style={{ textDecoration: "none" }}>
              <p style={{ fontWeight: "600" }}>DATA</p> <p>CRAFT</p>
            </div>
          </NavLogo>
          <MobileIcon className={navbar && "active"} onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {navLinkItems.map(({ to, name }) => (
              <NavItem key={to}>
                <NavLinks className={navbar && "active"} to={to}>
                  {name}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
