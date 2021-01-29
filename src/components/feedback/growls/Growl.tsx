import React, { PropsWithChildren, useEffect, useRef } from "react";
import { Toast, Container, Row, Col } from "reactstrap";
import { mdiClose } from "@mdi/js";
import { Alert } from "../../feedback/alerts/Alert";
import { FlatButton } from "../../buttons/Buttons";

interface IGrowlProps {
  color?: string;
  isOpen?: boolean;
  remove?: () => void;
  toggle?: () => void;
}

function Growl({
  isOpen,
  toggle,
  color,
  children,
  remove,
}: PropsWithChildren<IGrowlProps>) {
  const removeRef = useRef(remove);

  useEffect(() => {
    const duration = 5000; // 5secs
    const id = setTimeout(() => {
      if (removeRef.current) {
        removeRef.current();
      }
    }, duration);

    return () => clearTimeout(id);
  }, []);

  return (
    <Toast isOpen={isOpen}>
      <Alert
        color={color}
        isOpen={true}
        // toggle={remove ? remove : toggle}
      >
        <Container className="m-0">
          <Row>
            <Col className="p-0">{children}</Col>
            <Col className="pr-0" xs="auto">
              <button
                type="button"
                className="close btn pl-1 pr-1"
                data-dismiss="alert"
                aria-label="Close"
                onClick={remove ? remove : toggle}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </Col>
          </Row>
        </Container>
      </Alert>
    </Toast>
  );
}

export default Growl;
