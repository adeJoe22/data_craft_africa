import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background-color: transparent;
  height: 70px;
  display: flex;
  margin-top: -70px;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 350ms ease-in-out;
  &.active {
    background-color: #fff;
    color: #000;
  }
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
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
  }
  div {
    display: flex;
    font-size: 1.8rem;
    color: #000;
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
    color: #fff;
    &.active {
      color: #000;
    }
  }
  @media screen and (max-width: 425px) {
    &.active {
      color: #000;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none !important;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 70px;
`;
export const NavLinks = styled(LinkS)`
  color: #fff;
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

  &.active {
    /* border-top: 3px solid #c52d2f; */
    color: #000;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  background-color: #fff;
  white-space: nowrap;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #83d0c0;
  }
`;
