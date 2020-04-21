import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";

class Configuration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <ContentHeaderH1>Configuration</ContentHeaderH1>

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

export default Configuration;
