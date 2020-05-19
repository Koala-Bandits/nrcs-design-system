import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import {
  ContentHeaderH1,
  ContentHeaderH2
} from "components/text/ContentHeader";
import { AlertMessage } from "components/feedback/messages/AlertMessage";
import Search from "components/inputs/Search";

class Profiles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <ContentHeaderH1>Profiles</ContentHeaderH1>
        <AlertMessage color="info">
          Selection a Station and Sensor below to view Profile data.
        </AlertMessage>
        <Row>
          <Col xs="12" md="4" className="mb-3">
            <h2 className="h3">Stations</h2>
            <Search />
            <Card className="card-muted">
              <CardBody className="text-center">CONTENT A</CardBody>
            </Card>
          </Col>
          <Col xs="12" md="8" className="mb-3">
            <h2 className="h3">Sensors</h2>
            <Search />
            <Card className="card-muted">
              <CardBody className="text-center">CONTENT B</CardBody>
            </Card>
          </Col>
        </Row>
        <ContentHeaderH2>[Selection] > Proxy123 Beaverton</ContentHeaderH2>
        <Row>
          <Col xs="12" md="4" className="mb-3">
            graph meta content and options
          </Col>
          <Col xs="12" md="8" className="mb-3">
            <Card className="card-muted">
              <CardBody className="text-center">GRAPH PLACEHOLDER</CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profiles;
