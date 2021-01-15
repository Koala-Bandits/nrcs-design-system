import React, { useState } from "react";
import { Alert as RsAlert, AlertProps, Container, Row, Col } from "reactstrap";
import Icon from "@mdi/react";
import {
  mdiInformation,
  mdiAlert,
  mdiAlertCircle,
  mdiCheckCircle,
} from "@mdi/js";

export const Alert = ({
  color,
  noIcon,
  size,
  dismissable,
  children,
  ...rest
}: AlertProps) => {
  let icon;
  if (!noIcon) {
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
  }

  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  let cmp;
  if (icon) {
    cmp = (
      <RsAlert
        className={size === "sm" ? "alert-sm" : ""}
        color={color}
        isOpen={visible}
        // toggle={dismissable ? onDismiss : undefined}
        {...rest}
      >
        <Container fluid>
          <Row>
            <Col xs="auto" className="p-0 pr-2">
              <Icon
                className="mdi"
                path={icon}
                size={size === "sm" ? 0.9 : 1}
              />
            </Col>
            <Col className="p-0">{children}</Col>
            {dismissable ? (
              <Col className="pr-0" xs="auto">
                <button
                  type="button"
                  className="close btn pl-1 pr-1"
                  data-dismiss="alert"
                  aria-label="Close"
                  onClick={onDismiss}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </Col>
            ) : (
              ""
            )}
          </Row>
        </Container>
      </RsAlert>
    );
  } else {
    cmp = (
      <RsAlert
        className={size === "sm" ? "alert-sm" : ""}
        color={color}
        {...rest}
      >
        {children}
      </RsAlert>
    );
  }

  return cmp;
};
