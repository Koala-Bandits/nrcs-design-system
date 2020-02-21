import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import Icon from "@mdi/react";
import { mdiCheckCircle } from "@mdi/js";

export default {
  title: "Components|Tabs (Nav)"
};

export const TabsDefault = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <h1>Tabs - Default</h1>

      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            href="#"
            onClick={() => {
              toggle("1");
            }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            href="#"
            onClick={() => {
              toggle("2");
            }}
          >
            Moar Tabs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            href="#"
            onClick={() => {
              toggle("3");
            }}
          >
            Tab Me!
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            href="#"
            onClick={() => {
              toggle("4");
            }}
          >
            <Icon className="mdi" path={mdiCheckCircle} color="green" />
            Tabby Tab Tab
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <h4>Tab 2 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <h4>Tab 3 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <h4>Tab 4 Contents</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>

      <h2>Vertical Tabs</h2>
      <Row>
        <Col sm="4">
          <Nav vertical tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "10" })}
                href="#"
                onClick={() => {
                  toggle("10");
                }}
              >
                Tabby Tab Tab
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "11" })}
                href="#"
                onClick={() => {
                  toggle("11");
                }}
              >
                <Icon className="mdi" path={mdiCheckCircle} color="green" />
                Tabby Tab Tab
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "12" })}
                href="#"
                onClick={() => {
                  toggle("12");
                }}
              >
                Tabby Tab Tab
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled Link
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col sm="8">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="10">
              <Row>
                <Col sm="12">
                  <h4>Tab 1 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="11">
              <Row>
                <Col sm="12">
                  <h4>Tab 2 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="12">
              <Row>
                <Col sm="12">
                  <h4>Tab 3 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="13">
              <Row>
                <Col sm="12">
                  <h4>Tab 4 Contents</h4>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </div>
  );
};

TabsDefault.story = {
  name: "Tabs - Default"
};
