import React from "react";
import { Badge } from "reactstrap";

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
    <Badge className="badge-fpac" color="primary">
      Primary
    </Badge>
    <Badge className="badge-fpac" color="secondary">
      Secondary
    </Badge>
    <Badge className="badge-fpac" color="success">
      Success
    </Badge>
    <Badge className="badge-fpac" color="danger">
      Danger
    </Badge>
    <Badge className="badge-fpac" color="warning">
      Warning
    </Badge>
    <Badge className="badge-fpac" color="info">
      Info
    </Badge>
    <Badge className="badge-fpac" color="light">
      Light
    </Badge>
    <Badge className="badge-fpac" color="dark">
      Dark
    </Badge>

    <h2 className="mt-4">Alerts - Alternate</h2>

    <p>To see how it works/looks (TBD)...</p>

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
    <h2 className="docs">Badges - Pills</h2>

    <Badge className="badge-fpac" color="primary" pill>
      Primary
    </Badge>
    <Badge className="badge-fpac" color="secondary" pill>
      Secondary
    </Badge>
    <Badge className="badge-fpac" color="success" pill>
      Success
    </Badge>
    <Badge className="badge-fpac" color="danger" pill>
      Danger
    </Badge>
    <Badge className="badge-fpac" color="warning" pill>
      Warning
    </Badge>
    <Badge className="badge-fpac" color="info" pill>
      Info
    </Badge>
    <Badge className="badge-fpac" color="light" pill>
      Light
    </Badge>
    <Badge className="badge-fpac" color="dark" pill>
      Dark
    </Badge>

    <h2 className="mt-4">Alerts - Alternate</h2>

    <p>To see how it works/looks (TBD)...</p>

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

export const BadgesHeadings = () => (
  <div>
    <h2 className="docs">Badges - Headings</h2>

    <h3>
      Heading <Badge color="secondary">New</Badge>
    </h3>
    <h3>
      Heading <Badge color="secondary">New</Badge>
    </h3>
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
