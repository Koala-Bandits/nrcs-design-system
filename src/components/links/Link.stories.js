import React from "react";
import Icon from "@mdi/react";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { mdiOpenInNew } from "@mdi/js";

export default {
  title: "Components|Links (anchors)"
};

export const LinksDefault = () => (
  <div>
    <ContentHeaderH1>Links - Default</ContentHeaderH1>
    <a href="/#">This is a link</a> - it links somewhere INSIDE our app.
    <p></p>
    <a href="/#">
      This is an external link{" "}
      <Icon className="mdi" path={mdiOpenInNew} size={0.8} />
    </a>{" "}
    - it links somewhere OUTSIDE of our app. We use the 'open in new' icon to
    indicate it's external.
  </div>
);

LinksDefault.story = {
  name: "Links - Default"
};
