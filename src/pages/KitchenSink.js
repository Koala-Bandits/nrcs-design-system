import React, { useState } from "react";
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
import { RadioDefault } from "components/inputs/Radio.stories";
import { RangeDefault } from "components/inputs/Range.stories";
import { SearchDefault } from "components/inputs/Search.stories";
import { SelectDefault, SelectMulti } from "components/inputs/Select.stories";
import { SwitchDefault } from "components/inputs/Switch.stories";
import { TablesDefault, TablesAlt } from "components/tables/Table.stories.js";
import { TabsStory } from "components/tabs/Tabs.stories.js";
import { TimePickerDefault } from "components/inputs/TimePicker.stories";
import { TextInputDefault } from "components/inputs/TextInput.stories";

// hook for apllication wide Growls
import useToast from "components/feedback/growls/useToast";

function KitchenSink() {
  const [activeTab, setActiveTab] = useState("default");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
    console.log(activeTab);
  };

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
    "Growls"
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

  return (
    <div className="container">
      <Row>
        <Col md="3" className="mb-3">
          <h3>Components</h3>
          <Nav className="nav-fpac" vertical>
            <NavItem>
              <NavLink
                className={activeTab === "default" ? "active" : ""}
                href="#"
                onClick={() => {
                  toggle("default");
                }}
              >
                Overview
              </NavLink>
            </NavItem>
            {cmpnts.map(cmpnt => {
              return (
                <NavItem key={cmpnt}>
                  <NavLink
                    className={activeTab === cmpnt ? "active" : ""}
                    href="#"
                    onClick={() => {
                      toggle(cmpnt);
                    }}
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
                    className={activeTab === cmpnt ? "active" : ""}
                    href="#"
                    onClick={() => {
                      toggle(cmpnt);
                    }}
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
                    className={activeTab === cmpnt ? "active" : ""}
                    href="#"
                    onClick={() => {
                      toggle(cmpnt);
                    }}
                  >
                    {cmpnt}
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Col>
        <Col md="9" className="mb-3">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="default">
              <ContentHeaderH1 className=" mt-0">KitchenSink</ContentHeaderH1>
              <p className="lead">
                All our core components (Storybook stories) A-Z.
              </p>
              <Alert color="warning">
                Warning: several components are still under development with
                updates weekly.
              </Alert>
            </TabPane>
            <TabPane tabId="Accordion">
              <ContentHeaderH1>Accordion</ContentHeaderH1>
              Coming soon...
            </TabPane>
            <TabPane tabId="Alerts">
              <AlertsDefault />
              <AlertsNoIcon />
              <AlertsDismissable />
              <AlertsContent />
            </TabPane>
            <TabPane tabId="AlertBanners">
              <BannersDefault />
              <BannersNoIcon />
              <BannersDismissable />
              <BannersContent />
            </TabPane>
            <TabPane tabId="AlertMessages">
              <MessagesDefault />
            </TabPane>
            <TabPane tabId="Badge">
              <BadgesDefault />
            </TabPane>
            <TabPane tabId="BadgeLabel">
              <BadgeLabelsDefault />
              <BadgeLabelsHeadings />
            </TabPane>
            <TabPane tabId="Breadcrumb">
              <BreadcrumbsDefault />
              <BreadcrumbsIcons />
            </TabPane>
            <TabPane tabId="Buttons">
              <ButtonsDefaultStory />
              <ButtonsWithIconsStory />
              <ButtonSetStory />
              <ButtonGroupStory />
              <ButtonFooterStory />
              <ButtonsPositionStory />
            </TabPane>
            <TabPane tabId="Card">
              <CardDefault />
            </TabPane>
            <TabPane tabId="Checkbox">
              <CheckboxDefault />
            </TabPane>
            <TabPane tabId="ContentHeader">
              <ContentHeaderDefault />
              <ContentHeaderIcons />
            </TabPane>
            <TabPane tabId="DataTable">
              <DataTableDefault />
              <DataTableBasic />
              <DataTableSmall />
            </TabPane>
            <TabPane tabId="DatePicker">
              <DatePickerDefault />
            </TabPane>
            <TabPane tabId="Dropdowns">
              <DropdownDefault />
            </TabPane>
            <TabPane tabId="Expansions">
              <ExpansionsDefaultStory />
            </TabPane>
            <TabPane tabId="FileBrowser">
              <FileBrowserDefault />
            </TabPane>
            <TabPane tabId="Growls">
              <GrowlsStory />
            </TabPane>
            <TabPane tabId="Links">
              <LinksDefault />
            </TabPane>
            <TabPane tabId="ListGroup">
              <ListGroupStory />
            </TabPane>
            <TabPane tabId="Modal">
              <ModalDefault />
            </TabPane>
            <TabPane tabId="Radio">
              <RadioDefault />
            </TabPane>
            <TabPane tabId="Range">
              <RangeDefault />
            </TabPane>
            <TabPane tabId="Search">
              <SearchDefault />
            </TabPane>
            <TabPane tabId="Select">
              <SelectDefault />
              <SelectMulti />
            </TabPane>
            <TabPane tabId="Switch">
              <SwitchDefault />
            </TabPane>
            <TabPane tabId="Tables">
              <TablesDefault />
              <TablesAlt />
            </TabPane>
            <TabPane tabId="Tabs">
              <TabsStory />
            </TabPane>
            <TabPane tabId="TimePicker">
              <TimePickerDefault />
            </TabPane>
            <TabPane tabId="TextInput">
              <TextInputDefault />
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </div>
  );
}

export default KitchenSink;
