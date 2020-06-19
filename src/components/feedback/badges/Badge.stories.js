import React from "react";
import { Badge } from "./Badge";

export default {
  title: "Components|Feedback/Badges"
};

export const BadgesDefault = () => (
  <div>
    <h2 className="docs">Badges - Default</h2>
    <p className="lead">
      Badges are versatile and often used in a table 'status' column cells, or
      next to a form input or label or heading.
    </p>

    <Badge color="primary">Primary</Badge>
    <Badge color="secondary">Secondary</Badge>
    <Badge color="success">Success</Badge>
    <Badge color="danger">Danger</Badge>
    <Badge color="warning">Warning</Badge>
    <Badge color="info">Info</Badge>
    <Badge color="light">Light</Badge>
    <Badge color="dark">Dark</Badge>

    <h3 className="mt-4">Badges - Alternate Style</h3>

    <Badge alt color="primary">
      Primary
    </Badge>
    <Badge alt color="secondary">
      Secondary
    </Badge>
    <Badge alt color="success">
      Success
    </Badge>
    <Badge alt color="danger">
      Danger
    </Badge>
    <Badge alt color="warning">
      Warning
    </Badge>
    <Badge alt color="info">
      Info
    </Badge>
    <Badge alt color="light">
      Light
    </Badge>
    <Badge alt color="dark">
      Dark
    </Badge>
  </div>
);

export const BadgesPills = () => (
  <div>
    <h3 className="mt-4">Badges - Pills</h3>

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

    <h3 className="mt-4">Badges - Pills Alternate Style</h3>

    <p>To see how it works/looks (TBD)...</p>

    <Badge alt color="primary" pill>
      Primary
    </Badge>
    <Badge alt color="secondary" pill>
      Secondary
    </Badge>
    <Badge alt color="success" pill>
      Success
    </Badge>
    <Badge alt color="danger" pill>
      Danger
    </Badge>
    <Badge alt color="warning" pill>
      Warning
    </Badge>
    <Badge alt color="info" pill>
      Info
    </Badge>
    <Badge alt color="light" pill>
      Light
    </Badge>
    <Badge alt color="dark" pill>
      Dark
    </Badge>
  </div>
);

export const BadgesHeadings = () => (
  <div>
    <h3 className="mt-4">Badges - Headings</h3>

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

BadgesHeadings.story = {
  name: "Badges - Headings"
};
