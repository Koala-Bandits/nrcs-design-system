import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

export default {
  title: "Components|Modal"
};

export const ModalDefault = () => {
  const [modalSm, setModalSm] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalLg, setModalLg] = useState(false);
  const [modalXl, setModalXl] = useState(false);

  const toggleSm = () => setModalSm(!modalSm);
  const toggle = () => setModal(!modal);
  const toggleLg = () => setModalLg(!modalLg);
  const toggleXl = () => setModalXl(!modalXl);

  return (
    <div className="docs-btn">
      <h1 className="docs">Modal - Default</h1>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <Button className="btn-main" color="primary" onClick={toggleSm}>
                Small
              </Button>
              <Button className="btn-main" color="primary" onClick={toggle}>
                Default
              </Button>
              <Button className="btn-main" color="primary" onClick={toggleLg}>
                Large
              </Button>
              <Button className="btn-main" color="primary" onClick={toggleXl}>
                X Large
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Small */}
      <Modal isOpen={modalSm} toggle={toggleSm} size="sm">
        <ModalHeader toggle={toggleSm}>Small Modal</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button outline color="primary" onClick={toggleSm}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggleSm}>
            Action
          </Button>
        </ModalFooter>
      </Modal>

      {/* Default */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Default Modal</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button outline color="primary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggle}>
            Action
          </Button>
        </ModalFooter>
      </Modal>

      {/* Large */}
      <Modal isOpen={modalLg} toggle={toggleLg} size="lg">
        <ModalHeader toggle={toggleLg}>Large Modal</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button outline color="primary" onClick={toggleLg}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggleLg}>
            Action
          </Button>
        </ModalFooter>
      </Modal>

      {/* X-Large */}
      <Modal isOpen={modalXl} toggle={toggleXl} size="xl">
        <ModalHeader toggle={toggleXl}>X-Large Modal</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button outline color="primary" onClick={toggleXl}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggleXl}>
            Action
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ModalDefault.story = {
  name: "Modal - Default"
};
