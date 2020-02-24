import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default {
  title: "Components|Modal"
};

export const ModalDefault = () => (
  <div>
    <h1 className="docs">Modal - Default</h1>

    <Modal>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ModalBody>
      <ModalFooter>
        <Button outline color="primary">
          Cancel
        </Button>
        <Button color="primary">Action</Button>
      </ModalFooter>
    </Modal>
  </div>
);

ModalDefault.story = {
  name: "Modal - Default"
};
