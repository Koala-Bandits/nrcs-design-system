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
import { MessagesDefault } from "components/feedback/messages/AlertMessage.stories.js";
import {
  BreadcrumbsDefault,
  BreadcrumbsIcons
} from "components/breadcrumbs/Breadcrumb.stories.js";
import {
  ButtonsDefaultStory,
  ButtonsWithIconsStory,
  ButtonSetStory,
  ButtonGroupStory,
  ButtonFooterStory,
  ButtonsPositionStory
} from "components/buttons/Button.stories.js";
import { CardDefault } from "components/cards/Card.stories.js";
import {
  ContentHeaderDefault,
  ContentHeaderIcons
} from "components/text/ContentHeader.stories.js";
import { DropdownDefault } from "components/dropdowns/Dropdown.stories.js";
import { GrowlsStory } from "components/feedback/growls/Growl.stories.js";
import {
  LabelsDefault,
  LabelsHeadings
} from "components/feedback/labels/Label.stories.js";
import { LinksDefault } from "components/links/Link.stories.js";
import { ListGroupStory } from "components/listgroups/ListGroup.stories.js";
import { ModalDefault } from "components/modal/Modal.stories.js";
import { TablesDefault, TablesAlt } from "components/tables/Table.stories.js";
import { TabsStory } from "components/tabs/Tabs.stories.js";

// hook for apllication wide Growls
import useToast from "components/feedback/growls/useToast";

function KitchenSink() {
  const [activeTab, setActiveTab] = useState("default");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
    console.log(activeTab);
  };

  const cmpnts = [
    "Alerts",
    "AlertBanners",
    "AlertMessages",
    "Badge",
    "Breadcrumb",
    "Buttons",
    "Card",
    "ContentHeader",
    "Dropdowns",
    "Expansions",
    "Growls",
    "Label",
    "Links",
    "ListGroup",
    "Modal",
    "Tables",
    "Tabs"
  ];

  return (
    <div className="container">
      <Row>
        <Col md="3" className="mb-3">
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
          </Nav>
        </Col>
        <Col md="9" className="mb-3">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="default">
              <ContentHeaderH1>KitchenSink</ContentHeaderH1>
              <p className="lead">
                All our core components (Storybook stories) A-Z.
              </p>
              <Alert color="warning">
                Warning: several components are still under development with
                updates weekly.
              </Alert>
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
            <TabPane tabId="ContentHeader">
              <ContentHeaderDefault />
              <ContentHeaderIcons />
            </TabPane>
            <TabPane tabId="Dropdowns">
              <DropdownDefault />
            </TabPane>
            <TabPane tabId="Growls">
              <GrowlsStory />
            </TabPane>
            <TabPane tabId="Label">
              <LabelsDefault />
              <LabelsHeadings />
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
            <TabPane tabId="Tables">
              <TablesDefault />
              <TablesAlt />
            </TabPane>
            <TabPane tabId="Tabs">
              <TabsStory />
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </div>
  );
}

export default KitchenSink;
