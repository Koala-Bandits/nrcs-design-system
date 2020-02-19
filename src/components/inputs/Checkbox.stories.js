import React from "react";
import { Form, FormGroup, Label, CustomInput, Input } from "reactstrap";

export default {
  title: "Components|Inputs/Checkbox"
};

export const CheckboxDefault = () => (
  <div>
    <h1>Checkboxes</h1>

    <h2>Default Custom</h2>
    <FormGroup>
      <Label for="exampleCheckbox">Checkbox Label</Label>
      <CustomInput
        type="checkbox"
        id="exampleCustomCheckbox"
        label="Check this custom checkbox"
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

    <h2>Inline Custom</h2>
    <FormGroup>
      <Label for="exampleCheckbox">Inline Label</Label>
      <div>
        <CustomInput
          type="checkbox"
          id="exampleCustomInline"
          label="An inline custom input"
          inline
        />
        <CustomInput
          type="checkbox"
          id="exampleCustomInline2"
          label="and another one"
          inline
        />
      </div>
    </FormGroup>

    <h2>Indeterminate Custom</h2>
    <a
      href="https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios-1"
      _target="blank"
    >
      To Do...
    </a>
  </div>
);

CheckboxDefault.story = {
  name: "Checkbox - Default"
};
