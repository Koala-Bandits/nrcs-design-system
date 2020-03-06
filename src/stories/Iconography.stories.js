import React from "react";
import Icon from "@mdi/react";
import {
  mdiInformation,
  mdiAlert,
  mdiAlertCircle,
  mdiCheckCircle
} from "@mdi/js";

export default {
  title: "Design System|Iconography"
};

export const IconographyStory = () => (
  <div className="container">
    <h1 className="docs">Iconography</h1>

    <p>
      NRCS Design System is using the{" "}
      <strong>
        <a href="https://materialdesignicons.com/" target="_blank">
          Materia Design (Community) Icons
        </a>
      </strong>{" "}
      which is a superset of the Google Material Icons.
    </p>
    <ul>
      <li>Implemented as SVG icons on this site an in examples</li>
      <li>
        Default <code>size={"{1}"}</code> or 24px, <code>size={"{0.8}"}</code>{" "}
        18px for smaller sized components
      </li>
      <li>Default icon color: $gray-700 gray</li>
      <li>Action/Clickable icon color: $primary blue</li>
      <li>To get these defaults, icons should include the "mdi" class</li>
    </ul>

    <Icon className="mdi" path={mdiInformation} />
    <Icon className="mdi" path={mdiAlert} />
    <Icon className="mdi" path={mdiAlertCircle} />
    <Icon className="mdi" path={mdiCheckCircle} />
    <p>... more documentation coming ... </p>
  </div>
);
