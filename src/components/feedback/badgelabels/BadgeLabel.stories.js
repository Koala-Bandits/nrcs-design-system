import React from "react";
import { BadgeLabel } from "./BadgeLabel";
import { ContentHeaderH1 } from "components/text/ContentHeader";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Feedback/BadgeLabels",
};

export const BadgeLabelsDefault = () => (
  <div>
    <ContentHeaderH1>BadgeLabels</ContentHeaderH1>
    <p className="lead">
      Labels are used to draw attention to new, updated, or important content
      within an application.
    </p>
    <p>
      They are often used in a table 'status' column cells, or next to a form
      input or label or heading.
    </p>

    <h3 className="mt-4">Default</h3>

    <BadgeLabel color="primary">Primary</BadgeLabel>
    <BadgeLabel color="secondary">Secondary</BadgeLabel>
    <BadgeLabel color="success">Success</BadgeLabel>
    <BadgeLabel color="danger">Danger</BadgeLabel>
    <BadgeLabel color="warning">Warning</BadgeLabel>
    <BadgeLabel color="info">Info</BadgeLabel>
    <BadgeLabel color="light">Light</BadgeLabel>
    <BadgeLabel color="dark">Dark</BadgeLabel>

    <p className="mt-4">
      Example status labels of <BadgeLabel color="success">Complete</BadgeLabel>{" "}
      or
      <BadgeLabel color="dark">Not Started</BadgeLabel>
    </p>

    <h3 className="mt-4">Alternate Style</h3>

    <BadgeLabel alt color="primary">
      Primary
    </BadgeLabel>
    <BadgeLabel alt color="secondary">
      Secondary
    </BadgeLabel>
    <BadgeLabel alt color="success">
      Success
    </BadgeLabel>
    <BadgeLabel alt color="danger">
      Danger
    </BadgeLabel>
    <BadgeLabel alt color="warning">
      Warning
    </BadgeLabel>
    <BadgeLabel alt color="info">
      Info
    </BadgeLabel>
    <BadgeLabel alt color="light">
      Light
    </BadgeLabel>
    <BadgeLabel alt color="dark">
      Dark
    </BadgeLabel>
  </div>
);

export const BadgeLabelsHeadings = () => (
  <div>
    <h3 className="mt-4">BadgeLabels - Headings</h3>

    <h1>
      Heading <BadgeLabel color="secondary">New</BadgeLabel>
    </h1>
    <h2>
      Heading <BadgeLabel color="secondary">New</BadgeLabel>
    </h2>
    <h3>
      Heading <BadgeLabel color="secondary">New</BadgeLabel>
    </h3>
    <h4>
      Heading <BadgeLabel color="secondary">New</BadgeLabel>
    </h4>
    <h5>
      Heading <BadgeLabel color="secondary">New</BadgeLabel>
    </h5>
    <h6>
      Heading <BadgeLabel color="secondary">New</BadgeLabel>
    </h6>

    <h3 className="mt-4">Labels - Headings Alternate Style</h3>

    <h1>
      Heading{" "}
      <BadgeLabel alt color="secondary">
        New
      </BadgeLabel>
    </h1>
    <h2>
      Heading{" "}
      <BadgeLabel alt color="secondary">
        New
      </BadgeLabel>
    </h2>
    <h3>
      Heading{" "}
      <BadgeLabel alt color="secondary">
        New
      </BadgeLabel>
    </h3>
    <h4>
      Heading{" "}
      <BadgeLabel alt color="secondary">
        New
      </BadgeLabel>
    </h4>
    <h5>
      Heading{" "}
      <BadgeLabel alt color="secondary">
        New
      </BadgeLabel>
    </h5>
    <h6>
      Heading{" "}
      <BadgeLabel alt color="secondary">
        New
      </BadgeLabel>
    </h6>
  </div>
);

BadgeLabelsDefault.story = {
  name: "BadgeLabels - Default",
};

BadgeLabelsHeadings.story = {
  name: "BadgeLabels - Headings",
};
