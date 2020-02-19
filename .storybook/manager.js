import { addons } from "@storybook/addons";
// import { themes } from '@storybook/theming';
import nrcsTheme from "./nrcsTheme";

addons.setConfig({
  theme: nrcsTheme,

  showPanel: false,
  panelPosition: "bottom"
});
