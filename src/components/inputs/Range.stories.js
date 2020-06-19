import React from "react";
import { Form, FormGroup, Label, CustomInput, Input } from "reactstrap";
import { ContentHeaderH2 } from "components/text/ContentHeader";

export default {
  title: "Components|Inputs/Range"
};

export const RangeDefault = () => (
  <div>
    <ContentHeaderH2>Range</ContentHeaderH2>

    <h3 className="mt-4">Default Custom</h3>
    <FormGroup>
      <Label for="exampleCustomRange">Custom Range Label</Label>
      <CustomInput type="range" id="exampleCustomRange" name="customRange" />
    </FormGroup>

    <h3 className="mt-4">Disabled</h3>
    <FormGroup>
      <Label for="exampleCustomRange">Disabled Range Label</Label>
      <CustomInput
        type="range"
        id="exampleCustomRange"
        name="customRange"
        disabled
      />
    </FormGroup>
  </div>
);

RangeDefault.story = {
  name: "Range - Default"
};
