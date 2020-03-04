import React from "react";
// import { action } from "@storybook/addon-actions";
import { Button, Row, Col, Card, CardBody } from "reactstrap";
import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiChevronRight,
  mdiChevronLeft,
  mdiChevronDown,
  mdiPlusBox,
  mdiPencil,
  mdiContentCopy,
  mdiContentPaste,
  mdiDelete
} from "@mdi/js";

export default {
  title: "Components|Buttons"
  // component: PrimaryButton
};

export const ButtonsDefault = () => (
  <div className="docs-btn">
    <h1 className="docs">Buttons</h1>

    <h2 className="docs">Default</h2>
    <Button className="btn-main" color="primary">
      Primary
    </Button>
    <Button className="btn-main" outline color="primary">
      Secondary
    </Button>
    <Button className="btn-main" color="link">
      Flat
    </Button>

    <h2 className="docs">Small</h2>
    <Button className="btn-main" color="primary" size="sm">
      Primary
    </Button>
    <Button className="btn-main" outline color="primary" size="sm">
      Secondary
    </Button>
    <Button className="btn-main" color="link" size="sm">
      Flat
    </Button>

    <h2 className="docs">Disabled</h2>
    <Button className="btn-main" color="primary" aria-disabled="true" disabled>
      Primary
    </Button>
    <Button
      className="btn-main"
      outline
      color="primary"
      aria-disabled="true"
      disabled
    >
      Secondary
    </Button>
    <Button className="btn-main" color="link" aria-disabled="true" disabled>
      Flat
    </Button>
  </div>
);

export const ButtonsWithIcons = () => (
  <div className="docs-btn">
    <h1 className="docs">Buttons</h1>

    <h2 className="docs">Default</h2>

    <Button className="btn-main" color="primary">
      <Icon className="mdi mr-1" path={mdiAccount} />
      Primary
    </Button>
    <Button className="btn-main" outline color="primary">
      <Icon className="mdi mr-1" path={mdiAccount} />
      Secondary
    </Button>
    <Button className="btn-main" outline color="primary">
      <Icon className="mdi mr-1" path={mdiChevronLeft} />
      Previous
    </Button>
    <Button className="btn-main" outline color="primary">
      Next
      <Icon className="mdi ml-1" path={mdiChevronRight} />
    </Button>
    <Button className="btn-main" outline color="primary">
      Dropdown
      <Icon className="mdi ml-1" path={mdiChevronDown} />
    </Button>
    <Button className="btn-main" color="link">
      <Icon className="mdi mr-1" path={mdiAccount} />
      Flat
    </Button>

    <Button className="btn-icon" color="link">
      <Icon className="mdi" path={mdiPlusBox} />
    </Button>
    <Button className="btn-icon" color="link">
      <Icon className="mdi" path={mdiPencil} />
    </Button>
    <Button className="btn-icon" color="link">
      <Icon className="mdi" path={mdiContentCopy} />
    </Button>
    <Button className="btn-icon" color="link">
      <Icon className="mdi" path={mdiContentPaste} />
    </Button>
    <Button className="btn-icon" color="link">
      <Icon className="mdi" path={mdiDelete} />
    </Button>

    <h2 className="docs">Small</h2>

    <Button className="btn-main" color="primary" size="sm">
      <Icon className="mdi mr-1" path={mdiAccount} size={0.8} />
      Primary
    </Button>
    <Button className="btn-main" outline color="primary" size="sm">
      <Icon className="mdi mr-1" path={mdiAccount} size={0.8} />
      Secondary
    </Button>
    <Button className="btn-main" outline color="primary" size="sm">
      <Icon className="mdi mr-1" path={mdiChevronLeft} size={0.8} />
      Previous
    </Button>
    <Button className="btn-main" outline color="primary" size="sm">
      Next
      <Icon className="mdi ml-1" path={mdiChevronRight} size={0.8} />
    </Button>
    <Button className="btn-main" outline color="primary" size="sm">
      Dropdown
      <Icon className="mdi ml-1" path={mdiChevronDown} size={0.8} />
    </Button>
    <Button className="btn-main" color="link" size="sm">
      <Icon className="mdi mr-1" path={mdiAccount} size={0.8} />
      Flat
    </Button>

    <Button className="btn-icon" color="link">
      <Icon className="mdi" path={mdiPlusBox} size={0.8} />
    </Button>
    <Button className="btn-icon" color="link">
      <Icon className="mdi" path={mdiPencil} size={0.8} />
    </Button>
    <Button className="btn-icon" color="link">
      <Icon className="mdi" path={mdiContentCopy} size={0.8} />
    </Button>
    <Button className="btn-icon" color="link">
      <Icon className="mdi" path={mdiContentPaste} size={0.8} />
    </Button>
    <Button className="btn-icon" color="link">
      <Icon className="mdi" path={mdiDelete} size={0.8} />
    </Button>

    <h2 className="docs">Disabled</h2>

    <Button
      className="btn-main"
      color="primary"
      size="sm"
      aria-disabled="true"
      disabled
    >
      <Icon className="mdi mr-1" path={mdiAccount} size={0.8} />
      Primary
    </Button>
    <Button
      className="btn-main"
      outline
      color="primary"
      size="sm"
      aria-disabled="true"
      disabled
    >
      <Icon className="mdi mr-1" path={mdiAccount} size={0.8} />
      Secondary and more
    </Button>
    <Button
      className="btn-main"
      color="link"
      size="sm"
      aria-disabled="true"
      disabled
    >
      <Icon className="mdi mr-1" path={mdiAccount} size={0.8} />
      Flat
    </Button>

    <Button className="btn-icon" color="link" aria-disabled="true" disabled>
      <Icon className="mdi" path={mdiPlusBox} size={0.8} />
    </Button>
    <Button className="btn-icon" color="link" aria-disabled="true" disabled>
      <Icon className="mdi" path={mdiPencil} size={0.8} />
    </Button>
    <Button className="btn-icon" color="link" aria-disabled="true" disabled>
      <Icon className="mdi" path={mdiContentCopy} size={0.8} />
    </Button>
    <Button className="btn-icon" color="link" aria-disabled="true" disabled>
      <Icon className="mdi" path={mdiContentPaste} size={0.8} />
    </Button>
    <Button className="btn-icon" color="link" aria-disabled="true" disabled>
      <Icon className="mdi" path={mdiDelete} size={0.8} />
    </Button>
  </div>
);

