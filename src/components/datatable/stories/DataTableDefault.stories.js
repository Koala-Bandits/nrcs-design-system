import React, { useMemo, useEffect, useState } from "react";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { DataTable } from "../DataTable";
import { FlatButton } from "components/buttons/Buttons";
import { mdiPlusBox, mdiRefresh, mdiCloseCircle, mdiFileExport } from "@mdi/js";

export default {
  title: "Components|DataTable"
};

export const DataTableDefault = () => {
  // required to have a primaryProperty for accessibility
  // tells which column to use for row actions and for accessibility aria labeling
  const primaryProperty = "id";

  // action functions
  const onRemove = id => {
    // remove row with primary property (id in this case)
    // data.filter()? etc.
    console.log("deleting " + id);
    let result = data.filter(rowdata => rowdata[primaryProperty] !== id);
    data = result;

    // setData(data.filter(rowdata => rowdata[primaryProperty] !== id));
    // let removed = data.splice(
    //   data.findIndex(rowdata => rowdata[primaryProperty] === id),
    //   1
    // );
  };

  // useEffect(() => {
  //   setData(myData);
  // });

  const actions = (
    <div className="d-inline">
      <FlatButton iconLeft={mdiRefresh}>Refresh</FlatButton>
      <FlatButton iconLeft={mdiPlusBox}>Add New</FlatButton>
      <FlatButton iconLeft={mdiFileExport}>Export</FlatButton>
    </div>
  );

  const rowactions = id => (
    <FlatButton
      iconOnly={mdiCloseCircle}
      onClick={() => {
        onRemove(id);
      }}
    />
  );

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
      align: "center"
    },
    {
      property: "name",
      header: "Name",
      visible: true,
      sort: true,
      filter: true
    },
    {
      property: "power",
      header: "Super Power",
      visible: true,
      sort: true,
      filter: true
    },
    {
      property: "notes",
      header: "Notes",
      visible: true,
      sort: true,
      filter: true
    },
    {
      property: "timestamp",
      header: "Last Updated",
      visible: true,
      sort: true,
      filter: true
    },
    {
      property: "actions",
      header: "Actions",
      visible: true,
      sort: false,
      filter: false,
      align: "center"
    }
  ];

  let data = [
    {
      id: "A",
      name: "Astro-Man",
      power: "Is always alert for an alien attack",
      notes: "He has asthma!",
      timestamp: "12/20/1922",
      actions: rowactions("A")
    },
    {
      id: "B",
      name: "Bubble-Man",
      power: "Blows big bubbles at bullies",
      notes: "He's a bad boy, is bald, and wears boots.",
      timestamp: "4/14/1937",
      actions: rowactions("B")
    },
    {
      id: "C",
      name: "Captain Cloud",
      power: "Calmly catches crookes",
      notes: "He has a cape he's so cool.",
      timestamp: "12/20/1922",
      actions: rowactions("C")
    },
    {
      id: "D",
      name: "Danger Man",
      power: "Does daring deeds every day",
      notes: "He's dramatic, doesn't have a dog, but duels with dragons!",
      timestamp: "12/20/1922",
      actions: rowactions("D")
    },
    {
      id: "E",
      name: "The Eagle",
      power: "Easily eyes evildoers everwhere",
      notes: "He's exciting and other birds envy him.",
      timestamp: "12/20/1922",
      actions: rowactions("E")
    },
    {
      id: "F",
      name: "The Firefly",
      power: "Fights felons in the forest",
      notes: "She doesn't need a flashlight, flies fast, and has fat feet.",
      timestamp: "12/20/1922",
      actions: rowactions("F")
    },
    {
      id: "G",
      name: "Goo Girl",
      power: "Shoots great gobs of goo",
      notes: "She wears goggles and gloves. She grins and giggles with glee.",
      timestamp: "12/20/1922",
      actions: rowactions("G")
    },
    {
      id: "H",
      name: "Huge Man",
      power: "Is happy to help heros and never harms humans",
      notes: "He's not exactly handsome... even his hands are hairy!",
      timestamp: "12/20/1922",
      actions: rowactions("H")
    }
  ];

  // const [data, setData] = useState(initData);

  const getData = () => {
    return data;
  };

  const adjustedData = useMemo(() => getData(), [data]);

  let noData = [];

  return (
    <div>
      <ContentHeaderH1>DataTable - Default</ContentHeaderH1>

      <p className="lead">
        A DataTable that provides accessible sorting, filtering, paging, with
        single or mutliple selection.
      </p>

      <p>Configurable without being overally complex.</p>

      <h3>Props</h3>
      <p>To Do</p>

      <h3>Column Alignment</h3>
      <ul>
        <li>
          <strong>left-align</strong> is the default, and is used for most
          multi-word, sentence, or column with varying content. Also used for
          single-word/phrase/elements (badges, labels) and can be used for
          numbers (like time or date). In general is the safest for readability.
          Numbers, used as an identifier in left most 1st column should be left
          aligned. Columns with editable inputs are usually left aligned as
          well.
        </li>
        <li>
          <strong>right-align</strong> for numbers in general or currency to aid
          in visual alignment and comparison/scanability.
        </li>
        <li>
          <strong>center-align</strong> usually only for element items like an
          action button/menu, selection checkbox or radio.
        </li>
        <li>In general, all text should be vertically aligned to the top.</li>
        <li>
          This can be subject to context and designer's discretion for specific
          use cases.
        </li>
      </ul>

      <DataTable
        actions={actions}
        caption="Super Heros"
        summary="A list of the most awesome super heros."
        columns={columns}
        data={adjustedData}
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
  name: "DataTable - Default"
};
