import React from "react";

export default {
  title: "Components|Form Examples/Form"
};

export const FormDefault = () => (
  <div>
    <h1 className="docs">Form - Default</h1>
    To do... example vertical layout form with top-aligned labels.
  </div>
);

export const FormHorizontal = () => (
  <div>
    <h1 className="docs">Form - Horizontal</h1>
    To do... example horizontal layout form with left-aligned labels.
  </div>
);

export const FormInline = () => (
  <div>
    <h1 className="docs">Form - Inline</h1>
    To do... example horizontal layout form with left-aligned labels.
  </div>
);

export const FormInputGroup = () => (
  <div>
    <h1 className="docs">Form - InputGroup</h1>
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
