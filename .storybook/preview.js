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
import { ToastProvider } from "components/feedback/growls/toastProvider.js";

addDecorator(storyFn => (
  <ToastProvider>
    <div className="container-fluid pt-2">{storyFn()}</div>
  </ToastProvider>
));

import { configure } from "@storybook/react";

// Load stories manually first to control oder, then glob-style for the rest
const loadStories = () => {
  const allExports = [
    require("../src/pages/About.stories.js"),
    require("../src/pages/VisualStyle.stories.js"),
    require("../src/pages/visual-style/Color.stories.js"),
    require("../src/pages/visual-style/Typography.stories.js"),
    require("../src/pages/visual-style/Iconography.stories.js"),
    require("../src/pages/Components.stories.js"),
    require("../src/pages/Guides.stories.js"),
    require("../src/pages/guides/Accessibility.stories.js"),
    require("../src/pages/guides/GridAndLayout.stories.js"),
    require("../src/pages/guides/Utilities.stories.js")
  ];
  const req = require.context("../src/components", true, /\.stories\.js$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};

configure(loadStories, module);
