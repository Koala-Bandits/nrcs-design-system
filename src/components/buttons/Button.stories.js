import React from "react";
import {
  ButtonGroup,
  ButtonToolbar,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";
import {
  PrimaryButton,
  SecondaryButton,
  FlatButton,
  ButtonSet,
  ButtonFooter
} from "components/buttons/Buttons";
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
};

export const ButtonsDefaultStory = () => (
  <div className="docs-btn">
    <h2 className="docs">Buttons</h2>
    <p className="lead">
      Keeping things simple with 3 button types: Primary, Secondary, and Flat.
    </p>
    <p>
      Button components are wrapped Reactstrap buttons with some additional
      style classes for NRCS Design System.
    </p>
    <p>
      <strong>Tip:</strong> wrap buttons with the{" "}
      <strong>
        <code>ButtonSet</code>
      </strong>{" "}
      component to provide consistent equal spacing of a set of buttons.
    </p>

    <h3 className="docs">Default</h3>
    <ButtonSet>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <FlatButton>Flat</FlatButton>
    </ButtonSet>

    <h3 className="docs">Small</h3>
    <ButtonSet>
      <PrimaryButton size="sm">Primary</PrimaryButton>
      <SecondaryButton size="sm">Secondary</SecondaryButton>
      <FlatButton size="sm">Flat</FlatButton>
    </ButtonSet>

    <h3 className="docs">Disabled</h3>
    <ButtonSet>
      <PrimaryButton aria-disabled="true" disabled>
        Primary
      </PrimaryButton>
      <SecondaryButton aria-disabled="true" disabled>
        Secondary
      </SecondaryButton>
      <FlatButton aria-disabled="true" disabled>
        Flat
      </FlatButton>
    </ButtonSet>
  </div>
);

