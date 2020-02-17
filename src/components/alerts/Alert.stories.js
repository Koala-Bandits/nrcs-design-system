import React, { useState } from "react";
// import { action } from "@storybook/addon-actions";
import { Alert } from "reactstrap";
import Icon from "@mdi/react";
import {
  mdiInformation,
  mdiAlert,
  mdiAlertCircle,
  mdiCheckCircle
} from "@mdi/js";

export default {
  title: "Design System|Components/Alerts"
};

export const AlertsDefault = () => (
  <div>
    <h1>Alerts - Default</h1>

    <Alert color="primary">
      This is an <strong>info</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert color="success">
      This is a <strong>success</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert color="danger">
      This is a <strong>error</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert color="warning">
      This is a <strong>warning</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    {/* <Alert color="info">
      This is a info alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert color="light">
      This is a <strong>light</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert color="dark">
      This is a <strong>dark</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert> */}
  </div>
);

export const AlertsWithIcons = () => (
  <div>
    <h1>Alerts - with Icons</h1>

    <Alert color="primary">
      <Icon path={mdiInformation} size={1} />
      This is an <strong>info</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert color="success">
      <Icon path={mdiCheckCircle} size={1} />
      This is a <strong>success</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert color="danger">
      <Icon path={mdiAlertCircle} size={1} />
      This is a <strong>error</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
    <Alert color="warning">
      <Icon path={mdiAlert} size={1} />
      This is a <strong>warning</strong> alert with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Alert>
  </div>
);

export const AlertsDismissable = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <div>
      <h1>Alerts - Dismissable</h1>

      <h2>Dismissable</h2>
      <Alert color="warning" isOpen={visible} toggle={onDismiss}>
        <Icon path={mdiAlert} size={1} />
        This is a dismissable warning alert with. Go ahead, dismiss me!
      </Alert>
    </div>
  );
};

export const AlertsContent = () => (
  <div>
    <h1>Alerts - with Content</h1>

    <Alert color="success">
      <h4 className="alert-heading">
        <Icon path={mdiCheckCircle} size={1.5} />
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

AlertsWithIcons.story = {
  name: "Alerts - with Icons"
};

AlertsDismissable.story = {
  name: "Alerts - Dismissable"
};

AlertsContent.story = {
  name: "Alerts - with Content"
};
