import React from "react";
import { Button, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import {
  ContentHeaderH1,
  ContentHeaderH2
} from "components/text/ContentHeader";

export default {
  title: "Components|List Groups"
  // component: PrimaryButton
};

export const ListGroupStory = () => (
  <div className="mb-4">
    <ContentHeaderH2>Default (Card Style)</ContentHeaderH2>

    <p>Used by itself as a card in layout for list or selection.</p>

    <ListGroup style={{ maxWidth: 500 }}>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem active aria-selected="true">
        Morbi leo risus (active/selected)
      </ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>

    <ContentHeaderH2>Flush</ContentHeaderH2>

    <p>
      A "flush" ListGroup is typically used in a sidebar (left) for secondary
      app navigation, see tabs stories for examples with as a tab controller.
    </p>

    <ListGroup flush style={{ maxWidth: 500 }}>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem active aria-selected="true">
        Morbi leo risus (active/selected)
      </ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>

    <ContentHeaderH2>Borderless</ContentHeaderH2>

    <p>
      Often used as a sidebar (right) for in-page sub-navigation via Scrollspy.
    </p>

    <ListGroup className="list-group-borderless" style={{ maxWidth: 500 }}>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem active aria-selected="true">
        Morbi leo risus (active/selected)
      </ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>

    <ContentHeaderH2>Kitchen Sink</ContentHeaderH2>

    <ListGroup style={{ maxWidth: 500 }}>
      <ListGroupItem>Basic item</ListGroupItem>
      <ListGroupItem disabled aria-disabled="true">
        This item is <strong>disabled</strong>
      </ListGroupItem>
      <ListGroupItem>Another basic item</ListGroupItem>
      <ListGroupItem active aria-selected="true">
        This items is <strong>active/selected</strong>
      </ListGroupItem>
      <ListGroupItem>
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List item heading</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </ListGroupItem>
      <ListGroupItem>Yet another basic item</ListGroupItem>
    </ListGroup>

    <ContentHeaderH2>Flush with Links</ContentHeaderH2>

    <p>
      Be sure to{" "}
      <strong>
        not use the standard <code>.btn</code> classes here
      </strong>
      .
    </p>

    <ListGroup flush style={{ maxWidth: 500 }}>
      <ListGroupItem tag="a" href="#" action>
        Cras justo odio
      </ListGroupItem>
      <ListGroupItem active tag="a" href="#" action>
        Dapibus ac facilisis in (active/selected)
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" action>
        Morbi leo risus
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" action>
        Porta ac consectetur ac
      </ListGroupItem>
      <ListGroupItem disabled tag="a" href="#" action>
        Vestibulum at eros (disabled)
      </ListGroupItem>
    </ListGroup>

    <ContentHeaderH2>Borderless with Links</ContentHeaderH2>

    <ListGroup className="list-group-borderless" style={{ maxWidth: 500 }}>
      <ListGroupItem tag="a" href="#" action>
        Cras justo odio
      </ListGroupItem>
      <ListGroupItem active tag="a" href="#" action>
        Dapibus ac facilisis in (active/selected)
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" action>
        Morbi leo risus
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" action>
        Porta ac consectetur ac
      </ListGroupItem>
      <ListGroupItem disabled tag="a" href="#" action>
        Vestibulum at eros (disabled)
      </ListGroupItem>
    </ListGroup>

    <ContentHeaderH2>Default with Buttons</ContentHeaderH2>
    <ListGroup style={{ maxWidth: 500 }}>
      <ListGroupItem tag="button" action>
        Cras justo odio
      </ListGroupItem>
      <ListGroupItem active tag="button" action>
        Dapibus ac facilisis in (active/selected)
      </ListGroupItem>
      <ListGroupItem tag="button" action>
        Morbi leo risus
      </ListGroupItem>
      <ListGroupItem tag="button" action>
        Porta ac consectetur ac
      </ListGroupItem>
      <ListGroupItem disabled tag="button" action>
        Vestibulum at eros (disabled)
      </ListGroupItem>
    </ListGroup>
  </div>
);

ListGroupStory.story = {
  name: "List Group"
};
