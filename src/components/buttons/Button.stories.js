import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "reactstrap";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

export default {
  title: "Design System|Components/Buttons"
  // component: PrimaryButton
};

export const ButtonsDefault = () => (
  <div>
    <h1>Buttons</h1>

    <h2>Default</h2>
    <Button color="primary">Primary</Button>
    <Button outline color="secondary">
      Secondary
    </Button>
    <Button color="link">Link</Button>

    <h2>Small</h2>
    <Button color="primary" size="sm">
      Primary
    </Button>
    <Button outline color="secondary" size="sm">
      Secondary
    </Button>
    <Button color="link" size="sm">
      Link
    </Button>
  </div>
);

export const ButtonsWithIcons = () => (
  <div>
    <h1>Buttons</h1>

    <h2>Default</h2>

    <Button color="primary">
      <Icon path={mdiAccount} size={1} />
      Primary
    </Button>
    <Button outline color="secondary">
      <Icon path={mdiAccount} size={1} />
      Secondary
    </Button>
    <Button color="link">
      <Icon path={mdiAccount} size={1} />
      Link
    </Button>

    <h2>Small</h2>

    <Button color="primary" size="sm">
      <Icon path={mdiAccount} size={0.8} />
      Primary
    </Button>
    <Button outline color="secondary" size="sm">
      <Icon path={mdiAccount} size={0.8} />
      Secondary and more
    </Button>
    <Button color="link" size="sm">
      <Icon path={mdiAccount} size={0.8} />
      Link
    </Button>
  </div>
);

export const ButtonsTypical = () => (
  <div>
    <h1>Buttons - Typical Usage</h1>
    To do... show a content area card/modal, (cancel, tertiary, action) right
    aligned.
  </div>
);

export const ButtonsFooter = () => (
  <div>
    <h1>Buttons - Footer</h1>
    To do... typical button usage, but in box with top-border, used in CART and
    to be used in CD. This will complement our 'ContentHeadings' with a bottom
    border/underline.
  </div>
);

ButtonsDefault.story = {
  name: "Buttons - Default"
};

ButtonsWithIcons.story = {
  name: "Buttons - with Icons"
};

ButtonsTypical.story = {
  name: "Buttons - Typical Usage"
};

ButtonsFooter.story = {
  name: "Buttons - Content Footer"
};
