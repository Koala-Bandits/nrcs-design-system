import React from "react";
import { Form, FormGroup, Label, CustomInput, Input } from "reactstrap";

export default {
  title: "Components|Inputs/File Browser"
};

export const FileBrowserDefault = () => (
  <div>
    <h1 className="docs">File Browser</h1>

    <h2 className="docs">Default Custom</h2>
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

    <h2 className="docs">Disabled</h2>
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
