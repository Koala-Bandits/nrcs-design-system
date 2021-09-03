import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { PrimaryButton, ButtonSet } from "../buttons/Buttons";

export interface Props {
  modalHeader: string;
  modalBody: string;
  isOpen: boolean;
  modalType: string;
  toggle: () => boolean;
  modalFooterButtonText: string[];
}
export const AppModal = ({
  modalHeader,
  isOpen,
  toggle,
  modalFooterButtonText,
  modalType,
  modalBody,
}: Props) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} size={modalType}>
      <ModalHeader toggle={toggle}>{modalHeader}</ModalHeader>
      <ModalBody>{modalBody}</ModalBody>
      <ModalFooter>
        <PrimaryButton outline color="primary" onClick={toggle}>
          {modalFooterButtonText[0]}
        </PrimaryButton>
        <PrimaryButton color="primary" onClick={toggle}>
          {modalFooterButtonText[1]}
        </PrimaryButton>
      </ModalFooter>
    </Modal>
  );
};
