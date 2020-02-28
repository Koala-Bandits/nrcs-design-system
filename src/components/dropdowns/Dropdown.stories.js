import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonDropdown,
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
  const [primarySplitDropdownOpen, setPrimarySplitDropdownOpen] = useState(
    false
  );
  const [secondaryDropdownOpen, setSecondaryDropdownOpen] = useState(false);
  const [secondarySplitDropdownOpen, setSecondarySplitDropdownOpen] = useState(
    false
  );
  const [flatDropdownOpen, setFlatDropdownOpen] = useState(false);

  const togglePrimary = () => setPrimaryDropdownOpen(prevState => !prevState);
  const togglePrimarySplit = () =>
    setPrimarySplitDropdownOpen(prevState => !prevState);
  const toggleSecondarySplit = () =>
    setSecondarySplitDropdownOpen(prevState => !prevState);
  const toggleSecondary = () =>
    setSecondaryDropdownOpen(prevState => !prevState);
  const toggleFlat = () => setFlatDropdownOpen(prevState => !prevState);

  return (
    <div>
      <h1 className="docs">Dropdown - Default</h1>

      <Row xs="1" sm="3" md="5">
        <Col className="mb-3">
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
        <Col className="mb-3">
          <ButtonDropdown
            isOpen={primarySplitDropdownOpen}
            toggle={togglePrimarySplit}
            className="dropdown"
          >
            <Button color="primary">Primary Split</Button>
            <DropdownToggle color="primary" className="rounded-right">
              <Icon className="mdi" path={mdiChevronDown} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </Col>
        <Col className="mb-3">
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
        <Col className="mb-3">
          <ButtonDropdown
            isOpen={secondarySplitDropdownOpen}
            toggle={toggleSecondarySplit}
          >
            <Button outline color="primary">
              Seondary Split
            </Button>
            <DropdownToggle outline color="primary" className="rounded-right">
              <Icon className="mdi" path={mdiChevronDown} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </Col>
        <Col className="mb-3">
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
    </div>
  );
};

DropdownDefault.story = {
  name: "Dropdown - Default"
};
