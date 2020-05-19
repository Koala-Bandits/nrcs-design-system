import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  CustomInput
} from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { FlatButton } from "components/buttons/Buttons";
import Search from "components/inputs/Search";
import { DataTable } from "components/datatable/DataTable";
import { mdiRefresh } from "@mdi/js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <ContentHeaderH1>Dashboard</ContentHeaderH1>
        <h2 className="h3">Profile Statistics</h2>
        <Row className="align-items-center">
          <Col xs="12" md="8" className="mb-3">
            <Row>
              <Col xs="12" sm="6">
                <CustomInput
                  type="radio"
                  id="exampleCustomInline"
                  label="My Stations"
                  inline
                />
                <CustomInput
                  type="radio"
                  id="exampleCustomInline2"
                  label="All Stations"
                  inline
                />
              </Col>
              <Col xs="12" sm="6" className="d-flex justify-content-end">
                <FlatButton iconLeft={mdiRefresh}>Refresh </FlatButton>
              </Col>
            </Row>
            <Card
              className="card-muted"
              style={{ minHeight: "450px", minWidth: "450px" }}
            >
              <CardBody className="text-center">GRAPH PLACEHOLDER</CardBody>
            </Card>
          </Col>
          <Col xs="12" md="4" className="mb-3">
            <FormGroup>
              <Label for="examplePlainText">Manually Uploaded</Label>
              <Input plaintext value="5" id="examplePlainText" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePlainText">Uses Proxy Site</Label>
              <Input plaintext value="10" id="examplePlainText" />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">View</Label>
                    <CustomInput
                      type="select"
                      id="exampleCustomSelectDisabled"
                      name="customSelect"
                    >
                      <option value="">Select</option>
                      <option>Value 1</option>
                      <option>Value 2</option>
                      <option>Value 3</option>
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Filter</Label>
                    <Search />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
