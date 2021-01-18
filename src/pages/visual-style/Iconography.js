import React from "react";
import { Icon } from "@mdi/react";
import { Row, Col, Table } from "reactstrap";
import {
  ContentHeaderH1,
  ContentHeaderH2,
} from "components/text/ContentHeader";
import {
  mdiAccount,
  mdiAccountCircle,
  mdiAccountCog,
  mdiAccountMultiple,
  mdiAlert,
  mdiAlertOutline,
  mdiAlertCircle,
  mdiAlertCircleOutline,
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
  mdiEye,
  mdiFileExport,
  mdiFileImport,
  mdiFilter,
  mdiHelpCircle,
  mdiHelpCircleOutline,
  mdiHome,
  mdiInformation,
  mdiLayers,
  mdiLink,
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
  mdiSettings,
  mdiWrench,
} from "@mdi/js";

class Iconography extends React.Component {
  render() {
    const iconExampleText = '<Icon className="mdi" path={mdiInformation} />';
    const iconExampleTextColor =
      '<Icon className="mdi mdi-success" path={mdiInformation} size={0.8} />';
    const iconExampleTextMisc =
      '<Icon className="mdi" path={mdiInformation} color="#800080" />';

    // function IconCard(props) {
    //   return (
    //     <Col>
    //       <Card className="mb-3">
    //         <Row className="no-gutters">
    //           <Col
    //             sm="4"
    //             className="d-flex align-items-center justify-content-center p-4"
    //           >
    //             <Icon className="mdi" path={props.icon} size={1.3} />
    //             <Icon className="mdi" path={props.icon} size={1} />
    //             <Icon className="mdi" path={props.icon} size={0.8} />
    //           </Col>
    //           <Col sm="8">
    //             <CardBody>
    //               <h6 className="card-title">{props.name}</h6>
    //               <p className="card-text">{props.text}</p>
    //             </CardBody>
    //           </Col>
    //         </Row>
    //       </Card>
    //     </Col>
    //   );
    // }

    function IconRow(props) {
      let mdiclass;

      switch (props.color) {
        case "warning":
          mdiclass = "mdi-warning";
          break;
        case "danger":
          mdiclass = "mdi-danger";
          break;
        case "success":
          mdiclass = "mdi-success";
          break;
        case "info":
          mdiclass = "mdi-info";
          break;
        default:
          mdiclass = "mdi";
      }

      return (
        <tr>
          <td>
            <Icon className={mdiclass} path={props.icon} size={1.3} />
            <Icon className={mdiclass} path={props.icon} size={1} />
            <Icon className={mdiclass} path={props.icon} size={0.8} />
          </td>
          <td>{props.name}</td>
          <td>{props.text}</td>
        </tr>
      );
    }

    return (
      <div className="container">
        <ContentHeaderH1>Iconography</ContentHeaderH1>

        <p className="lead">
          NRCS Design System is using the{" "}
          <strong>
            <a
              href="https://materialdesignicons.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material Design (Community) Icons
            </a>
          </strong>{" "}
          which is a superset of the Google Material Icons.
        </p>
        <ul>
          <li>
            NRCS Design System is using SVG MDI icons with a base font size of{" "}
            <code>size={"{1}"}</code> for 24px or 1.5 rem. For small components,{" "}
            <code>size={"{0.8}"}</code> gives 19px, and{" "}
            <code>size={"{1.3}"}</code> for a large ~31px icon.
          </li>
          <li>
            Default icon color: gray (<code>$gray-800</code> via use of{" "}
            <code>mdi</code> CSS class)
          </li>
          <li>
            Use NRCS Design System <i>accent</i> colors for feedback components
            and status scenarios with individual icons (<code>mdi-info</code>,{" "}
            <code>mdi-success</code>, <code>mdi-warning</code>,{" "}
            <code>mdi-danger</code> CSS classes are available)
          </li>
          <li>
            Action/Clickable icon color is{" "}
            <span className="text-primary">primary blue</span> (see buttons with
            icons component)
          </li>
          <li>
            For more information on properties and usage, see the{" "}
            <a
              href="https://dev.materialdesignicons.com/getting-started/react"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDI Getting Started documentation for React.
            </a>
          </li>
        </ul>

        <h2 className="h4">Example Usage</h2>

        <p>
          <code>{iconExampleText}</code>
        </p>
        <p>
          <code>{iconExampleTextColor}</code>
        </p>
        <p>
          <code>{iconExampleTextMisc}</code>
        </p>

        <ContentHeaderH2>Legend (most commonly used)</ContentHeaderH2>
        <p>
          For the best user experience, the icons listed here should be used
          consistently for the purposes described.
        </p>
        <Row>
          <Col>
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
                  icon={mdiAccountCircle}
                  name="mdiAccountCircle"
                  text="User account, user preferences"
                />
                <IconRow
                  icon={mdiAccount}
                  name="mdiAccount"
                  text="Alternate user account, user preferences"
                />
                <IconRow
                  icon={mdiAccountCog}
                  name="mdiAccountCog"
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
                  text="Warning alerts (growls, messaging), use to expresses warning or caution"
                />
                <IconRow
                  icon={mdiAlert}
                  name="mdiAlert"
                  text="Warning alert with warning accent color"
                  color="warning"
                />
                <IconRow
                  icon={mdiAlertOutline}
                  name="mdiAlertOutline"
                  text="Alternate warning alerts (subdued)"
                />
                <IconRow
                  icon={mdiAlertOutline}
                  name="mdiAlertOutline"
                  text="Alternate warning alerts (subdued) with warning accent color"
                  color="warning"
                />
                <IconRow
                  icon={mdiAlertCircle}
                  name="mdiAlertCircle"
                  text="Error alerts (growls, messaging, validation), use to express error or danger"
                />
                <IconRow
                  icon={mdiAlertCircle}
                  name="mdiAlertCircle"
                  text="Error alerts with warning accent color"
                  color="danger"
                />
                <IconRow
                  icon={mdiAlertCircleOutline}
                  name="mdiAlertCircleOutline"
                  text="Alternate (subdued) error alerts"
                />
                <IconRow
                  icon={mdiAlertCircleOutline}
                  name="mdiAlertCircleOutline"
                  text="Alternate (subdued) error alerts with danger accent color"
                  color="danger"
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
                  icon={mdiCheckCircle}
                  name="mdiCheckCircle"
                  text="Success alerts and status, complete with success accent color"
                  color="success"
                />
                <IconRow
                  icon={mdiCheckCircleOutline}
                  name="mdiCheckCircleOutline"
                  text="Success, complete, status alternate"
                />
                <IconRow
                  icon={mdiCheckCircleOutline}
                  name="mdiCheckCircleOutline"
                  text="Success, complete, status alternate with success accent color"
                  color="success"
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
                <IconRow
                  icon={mdiClose}
                  name="mdiClose"
                  text="Close (preferred)"
                />
                <IconRow
                  icon={mdiCloseCircle}
                  name="mdiCloseCircle"
                  text="Close"
                />
                <IconRow
                  icon={mdiCloseCircleOutline}
                  name="mdiCloseCircleOutline"
                  text="Close"
                />
                <IconRow
                  icon={mdiClockOutline}
                  name="mdiClockOutline"
                  text="Clock, time, in-progress status"
                />
                <IconRow
                  icon={mdiClockOutline}
                  name="mdiClockOutline"
                  text="Clock, time, in-progress status with accent color"
                  color="info"
                />
                <IconRow
                  icon={mdiContentCopy}
                  name="mdiContentCopy"
                  text="Copy"
                />
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
                <IconRow
                  icon={mdiDownload}
                  name="mdiDownload"
                  text="Download"
                />
                <IconRow
                  icon={mdiFileExport}
                  name="mdiFileExport"
                  text="Export data, files"
                />
                <IconRow icon={mdiEye} name="mdiEye" text="View, preview" />
                <IconRow icon={mdiFilter} name="mdiFilter" text="Filter" />
                <IconRow
                  icon={mdiHelpCircle}
                  name="mdiHelpCircle"
                  text="Help"
                />
                <IconRow
                  icon={mdiHelpCircleOutline}
                  name="mdiHelpCircleOutline"
                  text="Help alternate, contextual"
                />
                <IconRow icon={mdiHome} name="mdiHome" text="Home, homepage" />
                <IconRow
                  icon={mdiFileImport}
                  name="mdiFileImport"
                  text="Import data, files"
                />
                <IconRow
                  icon={mdiInformation}
                  name="mdiInformation"
                  text="Information alerts (growls and messaging)"
                />
                <IconRow
                  icon={mdiInformation}
                  name="mdiInformation"
                  text="Information alerts (growls and messaging) with information accent color"
                  color="info"
                />
                <IconRow icon={mdiLayers} name="mdiLayers" text="Layers" />
                <IconRow
                  icon={mdiLink}
                  name="mdiLink"
                  text="Link (hyperlink/anchor)"
                />
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
                <IconRow
                  icon={mdiMenuDown}
                  name="mdiMenuDown"
                  text="Node open"
                />
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
                  text="Remove, not started, unavailable"
                />
                <IconRow
                  icon={mdiMinusCircleOutline}
                  name="mdiMinusCircleOutline"
                  text="Remove, not started, unavailable"
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
                <IconRow
                  icon={mdiSettings}
                  name="mdiSettings"
                  text="Settings"
                />
                <IconRow
                  icon={mdiWrench}
                  name="mdiWrench"
                  text="Admin, support"
                />
              </tbody>
            </Table>
          </Col>
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
  }
}

export default Iconography;
