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
  title: "Components|Feedback/Banners"
};

export const BannersDefault = () => (
  <div>
    <h1 className="docs">Banners - Default</h1>
    <p>
      Banners are square Alerts, and used under a dialog header or container
      header, 100% width edge-to-edge.
    </p>

    <Alert className="alert-banner" color="info">
      This is an <strong>info</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert className="alert-banner" color="success">
      This is a <strong>success</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert className="alert-banner" color="danger">
      This is a <strong>error</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert className="alert-banner" color="warning">
      This is a <strong>warning</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
  </div>
);

export const BannersWithIcons = () => (
  <div>
    <h1 className="docs">Banners - with Icons</h1>
    <p>
      Banners are square Alerts, and used under a dialog header or container
      header, 100% width edge-to-edge.
    </p>

    <Alert className="alert-banner" color="info">
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
    <Alert className="alert-banner" color="success">
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
    <Alert className="alert-banner" color="danger">
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
    <Alert className="alert-banner" color="warning">
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
    <Alert className="alert-banner" color="warning">
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

export const BannersDismissable = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <div>
      <h1 className="docs">Banners - Dismissable</h1>
      <p>
        Banners are square Alerts, and used under a dialog header or container
        header, 100% width edge-to-edge.
      </p>

      <Alert
        className="alert-banner"
        color="warning"
        isOpen={visible}
        toggle={onDismiss}
      >
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

export const BannersContent = () => (
  <div>
    <h1 className="docs">Banners - with Content</h1>
    <p>
      Banners are square Alerts, and used under a dialog header or container
      header, 100% width edge-to-edge.
    </p>

    <Alert className="alert-banner" color="success">
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

BannersDefault.story = {
  name: "Banners - Default"
};

BannersWithIcons.story = {
  name: "Banners - with Icons"
};

BannersDismissable.story = {
  name: "Banners - Dismissable"
};

BannersContent.story = {
  name: "Banners - with Content"
};
