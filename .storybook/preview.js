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
addDecorator(storyFn => (
  <div className="container-fluid pt-2">{storyFn()}</div>
));

// Load stories manually first to control oder, then glob-style for the rest
import { configure } from "@storybook/react";

const loadStories = () => {
  const allExports = [
    require("../src/stories/About.stories.js"),
    require("../src/stories/Color.stories.js"),
    require("../src/stories/Typography.stories.js"),
    require("../src/stories/Iconography.stories.js"),
    require("../src/stories/Accessibility.stories.js")
  ];
  const req = require.context("../src/components", true, /\.stories\.js$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};

configure(loadStories, module);
