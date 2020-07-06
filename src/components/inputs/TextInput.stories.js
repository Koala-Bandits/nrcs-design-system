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
  title: "Components|Inputs/Text Input"
};

export const RangeDefault = () => (
  <div>
    <ContentHeaderH1>Text Inputs</ContentHeaderH1>

    <Row>
      <Col xs="12" md="6">
        <h3 className="mb-3">Sizes</h3>
        <FormGroup>
          <Label for="exampleDefaultText">Default</Label>
          <Input
            type="text"
            name="text"
            id="exampleDefaultText"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSmallDefaultText" size="sm">
            Small
          </Label>
          <Input
            placeholder="sm"
            bsSize="sm"
            type="text"
            name="text"
            id="exampleSmallDefaultText"
            placeholder="with a placeholder"
          />
        </FormGroup>

        <h3 className="mb-3">States</h3>
        <FormGroup>
          <Label for="exampleDefaultEditableText">Default Editable</Label>
          <Input
            type="text"
            name="text"
            id="exampleDefaultEditableText"
            placeholder="with a placeholder"
          />
          <FormText>With some extra helper text</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleDefaultEditableTextDisabled">Disabled</Label>
          <Input
            disabled
            type="text"
            name="text"
            id="exampleDefaultEditableTextDisabled"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleReadOnly">Read Only (not disabled)</Label>
          <Input
            readonly
            value="Some read only text value"
            id="exampleReadOnly"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePlainText">Plain Text (static, metadata)</Label>
          <Input
            plaintext
            value="Some plain text static value"
            id="examplePlainText"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDefaultValidText">Valid</Label>
          <Input
            valid
            type="text"
            name="text"
            id="exampleDefaultValidText"
            placeholder="with a placeholder"
            value="legit"
          />
          <FormFeedback valid>Awesome yo!</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleDefaultInvalidText">Invalid</Label>
          <Input
            invalid
            type="text"
            name="text"
            id="exampleDefaultInvalidText"
            placeholder="with a placeholder"
            value="lkajsdfl;j"
          />
          <FormFeedback>You messed that up man!</FormFeedback>
        </FormGroup>
      </Col>
      <Col xs="12" md="6">
        <h3 className="mb-3">Types</h3>
        <FormGroup>
          <Label for="exampleDefaultTextType">Default Text</Label>
          <Input
            type="text"
            name="text"
            id="exampleDefaultTextType"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleUrl">Url</Label>
          <Input
            type="url"
            name="url"
            id="exampleUrl"
            placeholder="url placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Number</Label>
          <Input
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="number placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDatetime">Datetime</Label>
          <Input
            type="datetime"
            name="datetime"
            id="exampleDatetime"
            placeholder="datetime placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleTime">Time</Label>
          <Input
            type="time"
            name="time"
            id="exampleTime"
            placeholder="time placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleColor">Color</Label>
          <Input
            type="color"
            name="color"
            id="exampleColor"
            placeholder="color placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSearch">Search</Label>
          <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="search placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </Col>
    </Row>

    <Row>
      <Col xs="12" md="6"></Col>
    </Row>
  </div>
);

RangeDefault.story = {
  name: "Text Input - Default"
};
