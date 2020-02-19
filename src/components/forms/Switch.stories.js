import React from "react";
import { Form, FormGroup, Label, CustomInput, Input } from "reactstrap";

export default {
  title: "Design System|Input Components/Switch"
};

export const SwitchDefault = () => (
  <div>
    <h1>Switches</h1>

    <h2>Default Custom</h2>
    <FormGroup>
      <Label for="exampleCheckbox">Switch Label</Label>
      <CustomInput
        type="switch"
        id="exampleCustomSwitch"
        name="customSwitch"
        label="Turn on this custom switch"
      />
      <CustomInput
        type="switch"
        id="exampleCustomSwitch2"
        name="customSwitch"
        label="Or this one"
      />
      <CustomInput
        type="switch"
        id="exampleCustomSwitch3"
        label="But not this disabled one"
        disabled
      />
      <CustomInput
        type="switch"
        id="exampleCustomSwitch4"
        label="Can't click this label to turn on!"
        htmlFor="exampleCustomSwitch4_X"
        disabled
      />
    </FormGroup>

    <h2>Inline Custom</h2>
    <FormGroup>
      <CustomInput
        type="switch"
        id="exampleCustomSwitchI"
        name="customSwitch"
        label="Turn on this custom switch"
        inline
      />
      <CustomInput
        type="switch"
        id="exampleCustomSwitchI2"
        name="customSwitch"
        label="Or this one"
        inline
      />
    </FormGroup>
  </div>
);

SwitchDefault.story = {
  name: "Switch - Default"
};
