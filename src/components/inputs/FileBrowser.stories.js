import React from "react";
import {
  Col,
  Row,
  FormGroup,
  FormText,
  FormFeedback,
  Label,
  CustomInput
} from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";

export default {
  title: 'Components/Inputs/File Browser'
};

export const FileBrowserDefault = () => (
  <div>
    <ContentHeaderH1>File Browser</ContentHeaderH1>

    <Row>
      <Col xs="12" md="6">
        <h3 className="mb-3">Sizes</h3>
        <FormGroup>
          <Label for="exampleCustomFileBrowser">
            File Browser Default Label
          </Label>
          <CustomInput
            type="file"
            id="exampleCustomFileBrowser"
            name="customFile"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleCustomFileBrowserLabel">
            File Browser with Custom Label
          </Label>
          <CustomInput
            type="file"
            id="exampleCustomFileBrowserLabel"
            name="customFile"
            label="Yo, pick a file!"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleCustomFileBrowserSm">
            Small File Browser Default Label
          </Label>
          <CustomInput
            type="file"
            id="exampleCustomFileBrowserSm"
            name="customFile"
            placeholder="sm"
            bsSize="sm"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleCustomFileBrowserLabelSm">
            Small File Browser with Custom Label
          </Label>
          <CustomInput
            type="file"
            id="exampleCustomFileBrowserLabelSm"
            name="customFile"
            label="Yo, pick a file!"
            placeholder="sm"
            bsSize="sm"
          />
        </FormGroup>

        <h3 className="mb-3">States</h3>
        <FormGroup>
          <Label for="exampleCustomFileBrowserEdit">Default (editable)</Label>
          <CustomInput
            type="file"
            id="exampleCustomFileBrowserEdit"
            name="customFile"
          />
          <FormText>
            With some extra helper text: Only .pdf or .svg files dude.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomFileBrowserDisabled">Disabled</Label>
          <CustomInput
            type="file"
            id="exampleCustomFileBrowserDisabled"
            name="customFile"
            disabled
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomFileBrowserValid">Valid</Label>
          <CustomInput
            type="file"
            id="exampleCustomFileBrowserValid"
            name="customFile"
            valid
          />
          <FormFeedback valid>Awesome yo!</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomFileBrowserInalid">Invalid</Label>
          <CustomInput
            type="file"
            id="exampleCustomFileBrowserInvalid"
            name="customFile"
            invalid
          />
          <FormFeedback>You messed that up man!</FormFeedback>
        </FormGroup>
      </Col>
    </Row>
  </div>
);

FileBrowserDefault.story = {
  name: "File Browser - Default"
};
