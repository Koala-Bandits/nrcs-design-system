import React from "react";
import { Container, Row, Col } from "reactstrap";

export const HeaderNrcs = ({ ...rest }) => (
  <Container fluid className="nrcs-header p-0">
    <Container className="header-title h1 mb-0">
      <Row>
        <Col>
          <a href="/nrcs-design-system/" title="Home" aria-label="Home">
            NRCS Design System <span className="header-subtitle">| BETA</span>
          </a>
        </Col>
      </Row>
    </Container>
  </Container>
);
