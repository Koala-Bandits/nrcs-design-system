import React, { useEffect, useRef } from "react";
import {
  Alert,
  Toast,
  ToastBody,
  ToastHeader,
  Container,
  Row,
  Col
} from "reactstrap";
import Icon from "@mdi/react";
import {
  mdiInformation,
  mdiAlert,
  mdiAlertCircle,
  mdiCheckCircle
} from "@mdi/js";

function Growl({ isOpen, toggle, color, children, remove }) {
  const removeRef = useRef();
  removeRef.current = remove;

  useEffect(() => {
    const duration = 55000;
    const id = setTimeout(() => {
      if (removeRef.current) {
        removeRef.current();
      }
    }, duration);

    return () => clearTimeout(id);
  }, []);

  let icon;
  switch (color) {
    case "info":
      icon = mdiInformation;
      break;
    case "success":
      icon = mdiCheckCircle;
      break;
    case "warning":
      icon = mdiAlert;
      break;
    case "danger":
      icon = mdiAlertCircle;
      break;
    default:
      icon = mdiInformation;
  }

  return (
    <Toast isOpen={isOpen}>
      <Alert
        className="alert-fpac"
        color={color}
        isOpen={true}
        toggle={remove ? remove : toggle}
      >
        <Container className="m-0">
          <Row>
            <Col xs="auto" className="p-0 pr-2">
              <Icon className="mdi" path={icon} />
            </Col>
            <Col className="p-0">{children}</Col>
          </Row>
        </Container>
      </Alert>
    </Toast>
  );
}

export default Growl;
