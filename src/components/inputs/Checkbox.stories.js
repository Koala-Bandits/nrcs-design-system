import React from "react";
import { Form, FormGroup, Label, CustomInput, Input } from "reactstrap";
import { ContentHeaderH2 } from "components/text/ContentHeader";

export default {
  title: "Components|Inputs/Checkbox"
};

export const CheckboxDefault = () => (
  <div>
    <ContentHeaderH2>Checkboxes</ContentHeaderH2>

    <h3 className="mt-4">Default Custom</h3>
    <FormGroup>
      <Label for="exampleCheckbox">Checkbox Label</Label>
      <CustomInput
        type="checkbox"
        id="exampleCustomCheckbox"
        label="Check this custom checkbox"
        checked
      />
      <CustomInput
        type="checkbox"
        id="exampleCustomCheckbox2"
        label="Or this one"
      />
      <CustomInput
        type="checkbox"
        id="exampleCustomCheckbox3"
        label="But not this disabled one"
        disabled
      />
      <CustomInput
        type="checkbox"
        id="exampleCustomCheckbox4"
        label="Can't click this label to check!"
        htmlFor="exampleCustomCheckbox4_X"
        disabled
      />
    </FormGroup>

    <h3 className="mt-4">Inline Custom</h3>
    <FormGroup>
      <Label for="exampleCheckbox">Inline Label</Label>
      <div>
        <CustomInput
          type="checkbox"
          id="exampleCustomInline"
          label="An inline custom input"
          inline
          checked
        />
        <CustomInput
          type="checkbox"
          id="exampleCustomInline2"
          label="and another one"
          inline
        />
      </div>
    </FormGroup>

    <h3 className="mt-4">Indeterminate Custom</h3>
    <a
      href="https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios-1"
      target="_blank"
      rel="nopener noreferrer"
    >
      To Do...
    </a>
  </div>
);

CheckboxDefault.story = {
  name: "Checkbox - Default"
};
