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
import { HeaderNrcs } from "./../components/page/header/HeaderNrcs";
import { NavbarNrcs } from "./../components/page/header/NavbarNrcs";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    return (
      <div>
        <HeaderNrcs />
        <NavbarNrcs>
          <NavbarBrand href="/">Koala Bandits</NavbarBrand>
          <NavbarToggler
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          />
          <Collapse isOpen={this.state.isOpen} navbar>
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
  }
}

export default Home;
