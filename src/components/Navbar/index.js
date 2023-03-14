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
import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBcg = () => {
    if (window.scrollY >= 220) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBcg);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav className={navbar && "active"}>
        <NavbarContainer>
          <NavLogo to={"/"} onClick={toggleHome}>
            <img src={logo} alt="DataCraft" />
            <div style={{ textDecoration: "none" }}>
              <p style={{ fontWeight: "600" }}>DATA</p> <p>CRAFT</p>
            </div>
          </NavLogo>
          <MobileIcon className={navbar && "active"} onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {navLinkItems.map(({ to, name }, i) => (
              <NavItem key={i}>
                <NavLinks to={to} className={navbar && "active"}>
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
