import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import {
  ContentHeaderH1,
  ContentHeaderH2,
} from "components/text/ContentHeader";
import Icon from "@mdi/react";
import { mdiOpenInNew, mdiBootstrap, mdiReact } from "@mdi/js";

class Utilities extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <ContentHeaderH1>Utilities</ContentHeaderH1>

        <p className="lead">
          Built with Reactstrap for components, and styled via a Bootstrap
          theme, all props and utilities they provide are at your disposal.
        </p>
        <p>
          As a rule of thumb, you shouldn't have to write any CSS as any styles
          needed for a component would be local to the component. All sorts of
          modifications and transformations are available to you via CSS classes
          and utilities provided by these frameworks.
        </p>

        <Row sm="1" md="2">
          <Col className="nav-card mb-3">
            <a
              href="https://getbootstrap.com/docs/4.4/utilities/"
              target="_blank"
              rel="nopener noreferrer"
            >
              <Card>
                <CardBody className="h5 mb-0">
                  <Icon className="mdi mr-1" path={mdiBootstrap} size={1.3} />
                  Bootstrap Utilities
                  <Icon className="mdi ml-1" path={mdiOpenInNew} size={0.8} />
                </CardBody>
              </Card>
            </a>
          </Col>
        </Row>

        <h3 className="h5 mt-4 mb-3">Quick Links (Most Commonly Used)</h3>

        <Row>
          <Col>
            <ul>
              <li>
                <a
                  href="https://getbootstrap.com/docs/4.4/utilities/borders/"
                  target="_blank"
                  rel="nopener noreferrer"
                >
                  borders
                </a>
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/docs/4.4/utilities/colors/"
                  target="_blank"
                  rel="nopener noreferrer"
                >
                  color
                </a>
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/docs/4.4/utilities/display/"
                  target="_blank"
                  rel="nopener noreferrer"
                >
                  display
                </a>
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/docs/4.4/utilities/flex/"
                  target="_blank"
                  rel="nopener noreferrer"
                >
                  flex
                </a>{" "}
                - Note: grid (row/col) layouts are flex based, so these apply to
                container behavior in your layouts.
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/docs/4.4/utilities/float/"
                  target="_blank"
                  rel="nopener noreferrer"
                >
                  float
                </a>
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/docs/4.4/utilities/screen-readers/"
                  target="_blank"
                  rel="nopener noreferrer"
                >
                  screen readers
                </a>{" "}
                - Use the 'sr-only' class to hide visual elements but still have
                them present in the layout for screen reader users only. Useful
                for accessibility.
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/docs/4.4/utilities/sizing/"
                  target="_blank"
                  rel="nopener noreferrer"
                >
                  sizing
                </a>{" "}
                - Use carefully as these can break flex based containers/layouts
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/docs/4.4/utilities/spacing/"
                  target="_blank"
                  rel="nopener noreferrer"
                >
                  spacing
                </a>
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/docs/4.4/utilities/text/"
                  target="_blank"
                  rel="nopener noreferrer"
                >
                  text
                </a>
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/docs/4.4/utilities/vertical-align/"
                  target="_blank"
                  rel="nopener noreferrer"
                >
                  vertical alignment
                </a>
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/docs/4.4/utilities/visibility/"
                  target="_blank"
                  rel="nopener noreferrer"
                >
                  visibility
                </a>{" "}
                - Easily hide and show things.
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Utilities;
