import React from "react";
import {
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Label,
  Input,
  Row,
  Col
} from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";

export default {
  title: 'Components/Inputs/TimePicker'
};

export const TimePickerDefault = () => (
  <div>
    <ContentHeaderH1>TimePicker - Default</ContentHeaderH1>

    <Row>
      <Col xs="12" md="6">
        <h3 className="mb-3">Sizes</h3>
        <FormGroup>
          <Label for="exampleTimePicker">Time</Label>
          <Input
            type="time"
            name="time"
            id="exampleTimePicker"
            placeholder="time placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleTimePickerSmall" size="sm">
            Time
          </Label>
          <Input
            type="time"
            name="time"
            id="exampleTimePickerSmall"
            placeholder="time placeholder"
            bsSize="sm"
          />
        </FormGroup>

        <h3 className="mb-3">States</h3>
        <FormGroup>
          <Label for="exampleTimePickerDefault">Default Editable</Label>
          <Input
            type="time"
            name="time"
            id="exampleTimePickerDefault"
            placeholder="time placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleTimePickerDisabled">Disabled</Label>
          <Input
            type="time"
            name="time"
            id="exampleTimePickerDisabled"
            placeholder="time placeholder"
            disabled
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleTimePickerDisabled">Valid</Label>
          <Input
            valid
            type="time"
            name="time"
            id="exampleTimePickerDisabled"
            placeholder="time placeholder"
          />
          <FormFeedback valid>Awesome yo!</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleTimePickerDisabled">Invalid</Label>
          <Input
            invalid
            type="time"
            name="time"
            id="exampleTimePickerDisabled"
            placeholder="time placeholder"
          />
          <FormFeedback>You messed that up man!</FormFeedback>
        </FormGroup>
      </Col>
    </Row>
  </div>
);

TimePickerDefault.story = {
  name: "Time Picker - Default"
};
