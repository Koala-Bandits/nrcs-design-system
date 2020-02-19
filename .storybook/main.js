const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = {
  // stories: ["../src/stories/0-Welcome.stores.js", "../src/**/*.stories.js"],
  addons: [
    "@storybook/preset-create-react-app",
    // "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/preset-scss"
  ]
};
