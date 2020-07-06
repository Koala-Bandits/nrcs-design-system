import React from "react";
import { Form, FormGroup, Label, CustomInput, Input } from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";

export default {
  title: "Components|Inputs/Select"
};

export const SelectDefault = () => (
  <div>
    <ContentHeaderH1>Select</ContentHeaderH1>

    <h3 className="mt-4">Default Custom</h3>
    <FormGroup>
      <Label for="exampleCheckbox">Select Label</Label>
      <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
        <option value="">Select</option>
        <option>Value 1</option>
        <option>Value 2</option>
        <option>Value 3</option>
        <option>Value 4</option>
        <option>Value 5</option>
      </CustomInput>
    </FormGroup>

    <h3 className="mt-4">Disabled</h3>
    <FormGroup>
      <Label for="exampleCustomSelectDisabled">
        Custom Select Disabled Label
      </Label>
      <CustomInput
        type="select"
        id="exampleCustomSelectDisabled"
        name="customSelect"
        disabled
      >
        <option value="">Select</option>
        <option>Value 1</option>
        <option>Value 2</option>
        <option>Value 3</option>
        <option>Value 4</option>
        <option>Value 5</option>
      </CustomInput>
    </FormGroup>
  </div>
);

export const SelectMulti = () => (
  <div>
    <ContentHeaderH1>Multiple Select</ContentHeaderH1>

    <h3 className="mt-4">Default Custom</h3>
    <FormGroup>
      <Label for="exampleCustomMutlipleSelect">Custom Multiple Select</Label>
      <CustomInput
        type="select"
        id="exampleCustomMutlipleSelect"
        name="customSelect"
        multiple
      >
        <option value="">Select</option>
        <option>Value 1</option>
        <option>Value 2</option>
        <option>Value 3</option>
        <option>Value 4</option>
        <option>Value 5</option>
      </CustomInput>
    </FormGroup>

    <h3 className="mt-4">Disabled</h3>
    <FormGroup>
      <Label for="exampleCustomMutlipleSelectDisabled">
        Custom Multiple Select Disabled
      </Label>
      <CustomInput
        type="select"
        id="exampleCustomMutlipleSelectDisabled"
        name="customSelect"
        multiple
        disabled
      >
        <option value="">Select</option>
        <option>Value 1</option>
        <option>Value 2</option>
        <option>Value 3</option>
        <option>Value 4</option>
        <option>Value 5</option>
      </CustomInput>
    </FormGroup>
  </div>
);

SelectDefault.story = {
  name: "Select - Default"
};

SelectMulti.story = {
  name: "Multiple Select"
};