export const ButtonsWithIconsStory = () => (
  <div className="docs-btn">
    <h2 className="docs">Buttons - with Icons</h2>
    <p className="lead">
      Examples of how to add and use Icons to our button components.
    </p>
    <p>
      <strong>Note:</strong> the use of a{" "}
      <strong>
        <code>ButtonSet</code>
      </strong>{" "}
      component to provide consistent spacing of groups of buttons as well as a
      few CSS classes for spacing of Icons with buttons.
    </p>

    <h3 className="docs">Default</h3>

    <ButtonSet>
      <PrimaryButton>
        <Icon className="mdi mr-1" path={mdiAccount} />
        Primary
      </PrimaryButton>
      <SecondaryButton>
        <Icon className="mdi mr-1" path={mdiAccount} />
        Secondary
      </SecondaryButton>
      <SecondaryButton>
        <Icon className="mdi mr-1" path={mdiChevronLeft} />
        Previous
      </SecondaryButton>
      <SecondaryButton>
        Next
        <Icon className="mdi ml-1" path={mdiChevronRight} />
      </SecondaryButton>
      <SecondaryButton>
        Dropdown
        <Icon className="mdi ml-1" path={mdiChevronDown} />
      </SecondaryButton>
      <FlatButton>
        <Icon className="mdi mr-1" path={mdiAccount} />
        Flat
      </FlatButton>

      <FlatButton className="btn-icon">
        <Icon className="mdi" path={mdiPlusBox} />
      </FlatButton>
      <FlatButton className="btn-icon">
        <Icon className="mdi" path={mdiPencil} />
      </FlatButton>
      <FlatButton className="btn-icon">
        <Icon className="mdi" path={mdiContentCopy} />
      </FlatButton>
      <FlatButton className="btn-icon">
        <Icon className="mdi" path={mdiContentPaste} />
      </FlatButton>
      <FlatButton className="btn-icon">
        <Icon className="mdi" path={mdiDelete} />
      </FlatButton>
    </ButtonSet>

    <h3 className="docs">Small</h3>

    <ButtonSet>
      <PrimaryButton size="sm">
        <Icon className="mdi mr-1" path={mdiAccount} size={0.8} />
        Primary
      </PrimaryButton>
      <SecondaryButton size="sm">
        <Icon className="mdi mr-1" path={mdiAccount} size={0.8} />
        Secondary
      </SecondaryButton>
      <SecondaryButton size="sm">
        <Icon className="mdi mr-1" path={mdiChevronLeft} size={0.8} />
        Previous
      </SecondaryButton>
      <SecondaryButton size="sm">
        Next
        <Icon className="mdi ml-1" path={mdiChevronRight} size={0.8} />
      </SecondaryButton>
      <SecondaryButton size="sm">
        Dropdown
        <Icon className="mdi ml-1" path={mdiChevronDown} size={0.8} />
      </SecondaryButton>
      <FlatButton size="sm">
        <Icon className="mdi mr-1" path={mdiAccount} size={0.8} />
        Flat
      </FlatButton>

      <FlatButton size="sm" className="btn-icon">
        <Icon className="mdi" path={mdiPlusBox} size={0.8} />
      </FlatButton>
      <FlatButton size="sm" className="btn-icon">
        <Icon className="mdi" path={mdiPencil} size={0.8} />
      </FlatButton>
      <FlatButton size="sm" className="btn-icon">
        <Icon className="mdi" path={mdiContentCopy} size={0.8} />
      </FlatButton>
      <FlatButton size="sm" className="btn-icon">
        <Icon className="mdi" path={mdiContentPaste} size={0.8} />
      </FlatButton>
      <FlatButton size="sm" className="btn-icon">
        <Icon className="mdi" path={mdiDelete} size={0.8} />
      </FlatButton>
    </ButtonSet>

    <h3 className="docs">Disabled</h3>

    <ButtonSet>
      <PrimaryButton size="sm" aria-disabled="true" disabled>
        <Icon className="mdi mr-1" path={mdiAccount} size={0.8} />
        Primary
      </PrimaryButton>
      <SecondaryButton size="sm" aria-disabled="true" disabled>
        <Icon className="mdi mr-1" path={mdiAccount} size={0.8} />
        Secondary
      </SecondaryButton>
      <FlatButton size="sm" aria-disabled="true" disabled>
        <Icon className="mdi mr-1" path={mdiAccount} size={0.8} />
        Flat
      </FlatButton>

      <FlatButton size="sm" className="btn-icon" aria-disabled="true" disabled>
        <Icon className="mdi" path={mdiPlusBox} size={0.8} />
      </FlatButton>
      <FlatButton size="sm" className="btn-icon" aria-disabled="true" disabled>
        <Icon className="mdi" path={mdiPencil} size={0.8} />
      </FlatButton>
      <FlatButton size="sm" className="btn-icon" aria-disabled="true" disabled>
        <Icon className="mdi" path={mdiContentCopy} size={0.8} />
      </FlatButton>
      <FlatButton size="sm" className="btn-icon" aria-disabled="true" disabled>
        <Icon className="mdi" path={mdiContentPaste} size={0.8} />
      </FlatButton>
      <FlatButton size="sm" className="btn-icon" aria-disabled="true" disabled>
        <Icon className="mdi" path={mdiDelete} size={0.8} />
      </FlatButton>
    </ButtonSet>
  </div>
);

export const ButtonSetStory = () => (
  <div>
    <h2 className="docs">ButtonSet</h2>
    <p className="lead">
      <strong>
        Wrap buttons with the <code>ButtonSet</code> component to provide
        consistent spacing of groups of buttons.
      </strong>
    </p>
    <p>View the source of all these button component examples...</p>
  </div>
);

export const ButtonGroupStory = () => (
  <div>
    <h2 className="docs">Button Groups</h2>
    <p className="lead">
      <strong>
        Use a ButtonGroup to create a button-bar, search-bar, toolbar, page-bar
        etc.
      </strong>
    </p>
    <p>
      These are used to create our file-browser & search form components for
      example.
    </p>

    <Row>
      <Col>
        <h3>Default</h3>
        <ButtonGroup>
          <PrimaryButton>Left</PrimaryButton>
          <PrimaryButton>Middle</PrimaryButton>
          <PrimaryButton>Right</PrimaryButton>
        </ButtonGroup>

        <h3 className="mt-3">Small</h3>
        <ButtonGroup size="sm">
          <PrimaryButton>Left</PrimaryButton>
          <PrimaryButton>Middle</PrimaryButton>
          <PrimaryButton>Right</PrimaryButton>
        </ButtonGroup>

        <h3 className="mt-3">Vertical</h3>
        <ButtonGroup vertical>
          <PrimaryButton>Left</PrimaryButton>
          <PrimaryButton>Middle</PrimaryButton>
          <PrimaryButton>Right</PrimaryButton>
        </ButtonGroup>

        <h3 className="mt-3">Toolbar</h3>
        <p>
          Combine sets of button groups into button toolbars for more complex
          components. Use utility classes as needed to space out groups,
          buttons, and more.
        </p>
        <ButtonToolbar role="toolbar" aria-label="Toolbar with button groups">
          <ButtonGroup role="group" aria-label="First group">
            <PrimaryButton>This</PrimaryButton>
            <PrimaryButton>That</PrimaryButton>
            <PrimaryButton>There</PrimaryButton>
          </ButtonGroup>
          <ButtonGroup className="ml-3" role="group" aria-label="Second group">
            <PrimaryButton>One</PrimaryButton>
            <PrimaryButton>Two</PrimaryButton>
            <PrimaryButton>Three</PrimaryButton>
          </ButtonGroup>
        </ButtonToolbar>
      </Col>
    </Row>
  </div>
);

