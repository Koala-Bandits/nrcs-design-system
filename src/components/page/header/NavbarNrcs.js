import React from "react";
import { Container, Row, Col, Navbar } from "reactstrap";

export const NavbarNrcs = ({ ...rest }) => (
  <Container fluid className="bg-primary p-0">
    <Container>
      <Navbar
        className="pl-0 pr-0"
        color="primary"
        dark
        expand="md"
        {...rest}
      />
    </Container>
  </Container>
);
