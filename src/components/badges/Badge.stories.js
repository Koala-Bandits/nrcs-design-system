import React from "react";
import { action } from "@storybook/addon-actions";
import { Badge } from "reactstrap";
// import Icon from "@mdi/react";
// import { mdiAccount } from "@mdi/js";

export default {
  title: "Components|/Badges"
};

export const BadgesDefault = () => (
  <div>
    <h1>Badges - Default</h1>

    <Badge color="primary">Primary</Badge>
    <Badge color="secondary">Secondary</Badge>
    <Badge color="success">Success</Badge>
    <Badge color="danger">Danger</Badge>
    <Badge color="warning">Warning</Badge>
    <Badge color="info">Info</Badge>
    <Badge color="light">Light</Badge>
    <Badge color="dark">Dark</Badge>
  </div>
);

export const BadgesPills = () => (
  <div>
    <h1>Badges - Pills</h1>

    <Badge color="primary" pill>
      Primary
    </Badge>
    <Badge color="secondary" pill>
      Secondary
    </Badge>
    <Badge color="success" pill>
      Success
    </Badge>
    <Badge color="danger" pill>
      Danger
    </Badge>
    <Badge color="warning" pill>
      Warning
    </Badge>
    <Badge color="info" pill>
      Info
    </Badge>
    <Badge color="light" pill>
      Light
    </Badge>
    <Badge color="dark" pill>
      Dark
    </Badge>
  </div>
);

export const BadgesIcons = () => (
  <div>
    <h1>Badges - Pills</h1>
    To Do...
  </div>
);

export const BadgesHeadings = () => (
  <div>
    <h1>Badges - Headings</h1>

    <h1>
      Heading <Badge color="secondary">New</Badge>
    </h1>
    <h2>
      Heading <Badge color="secondary">New</Badge>
    </h2>
    <h3>
      Heading <Badge color="secondary">New</Badge>
    </h3>
    <h4>
      Heading <Badge color="secondary">New</Badge>
    </h4>
    <h5>
      Heading <Badge color="secondary">New</Badge>
    </h5>
    <h6>
      Heading <Badge color="secondary">New</Badge>
    </h6>
  </div>
);

BadgesDefault.story = {
  name: "Badges - Default"
};

BadgesPills.story = {
  name: "Badges - Pills"
};

BadgesIcons.story = {
  name: "Badges - Icons"
};

BadgesHeadings.story = {
  name: "Badges - Headings"
};
