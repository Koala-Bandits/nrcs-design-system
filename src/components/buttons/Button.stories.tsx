import React from "react";
import {
  ButtonGroup,
  ButtonToolbar,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import {
  PrimaryButton,
  SecondaryButton,
  FlatButton,
  ButtonSet,
  ButtonFooter,
} from "components/buttons/Buttons";
import {
  ContentHeaderH1,
  ContentHeaderH2,
} from "components/text/ContentHeader";
import {
  mdiAccount,
  mdiChevronRight,
  mdiChevronLeft,
  mdiChevronDown,
  mdiPlusBox,
  mdiPencil,
  mdiContentCopy,
  mdiContentPaste,
  mdiDelete,
} from "@mdi/js";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Buttons",
};

export const ButtonsDefaultStory = () => (
  <div className="docs-btn">
    <ContentHeaderH1>Buttons</ContentHeaderH1>
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

    <h3 className="mt-4">Default</h3>
    <ButtonSet className="test-buttonset">
      <PrimaryButton className="test-primary">Primary</PrimaryButton>
      <SecondaryButton className="test-secondary">Secondary</SecondaryButton>
      <FlatButton className="test-flat">Flat</FlatButton>
    </ButtonSet>

    <h3 className="mt-4">Small</h3>
    <ButtonSet>
      <PrimaryButton size="sm">Primary</PrimaryButton>
      <SecondaryButton size="sm">Secondary</SecondaryButton>
      <FlatButton size="sm">Flat</FlatButton>
    </ButtonSet>

    <h3 className="mt-4">Hover State</h3>
    <ButtonSet>
      <PrimaryButton className="hover">Primary</PrimaryButton>
      <SecondaryButton className="hover">Secondary</SecondaryButton>
      <FlatButton className="hover">Flat</FlatButton>
    </ButtonSet>

    <h3 className="mt-4">Active State</h3>
    <ButtonSet>
      <PrimaryButton className="active">Primary</PrimaryButton>
      <SecondaryButton className="active">Secondary</SecondaryButton>
      <FlatButton className="active">Flat</FlatButton>
    </ButtonSet>

    <h3 className="mt-4">Focus State</h3>
    <ButtonSet>
      <PrimaryButton className="focus">Primary</PrimaryButton>
      <SecondaryButton className="focus">Secondary</SecondaryButton>
      <FlatButton className="focus">Flat</FlatButton>
    </ButtonSet>

    <h3 className="mt-4">Disabled</h3>
    <ButtonSet>
      <PrimaryButton disabled>Primary</PrimaryButton>
      <SecondaryButton disabled>Secondary</SecondaryButton>
      <FlatButton disabled>Flat</FlatButton>
    </ButtonSet>

    <h3 className="mt-4">Read Only (508 Compliant)</h3>
    <ButtonSet>
      <PrimaryButton readonly={true}>Primary</PrimaryButton>
      <SecondaryButton readonly={true}>Secondary</SecondaryButton>
      <FlatButton readonly={true}>Flat</FlatButton>
    </ButtonSet>
  </div>
);

export const ButtonsWithIconsStory = () => (
  <div className="docs-btn">
    <ContentHeaderH2>Buttons - with Icons</ContentHeaderH2>
    <p className="lead">
      Easily add icons to buttons by passing one into the <code>iconLeft</code>,{" "}
      <code>iconRight</code>, or <code>iconOnly</code> property.
    </p>

    <h3 className="mt-4">Default</h3>

    <ButtonSet>
      <PrimaryButton iconLeft={mdiAccount}>Primary</PrimaryButton>
      <SecondaryButton iconLeft={mdiAccount}>Secondary</SecondaryButton>
      <SecondaryButton iconLeft={mdiChevronLeft}>Previous</SecondaryButton>
      <SecondaryButton iconRight={mdiChevronRight}>Next</SecondaryButton>
      <SecondaryButton iconRight={mdiChevronDown}>Dropdown</SecondaryButton>
      <FlatButton iconLeft={mdiAccount}>Flat</FlatButton>

      <FlatButton iconOnly={mdiPlusBox} />
      <FlatButton iconOnly={mdiPencil} />
      <FlatButton iconOnly={mdiContentCopy} />
      <FlatButton iconOnly={mdiContentPaste} />
      <FlatButton iconOnly={mdiDelete} />
    </ButtonSet>

    <h3 className="mt-4">Small</h3>

    <ButtonSet>
      <PrimaryButton size="sm" iconLeft={mdiAccount}>
        Primary
      </PrimaryButton>
      <SecondaryButton size="sm" iconLeft={mdiAccount}>
        Secondary
      </SecondaryButton>
      <SecondaryButton size="sm" iconLeft={mdiChevronLeft}>
        Previous
      </SecondaryButton>
      <SecondaryButton size="sm" iconRight={mdiChevronRight}>
        Next
      </SecondaryButton>
      <SecondaryButton size="sm" iconRight={mdiChevronDown}>
        Dropdown
      </SecondaryButton>
      <FlatButton size="sm" iconLeft={mdiAccount}>
        Flat
      </FlatButton>

      <FlatButton size="sm" iconOnly={mdiPlusBox} />
      <FlatButton size="sm" iconOnly={mdiPencil} />
      <FlatButton size="sm" iconOnly={mdiContentCopy} />
      <FlatButton size="sm" iconOnly={mdiContentPaste} />
      <FlatButton size="sm" iconOnly={mdiDelete} />
    </ButtonSet>

    <h3 className="mt-4">Disabled</h3>

    <ButtonSet>
      <PrimaryButton
        size="sm"
        iconLeft={mdiAccount}
        aria-disabled="true"
        disabled
      >
        Primary
      </PrimaryButton>
      <SecondaryButton
        size="sm"
        iconLeft={mdiAccount}
        aria-disabled="true"
        disabled
      >
        Secondary
      </SecondaryButton>
      <FlatButton size="sm" iconLeft={mdiAccount} aria-disabled="true" disabled>
        Flat
      </FlatButton>

      <FlatButton
        size="sm"
        iconOnly={mdiPlusBox}
        aria-disabled="true"
        disabled
      />
      <FlatButton
        size="sm"
        iconOnly={mdiPencil}
        aria-disabled="true"
        disabled
      />
      <FlatButton
        size="sm"
        iconOnly={mdiContentCopy}
        aria-disabled="true"
        disabled
      />
      <FlatButton
        size="sm"
        iconOnly={mdiContentPaste}
        aria-disabled="true"
        disabled
      />
      <FlatButton
        size="sm"
        iconOnly={mdiDelete}
        aria-disabled="true"
        disabled
      />
    </ButtonSet>
  </div>
);

