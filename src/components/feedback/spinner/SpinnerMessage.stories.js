import React from "react";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { SpinnerMessage } from "./SpinnerMessage";
// import { DataTable } from "components/datatable/DataTable";

export default {
  title: "Components|Feedback/Spinner Messages"
};

export const SpinnerMessagesDefault = () => {
  //   let columns = [
  //     {
  //       primary: true,
  //       property: "id",
  //       header: "Id",
  //       visible: true,
  //       filter: true,
  //       sort: true,
  //       align: "center"
  //     },
  //     {
  //       property: "name",
  //       header: "Name",
  //       visible: true,
  //       filter: true,
  //       sort: true
  //     },
  //     {
  //       property: "power",
  //       header: "Super Power",
  //       visible: true,
  //       filter: true,
  //       sort: true
  //     },
  //     {
  //       property: "notes",
  //       header: "Notes",
  //       visible: true,
  //       filter: true
  //     },
  //     {
  //       property: "timestamp",
  //       header: "Last Updated",
  //       visible: true,
  //       filter: true,
  //       sort: true
  //     }
  //   ];

  //   let noData = [];

  return (
    <div>
      <ContentHeaderH1>Alert Messages</ContentHeaderH1>
      <p className="lead">
        Show progress via a spinner for inline loading of content.
      </p>
      <p>
        Spinner message is essentially an Alert Message using a Spinner in the
        icon position. This is useful for showing inline loading of content.
        Most often shown in the empty body of a table, grid, or tree while data
        is loading.
      </p>
      <SpinnerMessage>Loading...</SpinnerMessage>
      <h3 className="mt-4">Small</h3>
      <SpinnerMessage size="sm">Small Loading...</SpinnerMessage>
      <h3 className="mt-4">Example in DataTable</h3>
      Coming soon...
      {/* <DataTable
        caption="Super Heros"
        columns={columns}
        data={noData}
        size="sm"
      /> */}
    </div>
  );
};

SpinnerMessagesDefault.story = {
  name: "Spinner Message"
};
