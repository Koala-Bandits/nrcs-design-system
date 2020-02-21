import React from "react";
import { Form, FormGroup, Label, CustomInput, Input } from "reactstrap";

export default {
  title: "Components|Inputs/Range"
};

export const RangeDefault = () => (
  <div>
    <h1 className="docs">Range</h1>

    <h2 className="docs">Default Custom</h2>
    <FormGroup>
      <Label for="exampleCustomRange">Custom Range Label</Label>
      <CustomInput type="range" id="exampleCustomRange" name="customRange" />
    </FormGroup>

    <h2 className="docs">Disabled</h2>
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
