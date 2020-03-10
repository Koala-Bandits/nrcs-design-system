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
    <div className="mb-3">
      <HeaderNrcs />
      <NavbarNrcs>
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
              <NavLink href="/typography">Typography</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/iconography">Iconography</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/accessibility">Accessibility</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/kitchen-sink">Kitchen Sink</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/storybook"
                target="_blank"
                rel="nopener noreferrer"
              >
                Storybook
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/Koala-Bandits/nrcs-design-system"
                target="_blank"
                rel="nopener noreferrer"
              >
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </NavbarNrcs>
    </div>
  );
};
