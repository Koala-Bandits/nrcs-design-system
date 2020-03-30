import React from "react";
import { Button, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import {
  ContentHeaderH1,
  ContentHeaderH2
} from "components/text/ContentHeader";

export default {
  title: "Components|List Group"
  // component: PrimaryButton
};

export const ListGroupStory = () => (
  <div>
    <ContentHeaderH2>Basic</ContentHeaderH2>

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

    <ContentHeaderH2>Links and Buttons</ContentHeaderH2>
    <h3>Links </h3>
    <p>
      Be sure to{" "}
      <strong>
        not use the standard <code>.btn</code> classes here
      </strong>
      .
    </p>
    <ListGroup style={{ maxWidth: 500 }}>
      <ListGroupItem tag="a" href="#" action>
        Cras justo odio
      </ListGroupItem>
      <ListGroupItem active tag="a" href="#" action>
        Dapibus ac facilisis in
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
    <p />
    <h3>Buttons </h3>
    <ListGroup style={{ maxWidth: 500 }}>
      <ListGroupItem tag="button" action>
        Cras justo odio
      </ListGroupItem>
      <ListGroupItem active tag="button" action>
        Dapibus ac facilisis in
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
