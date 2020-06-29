import React from "react";
import { Label } from "./Label";
import { ContentHeaderH2 } from "components/text/ContentHeader";

export default {
  title: "Components|Feedback/Labels"
};

export const LabelsDefault = () => (
  <div>
    <ContentHeaderH2>Labels - Default</ContentHeaderH2>
    <p className="lead">
      Labels are used to draw attention to new, updated, or important content
      within an application.
    </p>
    <p>
      They are often used in a table 'status' column cells, or next to a form
      input or label or heading.
    </p>

    <h3 className="mt-4">Labels - Default</h3>

    <Label color="primary">Primary</Label>
    <Label color="secondary">Secondary</Label>
    <Label color="success">Success</Label>
    <Label color="danger">Danger</Label>
    <Label color="warning">Warning</Label>
    <Label color="info">Info</Label>
    <Label color="light">Light</Label>
    <Label color="dark">Dark</Label>

    <p className="mt-4">
      Example status labels of <Label color="success">Complete</Label> or
      <Label color="dark">Not Started</Label>
    </p>

    <h3 className="mt-4">Labels - Alternate Style</h3>

    <Label alt color="primary">
      Primary
    </Label>
    <Label alt color="secondary">
      Secondary
    </Label>
    <Label alt color="success">
      Success
    </Label>
    <Label alt color="danger">
      Danger
    </Label>
    <Label alt color="warning">
      Warning
    </Label>
    <Label alt color="info">
      Info
    </Label>
    <Label alt color="light">
      Light
    </Label>
    <Label alt color="dark">
      Dark
    </Label>
  </div>
);

export const LabelsHeadings = () => (
  <div>
    <h3 className="mt-4">Labels - Headings</h3>

    <h1>
      Heading <Label color="secondary">New</Label>
    </h1>
    <h2>
      Heading <Label color="secondary">New</Label>
    </h2>
    <h3>
      Heading <Label color="secondary">New</Label>
    </h3>
    <h4>
      Heading <Label color="secondary">New</Label>
    </h4>
    <h5>
      Heading <Label color="secondary">New</Label>
    </h5>
    <h6>
      Heading <Label color="secondary">New</Label>
    </h6>

    <h3 className="mt-4">Labels - Headings Alternate Style</h3>

    <h1>
      Heading{" "}
      <Label alt color="secondary">
        New
      </Label>
    </h1>
    <h2>
      Heading{" "}
      <Label alt color="secondary">
        New
      </Label>
    </h2>
    <h3>
      Heading{" "}
      <Label alt color="secondary">
        New
      </Label>
    </h3>
    <h4>
      Heading{" "}
      <Label alt color="secondary">
        New
      </Label>
    </h4>
    <h5>
      Heading{" "}
      <Label alt color="secondary">
        New
      </Label>
    </h5>
    <h6>
      Heading{" "}
      <Label alt color="secondary">
        New
      </Label>
    </h6>
  </div>
);

LabelsDefault.story = {
  name: "Labels - Default"
};

LabelsHeadings.story = {
  name: "Labels - Headings"
};
