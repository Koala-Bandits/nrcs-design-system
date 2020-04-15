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
    require("../src/pages/About.stories.js"),
    require("../src/pages/VisualStyle.stories.js"),
    require("../src/pages/visual-style/Color.stories.js"),
    require("../src/pages/visual-style/Typography.stories.js"),
    require("../src/pages/visual-style/Iconography.stories.js"),
    require("../src/pages/Components.stories.js"),
    require("../src/pages/Guides.stories.js"),
    require("../src/pages/guides/Accessibility.stories.js"),
    require("../src/pages/guides/GridAndLayout.stories.js"),

    // WCIS Stories
    require("../src/wcis/HeaderWcis.stories.js"),
    require("../src/wcis/FooterWcis.stories.js"),
    require("../src/wcis/Dashboard.stories.js"),
    require("../src/wcis/Profiles.stories.js"),
    require("../src/wcis/Configuration.stories.js")
  ];
  const req = require.context("../src/components", true, /\.stories\.js$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};

configure(loadStories, module);
