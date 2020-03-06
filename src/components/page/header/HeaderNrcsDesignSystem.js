import React, { useState } from "react";
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import { HeaderNrcs } from "components/page/header/HeaderNrcs";
import { NavbarNrcs } from "components/page/header/NavbarNrcs";

export const HeaderNrcsDesignSystem = ({ ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <HeaderNrcs />
      <NavbarNrcs>
        <NavbarBrand href="/">Koala Bandits</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/color">Color</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Typography</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Iconography</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Accessibility</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Kitchen Sink</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Storybook</NavLink>
            </NavItem>
            <NavLink>
              <NavItem href="#">GitHub</NavItem>
            </NavLink>
          </Nav>
        </Collapse>
      </NavbarNrcs>
    </div>
  );
};
