import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import {
  ContentHeaderH1,
  ContentHeaderH2
} from "components/text/ContentHeader";
import Icon from "@mdi/react";
import { mdiOpenInNew, mdiBootstrap, mdiReact } from "@mdi/js";

class GridAndLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <ContentHeaderH1>Grids</ContentHeaderH1>

        <p className="lead">
          Since the NRCS Design System is built with Reactstrap under the hood,
          all layouts are based off of the Bootstrap 12-Column grid system.
        </p>
        <p>
          The most common layouts are shown below in this guide for convenience.
          View our{" "}
          <a href="https://koala-bandits.github.io/nrcs-design-system-storybook">
            <strong>Storybook</strong>
          </a>{" "}
          for quick and easy access to copy-n-paste code examples.
        </p>
        <p>
          More complex layouts including varying stacking order, hiding and
          showing at different breakpoints can all be done. Follow their
          documentation for details (Reactstrap documentation on layout is
          limited as they assume familiarity with the Bootstrap grid. The
          Bootstrap grid documentation is much more thorough for learning
          purposes.)
        </p>

        <Row sm="1" md="2">
          <Col className="nav-card mb-3">
            <a
              href="https://reactstrap.github.io/components/layout/"
              target="_blank"
              rel="nopener noreferrer"
            >
              <Card>
                <CardBody className="h5 mb-0">
                  <Icon className="mdi mr-1" path={mdiReact} size={1.3} />
                  Reactstrap Layout
                  <Icon className="mdi ml-1" path={mdiOpenInNew} size={0.8} />
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col className="nav-card mb-3">
            <a
              href="https://getbootstrap.com/docs/4.4/layout/grid/"
              target="_blank"
              rel="nopener noreferrer"
            >
              <Card>
                <CardBody className="h5 mb-0">
                  <Icon className="mdi mr-1" path={mdiBootstrap} size={1.3} />
                  Bootstrap 12-Column Grid
                  <Icon className="mdi ml-1" path={mdiOpenInNew} size={0.8} />
                </CardBody>
              </Card>
            </a>
          </Col>
        </Row>

        <ContentHeaderH2>Layout Examples (most commonly used)</ContentHeaderH2>

        <h3 className="h5 mt-4 mb-3">Basic Single Column Block</h3>

        <Row>
          <Col>
            <Card className="card-muted">
              <CardBody className="text-center">CONTENT</CardBody>
            </Card>
          </Col>
        </Row>

        <h3 className="h5 mt-4 mb-3">2-Column Stacking</h3>
        <Row>
          <Col xs="12" md="8" className="mb-3">
            <Card className="card-muted">
              <CardBody className="text-center">CONTENT A</CardBody>
            </Card>
          </Col>
          <Col xs="12" md="4" className="mb-3">
            <Card className="card-muted">
              <CardBody className="text-center">CONTENT B</CardBody>
            </Card>
          </Col>
        </Row>

        <h3 className="h5 mt-4 mb-3">3-Column Stacking</h3>
        <Row>
          <Col xs="6" sm="4" className="mb-3">
            <Card className="card-muted">
              <CardBody className="text-center">CONTENT A</CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="4" className="mb-3">
            <Card className="card-muted">
              <CardBody className="text-center">CONTENT B</CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="4" className="mb-3">
            <Card className="card-muted">
              <CardBody className="text-center">CONTENT C</CardBody>
            </Card>
          </Col>
        </Row>

        <h3 className="h5 mt-4 mb-3">Block Grid Stacking</h3>
        <p>
          My personal favorite... quick and easy for equally sized stacking
          blocks.
        </p>
        <Row xs="1" sm="2" md="3" lg="4">
          <Col className="mb-3">
            <Card className="card-muted">
              <CardBody className="text-center">CONTENT A</CardBody>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card className="card-muted">
              <CardBody className="text-center">CONTENT B</CardBody>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card className="card-muted">
              <CardBody className="text-center">CONTENT C</CardBody>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card className="card-muted">
              <CardBody className="text-center">CONTENT D</CardBody>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card className="card-muted">
              <CardBody className="text-center">CONTENT E</CardBody>
            </Card>
          </Col>
        </Row>

        <h3 className="h5 mt-4 mb-3">Sidebar Page with Navigation</h3>
        <p>Sidebar stacks on top on mobile in this example.</p>
        <Row>
          <Col md="3" className="mb-3">
            <Card className="card-muted">
              <CardBody className="text-center">SIDEBAR</CardBody>
            </Card>
          </Col>
          <Col md="9" className="mb-3">
            <Card className="card-muted">
              <CardBody className="text-center">CONTENT</CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GridAndLayout;
