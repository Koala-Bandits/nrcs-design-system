import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiDotsVertical } from "@mdi/js";

export default {
  title: "Components|Dropdowns"
};

export const DropdownDefault = () => {
  const [primaryDropdownOpen, setPrimaryDropdownOpen] = useState(false);
  const [secondaryDropdownOpen, setSecondaryDropdownOpen] = useState(false);
  const [flatDropdownOpen, setFlatDropdownOpen] = useState(false);

  const togglePrimary = () => setPrimaryDropdownOpen(prevState => !prevState);
  const toggleSecondary = () =>
    setSecondaryDropdownOpen(prevState => !prevState);
  const toggleFlat = () => setFlatDropdownOpen(prevState => !prevState);

  return (
    <div>
      <h1 className="docs">Dropdown - Default</h1>

      <Container>
        <Row>
          <Col>
            <Dropdown isOpen={primaryDropdownOpen} toggle={togglePrimary}>
              <DropdownToggle color="primary">
                Dropdown
                <Icon className="mdi ml-1" path={mdiChevronDown} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown isOpen={secondaryDropdownOpen} toggle={toggleSecondary}>
              <DropdownToggle outline color="primary">
                Dropdown
                <Icon className="mdi ml-1" path={mdiChevronDown} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown isOpen={flatDropdownOpen} toggle={toggleFlat}>
              <DropdownToggle color="link">
                <Icon className="mdi ml-1" path={mdiDotsVertical} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

DropdownDefault.story = {
  name: "Dropdown - Default"
};
