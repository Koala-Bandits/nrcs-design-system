import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import {
  ContentHeaderH1,
  ContentHeaderH2
} from "components/text/ContentHeader";
import Icon from "@mdi/react";
import { mdiOpenInNew, mdiBootstrap, mdiReact } from "@mdi/js";

export default {
  title: "Design System|Components"
};

export const ComponentsStory = () => (
  <div className="container">
    <ContentHeaderH1>Components</ContentHeaderH1>

    <p className="lead">
      NRCS Design System provides a complete scalable UI component library. The
      Kitchen Sink provides a quick overview of the most common components. View
      our Storybook for a complete list of components with tools to view the
      code and test at multiple responsive breakpoints.
    </p>

    <Row xs="1" sm="2" md="3">
      <Col className="nav-card mb-3">
        <a
          href="https://koala-bandits.github.io/nrcs-design-system-storybook"
          target="_blank"
          rel="nopener noreferrer"
        >
          <Card>
            <CardBody className="h5 mb-0">
              <Icon className="mdi mr-1" path={mdiReact} size={1.3} />
              Storybook
              <Icon className="mdi ml-1" path={mdiOpenInNew} size={0.8} />
            </CardBody>
          </Card>
        </a>
      </Col>
    </Row>
    <Row>
      <Col>
        <ContentHeaderH2>External References</ContentHeaderH2>
        <p>
          The NRCS Design System website and components are built with React and
          Reactstrap (Bootstrap) under the hood. Component documentation links
          for these frameworks are provide as it's useful to understand what
          other options, props, and utilities are available to you if the NRCS
          Design System components don't quite have what you need.
        </p>
      </Col>
    </Row>
    <Row xs="1" sm="2" md="3">
      <Col className="nav-card mb-3">
        <a
          href="https://reactstrap.github.io/components/"
          target="_blank"
          rel="nopener noreferrer"
        >
          <Card>
            <CardBody className="h5 mb-0">
              <Icon className="mdi mr-1" path={mdiReact} size={1.3} />
              Reactstrap Components
              <Icon className="mdi ml-1" path={mdiOpenInNew} size={0.8} />
            </CardBody>
          </Card>
        </a>
      </Col>
      <Col className="nav-card mb-3">
        <a
          href="https://getbootstrap.com/docs/4.4/components/"
          target="_blank"
          rel="nopener noreferrer"
        >
          <Card>
            <CardBody className="h5 mb-0">
              <Icon className="mdi mr-1" path={mdiBootstrap} size={1.3} />
              Bootstrap Components
              <Icon className="mdi ml-1" path={mdiOpenInNew} size={0.8} />
            </CardBody>
          </Card>
        </a>
      </Col>
    </Row>
    <Row>
      <ContentHeaderH2>Core Components</ContentHeaderH2>
      <span className="text-danger">
        ** Under construction... soon to be a display of core components as an
        overview. For now, see our Storybook for all components. **
      </span>
      <ContentHeaderH2>Page Components</ContentHeaderH2>
      <span className="text-danger">
        ** Under construction... soon to be a display of page components as an
        overview. For now, see our Storybook for all components. **
      </span>
    </Row>
  </div>
);
