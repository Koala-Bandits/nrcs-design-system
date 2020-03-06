import React from "react";
import { Container, Row, Col, Navbar } from "reactstrap";

export const NavbarFpac = ({ ...rest }) => (
  <Row className="bg-secondary">
    <Container>
      <Navbar
        className="pl-0 pr-0"
        color="secondary"
        dark
        expand="md"
        {...rest}
      />
    </Container>
  </Row>
);
