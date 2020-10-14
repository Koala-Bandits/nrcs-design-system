import React from "react";
import { Alert as RsAlert, Container, Row, Col, Spinner } from "reactstrap";

export const SpinnerMessage = ({ size, children, ...rest }) => {
  let cmp;

  cmp = (
    <RsAlert
      className={size === "sm" ? "alert-message alert-sm" : "alert-message"}
      {...rest}
    >
      <Container fluid className="m-0">
        <Row>
          <Col xs="auto" className="p-0 pr-2">
            <Spinner size="sm" color="primary" />
          </Col>
          <Col className="p-0">{children}</Col>
        </Row>
      </Container>
    </RsAlert>
  );

  return cmp;
};
