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
  title: "Components|Feedback/Inline Messages"
};

export const MessagesWithIcons = () => (
  <div>
    <h2 className="docs">Inline Messages - with Icons</h2>

    <Alert className="alert-message" color="info">
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
    <Alert className="alert-message" color="success">
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
    <Alert className="alert-message" color="danger">
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
    <Alert className="alert-message" color="warning">
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
    <Alert className="alert-message" color="warning">
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

MessagesWithIcons.story = {
  name: "Inline Messages"
};
