import React from "react";
import { Form, FormGroup, Label, CustomInput, Input } from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Inputs/Radio",
};

export const RadioDefault = () => (
  <div>
    <ContentHeaderH1>Radios</ContentHeaderH1>

    <h3 className="mt-4">Default Custom</h3>
    <FormGroup>
      <Label for="exampleRadio">Radio Label</Label>
      <CustomInput
        type="radio"
        id="exampleCustomRadio"
        label="Check this custom radio"
        checked
      />
      <CustomInput type="radio" id="exampleCustomRadio2" label="Or this one" />
      <CustomInput
        type="radio"
        id="exampleCustomRadio3"
        label="But not this disabled one"
        disabled
      />
      <CustomInput
        type="radio"
        id="exampleCustomRadio4"
        label="Can't click this label to check!"
        htmlFor="exampleCustomRadio4_X"
        disabled
      />
    </FormGroup>

    <h3 className="mt-4">Inline Custom</h3>
    <FormGroup>
      <Label for="exampleRadio">Inline Label</Label>
      <div>
        <CustomInput
          type="radio"
          id="exampleCustomInline"
          label="An inline custom input"
          inline
          checked
        />
        <CustomInput
          type="radio"
          id="exampleCustomInline2"
          label="and another one"
          inline
        />
      </div>
    </FormGroup>
  </div>
);

RadioDefault.story = {
  name: "Radio - Default",
};
