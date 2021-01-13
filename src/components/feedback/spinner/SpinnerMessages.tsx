import React from "react";
import {
  Alert as RsAlert,
  Container,
  Row,
  Col,
  Spinner,
  SpinnerProps,
} from "reactstrap";

export const SpinnerMessage = ({ size, children, ...rest }: SpinnerProps) => {
  let cmp;

  cmp = (
    <RsAlert
      className={size === "sm" ? "alert-message alert-sm" : "alert-message"}
      {...rest}
    >
      <Container fluid className="m-0">
        <Row>
          <Col xs="auto" className="p-0 pr-2">
            <Spinner size="sm" color="info" />
          </Col>
          <Col className="p-0">{children}</Col>
        </Row>
      </Container>
    </RsAlert>
  );

  return cmp;
};

export const SpinnerOverlayMessage = ({
  size,
  children,
  ...rest
}: SpinnerProps) => {
  let cmp;

  cmp = (
    <Container {...rest}>
      <Row className="justify-content-center">
        <Col xs="auto" className="mt-4 mb-4 text-center">
          <Spinner color="info" />
          <br />
          {children}
        </Col>
      </Row>
    </Container>
  );

  return cmp;
};

export const SpinnerCenteredMessage = ({
  size,
  children,
  ...rest
}: SpinnerProps) => {
  let cmp;

  cmp = (
    <Container {...rest}>
      <Row>
        <Col xs="auto" className="mt-4 mb-4 text-center">
          <Spinner color="info" />
          <br />
          {children}
        </Col>
      </Row>
    </Container>
  );

  return cmp;
};
