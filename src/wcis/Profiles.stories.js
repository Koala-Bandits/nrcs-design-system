import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";

export default {
  title: "WCIS Components|Profiles Page"
};

export const ProfilesStory = () => (
  <div className="container">
    <ContentHeaderH1>Profiles</ContentHeaderH1>

    <Row>
      <Col>
        <Card className="card-muted">
          <CardBody className="text-center">CONTENT</CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);
