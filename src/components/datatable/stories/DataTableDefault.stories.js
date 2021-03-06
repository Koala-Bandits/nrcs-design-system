import React, { useEffect, useState } from "react";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { DataTable } from "../DataTable";
import { Alert } from "components/feedback/alerts/Alert";
import { FlatButton } from "components/buttons/Buttons";
import { mdiPlusBox, mdiRefresh, mdiCloseCircle, mdiFileExport } from "@mdi/js";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/DataTable",
};

// Columns: array of objects
// primary = unique identifier for accessiblitly, if none, uses first column
// header = what's displayed
// align = left (default), right, or center
let columns = [
  {
    primary: true,
    property: "id",
    header: "Id",
    visible: true,
    sort: true,
    filter: true,
    align: "center",
  },
  {
    property: "name",
    header: "Name",
    visible: true,
    sort: true,
    filter: true,
  },
  {
    property: "power",
    header: "Super Power",
    visible: true,
    sort: true,
    filter: true,
  },
  {
    property: "notes",
    header: "Notes",
    visible: true,
    sort: true,
    filter: true,
  },
  {
    property: "timestamp",
    header: "Last Updated",
    visible: true,
    sort: true,
    filter: true,
  },
  {
    property: "actions",
    header: "Actions",
    visible: true,
    sort: false,
    filter: false,
    align: "center",
  },
];

let initData = [
  {
    id: "A",
    name: "Astro-Man",
    power: "Is always alert for an alien attack",
    notes: "He has asthma!",
    timestamp: "12/20/1922",
  },
  {
    id: "B",
    name: "Bubble-Man",
    power: "Blows big bubbles at bullies",
    notes: "He's a bad boy, is bald, and wears boots.",
    timestamp: "4/14/1937",
  },
  {
    id: "C",
    name: "Captain Cloud",
    power: "Calmly catches crookes",
    notes: "He has a cape he's so cool.",
    timestamp: "12/20/1922",
  },
  {
    id: "D",
    name: "Danger Man",
    power: "Does daring deeds every day",
    notes: "He's dramatic, doesn't have a dog, but duels with dragons!",
    timestamp: "12/20/1922",
  },
  {
    id: "E",
    name: "The Eagle",
    power: "Easily eyes evildoers everwhere",
    notes: "He's exciting and other birds envy him.",
    timestamp: "12/20/1922",
  },
  {
    id: "F",
    name: "The Firefly",
    power: "Fights felons in the forest",
    notes: "She doesn't need a flashlight, flies fast, and has fat feet.",
    timestamp: "12/20/1922",
  },
  {
    id: "G",
    name: "Goo Girl",
    power: "Shoots great gobs of goo",
    notes: "She wears goggles and gloves. She grins and giggles with glee.",
    timestamp: "12/20/1922",
  },
  {
    id: "H",
    name: "Huge Man",
    power: "Is happy to help heros and never harms humans",
    notes: "He's not exactly handsome... even his hands are hairy!",
    timestamp: "12/20/1922",
  },
];

let noData = [];

export const DataTableDefault = () => {
  // required to have a primaryProperty for accessibility
  // tells which column to use for row actions and for accessibility aria labeling
  const primaryProperty = "id";

  // action functions
  const onRemove = (id) => {
    // remove row with primary property (id in this case)
    let result = data.filter((rowdata) => rowdata[primaryProperty] !== id);

    // update grid rows
    setData(result);
  };

  const actions = (
    <div className="d-inline">
      <FlatButton
        iconLeft={mdiRefresh}
        onClick={() => {
          onReset();
        }}
      >
        Refresh
      </FlatButton>
      <FlatButton iconLeft={mdiPlusBox}>Add New</FlatButton>
      <FlatButton iconLeft={mdiFileExport}>Export</FlatButton>
    </div>
  );

  const rowactions = (id) => (
    <FlatButton
      iconOnly={mdiCloseCircle}
      onClick={() => {
        onRemove(id);
      }}
    />
  );

  const initState = () => {
    return initData.map((row) => {
      row["actions"] = rowactions(row[primaryProperty]);
      return row;
    });
  };

  const onReset = () => {
    setData(initState());
  };

  const [data, setData] = useState(initState());

  return (
    <div>
      <ContentHeaderH1>DataTable - Default</ContentHeaderH1>
      <p className="lead">
        A DataTable that provides accessible sorting, filtering, paging, with
        single or mutliple selection.
      </p>
      <p>Configurable without being overally complex.</p>
      <Alert color="warning">
        Warning: this component is under development and incomplete.
      </Alert>
      <h3>Props</h3>
      <p>To Do</p>
      <h3>Caption Label, Actions, Paging and Filtering</h3>
      To keep a consistent workflow and patter for DataTables we suggest the
      following:
      <ul>
        <li>
          <strong>Caption</strong> - A HTML <code>caption</code> is used to
          commuicate what and how many records are displayed, in this format:{" "}
          <strong>"Things"</strong>. Which and how many things can also be
          included in the caption <strong>"Things XX-XX of XX"</strong>, or
          otherwise this is bottom of the DataTable inline LEFT-justified (to go
          along with paging controls that are bottom RIGHT-justified)
        </li>
        <li>
          <strong>Paging</strong> - Typically placed bottom right of DataTable,
          but in some cases can appear top right as well for some legacy
          applications or to aid in acessibility.
        </li>
        <li>
          <strong>Actions (bulk)</strong> - Bulk actions inline after caption,
          typically in this order for consistency: REFRESH, ADD, EDIT, DELETE,
          OTHER, EXPORT etc. Then in same inline RIGHT-justifed, are actions for
          amending the records with column-picker or number of records per page.
          NOTE: we are planning to move the column-picker and number of records
          controls at the bottom of the DataTable inline with paging or a part
          of the "XX-XX of XX" labeling.
        </li>
        <li>
          <strong>Actions (row)</strong> - Row actions should be the right most
          column for consistency. Individual icons can be used for 3 or less
          actions otherwise a dropdown "..." menu is suggested to limit
          complexity.
        </li>
        <li>
          <strong>Selection</strong> - If enabled, a selection column either
          single-selection with radio buttons or multiple-selection with
          checkboxes, should always be the first column.
        </li>
      </ul>
      <DataTable
        actions={actions}
        caption="Super Heros"
        summary="A list of the most awesome super heros."
        columns={columns}
        data={data}
        paging
      />
      <h3 className="mt-4">No Data</h3>
      <p>
        It is preferrable to always show a DataTable even when empty. Hiding and
        showing the table can be disruptive to the layout and can leave the
        users confused if they are expecting or waiting for data to be shown.
      </p>
      <DataTable caption="Super Heros" columns={columns} data={noData} />
    </div>
  );
};

DataTableDefault.story = {
  name: "DataTable - Default",
};
