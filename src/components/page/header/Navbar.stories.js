import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

export default {
  title: "Page Components|Header"
};

export const NavbarNRCS = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <h1 className="docs">Navbar - NRCS</h1>
      <p>
        This is a basic navbar. This is used as the navigation (mobile menu) for
        page headers and main navigation.
      </p>

      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">Koala Bandits</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">NavLink 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">NavLink 2</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export const NavbarFPAC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <h1 className="docs">Navbar - FPAC</h1>
      <p>
        This is a basic navbar. This is used as the navigation (mobile menu) for
        page headers and main navigation.
      </p>

      <Navbar color="secondary" dark expand="md">
        <NavbarBrand href="/">Koala Bandits</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">NavLink 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">NavLink 2</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavbarNRCS.story = {
  name: "Navbar - NRCS"
};

NavbarFPAC.story = {
  name: "Navbar - FPAC"
};
