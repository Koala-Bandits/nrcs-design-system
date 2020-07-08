import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import {
  ContentHeaderH1,
  ContentHeaderH2
} from "components/text/ContentHeader";
import { PrimaryButton } from "components/buttons/Buttons";
import Icon from "@mdi/react";
import { mdiOpenInNew, mdiBootstrap, mdiPuzzle, mdiReact } from "@mdi/js";

// hook for apllication wide Growls
import useToast from "components/feedback/growls/useToast";

function Components() {
  const toast = useToast();
  const showWarningToast = () => toast.add("warning", "Warning Growl: test!");
  const showErrorToast = () => toast.add("danger", "Error Growl: oh noes!");

  return (
    <div className="container">
      <ContentHeaderH1>Components</ContentHeaderH1>

      <p className="lead">
        NRCS Design System provides a complete scalable UI component library. It
        covers implementations of most all FPAC components, a few others
        provided by Reactstrap, as well as some custom complex components.
      </p>
      <p>View our Kitchen Sink for a quick overview of core components.</p>
      <p>
        View our Storybook for a complete list of components with tools to view
        the code and test at multiple responsive breakpoints.
      </p>
      <Row xs="1" md="2">
        <Col className="nav-card mb-3">
          <a
            className="btn btn-link d-block text-left p-0"
            href="/nrcs-design-system/components/kitchen-sink"
          >
            <Card>
              <CardBody className="h5 mb-0">
                <Icon className="mdi mr-1" path={mdiPuzzle} size={1.3} />
                Kitchen Sink
              </CardBody>
            </Card>
          </a>
        </Col>
        <Col className="nav-card mb-3">
          <a
            className="btn btn-link d-block text-left p-0"
            href="https://koala-bandits.github.io/nrcs-design-system-storybook"
            target="_blank"
            rel="nopener noreferrer"
          >
            <Card>
              <CardBody className="mb-0">
                <Row>
                  <Col xs="auto" className="pr-0">
                    <Icon className="mdi mr-1" path={mdiReact} size={1.3} />
                  </Col>
                  <Col className="p-0">
                    <span className="h5 mb-0">
                      Storybook
                      <Icon
                        className="mdi ml-1"
                        path={mdiOpenInNew}
                        size={0.8}
                      />
                    </span>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <ContentHeaderH2>External References</ContentHeaderH2>
          <p>
            The NRCS Design System website and components are built with React
            and Reactstrap (Bootstrap) under the hood. Component documentation
            links for these frameworks are provided as it's useful to understand
            what other options, props, and utilities are available to you if the
            NRCS Design System components don't quite have what you need.
          </p>
        </Col>
      </Row>
      <Row xs="1" md="2">
        <Col className="nav-card mb-3">
          <a
            className="btn btn-link d-block text-left p-0"
            href="https://reactstrap.github.io/components/"
            target="_blank"
            rel="nopener noreferrer"
          >
            <Card>
              <CardBody className="mb-0">
                <Row>
                  <Col xs="auto" className="pr-0">
                    <Icon className="mdi mr-1" path={mdiReact} size={1.3} />
                  </Col>
                  <Col className="p-0">
                    <span className="h5 mb-0">
                      Reactstrap Components
                      <Icon
                        className="mdi ml-1"
                        path={mdiOpenInNew}
                        size={0.8}
                      />
                    </span>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </a>
        </Col>
        <Col className="nav-card mb-3">
          <a
            className="btn btn-link d-block text-left p-0"
            href="https://getbootstrap.com/docs/4.4/components/"
            target="_blank"
            rel="nopener noreferrer"
          >
            <Card>
              <CardBody className="h5 mb-0">
                <Row>
                  <Col xs="auto" className="pr-0">
                    <Icon className="mdi mr-1" path={mdiBootstrap} size={1.3} />
                  </Col>
                  <Col className="p-0">
                    <span className="h5 mb-0">
                      Bootstrap Components
                      <Icon
                        className="mdi ml-1"
                        path={mdiOpenInNew}
                        size={0.8}
                      />
                    </span>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Components;
