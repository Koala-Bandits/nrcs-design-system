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

export const Iconography = () => (
  <div>
    <h1>Iconography</h1>

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
      <li>Currently implemented as SVG icons</li>
      <li>Default size={1} or 24px, 18px for smaller sized components</li>
      <li>Default icon color: $gray-700 gray</li>
      <li>Action/Clickable icon color: $primary blue</li>
      <li>To get these default, icons should include the "mdi" class</li>
    </ul>

    <Icon className="mdi" path={mdiInformation} />
    <Icon className="mdi" path={mdiAlert} />
    <Icon className="mdi" path={mdiAlertCircle} />
    <Icon className="mdi" path={mdiCheckCircle} />
    <p>... more documentation coming ... </p>
  </div>
);
