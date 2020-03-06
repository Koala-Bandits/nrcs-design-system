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
  NavbarText,
  Button
} from "reactstrap";
import { HeaderNrcs } from "components/page/header/HeaderNrcs";
import { NavbarNrcs } from "components/page/header/NavbarNrcs";
import Icon from "@mdi/react";
import { mdiGithubCircle } from "@mdi/js";

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
                <NavLink href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Color</NavLink>
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
            </Nav>
            <NavLink className="btn-main text-white" color="link">
              <Icon className="mdi mr-1" path={mdiGithubCircle} />
              GitHub
            </NavLink>
          </Collapse>
        </NavbarNrcs>
      </div>
    );
  }
}

export default Home;
