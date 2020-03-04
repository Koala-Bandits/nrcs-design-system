import React, { useState } from "react";
import { Alert, Container, Row, Col } from "reactstrap";
import Icon from "@mdi/react";
import {
  mdiInformation,
  mdiAlert,
  mdiAlertCircle,
  mdiCheckCircle
} from "@mdi/js";

export default {
  title: "Components|Feedback/Inline Alerts"
};

export const AlertsDefault = () => (
  <div>
    <h1 className="docs">Inline Alerts - Default</h1>

    <Alert color="info">
      This is an <strong>info</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert color="success">
      This is a <strong>success</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert color="danger">
      This is a <strong>error</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert color="warning">
      This is a <strong>warning</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
  </div>
);

export const AlertsWithIcons = () => (
  <div>
    <h1 className="docs">Inline Alerts - with Icons</h1>

    <Alert color="info">
      <Container className="m-0">
        <Row>
          <Col xs="auto" className="p-0 pr-2">
            <Icon className="mdi" path={mdiInformation} />
          </Col>
          <Col className="p-0">
            This is an <strong>info</strong> alert with{" "}
            <a href="#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </Col>
        </Row>
      </Container>
    </Alert>
    <Alert color="success">
      <Container className="m-0">
        <Row>
          <Col xs="auto" className="p-0 pr-2">
            <Icon className="mdi" path={mdiCheckCircle} />
          </Col>
          <Col className="p-0">
            This is a <strong>success</strong> alert with{" "}
            <a href="#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </Col>
        </Row>
      </Container>
    </Alert>
    <Alert color="danger">
      <Container className="m-0">
        <Row>
          <Col xs="auto" className="p-0 pr-2">
            <Icon className="mdi" path={mdiAlertCircle} />
          </Col>
          <Col className="p-0">
            This is a <strong>error</strong> alert with{" "}
            <a href="#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </Col>
        </Row>
      </Container>
    </Alert>
    <Alert color="warning">
      <Container className="m-0">
        <Row>
          <Col xs="auto" className="p-0 pr-2">
            <Icon className="mdi" path={mdiAlert} />
          </Col>
          <Col className="p-0">
            This is a <strong>warning</strong> alert with{" "}
            <a href="#" className="alert-link">
              an example link
            </a>
            . Give it a click if you like.
          </Col>
        </Row>
      </Container>
    </Alert>
    <hr />
    <Alert color="warning">
      <Container className="m-0">
        <Row>
          <Col xs="auto" className="p-0 pr-2">
            <Icon className="mdi" path={mdiAlert} />
          </Col>
          <Col className="p-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Col>
        </Row>
      </Container>
    </Alert>
  </div>
);

export const AlertsDismissable = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <div>
      <h1 className="docs">Inline Alerts - Dismissable</h1>

      <Alert color="warning" isOpen={visible} toggle={onDismiss}>
        <Container className="m-0">
          <Row>
            <Col xs="auto" className="p-0 pr-2">
              <Icon className="mdi" path={mdiAlert} />
            </Col>
            <Col className="p-0">
              This is a dismissable warning alert with. Go ahead, dismiss me!
            </Col>
          </Row>
        </Container>
      </Alert>
    </div>
  );
};

export const AlertsContent = () => (
  <div>
    <h1 className="docs">Inline Alerts - with Content</h1>

    <Alert color="success">
      <h4 className="alert-heading">
        <Icon className="mdi" path={mdiCheckCircle} size={1.3} />
        Well done!
      </h4>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  </div>
);

AlertsDefault.story = {
  name: "Inline Alerts - Default"
};

AlertsWithIcons.story = {
  name: "Inline Alerts - with Icons"
};

AlertsDismissable.story = {
  name: "Inline Alerts - Dismissable"
};

AlertsContent.story = {
  name: "Inline Alerts - with Content"
};
