import React from "react";
import { DataTable } from "../DataTable";

export default {
  title: 'Components/DataTable'
};

export const DataTableSmall = () => {
  // required to have a primaryProperty for accessibility
  // tells which column to use for row actions and for accessibility aria labeling
  const primaryProperty = "id";

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
      filter: true,
      sort: true,
      align: "center"
    },
    {
      property: "name",
      header: "Name",
      visible: true,
      filter: true,
      sort: true
    },
    {
      property: "power",
      header: "Super Power",
      visible: true,
      filter: true,
      sort: true
    },
    {
      property: "notes",
      header: "Notes",
      visible: true,
      filter: true
    },
    {
      property: "timestamp",
      header: "Last Updated",
      visible: true,
      filter: true,
      sort: true
    }
  ];

  let data = [
    {
      id: "A",
      name: "Astro-Man",
      power: "Is always alert for an alien attack",
      notes: "He has asthma!",
      timestamp: "12/20/1922"
    },
    {
      id: "B",
      name: "Bubble-Man",
      power: "Blows big bubbles at bullies",
      notes: "He's a bad boy, is bald, and wears boots.",
      timestamp: "4/14/1937"
    },
    {
      id: "C",
      name: "Captain Cloud",
      power: "Calmly catches crookes",
      notes: "He has a cape he's so cool.",
      timestamp: "12/20/1922"
    },
    {
      id: "D",
      name: "Danger Man",
      power: "Does daring deeds every day",
      notes: "He's dramatic, doesn't have a dog, but duels with dragons!",
      timestamp: "12/20/1922"
    },
    {
      id: "E",
      name: "The Eagle",
      power: "Easily eyes evildoers everwhere",
      notes: "He's exciting and other birds envy him.",
      timestamp: "12/20/1922"
    },
    {
      id: "F",
      name: "The Firefly",
      power: "Fights felons in the forest",
      notes: "She doesn't need a flashlight, flies fast, and has fat feet.",
      timestamp: "12/20/1922"
    },
    {
      id: "G",
      name: "Goo Girl",
      power: "Shoots great gobs of goo",
      notes: "She wears goggles and gloves. She grins and giggles with glee.",
      timestamp: "12/20/1922"
    },
    {
      id: "H",
      name: "Huge Man",
      power: "Is happy to help heros and never harms humans",
      notes: "He's not exactly handsome... even his hands are hairy!",
      timestamp: "12/20/1922"
    }
  ];

  let noData = [];

  return (
    <div>
      <h3 className="mt-4">DataTable - Small</h3>

      <DataTable
        caption="Super Heros"
        summary="A list of the most awesome super heros."
        columns={columns}
        data={data}
        size="sm"
      />

      <h3 className="mt-4">No Data</h3>

      <DataTable
        caption="Super Heros"
        columns={columns}
        data={noData}
        size="sm"
      />
    </div>
  );
};

DataTableSmall.story = {
  name: "DataTable - Small"
};
