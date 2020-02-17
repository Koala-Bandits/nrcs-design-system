import React from "react";
import { action } from "@storybook/addon-actions";
// import Button from "./Button.js";

export default {
  component: "Button",
  title: "Button"
};

export const Base = () => (
  <div>
    <h1>Components</h1>
    <button type="button" class="btn btn-primary">
      Primary
    </button>
    <button type="button" class="btn btn-secondary">
      Secondary
    </button>
    <button type="button" class="btn btn-success">
      Success
    </button>
    <button type="button" class="btn btn-danger">
      Danger
    </button>
    <button type="button" class="btn btn-warning">
      Warning
    </button>
    <button type="button" class="btn btn-info">
      Info
    </button>
    <button type="button" class="btn btn-light">
      Light
    </button>
    <button type="button" class="btn btn-dark">
      Dark
    </button>

    <button type="button" class="btn btn-link">
      Link
    </button>
  </div>
);