export const ButtonsPosition = () => (
  <div className="docs-btn">
    <h1 className="docs">Buttons - Positioning</h1>

    <Row>
      <Col>
        <Card>
          <CardBody>
            <p>
              Buttons are typically <strong>right-justified</strong> in their
              container with a few exceptions, and should always follow the
              following order:
              <br />
              <strong>
                Dismissive first, Alternates in the middle, Primary action on
                the right.
              </strong>
            </p>
            <p>On small screens, buttons stack as blocks with 100% width.</p>
            <hr />
            <div className="text-right">
              <Button className="btn-main" outline color="primary">
                Dismissive
              </Button>
              <Button className="btn-main" outline color="primary">
                Secondary
              </Button>
              <Button className="btn-main" outline color="primary">
                Secondary
              </Button>
              <Button className="btn-main" color="primary">
                Primary
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row className="mt-3">
      <Col>
        <Card>
          <CardBody>
            Here's another example:
            <hr />
            <div className="text-right">
              <Button className="btn-main" outline color="primary">
                Cancel
              </Button>
              <Button className="btn-main" outline color="primary">
                Export
              </Button>
              <Button className="btn-main" outline color="primary">
                Print
              </Button>
              <Button className="btn-main" color="primary">
                Save
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

export const ButtonsFooter = () => (
  <div>
    <h1 className="docs">Buttons - Footer</h1>
    To do... typical button usage, but in box with top-border, used in CART and
    to be used in CD. This will complement our 'ContentHeadings' with a bottom
    border/underline.
  </div>
);

ButtonsDefault.story = {
  name: "Buttons - Default"
};

ButtonsWithIcons.story = {
  name: "Buttons - with Icons"
};

ButtonsPosition.story = {
  name: "Buttons - Positioning"
};

ButtonsFooter.story = {
  name: "Buttons - Content Footer"
};
