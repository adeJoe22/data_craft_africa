import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  background-color: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  height: 70px;
  display: flex;
  margin-top: -70px;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 350ms ease-in-out;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 425px) {
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  @media screen and (max-width: 320px) {
    width: 320px;
  }
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 100px;
  color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};
  @media screen and (max-width: 768px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 30px;
  }
  img {
    width: 50px;
    height: 50px;
  }
  div {
    display: flex;
    font-size: 1.5rem;
    @media screen and (max-width: 320px) {
      display: none;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};
  }
  @media screen and (max-width: 425px) {
    /* &.active {
      color: #000;
    } */
    color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none !important;
  text-align: center;
  margin-right: 100px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 70px;
`;
export const NavLinks = styled(Link)`
  color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.7rem;
  height: 100%;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.8px;
  cursor: pointer;

  /* &.active {
    color: #c52d2f;
  } */
`;

export const NavBtn = styled.nav`
  display: flex;
  align-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
