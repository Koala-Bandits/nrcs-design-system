import React from "react";
import {
  ButtonGroup,
  ButtonToolbar,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";
import { Expansion, ExpansionCard } from "components/expansions/Expansions";

import {
  ContentHeaderH1,
  ContentHeaderH2
} from "components/text/ContentHeader";

export default {
  title: "Components|Expansions"
};

export const ExpansionsDefaultStory = () => {
  let myContent = (
    <div>
      <h3>Peek-a-boo!</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
  return (
    <div>
      <ContentHeaderH1>Expansions</ContentHeaderH1>
      <p className="lead">Useful little containers...</p>

      <Expansion label="Basic Expansion something really long to test">
        {myContent}
      </Expansion>

      <h3 className="mt-4">Card</h3>

      <ExpansionCard label="Expansion Card something really long to test">
        {myContent}
      </ExpansionCard>
    </div>
  );
};

ExpansionsDefaultStory.story = {
  name: "Expansions"
};
