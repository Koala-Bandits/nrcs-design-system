import React from "react";
import { Nav, NavItem, NavLink, Row, Col } from "reactstrap";

export const ConfigurationSidebar = ({ children, ...rest }) => {
  // hack for now:
  const pathname = window.location.pathname;

  return (
    <Nav className="nav-fpac" vertical>
      <NavItem>
        <NavLink
          className={pathname === "/configuration" ? "active" : null}
          href="/configuration"
        >
          Global Configuration
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={
            pathname === "/configuration/exclude-elements" ? "active" : null
          }
          href="/configuration/exclude-elements"
        >
          Exclude Elements
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={
            pathname === "/configuration/element-configuration"
              ? "active"
              : null
          }
          href="/configuration/element-configuration"
        >
          Element Configuration
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={
            pathname === "/configuration/sensor-configuration" ? "active" : null
          }
          href="/configuration/sensor-configuration"
        >
          Sensor Configuration
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={
            pathname === "/configuration/temporary-deactivation"
              ? "active"
              : null
          }
          href="/configuration/temporary-deactivation"
        >
          Temporary Deactivation
        </NavLink>
      </NavItem>
    </Nav>
  );
};
