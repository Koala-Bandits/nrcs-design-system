import React from "react";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import Icon from "@mdi/react";
import { mdiCheckCircle } from "@mdi/js";
import { Alert } from "./Alert";

export default {
  title: "Components|Feedback/Alerts"
};

export const AlertsDefault = () => (
  <div>
    <ContentHeaderH1>Alerts - Default</ContentHeaderH1>
    <p className="lead">
      Inine Alerts are used for drawing attention to a specific block of
      content.{" "}
    </p>

    <Alert color="info">
      This is an <strong>info</strong> alert with{" "}
      <a href="/#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert color="success">
      This is a <strong>success</strong> alert with{" "}
      <a href="/#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert color="danger">
      This is a <strong>error</strong> alert with{" "}
      <a href="/#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert color="warning">
      This is a <strong>warning</strong> alert with{" "}
      <a href="/#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>

    <h3 className="mt-4">Small</h3>
    <Alert color="info" size="sm">
      This is a SMALL <strong>info</strong> alert.
    </Alert>
  </div>
);

export const AlertsNoIcon = () => (
  <div>
    <h3 className="mt-4">Alerts - no Icon</h3>

    <p>
      Alerts come with icons by default as it aids in accessibility (color blind
      individuals). If you really want to remove the icon you can do so using
      the <code>noIcon</code> prop.
    </p>

    <Alert color="info" noIcon>
      This is an <strong>info</strong> alert with{" "}
      <a href="/#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
  </div>
);

export const AlertsDismissable = () => {
  return (
    <div>
      <h3 className="mt-4">Inline Alerts - Dismissable</h3>

      <p>
        Use the <code>dismissable</code> property to make an Alert dismissable.
      </p>

      <Alert color="info" dismissable>
        This is an <strong>info</strong> alert with{" "}
        <a href="/#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </Alert>
    </div>
  );
};

export const AlertsContent = () => (
  <div>
    <h3 className="mt-4">Alerts - with Content</h3>

    <p>
      In rare cases you may want more control of content in an Alert. In this
      example, we use <code>noIcon</code> to remove the default icon and do our
      own thang...
    </p>

    <Alert color="success" noIcon>
      <h4 className="alert-heading">
        <Icon className="mdi" path={mdiCheckCircle} size={1.3} />
        Well done!
      </h4>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  </div>
);

AlertsDefault.story = {
  name: "Alerts - Default"
};

AlertsNoIcon.story = {
  name: "Alerts - No Icon"
};

AlertsDismissable.story = {
  name: "Alerts - Dismissable"
};

AlertsContent.story = {
  name: "Alerts - with Content"
};
