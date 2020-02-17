import React from "react";
import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";

export default {
  title: "Design System|Components/Links (anchors)"
};

export const LinksDefault = () => (
  <div>
    <h1>Links - Default</h1>
    <a href="#">This is a default link</a> - it links somewhere WITHIN our app.
    <p></p>
    <a href="#">
      This is an external link <Icon path={mdiOpenInNew} size={0.8} />
    </a>{" "}
    - it links somewhere OUTSIDE of our app. We use the 'open in new' icon to
    indicate it's external.
  </div>
);

LinksDefault.story = {
  name: "Links - Default"
};
