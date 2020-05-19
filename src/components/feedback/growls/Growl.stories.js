import React, { useState } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { PrimaryButton, ButtonSet } from "components/buttons/Buttons";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import Growl from "components/feedback/growls/Growl";

// hook for application growls
import useToast from "components/feedback/growls/useToast";

export default {
  title: "Components|Feedback/Growls"
};

function UseGrowlsExample() {
  const toast = useToast();
  const showInfoToast = () =>
    toast.add(
      "info",
      "Information Growl: for events of lower relative importance, or for generic use."
    );
  const showSuccessToast = () =>
    toast.add(
      "success",
      "Success Growl: for reporting of a successful end of an operation or action."
    );
  const showWarningToast = () =>
    toast.add(
      "warning",
      "Warning Growl: for events that require user attention."
    );
  const showErrorToast = () =>
    toast.add("danger", "Error (danger) Growl: When things go wrong.");

  return (
    <ButtonSet>
      <PrimaryButton onClick={showInfoToast}>Add Info Growl</PrimaryButton>
      <PrimaryButton onClick={showSuccessToast}>
        Add Success Growl
      </PrimaryButton>
      <PrimaryButton onClick={showWarningToast}>
        Add Warning Growl
      </PrimaryButton>
      <PrimaryButton onClick={showErrorToast}>Add Error Growl</PrimaryButton>
    </ButtonSet>
  );
}

export const GrowlsStory = () => {
  const [showGrowl, setShowGrowl] = useState(false);
  const openGrowl = () => {
    setShowGrowl(true);
    let t = setTimeout(() => setShowGrowl(false), 5000);
  };
  const closeGrowl = () => {
    setShowGrowl(false);
  };

  return (
    <div aria-live="polite" aria-atomic="true" className="docs-btn">
      <ContentHeaderH1>Growls</ContentHeaderH1>

      <p className="lead">
        Growls are 'Alerts' wrapped in a 'Toast', and we like to call them a
        'Growl' because it's fun.
      </p>
      <p>
        <strong>
          Growls are generally preferrable over Banners or Inline Alerts
        </strong>{" "}
        as they don't disturb or pop-into a layout, they overlay on top in a
        consistent location.
      </p>
      <p>
        Growls will stack, and since they are built with our Alerts, can be
        static, dissmisable, with or without an icon or content.
      </p>
      <p>
        Growls can 'autohide' after a 'delay' using a timeout to toggle closed.
      </p>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <h2>Application/Global Example</h2>
              <p>
                NRCS Design System website uses a 'Toast Provider' and custom
                React Hook 'useToast' for application wide notification
                management. This manages an array of Growls that appear and
                automatically remove from the DOM after a delay.
              </p>
              <p>
                This allows any component to add a growl without manual setup.
              </p>
              <p>
                The Growl component has a timeout built in and will
                automatically hide after 5 seconds when called via our hook.
              </p>
              <UseGrowlsExample />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Card>
            <CardBody>
              <h2>Manual/Local Example</h2>
              <p>
                This is a local static Growl component that exists in DOM and is
                manually toggled open and closed.
              </p>
              <PrimaryButton onClick={openGrowl}>Show Growl</PrimaryButton>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Position it */}
      <div className="growl growl-top-right">
        {/* Then put growl within */}
        <Growl isOpen={showGrowl} color="warning" toggle={closeGrowl}>
          This is a <strong>warning</strong> Growl that was shown manually in
          this component. It will close automatically after 5 seconds.
        </Growl>
      </div>
    </div>
  );
};

GrowlsStory.story = {
  name: "Growls"
};
