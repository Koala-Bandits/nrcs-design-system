import React, { useState } from "react";
import { FormGroup, Label } from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { Radio } from "./Radio";
import { PrimaryButton } from "components/buttons";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Inputs/Radio",
};

export const RadioDefault = () => {
  const [isReadOnly, setIsReadOnly] = useState(true);

  return (
    <div>
      <ContentHeaderH1>Radios</ContentHeaderH1>

      <h3 className="mt-4">Default Custom</h3>
      <FormGroup>
        <Label for="exampleRadio">Radio Label</Label>
        <Radio
          name="radio1"
          value="val1"
          id="exampleCustomRadio"
          label="Check this custom radio"
          checked
        />
        <Radio
          name="radio1"
          value="val2"
          type="radio"
          id="exampleCustomRadio2"
          label="Or this one"
        />
        <Radio
          name="radio1"
          value="val3"
          id="exampleCustomRadio3"
          label="But not this disabled one"
          disabled
        />
        <Radio
          name="radio1"
          value="val4"
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
          <Radio
            name="radio2"
            value="val1"
            id="exampleCustomInline"
            label="An inline custom input"
            inline
            checked
          />
          <Radio
            value="val2"
            name="radio2"
            id="exampleCustomInline2"
            label="and another one"
            inline
          />
        </div>
      </FormGroup>

      <h3 className="mt-4">Read Only (508 compliant)</h3>
      <FormGroup>
        <Label for="exampleRadio">Read Only</Label>
        <Radio
          name="radio3"
          value="val1"
          id="exampleReadOnlyRadio1"
          label="Option 1"
          readOnly={isReadOnly}
        />
        <Radio
          name="radio3"
          value="val2"
          id="exampleReadOnlyRadio2"
          label="Option 2"
          readOnly={isReadOnly}
        />
        <PrimaryButton
          className="mt-1"
          onClick={() => {
            setIsReadOnly(!isReadOnly);
          }}
        >
          Toggle Disablement
        </PrimaryButton>
      </FormGroup>
    </div>
  );
};

RadioDefault.story = {
  name: "Radio - Default",
};
