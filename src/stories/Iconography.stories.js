import React from "react";
import Icon from "@mdi/react";
import { Row, Col, Card, CardBody, CardText } from "reactstrap";
import {
  mdiAccount,
  mdiAccountCircle,
  mdiAccountCog,
  mdiAccountMultiple,
  mdiBell,
  mdiCalendar,
  mdiCheck,
  mdiCheckCircle,
  mdiCheckCircleOutline,
  mdiCheckboxMarked,
  mdiChevronDown,
  mdiChevronRight,
  mdiChevronDoubleDown,
  mdiChevronDoubleUp,
  mdiClose,
  mdiCloseCircle,
  mdiCloseCircleOutline,
  mdiClockOutline,
  mdiCog,
  mdiContentCopy,
  mdiContentCut,
  mdiContentPaste,
  mdiCursorDefault,
  mdiCursorPointer,
  mdiDelete,
  mdiDotsVertical,
  mdiDotsVerticalCircle,
  mdiExport,
  mdiEye,
  mdiFilter,
  mdiHelpCircle,
  mdiHelpCircleOutline,
  mdiHome,
  mdiImport,
  mdiInformation,
  mdiLayers,
  mdiLock,
  mdiLockOpenOutline,
  mdiLogin,
  mdiLogout,
  mdiMagnify,
  mdiMenu,
  mdiMenuDown,
  mdiMenuRight,
  mdiMinusBox,
  mdiMinusBoxOutline,
  mdiMinusCircle,
  mdiMinusCircleOutline,
  mdiOpenInNew,
  mdiPen,
  mdiPencil,
  mdiPlus,
  mdiPlusBox,
  mdiRefresh,
  mdiWrench
} from "@mdi/js";

export default {
  title: "Design System|Iconography"
};

