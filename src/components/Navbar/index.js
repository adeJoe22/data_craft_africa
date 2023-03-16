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
      <Nav scrollNav={navbar}>
        <NavbarContainer>
          <NavLogo to={"/"} onClick={toggleHome}>
            <img src={logo} alt="DataCraft" />
            <div style={{ textDecoration: "none" }}>
              <p style={{ fontWeight: "600" }}>Data</p> <p>Craft</p>
            </div>
          </NavLogo>
          <MobileIcon className={navbar && "active"} onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                scrollNav={navbar}
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={navbar}
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={navbar}
                to="product"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Product
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={navbar}
                to="service"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Service
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={navbar}
                to="reference"
                smooth={true}
                duration={500}
                offset={-70}
              >
                References
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={navbar}
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Contact Us
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
