import React from "react";
import { ContentHeaderH2 } from "components/text/ContentHeader";
import { DataTable } from "./DataTable";

export default {
  title: "Components|DataTable"
};

export const DataTableDefault = () => {
  let columns = [];
  let data = [];

  return (
    <div>
      <ContentHeaderH2>DataTable - Default</ContentHeaderH2>
      <p className="lead">
        A DataTable that provides paging, sorting, single or mutliple selection,
        actions bar.
      </p>
      <p className="text-danger">Under construction...</p>

      <DataTable />
    </div>
  );
};

DataTableDefault.story = {
  name: "DataTable - Default"
};
