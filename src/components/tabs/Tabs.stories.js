import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import {
  ContentHeaderH1,
  ContentHeaderH2
} from "components/text/ContentHeader";
import classnames from "classnames";

export default {
  title: 'Components/Tabs (Nav)'
};

export const TabsStory = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <ContentHeaderH1>Tabs</ContentHeaderH1>

      <h3 className="mt-4 mb-3">Default Horizontal </h3>

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
            disabled
            className={classnames({ active: activeTab === "4" })}
            href="#"
            onClick={() => {
              toggle("4");
            }}
          >
            Disabled Tab
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
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12" className="p-3">
              <p>
                Marsupials are any members of the mammalian infraclass
                Marsupialia. All extant marsupials are endemic to Australasia
                and the Americas. A distinctive characteristic common to these
                species is that most of the young are carried in a pouch.
              </p>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12" className="p-3">
              <p>
                The koala or, inaccurately, koala bear[a] (Phascolarctos
                cinereus) is an arboreal herbivorous marsupial native to
                Australia. It is the only extant representative of the family
                Phascolarctidae and its closest living relatives are the
                wombats, which comprise the family Vombatidae. The koala is
                found in coastal areas of the mainland's eastern and southern
                regions, inhabiting Queensland, New South Wales, Victoria, and
                South Australia. It is easily recognisable by its stout,
                tailless body and large head with round, fluffy ears and large,
                spoon-shaped nose. The koala has a body length of 60–85 cm
                (24–33 in) and weighs 4–15 kg (9–33 lb). Fur colour ranges from
                silver grey to chocolate brown. Koalas from the northern
                populations are typically smaller and lighter in colour than
                their counterparts further south.
              </p>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12" className="p-3">
              <p>
                The Atlantic jackknife clam, Ensis leei,[1] also known as the
                bamboo clam, American jackknife clam or razor clam, is a large
                edible marine bivalve mollusc found on the North American
                Atlantic coast, from Canada to South Carolina. The species has
                also been introduced to Europe. The name "razor clam" is also
                used to refer to different species such as the Pacific razor
                clam (Siliqua patula) or Razor shell (Ensis magnus).
              </p>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12" className="p-3">
              <p>
                Wrens are a family of brown passerine birds in the predominantly
                New World family Troglodytidae. The family includes 88 species
                divided into 19 genera. Only the Eurasian wren occurs in the Old
                World, where, in Anglophone regions, it is commonly known simply
                as the "wren", as it is the originator of the name. The name
                wren has been applied to other, unrelated birds, particularly
                the New Zealand wrens (Acanthisittidae) and the Australian wrens
                (Maluridae).
              </p>
            </Col>
          </Row>
        </TabPane>
      </TabContent>

      <h3 className="mt-4 mb-3">Default - justified fill</h3>
      <Nav tabs justified>
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
            disabled
            className={classnames({ active: activeTab === "4" })}
            href="#"
            onClick={() => {
              toggle("4");
            }}
          >
            Disabled Tab
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
      </Nav>

      <h3 className="mt-4 mb-3">FPAC underline style</h3>
      <Nav className="nav-fpac">
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
            disabled
            className={classnames({ active: activeTab === "4" })}
            href="#"
            onClick={() => {
              toggle("4");
            }}
          >
            Disabled Tab
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
      </Nav>

      <h3 className="mt-4 mb-3">FPAC underline style - justified fill</h3>
      <Nav className="nav-fpac" justified>
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
            disabled
            className={classnames({ active: activeTab === "4" })}
            href="#"
            onClick={() => {
              toggle("4");
            }}
          >
            Disabled Tab
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
      </Nav>

      <ContentHeaderH2>Vertical</ContentHeaderH2>
      <p>
        Vertical Tabs are go to component for sidebar (left) as a sub-navigation
        of pages. Similar to a List Group, but w/ subtle differences as Nav
        components.
      </p>
      <Row>
        <Col sm="4">
          <Nav className="nav-fpac" vertical>
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
              <NavLink disabled href="#">
                Disabled Link
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
          </Nav>
        </Col>
        <Col sm="8">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <p>
                    Pinacate beetles, also known as stink beetles, are darkling
                    beetles of the genus Eleodes endemic to the Sonoran Desert
                    and adjacent regions of the U.S. Southwest and Mexico,
                    usually the species Eleodes obscurus. The name is also
                    loosely applied to a number of closely related species of
                    Eleodes, of Western Mexico and the Western United States
                    (including the Great Basin), which, aside from the wooly
                    darkling beetle, are not easily distinguished from each
                    other. The name pinacate is Mexican Spanish, derived from
                    the Nahuatl (Aztec) name for the insect, pinacatl, which
                    translates as "black beetle".
                  </p>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <p>
                    An alligator is a crocodilian in the genus Alligator of the
                    family Alligatoridae. The two living species are the
                    American alligator (A. mississippiensis) and the Chinese
                    alligator (A. sinensis). Additionally, several extinct
                    species of alligator are known from fossil remains.
                    Alligators first appeared during the Oligocene epoch about
                    37 million years ago.
                  </p>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <p>
                    The bobcat (Lynx rufus) is a medium-sized North American
                    cat[2] that first appeared during the Irvingtonian stage
                    around 1.8 million years ago (AEO).
                  </p>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="4">
              <Row>
                <Col sm="12">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </div>
  );
};

TabsStory.story = {
  name: "Tabs - Default"
};
