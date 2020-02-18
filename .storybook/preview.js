// Global Styles

// NRCS Bootstrap
// import "../src/scss/nrcs-style.scss";
// github.com/storybookjs/storybook/issues/6364
import "!style-loader!css-loader!sass-loader!../src/scss/nrcs-design-system.scss";
// from NPM modules
// import "bootstrap/dist/css/bootstrap.css";

// Global decorator
import React from "react";
import { addDecorator } from "@storybook/react";
addDecorator(storyFn => <div className="container-fluid">{storyFn()}</div>);
