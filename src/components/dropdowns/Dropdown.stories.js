import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  ButtonDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { ButtonSet } from "components/buttons/Buttons";
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
      <ContentHeaderH1>Dropdown - Default</ContentHeaderH1>

      <Card>
        <CardBody>
          <Dropdown
            className="mr-2"
            isOpen={primaryDropdownOpen}
            toggle={togglePrimary}
          >
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

          <ButtonDropdown
            className="mr-2"
            isOpen={primarySplitDropdownOpen}
            toggle={togglePrimarySplit}
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

          <Dropdown
            className="mr-2"
            isOpen={secondaryDropdownOpen}
            toggle={toggleSecondary}
          >
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

          <ButtonDropdown
            className="mr-2"
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

          <Dropdown isOpen={flatDropdownOpen} toggle={toggleFlat}>
            <DropdownToggle className="btn-icon" color="link">
              <Icon className="mdi" path={mdiDotsVertical} />
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
        </CardBody>
      </Card>

      <h3 className="mt-4">Small</h3>

      <Card>
        <CardBody>
          <Dropdown className="mr-2" size="sm">
            <DropdownToggle color="primary">
              Dropdown
              <Icon className="mdi ml-1" path={mdiChevronDown} size={0.8} />
            </DropdownToggle>
          </Dropdown>

          <ButtonDropdown className="mr-2" size="sm">
            <Button color="primary">Primary Split</Button>
            <DropdownToggle color="primary" className="rounded-right">
              <Icon className="mdi" path={mdiChevronDown} size={0.8} />
            </DropdownToggle>
          </ButtonDropdown>

          <Dropdown className="mr-2" size="sm">
            <DropdownToggle outline color="primary">
              Dropdown
              <Icon className="mdi ml-1" path={mdiChevronDown} size={0.8} />
            </DropdownToggle>
          </Dropdown>

          <ButtonDropdown className="mr-2" size="sm">
            <Button outline color="primary">
              Seondary Split
            </Button>
            <DropdownToggle outline color="primary" className="rounded-right">
              <Icon className="mdi" path={mdiChevronDown} size={0.8} />
            </DropdownToggle>
          </ButtonDropdown>

          <Dropdown size="sm">
            <DropdownToggle className="btn-icon" color="link">
              <Icon className="mdi" path={mdiDotsVertical} size={0.8} />
            </DropdownToggle>
          </Dropdown>
        </CardBody>
      </Card>

      <h3 className="mt-4">Disabled</h3>

      <Card>
        <CardBody>
          <Dropdown className="mr-2">
            <DropdownToggle color="primary" disabled>
              Dropdown
              <Icon className="mdi ml-1" path={mdiChevronDown} size={0.8} />
            </DropdownToggle>
          </Dropdown>

          <ButtonDropdown className="mr-2">
            <Button color="primary" disabled>
              Primary Split
            </Button>
            <DropdownToggle color="primary" className="rounded-right" disabled>
              <Icon className="mdi" path={mdiChevronDown} size={0.8} />
            </DropdownToggle>
          </ButtonDropdown>

          <Dropdown className="mr-2">
            <DropdownToggle outline color="primary" disabled>
              Dropdown
              <Icon className="mdi ml-1" path={mdiChevronDown} size={0.8} />
            </DropdownToggle>
          </Dropdown>

          <ButtonDropdown className="mr-2">
            <Button outline color="primary" disabled>
              Seondary Split
            </Button>
            <DropdownToggle
              outline
              color="primary"
              className="rounded-right"
              disabled
            >
              <Icon className="mdi" path={mdiChevronDown} size={0.8} />
            </DropdownToggle>
          </ButtonDropdown>

          <Dropdown>
            <DropdownToggle className="btn-icon" color="link" disabled>
              <Icon className="mdi" path={mdiDotsVertical} size={0.8} />
            </DropdownToggle>
          </Dropdown>
        </CardBody>
      </Card>
    </div>
  );
};

DropdownDefault.story = {
  name: "Dropdown - Default"
};
