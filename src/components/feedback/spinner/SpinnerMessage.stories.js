import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import {
  ContentHeaderH1,
  ContentHeaderH2
} from "components/text/ContentHeader";
import { PrimaryButton } from "components/buttons/Buttons";
import {
  SpinnerMessage,
  SpinnerCenteredMessage,
  SpinnerOverlayMessage
} from "./SpinnerMessages";
// import { DataTable } from "components/datatable/DataTable";

export default {
  title: "Components|Feedback/Spinner Messages"
};

export const SpinnerMessagesDefault = () => {
  const [spinModal, setSpinModal] = useState(false);
  const toggleSpinModal = () => setSpinModal(!spinModal);

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
      <h3 className="mt-4">Centered</h3>
      <SpinnerCenteredMessage>Loading...</SpinnerCenteredMessage>
      <h3 className="mt-4">Static Overlay</h3>
      <PrimaryButton
        className="btn-main"
        color="primary"
        onClick={toggleSpinModal}
      >
        Static Overlay Spinner
      </PrimaryButton>
      <Modal isOpen={spinModal} toggle={toggleSpinModal} size="sm">
        <ModalBody className="justify-content-center">
          <SpinnerOverlayMessage>Loading...</SpinnerOverlayMessage>
        </ModalBody>
      </Modal>
      <ContentHeaderH2 className="mt-4">Examples</ContentHeaderH2>
      <h3>DataTable</h3>
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
