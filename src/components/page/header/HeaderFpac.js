import React from "react";
import { Container, Row, Col } from "reactstrap";

export const HeaderFpac = ({ ...rest }) => (
  <Row className="fpac-header">
    <Container className="header-title h1 mb-0">
      <Row>
        <Col>
          <a href="/home" title="Home" aria-label="Home">
            NRCS Design System{" "}
            <span className="header-subtitle">| FPAC green</span>
          </a>
        </Col>
      </Row>
    </Container>
  </Row>
);
