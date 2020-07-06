import React, { useState } from "react";
import {
  Collapse,
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
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { NavbarNrcs } from "./NavbarNrcs";
import { NavbarFpac } from "./NavbarFpac";

export default {
  title: "Page Components|Header"
};

export const StoryNavbarNRCS = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <ContentHeaderH1>Navbar - NRCS</ContentHeaderH1>
      <p>
        This is a basic navbar. This is used as the navigation (mobile menu) for
        page headers and main navigation.
      </p>

      <NavbarNrcs>
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
      </NavbarNrcs>
    </div>
  );
};

export const StoryNavbarFPAC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <ContentHeaderH1>Navbar - FPAC</ContentHeaderH1>
      <p>
        This is a basic navbar. This is used as the navigation (mobile menu) for
        page headers and main navigation.
      </p>

      <NavbarFpac>
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
      </NavbarFpac>
    </div>
  );
};

StoryNavbarNRCS.story = {
  name: "Navbar - NRCS"
};

StoryNavbarFPAC.story = {
  name: "Navbar - FPAC"
};