export const IconographyStory = () => {
  const iconExampleText = '<Icon className="mdi" path={mdiInformation} />';

  function IconCard(props) {
    return (
      <Col>
        <Card className="mb-3">
          <Row className="no-gutters">
            <Col
              sm="4"
              className="d-flex align-items-center justify-content-center p-4"
            >
              <Icon className="mdi" path={props.icon} size={1.3} />
              <Icon className="mdi" path={props.icon} size={1} />
              <Icon className="mdi" path={props.icon} size={0.8} />
            </Col>
            <Col sm="8">
              <CardBody>
                <h6 className="card-title">{props.name}</h6>
                <p className="card-text">{props.text}</p>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Col>
    );
  }

  return (
    <div className="container">
      <h1 className="docs">Iconography</h1>

      <p>
        NRCS Design System is using the{" "}
        <strong>
          <a
            href="https://materialdesignicons.com/"
            target="_blank"
            rel="nopener noreferrer"
          >
            Materia Design (Community) Icons
          </a>
        </strong>{" "}
        which is a superset of the Google Material Icons.
      </p>
      <ul>
        <li>Implemented as SVG icons on this site an in examples</li>
        <li>
          Default <code>size={"{1}"}</code> or 24px, <code>size={"{0.8}"}</code>{" "}
          18px for smaller sized components
        </li>
        <li>Default icon color: $gray-700 gray</li>
        <li>Action/Clickable icon color: $primary blue</li>
        <li>
          To get these defaults, use of icons should include the "mdi" class
        </li>
        <li>
          For more information on properties, ways of importing and using them
          as SVGs or webfonts, see the{" "}
          <a
            href="https://dev.materialdesignicons.com/getting-started"
            target="_blank"
            rel="nopener noreferrer"
          >
            MDI Getting Started documentation.
          </a>
        </li>
      </ul>

      <h2 className="h4">Example Usage</h2>

      <code>{iconExampleText}</code>

      <h2 className="mt-4">Legend (most commonly used)</h2>
      <p>
        For the best user experience, the icons listed here should be used
        consistently for the purposes described.
      </p>
      <Row xs="1" sm="3">
        <IconCard
          icon={mdiAccount}
          name="mdiAccount"
          text="User account, user preferences."
        />

        <IconCard
          icon={mdiAccountCircle}
          name="mdiAccountCircle"
          text="Alternate user account, user preferences."
        />
        <IconCard
          icon={mdiAccountCog}
          name="mdiAccountCircle"
          text="User account preferences, settings."
        />
        <IconCard
          icon={mdiAccountMultiple}
          name="mdiAccountMultiple"
          text="Users, clients, people."
        />
        <IconCard icon={mdiBell} name="mdiBell" text="" />
        <IconCard icon={mdiCalendar} name="mdiCalendar" text="" />
        <IconCard icon={mdiCheck} name="mdiCheck" text="" />
        <IconCard icon={mdiCheckCircle} name="mdiCheckCircle" text="" />
        <IconCard
          icon={mdiCheckCircleOutline}
          name="mdiCheckCircleOutline"
          text=""
        />
        <IconCard icon={mdiCheckboxMarked} name="mdiCheckboxMarked" text="" />
        <IconCard icon={mdiChevronDown} name="mdiChevronDown" text="" />
        <IconCard icon={mdiChevronRight} name="mdiChevronRight" text="" />
        <IconCard
          icon={mdiChevronDoubleDown}
          name="mdiChevronDoubleDown"
          text=""
        />
        <IconCard icon={mdiChevronDoubleUp} name="mdiChevronDoubleUp" text="" />
        <IconCard icon={mdiClose} name="mdiClose" text="" />
        <IconCard icon={mdiCloseCircle} name="mdiCloseCircle" text="" />
        <IconCard
          icon={mdiCloseCircleOutline}
          name="mdiCloseCircleOutline"
          text=""
        />
        <IconCard icon={mdiClockOutline} name="mdiClockOutline" text="" />
        {/* <IconCard icon={mdiCog} name="mdiCog" text="" /> */}
        <IconCard icon={mdiContentCopy} name="mdiContentCopy" text="" />
        <IconCard icon={mdiContentCut} name="mdiContentCut" text="" />
        <IconCard icon={mdiContentPaste} name="mdiContentPaste" text="" />
        <IconCard icon={mdiCursorDefault} name="mdiCursorDefault" text="" />
        <IconCard icon={mdiCursorPointer} name="mdiCursorPointer" text="" />
        <IconCard icon={mdiDelete} name="mdiDelete" text="" />
        <IconCard icon={mdiDotsVertical} name="mdiDotsVertical" text="" />
        <IconCard
          icon={mdiDotsVerticalCircle}
          name="mdiDotsVerticalCircle"
          text=""
        />
        <IconCard icon={mdiExport} name="mdiExport" text="" />
        <IconCard icon={mdiEye} name="mdiEye" text="" />
        <IconCard icon={mdiFilter} name="mdiFilter" text="" />
        <IconCard icon={mdiHelpCircle} name="mdiHelpCircle" text="" />
        <IconCard
          icon={mdiHelpCircleOutline}
          name="mdiHelpCircleOutline"
          text=""
        />
        <IconCard icon={mdiHome} name="mdiHome" text="" />
        <IconCard icon={mdiImport} name="mdiImport" text="" />
        <IconCard icon={mdiInformation} name="mdiInformation" text="" />
        <IconCard icon={mdiLayers} name="mdiLayers" text="" />
        <IconCard icon={mdiLock} name="mdiLock" text="" />
        <IconCard icon={mdiLockOpenOutline} name="mdiLockOpenOutline" text="" />
        <IconCard icon={mdiLogin} name="mdiLogin" text="" />
        <IconCard icon={mdiLogout} name="mdiLogout" text="" />
        <IconCard icon={mdiMagnify} name="mdiMagnify" text="" />
        <IconCard icon={mdiMenu} name="mdiMenu" text="" />
        <IconCard icon={mdiMenuDown} name="mdiMenuDown" text="" />
        <IconCard icon={mdiMenuRight} name="mdiMenuRight" text="" />
        <IconCard icon={mdiMinusBox} name="mdiMinusBox" text="" />
        <IconCard icon={mdiMinusBoxOutline} name="mdiMinusBoxOutline" text="" />
        <IconCard icon={mdiMinusCircle} name="mdiMinusCircle" text="" />
        <IconCard
          icon={mdiMinusCircleOutline}
          name="mdiMinusCircleOutline"
          text=""
        />
        <IconCard icon={mdiOpenInNew} name="mdiOpenInNew" text="" />
        <IconCard icon={mdiPen} name="mdiPen" text="" />
        <IconCard icon={mdiPencil} name="mdiPencil" text="" />
        <IconCard icon={mdiPlus} name="mdiPlus" text="" />
        <IconCard icon={mdiPlusBox} name="mdiPlusBox" text="" />
        <IconCard icon={mdiRefresh} name="mdiRefresh" text="" />
        <IconCard icon={mdiWrench} name="mdiWrench" text="" />
      </Row>
    </div>
  );
};
