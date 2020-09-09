import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import Icon from "@mdi/react";
import { mdiPalette, mdiFormatText, mdiVectorSquare } from "@mdi/js";

import { ContentHeaderH1 } from "components/text/ContentHeader";

class VisualStyle extends React.Component {
  render() {
    return (
      <div className="container">
        <ContentHeaderH1>Visual Style</ContentHeaderH1>

        <p className="lead">
          NRCS Design System is comprised of the following visual assets for
          consistent design (styles) presentation across NRCS applications.{" "}
        </p>
        <p>Explore each section for details.</p>

        <Row xs="1" md="2">
          <Col className="nav-card mb-3">
            <a
              className="btn btn-link d-block text-left p-0"
              href="/nrcs-design-system/visual-style/color"
            >
              <Card>
                <CardBody className="h5 mb-0">
                  <Icon className="mdi mr-1" path={mdiPalette} size={1.3} />
                  Color
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col className="nav-card mb-3">
            <a
              className="btn btn-link d-block text-left p-0"
              href="/nrcs-design-system/visual-style/typography"
            >
              <Card>
                <CardBody className="h5 mb-0">
                  <Icon className="mdi mr-1" path={mdiFormatText} size={1.3} />
                  Typography
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col className="nav-card mb-3">
            <a
              className="btn btn-link d-block text-left p-0"
              href="/nrcs-design-system/visual-style/iconography"
            >
              <Card>
                <CardBody className="h5 mb-0">
                  <Icon
                    className="mdi mr-1"
                    path={mdiVectorSquare}
                    size={1.3}
                  />
                  Iconography
                </CardBody>
              </Card>
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default VisualStyle;
