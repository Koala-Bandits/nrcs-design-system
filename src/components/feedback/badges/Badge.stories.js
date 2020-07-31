import React from "react";
import { Badge } from "./Badge";
import { ContentHeaderH1 } from "components/text/ContentHeader";

export default {
  title: "Components|Feedback/Badges"
};

export const BadgesDefault = () => (
  <div>
    <ContentHeaderH1>Badges</ContentHeaderH1>
    <p className="lead">
      Badges are used as indicators of an update or action items that have yet
      to be completed.
    </p>
    <p>
      These are often used to create a "number-bubble" to display a number,
      count, or id.
    </p>

    <h3 className="mt-4">Default</h3>

    <Badge color="primary">Primary</Badge>
    <Badge color="secondary">Secondary</Badge>
    <Badge color="success">Success</Badge>
    <Badge color="danger">Danger</Badge>
    <Badge color="warning">Warning</Badge>
    <Badge color="info">Info</Badge>
    <Badge color="light">Light</Badge>
    <Badge color="dark">Dark</Badge>

    <p className="mt-4">
      There are <Badge color="danger">6</Badge> errors.
    </p>

    <h3 className="mt-4">Alternate Style</h3>

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

BadgesDefault.story = {
  name: "Badges - Default"
};
