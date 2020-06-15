import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import Icon from "@mdi/react";
import { mdiPalette, mdiPuzzle, mdiHuman } from "@mdi/js";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { Alert } from "components/feedback/alerts/Alert";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <ContentHeaderH1>NRCS Design System</ContentHeaderH1>
        <Alert color="warning">
          Warning: currently under development and incomplete.
        </Alert>
        <p className="lead">
          <strong>A design system produced for our partners at NRCS.</strong>
        </p>
        <p>
          An adaptation of the{" "}
          <strong>
            <a
              href="http://usda-fsa.github.io/fsa-design-system/"
              target="_blank"
              rel="nopener noreferrer"
            >
              FPAC Design System
            </a>
          </strong>{" "}
          and its inherent roots from the{" "}
          <strong>
            <a
              href="https://designsystem.digital.gov/"
              target="_blank"
              rel="nopener noreferrer"
            >
              U.S. Web Design System.
            </a>
          </strong>
        </p>

        <h3>NRCS Adaptation</h3>
        <p>
          Several of our projects are large GIS applications or complex process
          management systems. NRCS had need for a design system with dedicated
          choices in components, additional complex components, and integrated
          iconography together.
        </p>
        <p>
          Since many of our teams and projects currently use Bootstrap in some
          way or with React/Reactrap and already have established UI component
          libraries, it made sense to align our current styles and components to
          FPAC in the form of this NRCS Design System.
        </p>
        <ul>
          <li>
            Designed with clean simple styles, high color contrast for
            accessibilty, and to provide solutions for large scale applications.
          </li>
          <li>
            Provides color, typography, iconography, components and examples
            with documentation for how to use them.
          </li>
          <li>
            The intent is to provide a solution for our development teams to
            converge upon for consistent implementation in design and style.
          </li>
          <li>
            Provides a scalable UI component library. It covers implementations
            of most all FPAC components, a few others provided by Reactstrap, as
            well as some custom complex components.
          </li>
          <li>
            This site is built with React, StoryBook, using{" "}
            <strong>
              <a
                href="https://reactstrap.github.io/"
                target="_blank"
                rel="nopener noreferrer"
              >
                ReactStrap
              </a>
            </strong>
            . The{" "}
            <strong>
              <a
                href="https://github.com/Koala-Bandits/nrcs-design-system"
                target="_blank"
                rel="nopener noreferrer"
              >
                source
              </a>
            </strong>{" "}
            for this project can serve as an example implementation and
            application skeleton.
          </li>
        </ul>

        <Row xs="1" md="2">
          <Col className="nav-card mb-3">
            <a
              className="btn btn-link d-block text-left p-0"
              href="/nrcs-design-system/visual-style"
            >
              <Card>
                <CardBody className="mb-0">
                  <Row>
                    <Col xs="auto" className="pr-0">
                      <Icon className="mdi mr-1" path={mdiPalette} size={1.3} />
                    </Col>
                    <Col className="p-0">
                      <span className="h5 mb-0">Visual Style</span>
                      <p className="mb-0">Color, Typography, and Iconography</p>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col className="nav-card mb-3">
            <a
              className="btn btn-link d-block text-left p-0"
              href="/nrcs-design-system/guides"
            >
              <Card>
                <CardBody className="mb-0">
                  <Row>
                    <Col xs="auto" className="pr-0">
                      <Icon className="mdi mr-1" path={mdiHuman} size={1.3} />
                    </Col>
                    <Col className="p-0">
                      <span className="h5 mb-0">Guides</span>
                      <p className="mb-0">
                        Accessibilty, Grid and Layout, Utilities
                      </p>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col className="nav-card mb-3">
            <a
              className="btn btn-link d-block text-left p-0"
              href="/nrcs-design-system/components"
            >
              <Card>
                <CardBody className="mb-0">
                  <Row>
                    <Col xs="auto" className="pr-0">
                      <Icon className="mdi mr-1" path={mdiPuzzle} size={1.3} />
                    </Col>
                    <Col className="p-0">
                      <span className="h5 mb-0">Components</span>
                      <p className="mb-0">
                        Kitchen Sink, Page Examples, References
                      </p>
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
}

export default About;
