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
import { HeaderWcis } from "./HeaderWcis";
import { NavbarNrcs } from "components/page/header/NavbarNrcs";

export const HeaderWcisApp = ({ ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // hack for now:
  const pathname = window.location.pathname;

  return (
    <div className="mb-5">
      <HeaderWcis />
      <NavbarNrcs>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                className={
                  pathname === "/dashboard"
                    ? "active"
                    : pathname === "/"
                    ? "active"
                    : null
                }
                href="/dashboard"
              >
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={pathname.includes("visual-style") ? "active" : null}
                href="/profiles"
              >
                Profiles
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={pathname.includes("guides") ? "active" : null}
                href="/configuration"
              >
                Configuration
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </NavbarNrcs>
    </div>
  );
};
