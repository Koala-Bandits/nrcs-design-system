import React from "react";
import { Container, Navbar } from "reactstrap";

export const NavbarFpac = ({ ...rest }) => (
  <Container fluid className="bg-secondary p-0">
    <Container>
      <Navbar
        className="pl-0 pr-0"
        color="secondary"
        dark
        expand="md"
        {...rest}
      />
    </Container>
  </Container>
);
