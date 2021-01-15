import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { Alert } from "components/feedback/alerts/Alert";

// core components
import {
  AlertsDefault,
  AlertsNoIcon,
  AlertsDismissable,
  AlertsContent
} from "components/feedback/alerts/Alert.stories.js";
import {
  BannersDefault,
  BannersNoIcon,
  BannersDismissable,
  BannersContent
} from "components/feedback/banners/AlertBanner.stories.js";
import { BadgesDefault } from "components/feedback/badges/Badge.stories.js";
import {
  BadgeLabelsDefault,
  BadgeLabelsHeadings
} from "components/feedback/badgelabels/BadgeLabel.stories.js";
import { MessagesDefault } from "components/feedback/messages/AlertMessage.stories.js";
import {
  BreadcrumbsDefault,
  BreadcrumbsIcons
} from "components/breadcrumbs/Breadcrumbs.stories.js";
import {
  ButtonsDefaultStory,
  ButtonsWithIconsStory,
  ButtonSetStory,
  ButtonGroupStory,
  ButtonFooterStory,
  ButtonsPositionStory
} from "components/buttons/Button.stories.js";
import { CardDefault } from "components/cards/Card.stories.js";
import { CheckboxDefault } from "components/inputs/Checkbox.stories.js";
import {
  ContentHeaderDefault,
  ContentHeaderIcons
} from "components/text/ContentHeader.stories.js";
import { DataTableDefault } from "components/datatable/stories/DataTableDefault.stories";
import { DataTableBasic } from "components/datatable/stories/DataTableBasic.stories";
import { DataTableSmall } from "components/datatable/stories/DataTableSmall.stories";
import { DatePickerDefault } from "components/inputs/DatePicker.stories";
import { DropdownDefault } from "components/dropdowns/Dropdown.stories.js";
import { ExpansionsDefaultStory } from "components/expansions/Expansion.stories.js";
import { FileBrowserDefault } from "components/inputs/FileBrowser.stories.js";
import { GrowlsStory } from "components/feedback/growls/Growl.stories.js";
import { LinksDefault } from "components/links/Link.stories.js";
import { ListGroupStory } from "components/listgroups/ListGroup.stories.js";
import { ModalDefault } from "components/modal/Modal.stories.js";
import { ProgressMessageDefault } from "components/feedback/progress/ProgressMessage.stories";
import { RadioDefault } from "components/inputs/Radio.stories";
import { RangeDefault } from "components/inputs/Range.stories";
import { SearchDefault } from "components/inputs/Search.stories";
import { SelectDefault, SelectMulti } from "components/inputs/Select.stories";
import { SpinnerMessagesDefault } from "components/feedback/spinner/SpinnerMessage.stories";
import { SwitchDefault } from "components/inputs/Switch.stories";
import { TablesDefault, TablesAlt } from "components/tables/Table.stories.js";
import { TabsStory } from "components/tabs/Tabs.stories.js";
import { TimePickerDefault } from "components/inputs/TimePicker.stories";
import { TextInputDefault } from "components/inputs/TextInput.stories";
import { ProgressMessage } from "components/feedback/progress/ProgressMessage";
import { mdiLightbulbMultipleOffOutline } from "@mdi/js";

// hook for apllication wide Growls
// import useToast from "components/feedback/growls/useToast";

