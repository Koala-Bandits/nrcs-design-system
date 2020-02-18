import React from "react";

export default {
  title: "Design System|Input Components/Select"
};

export const FormDefault = () => (
  <div>
    <h1>Form - Default</h1>
    To do... example vertical layout form with top-aligned labels. Custom SELECT
    menus need only a custom class, .custom-select to trigger the custom styles.
    Custom styles are limited to the SELECT’s initial appearance and cannot
    modify the OPTIONs due to browser limitations.
    <a href="https://useiconic.com/open">
      useiconic icons for custom select icon, specifcially chevron-bottom to
      match Pega-8 and FPAC DS.
    </a>
  </div>
);

export const FormHorizontal = () => (
  <div>
    <h1>Form - Horizontal</h1>
    To do... example horizontal layout form with left-aligned labels.
  </div>
);

export const FormInline = () => (
  <div>
    <h1>Form - Inline</h1>
    To do... example horizontal layout form with left-aligned labels.
  </div>
);

export const FormInputGroup = () => (
  <div>
    <h1>Form - InputGroup</h1>
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
