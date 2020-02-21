import React from "react";
// import { action } from "@storybook/addon-actions";
import { Button } from "reactstrap";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

export default {
  title: "Components|Buttons"
  // component: PrimaryButton
};

export const ButtonsDefault = () => (
  <div>
    <h1 className="docs">Buttons</h1>

    <h2 className="docs">Default</h2>
    <Button color="primary">Primary</Button>
    <Button outline color="primary">
      Secondary
    </Button>
    <Button color="link">Flat</Button>

    <h2 className="docs">Small</h2>
    <Button color="primary" size="sm">
      Primary
    </Button>
    <Button outline color="primary" size="sm">
      Secondary
    </Button>
    <Button color="link" size="sm">
      Flat
    </Button>

    <h2 className="docs">Disabled</h2>
    <Button color="primary" aria-disabled="true" disabled>
      Primary
    </Button>
    <Button outline color="primary" aria-disabled="true" disabled>
      Secondary
    </Button>
    <Button color="link" aria-disabled="true" disabled>
      Flat
    </Button>
  </div>
);

export const ButtonsWithIcons = () => (
  <div>
    <h1 className="docs">Buttons</h1>

    <h2 className="docs">Default</h2>

    <Button color="primary">
      <Icon className="mdi" path={mdiAccount} />
      Primary
    </Button>
    <Button outline color="primary">
      <Icon className="mdi" path={mdiAccount} />
      Secondary
    </Button>
    <Button color="link">
      <Icon className="mdi" path={mdiAccount} />
      Flat
    </Button>

    <h2 className="docs">Small</h2>

    <Button color="primary" size="sm">
      <Icon className="mdi" path={mdiAccount} size={0.8} />
      Primary
    </Button>
    <Button outline color="primary" size="sm">
      <Icon className="mdi" path={mdiAccount} size={0.8} />
      Secondary and more
    </Button>
    <Button color="link" size="sm">
      <Icon className="mdi" path={mdiAccount} size={0.8} />
      Flat
    </Button>

    <h2 className="docs">Disabled</h2>

    <Button color="primary" size="sm" aria-disabled="true" disabled>
      <Icon className="mdi" path={mdiAccount} size={0.8} />
      Primary
    </Button>
    <Button outline color="primary" size="sm" aria-disabled="true" disabled>
      <Icon className="mdi" path={mdiAccount} size={0.8} />
      Secondary and more
    </Button>
    <Button color="link" size="sm" aria-disabled="true" disabled>
      <Icon className="mdi" path={mdiAccount} size={0.8} />
      Flat
    </Button>
  </div>
);

export const ButtonsTypical = () => (
  <div>
    <h1 className="docs">Buttons - Typical Usage</h1>
    To do... show a content area card/modal, (cancel, tertiary, action) right
    aligned.
  </div>
);

export const ButtonsFooter = () => (
  <div>
    <h1 className="docs">Buttons - Footer</h1>
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
