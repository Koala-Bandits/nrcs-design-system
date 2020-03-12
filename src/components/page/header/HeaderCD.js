import React from "react";
import { Container, Row, Col } from "reactstrap";

export const HeaderCD = ({ ...rest }) => (
  <Container fluid className="cd-header arrange-items-center p-0">
    <Container className="header-title h2 mb-0">
      <Row>
        <Col>
          <a href="/home" title="Home" aria-label="Home">
            NRCS Design System <span className="header-subtitle">| BETA</span>
          </a>
        </Col>
      </Row>
    </Container>
  </Container>
);
