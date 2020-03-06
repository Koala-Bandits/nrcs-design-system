import React from "react";
import { Container, Row, Col, Navbar } from "reactstrap";

export const NavbarNrcs = ({ ...rest }) => (
  <Row className="bg-primary">
    <Container>
      <Navbar
        className="pl-0 pr-0"
        color="primary"
        dark
        expand="md"
        {...rest}
      />
    </Container>
  </Row>
);
