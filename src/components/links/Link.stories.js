import React from "react";
import Icon from "@mdi/react";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { mdiOpenInNew } from "@mdi/js";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Links (anchors)",
};

export const LinksDefault = () => (
  <div>
    <ContentHeaderH1>Links - Default</ContentHeaderH1>
    <a href="/#">This is a basic link</a> - it links somewhere INSIDE our app.
    <p></p>
    <h3 className="mt-3">External</h3>
    <a
      href="/#"
      target="_blank"
      title="This link will open in a new window or tab"
      aria-label="This link will open in a new window or tab"
    >
      This is an external link{" "}
      <Icon className="mdi" path={mdiOpenInNew} size={0.8} />
    </a>{" "}
    <p className="mt-3">
      Typically using <code>target="_blank"</code>, external links go somewhere
      OUTSIDE of our app.{" "}
    </p>
    <h4>Accessibility</h4>
    <p>
      For accessibility we use the 'open in new' icon for a visual indication
      that it will go elsewhere. Also note that the 'title' and/or 'aria-label'
      are also used to communicate to screen reader users that the link will
      open a new tab or window.
    </p>
    <p>
      If your use of an anchor tag wraps a button or icon as a link (and
      therefore the 'open in new' icon is not present), the use of the 'title'
      attribute causes a browser tooltip to appear which can serve as our visual
      cue to users that this will open elsewhere.
    </p>
  </div>
);

LinksDefault.story = {
  name: "Links - Default",
};
