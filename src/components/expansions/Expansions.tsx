import React, { PropsWithChildren, useState } from "react";
import { Card, CardBody, Collapse, Row, Col } from "reactstrap";
import { FlatButton } from "components/buttons/Buttons";
import { mdiChevronRight, mdiChevronDown } from "@mdi/js";

interface IExpansionProps {
  label: string;
}

export const Expansion = ({
  label,
  children,
}: PropsWithChildren<IExpansionProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Row className="align-items-center">
        <Col xs="auto" className="pr-0">
          <FlatButton
            iconOnly={isOpen ? mdiChevronDown : mdiChevronRight}
            aria-expanded={isOpen ? "true" : "false"}
            onClick={toggle}
          />
        </Col>
        <Col className="pl-0">
          <span className="label pt-1">{label}</span>
        </Col>
      </Row>
      <Collapse className="mt-1" isOpen={isOpen}>
        {children}
      </Collapse>
    </div>
  );
};

export const ExpansionCard = ({
  label,
  children,
}: PropsWithChildren<IExpansionProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card>
      <CardBody>
        <Row className="align-items-center">
          <Col xs="auto" className="pr-0">
            <FlatButton
              iconOnly={isOpen ? mdiChevronDown : mdiChevronRight}
              aria-expanded={isOpen ? "true" : "false"}
              onClick={toggle}
            />
          </Col>
          <Col className="pl-0">
            <span className="label">{label}</span>
          </Col>
        </Row>
        <Collapse className="mt-1" isOpen={isOpen}>
          {children}
        </Collapse>
      </CardBody>
    </Card>
  );
};