function RenderCmpnt() {
  // The <Route> that rendered this component has a
  // path of `/kitchen-sink/:cmpnt`. The `:cmpnt` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { cmpnt } = useParams();

  let thecmpnt;

  switch (cmpnt) {
    case "accordion":
      thecmpnt = (
        <div>
          <ContentHeaderH1>Accordion</ContentHeaderH1>
          Coming soon...
        </div>
      );
      break;
    case "alerts":
      thecmpnt = (
        <div>
          <AlertsDefault />
          <AlertsNoIcon />
          <AlertsDismissable />
          <AlertsContent />
        </div>
      );
      break;
    case "alertbanners":
      thecmpnt = (
        <div>
          <BannersDefault />
          <BannersNoIcon />
          <BannersDismissable />
          <BannersContent />
        </div>
      );
      break;
    case "alertmessages":
      thecmpnt = <MessagesDefault />;
      break;

    case "badge":
      thecmpnt = <BadgesDefault />;
      break;
    case "badgelabel":
      thecmpnt = (
        <div>
          <BadgeLabelsDefault />
          <BadgeLabelsHeadings />
        </div>
      );
      break;
    case "breadcrumb":
      thecmpnt = (
        <div>
          <BreadcrumbsDefault />
          <BreadcrumbsIcons />
        </div>
      );
      break;
    case "buttons":
      thecmpnt = (
        <div>
          <ButtonsDefaultStory />
          <ButtonsWithIconsStory />
          <ButtonSetStory />
          <ButtonGroupStory />
          <ButtonFooterStory />
          <ButtonsPositionStory />
        </div>
      );
      break;
    case "card":
      thecmpnt = <CardDefault />;
      break;
    case "checkbox":
      thecmpnt = <CheckboxDefault />;
      break;
    case "contentheader":
      thecmpnt = (
        <div>
          <ContentHeaderDefault />
          <ContentHeaderIcons />
        </div>
      );
      break;
    case "datatable":
      thecmpnt = (
        <div>
          <DataTableDefault />
          <DataTableBasic />
          <DataTableSmall />
        </div>
      );
      break;
    case "datepicker":
      thecmpnt = <DatePickerDefault />;
      break;
    case "dropdowns":
      thecmpnt = <DropdownDefault />;
      break;
    case "expansions":
      thecmpnt = <ExpansionsDefaultStory />;
      break;
    case "filebrowser":
      thecmpnt = <FileBrowserDefault />;
      break;
    case "growls":
      thecmpnt = <GrowlsStory />;
      break;
    case "links":
      thecmpnt = <LinksDefault />;
      break;
    case "listgroup":
      thecmpnt = <ListGroupStory />;
      break;
    case "modal":
      thecmpnt = <ModalDefault />;
      break;
    case "progress":
      thecmpnt = <ProgressMessageDefault />;
      break;
    case "radio":
      thecmpnt = <RadioDefault />;
      break;
    case "range":
      thecmpnt = <RangeDefault />;
      break;
    case "search":
      thecmpnt = <SearchDefault />;
      break;
    case "select":
      thecmpnt = (
        <div>
          <SelectDefault />
          <SelectMulti />
        </div>
      );
      break;
    case "spinner":
      thecmpnt = <SpinnerMessagesDefault />;
      break;
    case "switch":
      thecmpnt = <SwitchDefault />;
      break;
    case "tables":
      thecmpnt = (
        <div>
          <TablesDefault />
          <TablesAlt />
        </div>
      );
      break;
    case "tabs":
      thecmpnt = <TabsStory />;
      break;
    case "timepicker":
      thecmpnt = <TimePickerDefault />;
      break;
    case "textinput":
      thecmpnt = <TextInputDefault />;
      break;

    default:
      thecmpnt = (
        <div>
          <ContentHeaderH1 className=" mt-0">KitchenSink</ContentHeaderH1>
          <p className="lead">
            All our core components (Storybook stories) A-Z.
          </p>
          <Alert color="warning">
            Warning: several components are still under development and
            incomplete.
          </Alert>
        </div>
      );
  }

  return thecmpnt;
}

function KitchenSink() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route ~/components/kitchensink, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  // workaround for defect: https://github.com/ReactTraining/react-router/issues/7033
  let fullUrl = "/nrcs-design-system" + url;
  let fullPath = "/nrcs-design-system" + path;

  const cmpnts = [
    "Accordion",
    "Breadcrumb",
    "Buttons",
    "Card",
    "ContentHeader",
    "DataTable",
    "Dropdowns",
    "Expansions",
    "Links",
    "ListGroup",
    "Modal",
    "Tables",
    "Tabs"
  ];

  const feedback = [
    "Alerts",
    "AlertBanners",
    "AlertMessages",
    "Badge",
    "BadgeLabel",
    "Growls",
    "Progress",
    "Spinner"
  ];

  const inputs = [
    "Checkbox",
    "DatePicker",
    "FileBrowser",
    "Radio",
    "Range",
    "Search",
    "Select",
    "Switch",
    "TimePicker",
    "TextInput"
  ];

  //meh hack for now?
  const locationPath = useLocation().pathname;
  const lastSeg = locationPath.substring(locationPath.lastIndexOf("/") + 1);

  return (
    <div className="container">
      <Row>
        <Col md="3" className="mb-3">
          <h3>Components</h3>
          <Nav className="nav-fpac" vertical>
            <NavItem>
              <NavLink
                className={lastSeg === "kitchen-sink" ? "active" : ""}
                href={`${fullUrl}`}
              >
                Overview
              </NavLink>
            </NavItem>
            {cmpnts.map(cmpnt => {
              return (
                <NavItem key={cmpnt}>
                  <NavLink
                    className={lastSeg === cmpnt.toLowerCase() ? "active" : ""}
                    href={`${fullUrl}/${cmpnt.toLowerCase()}`}
                  >
                    {cmpnt}
                  </NavLink>
                </NavItem>
              );
            })}
            <h3 className="mt-4">Feedback</h3>
            {feedback.map(cmpnt => {
              return (
                <NavItem key={cmpnt}>
                  <NavLink
                    className={lastSeg === cmpnt.toLowerCase() ? "active" : ""}
                    href={`${fullUrl}/${cmpnt.toLowerCase()}`}
                  >
                    {cmpnt}
                  </NavLink>
                </NavItem>
              );
            })}
            <h3 className="mt-4">Inputs</h3>
            {inputs.map(cmpnt => {
              return (
                <NavItem key={cmpnt}>
                  <NavLink
                    className={lastSeg === cmpnt.toLowerCase() ? "active" : ""}
                    href={`${fullUrl}/${cmpnt.toLowerCase()}`}
                  >
                    {cmpnt}
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Col>
        <Col md="9" className="mb-3">
          <Router>
            <Switch>
              <Route exact path={fullPath}>
                <RenderCmpnt />
              </Route>
              <Route path={`${fullPath}/:cmpnt`}>
                <RenderCmpnt />
              </Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </div>
  );
}

export default KitchenSink;
