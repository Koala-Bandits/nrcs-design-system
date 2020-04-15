import React from "react";
import { Container, Row, Col } from "reactstrap";

export const HeaderWcis = ({ ...rest }) => (
  <Container fluid className="nrcs-header p-0">
    <Container className="header-title h1 mb-0">
      <Row>
        <Col>
          <a href="/wcis/" title="Home" aria-label="Home">
            Snotel Auto Validation Tool{" "}
            <span className="header-subtitle">| BETA</span>
          </a>
        </Col>
      </Row>
    </Container>
  </Container>
);
