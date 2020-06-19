import React from "react";
import { Form, FormGroup, Label, CustomInput, Input } from "reactstrap";
import { ContentHeaderH2 } from "components/text/ContentHeader";

export default {
  title: "Components|Inputs/File Browser"
};

export const FileBrowserDefault = () => (
  <div>
    <ContentHeaderH2>File Browser</ContentHeaderH2>

    <h3 className="mt-4">Default Custom</h3>
    <FormGroup>
      <Label for="exampleCustomFileBrowser">File Browser Defaul Label</Label>
      <CustomInput
        type="file"
        id="exampleCustomFileBrowser"
        name="customFile"
      />
    </FormGroup>

    <FormGroup>
      <Label for="exampleCustomFileBrowser">
        File Browser with Custom Label
      </Label>
      <CustomInput
        type="file"
        id="exampleCustomFileBrowser"
        name="customFile"
        label="Yo, pick a file!"
      />
    </FormGroup>

    <h3 className="mt-4">Disabled</h3>
    <FormGroup>
      <Label for="exampleCustomFileBrowser">File Browser Disabled Label</Label>
      <CustomInput
        type="file"
        id="exampleCustomFileBrowser"
        name="customFile"
        disabled
      />
    </FormGroup>
  </div>
);

FileBrowserDefault.story = {
  name: "File Browser - Default"
};
