import React, { useState } from "react";
import { Table } from "reactstrap";
// import { Alert, Container, Row, Col } from "reactstrap";
import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";

export default {
  title: "Components|Tables"
};

export const DataTableDefault = () => (
  <div>
    <h1 className="docs">Table - Complex</h1>
    <p>
      To Do... FPAC style table with gray header, no zebra, horiz. lines, light
      gray hover, light blue selection w/ bold styles...
    </p>
    <p>
      ... WITH row selection, indicatior column, status column with
      badge-labels, actions menu, and upper responsive layout for table ations
      and paging controls all integrated as a suggested implementation.
    </p>

    <Table hover>
      <caption>List of rental car inventory</caption>
      <thead className="thead-light">
        <tr>
          <th>[]</th>
          <th>Type</th>
          <th>Make</th>
          <th>Model</th>
          <th>Notes</th>
          <th>Last Modified</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>icon</td>
          <td>Ford</td>
          <td>F150</td>
          <td>Includes tow-hitch, cargo rack.</td>
          <td>timestamp</td>
          <td>badge</td>
          <td>
            <Icon className="mdi" path={mdiDotsVertical} />
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>icon</td>
          <td>Ford</td>
          <td>F150</td>
          <td>Includes tow-hitch, cargo rack.</td>
          <td>timestamp</td>
          <td>badge</td>
          <td>...</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>icon</td>
          <td>Ford</td>
          <td>F150</td>
          <td>Includes tow-hitch, cargo rack.</td>
          <td>timestamp</td>
          <td>badge</td>
          <td>...</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>icon</td>
          <td>Ford</td>
          <td>F150</td>
          <td>Includes tow-hitch, cargo rack.</td>
          <td>timestamp</td>
          <td>badge</td>
          <td>...</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>icon</td>
          <td>Ford</td>
          <td>F150</td>
          <td>Includes tow-hitch, cargo rack.</td>
          <td>timestamp</td>
          <td>badge</td>
          <td>...</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>icon</td>
          <td>Ford</td>
          <td>F150</td>
          <td>Includes tow-hitch, cargo rack.</td>
          <td>timestamp</td>
          <td>badge</td>
          <td>...</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>icon</td>
          <td>Ford</td>
          <td>F150</td>
          <td>Includes tow-hitch, cargo rack.</td>
          <td>timestamp</td>
          <td>badge</td>
          <td>...</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

DataTableDefault.story = {
  name: "Tables - Complex"
};
