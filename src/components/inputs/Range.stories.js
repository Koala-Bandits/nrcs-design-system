import React from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  CustomInput,
  Input,
} from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Inputs/Range",
};

export const RangeDefault = () => (
  <div>
    <ContentHeaderH1>Range</ContentHeaderH1>

    <Row>
      <Col xs="12" md="6">
        <h3 className="mt-4">Default Custom</h3>

        <FormGroup>
          <Label for="exampleCustomRange">Custom Range Label</Label>
          <CustomInput
            type="range"
            id="exampleCustomRange"
            name="customRange"
          />
        </FormGroup>

        <h3 className="mt-4">Disabled</h3>
        <FormGroup>
          <Label for="exampleCustomRange">Disabled Range Label</Label>
          <CustomInput
            type="range"
            id="exampleCustomRange"
            name="customRange"
            disabled
          />
        </FormGroup>
      </Col>
    </Row>
  </div>
);

RangeDefault.story = {
  name: "Range - Default",
};
