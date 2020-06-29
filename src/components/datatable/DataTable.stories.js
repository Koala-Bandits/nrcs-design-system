import React from "react";
import { ContentHeaderH2 } from "components/text/ContentHeader";
import { DataTable } from "./DataTable";

export default {
  title: "Components|DataTable"
};

export const DataTableDefault = () => {
  // Columns: array of objects
  let columns = [
    { property: "id", header: "Id", visible: true, sort: true },
    { property: "name", header: "Name", visible: true, sort: true },
    { property: "power", header: "Super Power", visible: true, sort: true },
    { property: "notes", header: "Notes", visible: true, sort: true },
    {
      property: "timestamp",
      header: "Last Updated",
      visible: true,
      sort: false
    },
    { property: "actions", header: "Actions", visible: true, sort: false }
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
      id: "C",
      name: "Captain Cloud",
      power: "Calmly catches crookes",
      notes: "He has a cape he's so cool.",
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

  return (
    <div>
      <ContentHeaderH2>DataTable - Default</ContentHeaderH2>
      <p className="lead">
        A DataTable that provides paging, sorting, single or mutliple selection,
        actions bar.
      </p>
      <p className="text-danger">Under construction...</p>

      <DataTable columns={columns} data={data} />
    </div>
  );
};

DataTableDefault.story = {
  name: "DataTable - Default"
};
