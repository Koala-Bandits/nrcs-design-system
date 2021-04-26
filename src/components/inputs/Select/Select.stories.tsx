import React, { useState } from "react";
import { Row, Col, FormGroup, Label } from "reactstrap";
import {
  ContentHeaderH1,
  ContentHeaderH2,
} from "components/text/ContentHeader";
import { Select } from "./Select";
import { PrimaryButton } from "components/buttons";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Inputs/Select",
};

export const SelectDefault = () => {
  const [isReadOnly, setIsReadOnly] = useState(true);

  return (
    <div>
      <ContentHeaderH1>Select</ContentHeaderH1>
      <Row>
        <Col xs="12" md="6">
          <h3 className="mt-4">Default Custom</h3>
          <FormGroup>
            <Label for="exampleCheckbox">Select Label</Label>
            <Select type="select" id="exampleCustomSelect" name="customSelect">
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </Select>
          </FormGroup>

          <h3 className="mt-4">Disabled</h3>
          <FormGroup>
            <Label for="exampleCustomSelectDisabled">
              Custom Select Disabled Label
            </Label>
            <Select
              type="select"
              id="exampleCustomSelectDisabled"
              name="customSelect"
              disabled
            >
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </Select>
          </FormGroup>

          <h3 className="mt-4">Read Only (508 compliant)</h3>
          <FormGroup>
            <Label for="exampleCustomSelectReadonly">Read Only Label</Label>
            <Select
              type="select"
              id="exampleCustomSelectDisabled"
              name="customSelect"
              readOnly={isReadOnly}
            >
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </Select>
            <PrimaryButton
              className="mt-1"
              onClick={() => {
                setIsReadOnly(!isReadOnly);
              }}
            >
              Toggle Disablement
            </PrimaryButton>
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

export const SelectMulti = () => {
  const [isReadOnly, setIsReadOnly] = useState(true);

  return (
    <div>
      <ContentHeaderH2>Multiple Select</ContentHeaderH2>
      <Row>
        <Col xs="12" md="6">
          <h3 className="mt-4">Default Custom</h3>
          <FormGroup>
            <Label for="exampleCustomMutlipleSelect">
              Custom Multiple Select
            </Label>
            <Select
              type="select"
              id="exampleCustomMutlipleSelect"
              name="customSelect"
              multiple
            >
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </Select>
          </FormGroup>

          <h3 className="mt-4">Disabled</h3>
          <FormGroup>
            <Label for="exampleCustomMutlipleSelectDisabled">
              Custom Multiple Select Disabled
            </Label>
            <Select
              type="select"
              id="exampleCustomMutlipleSelectDisabled"
              name="customSelect"
              multiple
              disabled
            >
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </Select>
          </FormGroup>

          <h3 className="mt-4">Read Only (508 Compliant)</h3>
          <FormGroup>
            <Label for="exampleCustomMutlipleSelectReadOnly">
              Custom Multiple Select Read Only
            </Label>
            <Select
              type="select"
              id="exampleCustomMutlipleSelectDisabled"
              name="customSelect"
              multiple
              readOnly={isReadOnly}
            >
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </Select>
            <PrimaryButton
              className="mt-1"
              onClick={() => {
                setIsReadOnly(!isReadOnly);
              }}
            >
              Toggle Disablement
            </PrimaryButton>
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

SelectDefault.story = {
  name: "Select - Default",
};

SelectMulti.story = {
  name: "Multiple Select",
};
