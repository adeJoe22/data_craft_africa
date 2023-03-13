import React from "react";
import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SidebarMenu,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
} from "./SidebarElement";
import { navLinkItems } from "../navData";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            {navLinkItems.map(({ to, name }) => (
              <SidebarLink key={to} to={to} onClick={toggle}>
                {name}
              </SidebarLink>
            ))}
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
