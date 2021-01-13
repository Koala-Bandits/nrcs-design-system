import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Checkbox } from "components/inputs/Checkbox";
import { ContentHeaderH1 } from "components/text/ContentHeader";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Inputs/Checkbox",
};

export const CheckboxDefault = () => {
  return (
    <div>
      <ContentHeaderH1>Checkboxes</ContentHeaderH1>

      <h3 className="mt-4">Default Custom</h3>
      <FormGroup>
        <Label for="exampleCheckbox">Checkbox Label</Label>
        <Checkbox
          id="exampleCustomCheckbox"
          label="Check this custom checkbox"
          checked
        />
        <Checkbox id="exampleCustomCheckbox2" label="Or this one" />
        <Checkbox
          id="exampleCustomCheckbox3"
          label="But not this disabled one"
          disabled
        />
        <Checkbox
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
            id="exampleCustomInline"
            label="An inline custom input"
            inline
            checked
          />
          <Checkbox id="exampleCustomInline2" label="and another one" inline />
        </div>
      </FormGroup>

      <h3 className="mt-4">Indeterminate Custom</h3>
      <Checkbox
        id="exampleIndCustomCheckbox2"
        label="Who knows checkbox 1"
        indeterminate
      />
      <Checkbox
        id="exampleIndCustomCheckbox3"
        label="Indeterminate and you can't do anything about it"
        disabled
        indeterminate
      />
    </div>
  );
};

CheckboxDefault.story = {
  name: "Checkbox - Default",
};