export const ButtonSetStory = () => (
  <div>
    <ContentHeaderH2>ButtonSet</ContentHeaderH2>
    <p className="lead">
      Wrap buttons with the <code>ButtonSet</code> component to provide
      consistent spacing of groups of buttons.
    </p>
    <Card>
      <CardBody>
        <ButtonSet>
          <SecondaryButton>Cancel</SecondaryButton>
          <SecondaryButton>Export</SecondaryButton>
          <PrimaryButton>Save</PrimaryButton>
        </ButtonSet>
      </CardBody>
    </Card>
  </div>
);

export const ButtonGroupStory = () => (
  <div>
    <ContentHeaderH2>Button Groups</ContentHeaderH2>
    <p className="lead">
      Use a ButtonGroup to create a button-bar, search-bar, toolbar, page-bar.
    </p>

    <Row>
      <Col>
        <h3>Default</h3>
        <ButtonGroup>
          <SecondaryButton>Left</SecondaryButton>
          <SecondaryButton>Middle</SecondaryButton>
          <SecondaryButton>Right</SecondaryButton>
        </ButtonGroup>

        <h3 className="mt-3">Small</h3>
        <ButtonGroup size="sm">
          <SecondaryButton>Left</SecondaryButton>
          <SecondaryButton>Middle</SecondaryButton>
          <SecondaryButton>Right</SecondaryButton>
        </ButtonGroup>

        <h3 className="mt-3">Vertical</h3>
        <ButtonGroup vertical>
          <SecondaryButton>Left</SecondaryButton>
          <SecondaryButton>Middle</SecondaryButton>
          <SecondaryButton>Right</SecondaryButton>
        </ButtonGroup>

        <h3 className="mt-3">Toolbar</h3>
        <p>
          Combine sets of button groups into button toolbars for more complex
          components. Use utility classes as needed to space out groups,
          buttons, and more.
        </p>
        <ButtonToolbar role="toolbar" aria-label="Toolbar with button groups">
          <ButtonGroup role="group" aria-label="First group">
            <SecondaryButton>This</SecondaryButton>
            <SecondaryButton>That</SecondaryButton>
            <SecondaryButton>There</SecondaryButton>
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
    <ContentHeaderH2>ButtonFooter</ContentHeaderH2>
    <p className="lead">
      Wrap buttons in a <code>ButtonFooter</code> component to provide a
      container with consistent spacing for buttons with a 1px top border by
      default.
    </p>
    <p>Works well to finish off forms, cards, or other input blocks.</p>
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
    <ContentHeaderH2>Buttons - Positioning</ContentHeaderH2>

    <Row>
      <Col>
        <p className="lead">
          Being consistent in the ordering of buttons improves UX and is
          important for acessibility.
        </p>
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
            <p>
              On small screens, buttons can stack as blocks with 100% width.
            </p>
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
  name: "Buttons",
};

ButtonsWithIconsStory.story = {
  name: "Buttons - with Icons",
};

ButtonSetStory.story = {
  name: "ButtonSet",
};

ButtonGroupStory.story = {
  name: "Button Groups",
};

ButtonFooterStory.story = {
  name: "ButtonFooter",
};

ButtonsPositionStory.story = {
  name: "Button Positioning",
};
