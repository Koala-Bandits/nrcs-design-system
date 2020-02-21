import React, { useState } from "react";
// import { Alert, Container, Row, Col } from "reactstrap";
// import Icon from "@mdi/react";
// import {
//   mdiInformation,
//   mdiAlert,
//   mdiAlertCircle,
//   mdiCheckCircle
// } from "@mdi/js";

export default {
  title: "Components|Data Table"
};

export const DataTableDefault = () => (
  <div>
    <h1>Data Table - Default</h1>
    <p>
      To Do... FPAC style table with gray header, no zebra, horiz. lines, light
      gray hover, light blue selection w/ bold styles...
    </p>
    <p>
      ... WITH row selection, indicatior column, status column with
      badge-labels, actions menu, and upper responsive layout for table ations
      and paging controls all integrated as a suggested implementation.
    </p>
  </div>
);

DataTableDefault.story = {
  name: "Data Table - Default"
};
