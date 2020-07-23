import React from "react";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { DataTable } from "./DataTable";

export default {
  title: "Components|DataTable"
};

export const DataTableSmall = () => {
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
      filter: true
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
      filter: false
    }
  ];

  let data = [
    {
      id: "A",
      name: "Astro-Man",
      power: "Is always alert for an alien attack",
      notes: "He has asthma!",
      timestamp: "12/20/1922",
      actions: "..."
    },
    {
      id: "B",
      name: "Bubble-Man",
      power: "Blows big bubbles at bullies",
      notes: "He's a bad boy, is bald, and wears boots.",
      timestamp: "4/14/1937",
      actions: "..."
    },
    {
      id: "C",
      name: "Captain Cloud",
      power: "Calmly catches crookes",
      notes: "He has a cape he's so cool.",
      timestamp: "12/20/1922",
      actions: "..."
    },
    {
      id: "D",
      name: "Danger Man",
      power: "Does daring deeds every day",
      notes: "He's dramatic, doesn't have a dog, but duels with dragons!",
      timestamp: "12/20/1922",
      actions: "..."
    },
    {
      id: "E",
      name: "The Eagle",
      power: "Easily eyes evildoers everwhere",
      notes: "He's exciting and other birds envy him.",
      timestamp: "12/20/1922",
      actions: "..."
    },
    {
      id: "F",
      name: "The Firefly",
      power: "Fights felons in the forest",
      notes: "She doesn't need a flashlight, flies fast, and has fat feet.",
      timestamp: "12/20/1922",
      actions: "..."
    },
    {
      id: "G",
      name: "Goo Girl",
      power: "Shoots great gobs of goo",
      notes: "She wears goggles and gloves. She grins and giggles with glee.",
      timestamp: "12/20/1922",
      actions: "..."
    },
    {
      id: "H",
      name: "Huge Man",
      power: "Is happy to help heros and never harms humans",
      notes: "He's not exactly handsome... even his hands are hairy!",
      timestamp: "12/20/1922",
      actions: "..."
    }
  ];

  let noData = [];

  return (
    <div>
      <h3 className="mt-4">Small</h3>

      <DataTable columns={columns} data={data} size="sm" />

      <h3 className="mt-4">No Data</h3>

      <DataTable columns={columns} data={noData} size="sm" />
    </div>
  );
};

DataTableSmall.story = {
  name: "DataTable - Small"
};
