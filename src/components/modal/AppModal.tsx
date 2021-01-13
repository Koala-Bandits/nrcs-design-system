import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { PrimaryButton, ButtonSet } from "components/buttons/Buttons";

export class AppModal extends React.Component {
  render() {
    return <div className="btn-set" {...this.props}></div>;
  }
}
