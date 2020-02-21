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
  title: "Components|Tables"
};

export const TablesDefault = () => (
  <div>
    <h1>Tables - Default</h1>
    <p>
      To Do... FPAC style table with gray header, no zebra, horiz. lines, light
      gray hover, light blue selection w/ bold styles.
    </p>
  </div>
);

export const TablesAlt = () => (
  <div>
    <h1>Table - Alternate</h1>

    <p>
      To Do... FPAC style table with no header and/or no boxed border for use in
      showing metadata or uses in FundsManager and smaller displays.
    </p>
  </div>
);

TablesDefault.story = {
  name: "Tables - Default"
};

TablesAlt.story = {
  name: "Tables - Alternate"
};
