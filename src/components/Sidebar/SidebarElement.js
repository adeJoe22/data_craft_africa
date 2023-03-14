import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 65%;
  background-color: #fff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (max-width: 425px) {
    width: 425px;
  }
  @media screen and (max-width: 320px) {
    width: 320px;
    height: 47%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #ccc;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  background-color: #fff;
  overflow-y: scroll;
  height: 100%;
  margin-top: 20px;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
  @media screen and (max-width: 320px) {
    grid-template-rows: repeat(6, 40px);
  }
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  padding-left: 25px;
  font-size: 1rem;
  text-decoration: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  font-weight: 600;
  color: grey;
  letter-spacing: 0.8px;
  cursor: pointer;
  &:hover {
    color: #c52d2f;
    transition: all 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  background-color: #fff;
  white-space: nowrap;
  padding: 16px 64px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`;
