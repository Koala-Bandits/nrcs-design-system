import React from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

export const Footer = ({ ...rest }) => (
  <Container fluid className="fpac-footer">
    <Container className="p-3">
      <Row>
        <Col xs="12" sm="4" lg="3">
          <h4 className="fpac-footer-header">App Links</h4>
          <Nav vertical>
            <NavItem>
              <NavLink href="#">About App</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Handbook</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Site Map</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled Link
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col xs="12" sm="4" lg="3">
          <h4 className="fpac-footer-header">Agency Guidelines</h4>
          <Nav vertical>
            <NavItem>
              <NavLink href="#">Notices</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Handbooks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Forms</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled Link
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col xs="12" sm="4" lg="3">
          <h4 className="fpac-footer-header">Resources</h4>
          <Nav vertical>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Policies and Links</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavItem>
                <NavLink href="#">NRCS.gov</NavLink>
              </NavItem>
            </NavItem>
          </Nav>
        </Col>
        <Col xs="12" sm="12" lg="3" className="fpac-footer-secondary">
          <h4 className="fpac-footer-header">Contact Us</h4>
          <Nav vertical>
            <NavItem>
              <NavLink href="#">Help</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Support / Phone / Email</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">NRCS.gov</NavLink>
            </NavItem>
            <NavItem>
              <NavItem>
                <NavLink href="#">USDA.gov</NavLink>
              </NavItem>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </Container>
  </Container>
);
