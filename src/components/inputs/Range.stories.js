import React from "react";
import { Form, FormGroup, Label, CustomInput, Input } from "reactstrap";

export default {
  title: "Components|Inputs/Range"
};

export const RangeDefault = () => (
  <div>
    <h2 className="docs">Range</h2>

    <h3 className="docs">Default Custom</h3>
    <FormGroup>
      <Label for="exampleCustomRange">Custom Range Label</Label>
      <CustomInput type="range" id="exampleCustomRange" name="customRange" />
    </FormGroup>

    <h3 className="docs">Disabled</h3>
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
