import React from "react";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { SpinnerMessage } from "./SpinnerMessage";

export default {
  title: "Components|Feedback/Spinner Messages"
};

export const SpinnerMessagesDefault = () => (
  <div>
    <ContentHeaderH1>Alert Messages</ContentHeaderH1>
    <p className="lead">
      Show progress via a spinner for inline loading of content.
    </p>

    <p>
      Spinner message is essentially an Alert Message using a Spinner in the
      icon position. This is useful for showing inline loading of content. Most
      often shown in the empty body of a table, grid, or tree while data is
      loading.
    </p>

    <SpinnerMessage>Loading...</SpinnerMessage>

    <h3 className="mt-4">Small</h3>

    <SpinnerMessage size="sm">Small Loading...</SpinnerMessage>
  </div>
);

SpinnerMessagesDefault.story = {
  name: "Spinner Message"
};