export const ButtonFooterStory = () => (
  <div>
    <h2 className="docs">ButtonFooter</h2>
    <p className="lead">
      <strong>
        Wrap buttons in a <code>ButtonFooter</code> component to provide a
        container with consistent spacing for buttons with a 1px top border by
        default.
      </strong>
      <p>Works well to finish off forms, cards, or other input blocks.</p>
    </p>
    <Row className="mt-3">
      <Col>
        <Card>
          <CardBody>
            Buttons wrapped in a ButtonSet for consistent spacing wrapped in a
            ButtonFooter.
            <ButtonFooter className="text-right">
              <ButtonSet>
                <SecondaryButton>Cancel</SecondaryButton>
                <SecondaryButton>Export</SecondaryButton>
                <SecondaryButton>Print</SecondaryButton>
                <PrimaryButton>Save</PrimaryButton>
              </ButtonSet>
            </ButtonFooter>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

export const ButtonsPositionStory = () => (
  <div className="docs-btn">
    <h2 className="docs">Buttons - Positioning</h2>

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
              <ButtonSet>
                <SecondaryButton>Dismissive</SecondaryButton>
                <SecondaryButton>Secondary</SecondaryButton>
                <SecondaryButton>Secondary</SecondaryButton>
                <PrimaryButton>Primary</PrimaryButton>
              </ButtonSet>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row className="mt-3">
      <Col>
        <Card>
          <CardBody>
            Suggested and most common example:
            <ButtonFooter className="text-right">
              <ButtonSet>
                <SecondaryButton>Cancel</SecondaryButton>
                <SecondaryButton>Export</SecondaryButton>
                <SecondaryButton>Print</SecondaryButton>
                <PrimaryButton>Save</PrimaryButton>
              </ButtonSet>
            </ButtonFooter>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row className="mt-3">
      <Col>
        <Card>
          <CardBody>
            On the left...
            <p>
              {" "}
              Left justified is less preferred, but works for large pages or for
              reasons to keep buttons in close proximity to say a left sidebar.
            </p>
            <ButtonFooter>
              <ButtonSet>
                <SecondaryButton>Cancel</SecondaryButton>
                <SecondaryButton>Export</SecondaryButton>
                <SecondaryButton>Print</SecondaryButton>
                <PrimaryButton>Save</PrimaryButton>
              </ButtonSet>
            </ButtonFooter>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row className="mt-3">
      <Col>
        <Card>
          <CardBody>
            Sometimes a split scenario makes sense.
            <ButtonFooter>
              <Row>
                <Col xs="12" sm="6" className="mt-0 mb-0">
                  <ButtonSet>
                    <SecondaryButton>Back</SecondaryButton>
                    <SecondaryButton>Next</SecondaryButton>
                  </ButtonSet>
                </Col>
                <Col xs="12" sm="6" className="text-right mt-0 mb-0">
                  <PrimaryButton>Save</PrimaryButton>
                </Col>
              </Row>
            </ButtonFooter>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

ButtonsDefaultStory.story = {
  name: "Buttons"
};

ButtonsWithIconsStory.story = {
  name: "Buttons - with Icons"
};

ButtonSetStory.story = {
  name: "ButtonSet"
};

ButtonGroupStory.story = {
  name: "Button Groups"
};

ButtonFooterStory.story = {
  name: "ButtonFooter"
};

ButtonsPositionStory.story = {
  name: "Button Positioning"
};
