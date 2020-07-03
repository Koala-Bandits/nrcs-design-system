import React from "react";
import { Form, FormGroup, Label, CustomInput, Input } from "reactstrap";
import { Checkbox } from "components/inputs/Checkbox";
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
      <Checkbox
        type="checkbox"
        id="exampleCustomCheckbox"
        label="Check this custom checkbox"
        checked
      />
      <Checkbox
        type="checkbox"
        id="exampleCustomCheckbox2"
        label="Or this one"
      />
      <Checkbox
        type="checkbox"
        id="exampleCustomCheckbox3"
        label="But not this disabled one"
        disabled
      />
      <Checkbox
        type="checkbox"
        id="exampleCustomCheckbox4"
        label="Can't click this label to check!"
        disabled
      />
    </FormGroup>

    <h3 className="mt-4">Inline Custom</h3>
    <FormGroup>
      <Label for="exampleCheckbox">Inline Label</Label>
      <div>
        <Checkbox
          type="checkbox"
          id="exampleCustomInline"
          label="An inline custom input"
          inline
          checked
        />
        <Checkbox
          type="checkbox"
          id="exampleCustomInline2"
          label="and another one"
          inline
        />
      </div>
    </FormGroup>

    <h3 className="mt-4">Indeterminate Custom</h3>
    <Checkbox
      type="checkbox"
      id="exampleIndCustomCheckbox2"
      label="Who knows checkbox 1"
      indeterminate
    />
    <Checkbox
      type="checkbox"
      id="exampleIndCustomCheckbox3"
      label="Indeterminate and you can't do anything about it"
      disabled
      indeterminate
    />
  </div>
);

CheckboxDefault.story = {
  name: "Checkbox - Default"
};
