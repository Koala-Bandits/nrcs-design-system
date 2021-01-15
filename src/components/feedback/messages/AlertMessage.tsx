import React from "react";
import { Alert as RsAlert, AlertProps, Container, Row, Col } from "reactstrap";
import Icon from "@mdi/react";
import {
  mdiInformation,
  mdiAlert,
  mdiAlertCircle,
  mdiCheckCircle,
} from "@mdi/js";

export const AlertMessage = ({
  color,
  size,
  children,
  ...rest
}: AlertProps) => {
  let icon;

  switch (color) {
    case "warning":
      icon = mdiAlert;
      break;
    case "danger":
      icon = mdiAlertCircle;
      break;
    case "success":
      icon = mdiCheckCircle;
      break;
    default:
    case "info":
      icon = mdiInformation;
      break;
  }

  let cmp;
  if (icon) {
    cmp = (
      <RsAlert
        className={size === "sm" ? "alert-message alert-sm" : "alert-message"}
        color={color}
        {...rest}
      >
        <Container fluid className="m-0">
          <Row>
            <Col xs="auto" className="p-0 pr-2">
              <Icon
                className="mdi"
                size={size === "sm" ? 0.9 : 1}
                path={icon}
                color={null}
              />
            </Col>
            <Col className="p-0">{children}</Col>
          </Row>
        </Container>
      </RsAlert>
    );
  } else {
    cmp = (
      <RsAlert
        className={size === "sm" ? "alert-message alert-sm" : "alert-message"}
        color={color}
        {...rest}
      >
        {children}
      </RsAlert>
    );
  }

  return cmp;
};
