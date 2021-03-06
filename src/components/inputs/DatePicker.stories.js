import React from "react";
import {
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Inputs/DatePicker",
};

export const DatePickerDefault = () => (
  <div>
    <ContentHeaderH1>DatePicker - Default</ContentHeaderH1>

    <Row>
      <Col xs="12" md="6">
        <h3 className="mb-3">Sizes</h3>
        <FormGroup>
          <Label for="exampleDatePicker">Date</Label>
          <Input
            type="date"
            name="date"
            id="exampleDatePicker"
            placeholder="date placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDatePickerSmall" size="sm">
            Date
          </Label>
          <Input
            type="date"
            name="date"
            id="exampleDatePickerSmall"
            placeholder="date placeholder"
            bsSize="sm"
          />
        </FormGroup>

        <h3 className="mb-3">States</h3>
        <FormGroup>
          <Label for="exampleDatePickerDefault">Default Editable</Label>
          <Input
            type="date"
            name="date"
            id="exampleDatePickerDefault"
            placeholder="date placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDatePickerDisabled">Disabled</Label>
          <Input
            type="date"
            name="date"
            id="exampleDatePickerDisabled"
            placeholder="date placeholder"
            disabled
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDatePickerDisabled">Valid</Label>
          <Input
            valid
            type="date"
            name="date"
            id="exampleDatePickerDisabled"
            placeholder="date placeholder"
          />
          <FormFeedback valid>Awesome yo!</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleDatePickerDisabled">Invalid</Label>
          <Input
            invalid
            type="date"
            name="date"
            id="exampleDatePickerDisabled"
            placeholder="date placeholder"
          />
          <FormFeedback>You messed that up man!</FormFeedback>
        </FormGroup>
      </Col>
    </Row>
  </div>
);

DatePickerDefault.story = {
  name: "Date Picker - Default",
};
