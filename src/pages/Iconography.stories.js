import React from "react";
import Icon from "@mdi/react";
import { Row, Col, Card, CardBody, CardText, Table } from "reactstrap";
import {
  mdiAccount,
  mdiAccountCircle,
  mdiAccountCog,
  mdiAccountMultiple,
  mdiAlert,
  mdiAlertCircle,
  mdiBell,
  mdiBellOutline,
  mdiCalendar,
  mdiCalendarBlank,
  mdiCheck,
  mdiCheckCircle,
  mdiCheckCircleOutline,
  mdiCheckboxMarked,
  mdiChevronDown,
  mdiChevronRight,
  mdiChevronLeft,
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
  mdiCursorMove,
  mdiCursorPointer,
  mdiCursorText,
  mdiDelete,
  mdiDotsVertical,
  mdiDotsVerticalCircle,
  mdiDownload,
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
  mdiMapMarker,
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

  function IconRow(props) {
    return (
      <tr>
        <td>
          <Icon className="mdi" path={props.icon} size={1.3} />
          <Icon className="mdi" path={props.icon} size={1} />
          <Icon className="mdi" path={props.icon} size={0.8} />
        </td>
        <td>{props.name}</td>
        <td>{props.text}</td>
      </tr>
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
      <Row>
        <Table className="table-alt">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Icon Name</th>
              <th>Usage Notes</th>
            </tr>
          </thead>
          <tbody>
            <IconRow
              icon={mdiAccount}
              name="mdiAccount"
              text="User account, user preferences"
            />
            <IconRow
              icon={mdiAccountCircle}
              name="mdiAccountCircle"
              text="Alternate user account, user preferences"
            />
            <IconRow
              icon={mdiAccountCog}
              name="mdiAccountCircle"
              text="User account preferences, settings"
            />
            <IconRow
              icon={mdiAccountMultiple}
              name="mdiAccountMultiple"
              text="Users, clients, people"
            />
            <IconRow
              icon={mdiAlert}
              name="mdiAlert"
              text="Warning alerts (growls, messaging), caution"
            />
            <IconRow
              icon={mdiAlertCircle}
              name="mdiAlertCircle"
              text="Error alerts (growls, messaging, validation), danger"
            />
            <IconRow
              icon={mdiBell}
              name="mdiBell"
              text="Notifications (not alerts)"
            />
            <IconRow
              icon={mdiBellOutline}
              name="mdiBellOutline"
              text="Notifications (not alerts) alternate"
            />
            <IconRow
              icon={mdiCalendar}
              name="mdiCalendar"
              text="Calendar and date pickers"
            />
            <IconRow
              icon={mdiCalendarBlank}
              name="mdiCalendarBlank"
              text="Calendar and date pickers"
            />
            <IconRow
              icon={mdiCheck}
              name="mdiCheck"
              text="Used as an idication of selection, choice, included"
            />
            <IconRow
              icon={mdiCheckCircle}
              name="mdiCheckCircle"
              text="Success alerts and status, complete"
            />
            <IconRow
              icon={mdiCheckCircleOutline}
              name="mdiCheckCircleOutline"
              text="Success, complete, status alternate"
            />
            <IconRow
              icon={mdiCheckboxMarked}
              name="mdiCheckboxMarked"
              text="Used to show checked status, inclusion, or selection (careful: not a checkbox)"
            />
            <IconRow
              icon={mdiChevronDown}
              name="mdiChevronDown"
              text="Open for dropdowns and menus, open state for expansions"
            />
            <IconRow
              icon={mdiChevronLeft}
              name="mdiChevronLeft"
              text="Previous, back"
            />
            <IconRow
              icon={mdiChevronRight}
              name="mdiChevronRight"
              text="Next, indicator"
            />
            <IconRow
              icon={mdiChevronDoubleDown}
              name="mdiChevronDoubleDown"
              text="Expand-all"
            />
            <IconRow
              icon={mdiChevronDoubleUp}
              name="mdiChevronDoubleUp"
              text="Collapse-all"
            />
            <IconRow icon={mdiClose} name="mdiClose" text="Close" />
            <IconRow
              icon={mdiCloseCircle}
              name="mdiCloseCircle"
              text="Remove from list (non-permanent)"
            />
            <IconRow
              icon={mdiCloseCircleOutline}
              name="mdiCloseCircleOutline"
              text="Remove alternate"
            />
            <IconRow
              icon={mdiClockOutline}
              name="mdiClockOutline"
              text="Clock, time, in-progress status"
            />
            {/* <IconRow icon={mdiCog} name="mdiCog" text="" /> */}
            <IconRow icon={mdiContentCopy} name="mdiContentCopy" text="Copy" />
            <IconRow icon={mdiContentCut} name="mdiContentCut" text="Cut" />
            <IconRow
              icon={mdiContentPaste}
              name="mdiContentPaste"
              text="Paste"
            />
            <IconRow
              icon={mdiCursorDefault}
              name="mdiCursorDefault"
              text="Cursor default"
            />
            <IconRow
              icon={mdiCursorMove}
              name="mdiCursorMove"
              text="Cursor move, pan"
            />
            <IconRow
              icon={mdiCursorPointer}
              name="mdiCursorPointer"
              text="Cursor pointer, selection"
            />
            <IconRow
              icon={mdiCursorText}
              name="mdiCursorText"
              text="Cursor text"
            />
            <IconRow
              icon={mdiDelete}
              name="mdiDelete"
              text="Delete permanently"
            />
            <IconRow
              icon={mdiDotsVertical}
              name="mdiDotsVertical"
              text="Actions, menu"
            />
            <IconRow
              icon={mdiDotsVerticalCircle}
              name="mdiDotsVerticalCircle"
              text="Actions, menu alternate"
            />
            <IconRow icon={mdiDownload} name="mdiDownload" text="Download" />
            <IconRow
              icon={mdiExport}
              name="mdiExport"
              text="Export data, files"
            />
            <IconRow icon={mdiEye} name="mdiEye" text="View, preview" />
            <IconRow icon={mdiFilter} name="mdiFilter" text="Filter" />
            <IconRow icon={mdiHelpCircle} name="mdiHelpCircle" text="Help" />
            <IconRow
              icon={mdiHelpCircleOutline}
              name="mdiHelpCircleOutline"
              text="Help alternate, contextual"
            />
            <IconRow icon={mdiHome} name="mdiHome" text="Home, homepage" />
            <IconRow
              icon={mdiImport}
              name="mdiImport"
              text="Import data, files"
            />
            <IconRow
              icon={mdiInformation}
              name="mdiInformation"
              text="Information alerts (growls and messaging)"
            />
            <IconRow icon={mdiLayers} name="mdiLayers" text="Layers" />
            <IconRow icon={mdiLock} name="mdiLock" text="Locked" />
            <IconRow
              icon={mdiLockOpenOutline}
              name="mdiLockOpenOutline"
              text="Unlocked"
            />
            <IconRow icon={mdiLogin} name="mdiLogin" text="Login" />
            <IconRow icon={mdiLogout} name="mdiLogout" text="Logout" />
            <IconRow icon={mdiMagnify} name="mdiMagnify" text="Search" />
            <IconRow
              icon={mdiMapMarker}
              name="mdiMapMarker"
              text="Map marker, point, pin"
            />
            <IconRow
              icon={mdiMenu}
              name="mdiMenu"
              text="Menu, mobile menu toggle"
            />
            <IconRow icon={mdiMenuDown} name="mdiMenuDown" text="Node open" />
            <IconRow
              icon={mdiMenuRight}
              name="mdiMenuRight"
              text="Node closed"
            />
            <IconRow
              icon={mdiMinusBox}
              name="mdiMinusBox"
              text="Indeterminate"
            />
            <IconRow
              icon={mdiMinusBoxOutline}
              name="mdiMinusBoxOutline"
              text="Indeterminate alternate"
            />
            <IconRow
              icon={mdiMinusCircle}
              name="mdiMinusCircle"
              text="Not started, unavailable"
            />
            <IconRow
              icon={mdiMinusCircleOutline}
              name="mdiMinusCircleOutline"
              text="Not started, unavailable"
            />
            <IconRow
              icon={mdiOpenInNew}
              name="mdiOpenInNew"
              text="Open in new window (external links)"
            />
            <IconRow icon={mdiPen} name="mdiPen" text="Sign, signature" />
            <IconRow icon={mdiPencil} name="mdiPencil" text="Edit" />
            <IconRow icon={mdiPlus} name="mdiPlus" text="Add new" />
            <IconRow icon={mdiPlusBox} name="mdiPlusBox" text="Add new" />
            <IconRow
              icon={mdiRefresh}
              name="mdiRefresh"
              text="Refresh, reload"
            />
            <IconRow icon={mdiWrench} name="mdiWrench" text="Admin, support" />
          </tbody>
        </Table>
      </Row>
      {/* <Row xs="1" sm="2">
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
        <IconCard icon={mdiCog} name="mdiCog" text="" />
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
      </Row> */}
    </div>
  );
};
