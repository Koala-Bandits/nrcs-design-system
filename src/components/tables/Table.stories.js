import React, { useState } from "react";
import { Table } from "reactstrap";
import {
  ContentHeaderH1,
  ContentHeaderH2,
} from "components/text/ContentHeader";
// import { Alert, Container, Row, Col } from "reactstrap";
// import Icon from "@mdi/react";
// import {
//   mdiInformation,
//   mdiAlert,
//   mdiAlertCircle,
//   mdiCheckCircle
// } from "@mdi/js";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Tables",
};

export const TablesDefault = () => (
  <div>
    <ContentHeaderH1>Tables</ContentHeaderH1>
    <p className="lead">Baisc HTML Tables.</p>
    <p>
      Offering two styles and two sizes. If you need sorting, filtering or other
      features, take a look at the DataTable component.
    </p>
    <Table>
      <thead className="thead-light">
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

    <h3 className="mt-4">Small</h3>

    <Table className="table-sm">
      <thead className="thead-light">
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export const TablesAlt = () => (
  <div>
    <ContentHeaderH2>Alternate Borderless</ContentHeaderH2>

    <Table className="table-alt">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

    <h3 className="mt-4">Small</h3>

    <Table className="table-alt table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export const TablesUsage = () => (
  <div>
    <ContentHeaderH2>Usage Guidelines</ContentHeaderH2>
    <h3>First Column</h3>

    <p>
      Typically the first column should be the unique identifier and/or the
      primary "name" or value of the records you are showing. For example, if
      your Table is a list of "Employees" the first column would most likely
      either be their "First Name" or "Employee Number". This is for consistency
      as well as accessibility for other columns to refer back to in their
      aria-labeling.
    </p>

    <h3>Zebra Striping (lack of)</h3>
    <p>
      Note that we do not use "zebra striping" or the coloring of every other
      row. Though there is some debate about this helping users visually line up
      a row of content. Our own take on this is that our applications tend to
      have lots of DataTables, even several on a page which with zebra striping
      can result in a busy or noisy appearance.
    </p>
    <p>
      DataTables & Tables can still enable 'hover' coloration to aid in row
      alignment, and we tend to design pages with a limited amount of rows and
      columns, and engage paging, filtering, and/or a column picker for giving
      the tools a user needs to efficiently consume content while keeping the
      appearance clear and uncluttered.
    </p>
    <h3>Column Alignment</h3>
    <p>
      In general follow these guidlines for consistent alignment of content and
      this should apply to both header and cell content for any given column:
    </p>
    <ul>
      <li>
        <strong>LEFT-justify</strong> is the default and is used for most
        multi-word, sentence, or column with varying content. Also used for
        single-word/phrase/elements (Badges, Labels) and can be used for numbers
        (like time or date). In general is the safest for readability. Numbers,
        used as an identifier in left most 1st column should be left aligned.
        Columns with editable inputs are usually left aligned if not full width
        of the column.
      </li>
      <li>
        <strong>RIGHT-justify</strong> numbers, values, amounts, currency,
        counts, to aid in visual alignment and comparison/scanability.
      </li>
      <li>
        <strong>CENTER</strong> for element items like an action button/menu,
        selection checkbox or radio.
      </li>
      <li>
        In some cases a designer may choose to do something different depending
        on context and need.
      </li>
    </ul>
  </div>
);

TablesDefault.story = {
  name: "Tables - Default",
};

TablesAlt.story = {
  name: "Tables - Alternate",
};

TablesUsage.story = {
  names: "Tables - Usage",
};
