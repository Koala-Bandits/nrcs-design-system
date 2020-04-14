import React, { useState } from "react";
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { HeaderNrcs } from "components/page/header/HeaderNrcs";
import { NavbarNrcs } from "components/page/header/NavbarNrcs";

export const HeaderNrcsDesignSystem = ({ ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // hack for now:
  const pathname = window.location.pathname;

  return (
    <div className="mb-5">
      <HeaderNrcs />
      <NavbarNrcs>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                className={
                  pathname === "/nrcs-design-system/about"
                    ? "active"
                    : pathname === "/nrcs-design-system/"
                    ? "active"
                    : pathname === "/"
                    ? "active"
                    : null
                }
                href="/nrcs-design-system/about"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={pathname.includes("visual-style") ? "active" : null}
                href="/nrcs-design-system/visual-style"
              >
                Visual Style
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={pathname.includes("guides") ? "active" : null}
                href="/nrcs-design-system/guides"
              >
                Guides
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={
                  pathname === "/nrcs-design-system/components"
                    ? "active"
                    : null
                }
                href="/nrcs-design-system/components"
              >
                Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://koala-bandits.github.io/nrcs-design-system-storybook"
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
