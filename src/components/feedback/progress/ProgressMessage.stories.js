import React, { useState } from "react";
import { Modal, ModalBody, Card, CardBody } from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { PrimaryButton } from "components/buttons/Buttons";
import { ProgressMessage } from "./ProgressMessage";

export default {
  title: 'Components/Feedback/Progress Message'
};

export const ProgressMessageDefault = () => {
  const [progressModal, setProgressModal] = useState(false);
  const toggleProgressModal = () => setProgressModal(!progressModal);

  return (
    <div className="mb-4">
      <ContentHeaderH1>Progress Messages</ContentHeaderH1>
      <p className="lead">
        Show progress via a progress bar, typically in an overlay with or
        without messaging.
      </p>

      <h3 className="mt-4">Basic</h3>
      <Card>
        <CardBody>
          <ProgressMessage value="25" />
        </CardBody>
      </Card>

      <h3 className="mt-4">Message</h3>
      <Card>
        <CardBody>
          <ProgressMessage message="Loading..." value="25" />
        </CardBody>
      </Card>

      <h3 className="mt-4">Static Overlay</h3>
      <p>
        Note: this example uses a regular (dismissable) modal, but in practice
        this would be 'static' to handle dismissal programmatically.
      </p>
      <PrimaryButton
        className="btn-main"
        color="primary"
        onClick={toggleProgressModal}
      >
        Static Overlay Progress
      </PrimaryButton>

      <Modal isOpen={progressModal} toggle={toggleProgressModal} size="sm">
        <ModalBody className="justify-content-center">
          <ProgressMessage message="Loading..." value="100" />
        </ModalBody>
      </Modal>
    </div>
  );
};

ProgressMessageDefault.story = {
  name: "Progress Message"
};
