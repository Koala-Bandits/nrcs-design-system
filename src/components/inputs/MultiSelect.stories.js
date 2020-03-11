import React from "react";

export default {
  title: "Components|Inputs/Multi-Select"
};

export const FormDefault = () => (
  <div>
    <h2 className="docs">Form - Default</h2>
    To do... example vertical layout form with top-aligned labels.
  </div>
);

export const FormHorizontal = () => (
  <div>
    <h2 className="docs">Form - Horizontal</h2>
    To do... example horizontal layout form with left-aligned labels.
  </div>
);

export const FormInline = () => (
  <div>
    <h2 className="docs">Form - Inline</h2>
    To do... example horizontal layout form with left-aligned labels.
  </div>
);

export const FormInputGroup = () => (
  <div>
    <h2 className="docs">Form - InputGroup</h2>
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
