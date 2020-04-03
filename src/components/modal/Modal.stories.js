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
  CardBody,
  CustomInput
} from "reactstrap";

export default {
  title: "Components|Modal"
};

export const ModalDefault = () => {
  const [modalSm, setModalSm] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalLg, setModalLg] = useState(false);
  const [modalXl, setModalXl] = useState(false);

  const [modalScroll, setModalScroll] = useState(false);
  const [modalBscroll, setModalBscroll] = useState(false);

  const toggleSm = () => setModalSm(!modalSm);
  const toggle = () => setModal(!modal);
  const toggleLg = () => setModalLg(!modalLg);
  const toggleXl = () => setModalXl(!modalXl);

  const toggleScroll = () => setModalScroll(!modalScroll);
  const toggleBscroll = () => setModalBscroll(!modalBscroll);

  return (
    <div className="docs-btn">
      <h2 className="docs">Modal - Default</h2>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <p>
                <strong>Modals!</strong>
              </p>
              <p>
                For now, let's keep it simple. Modals have a header, body, and
                footer with main buttons in the suggested layout of
                right-justified, dismissive, alternate, and primary.
              </p>
              <p>
                From a design perspective, we avoid modal-on-modal scenarios and
                prefer only 1 modal at a time for a simpler experience.
              </p>
              <p>
                For accessibility, focus moves to the modal on open, and when
                closed moves back to the action that invoked it.
              </p>

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
              <Button
                className="btn-main"
                color="primary"
                onClick={toggleScroll}
              >
                Scroll
              </Button>
              <Button
                className="btn-main"
                color="primary"
                onClick={toggleBscroll}
              >
                Body Scroll
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
          <Row className="mt-5 ml-3">
            <Col xs="4">
              <CustomInput
                type="checkbox"
                id="radioPermitObtained"
                label="Permit Obtained"
              />
            </Col>
            <Col xs="4">
              <CustomInput
                type="checkbox"
                id="radioConsulationComp"
                label="Consulation Completed"
              />
            </Col>
            <Col xs="4">
              <CustomInput
                type="checkbox"
                id="radioOtherActionComp"
                label="Other Action Completed"
              />
            </Col>
          </Row>
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

      {/* Scroll */}
      <Modal isOpen={modalScroll} toggle={toggleScroll}>
        <ModalHeader toggle={toggleScroll}>Scroll Modal</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <p></p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <p></p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <p></p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <p></p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <p></p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button outline color="primary" onClick={toggleScroll}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggleScroll}>
            Action
          </Button>
        </ModalFooter>
      </Modal>

      {/* Body Scroll */}
      <Modal isOpen={modalBscroll} toggle={toggleBscroll} scrollable="true">
        <ModalHeader toggle={toggleBscroll}>Body Scroll Modal</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <p></p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <p></p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <p></p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <p></p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <p></p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button outline color="primary" onClick={toggleBscroll}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggleBscroll}>
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
