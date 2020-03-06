import React from "react";
import { Container, Row, Col } from "reactstrap";

export const HeaderCD = ({ ...rest }) => (
  <Row className="cd-header arrange-items-center">
    <Container className="header-title h1 mb-0">
      <Row>
        <Col>
          <a href="/home" title="Home" aria-label="Home">
            NRCS Design System <span className="header-subtitle">| BETA</span>
          </a>
        </Col>
      </Row>
    </Container>
  </Row>
);
