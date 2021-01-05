import React from "react";
import { Form, FormGroup, Label, CustomInput, Input } from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";

export default {
  title: 'Components/Inputs/Switch'
};

export const SwitchDefault = () => (
  <div>
    <ContentHeaderH1>Switches</ContentHeaderH1>

    <h3 className="mt-4">Default Custom</h3>
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
        label="This was is already on"
        checked
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

    <h3 className="mt-4">Inline Custom</h3>
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
