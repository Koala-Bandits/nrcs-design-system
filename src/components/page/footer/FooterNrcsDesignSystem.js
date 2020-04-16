import React from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

export const FooterNrcsDesignSystem = ({ ...rest }) => (
  <Container fluid className="fpac-footer">
    <Container className="p-3">
      <Row>
        <Col xs="12" sm="4" lg="3">
          <Nav vertical>
            <NavItem>
              <NavLink href="https://koala-bandits.github.io/nrcs-design-system/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Koala-Bandits/nrcs-design-system">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col xs="12" sm="4" lg="3">
          <h4 className="fpac-footer-header">Design System</h4>
          <Nav vertical>
            <NavItem>
              <NavLink href="/nrcs-design-system/visual-style">
                Visual Style
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://localhost:3000/nrcs-design-system/guides">
                Guides
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://localhost:3000/nrcs-design-system/components">
                Components
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col xs="12" sm="4" lg="3">
          <h4 className="fpac-footer-header">Resources</h4>
          <Nav vertical>
            <NavItem>
              <NavLink href="http://usda-fsa.github.io/fsa-design-system/#">
                FPAC Design System
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://usda-fsa.github.io/fsa-design-system/guides/accessibility/">
                FPAC Accessibility Guide
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col xs="12" sm="12" lg="3" className="fpac-footer-secondary">
          <h4 className="fpac-footer-header">Agency Links</h4>
          <Nav vertical>
            <NavItem>
              <NavLink href="https://www.nrcs.usda.gov/">NRCS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.usda.gov/">USDA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.usda.gov/our-agency/about-usda/mission-areas">
                FPAC
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </Container>
  </Container>
);
