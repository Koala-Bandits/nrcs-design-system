import React from "react";
import { ContentHeaderH2 } from "components/text/ContentHeader";

export default {
  title: "Components|Inputs/Date Picker"
};

export const FormDefault = () => (
  <div>
    <ContentHeaderH2>Form - Default</ContentHeaderH2>
    To do... example vertical layout form with top-aligned labels.
  </div>
);

export const FormHorizontal = () => (
  <div>
    <ContentHeaderH2>Form - Horizontal</ContentHeaderH2>
    To do... example horizontal layout form with left-aligned labels.
  </div>
);

export const FormInline = () => (
  <div>
    <ContentHeaderH2>Form - Inline</ContentHeaderH2>
    To do... example horizontal layout form with left-aligned labels.
  </div>
);

export const FormInputGroup = () => (
  <div>
    <ContentHeaderH2>Form - InputGroup</ContentHeaderH2>
    To do... various input grouping examples.
  </div>
);

FormDefault.story = {
  name: "Form - Default"
};

FormHorizontal.story = {
  name: "Form - Horizontal"
};

FormInline.story = {
  name: "Form - Inline"
};

FormInputGroup.story = {
  name: "Form - Input Group"
};
