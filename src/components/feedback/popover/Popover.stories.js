import React, { useState } from "react";
import { Row, Col, Card, CardBody, UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import { PrimaryButton, ButtonSet } from "components/buttons/Buttons";
import { ContentHeaderH1 } from "components/text/ContentHeader";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Feedback/Popover",
};

export const PopoverStory = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div aria-live="polite" aria-atomic="true" className="docs-btn">
      <ContentHeaderH1>Popovers</ContentHeaderH1>

      <p className="lead">
        Info coming soon...
      </p>
      <p>
        <strong>
          Coming soon...
        </strong>{" "}
        Coming soon...
      </p>
      <p>
        Coming soon...
      </p>
      <p>
        Coming soon...
      </p>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <h2>Popover Example</h2>
              <p>
                Coming soon...
              </p>
              <p>
                Coming soon...
              </p>
              <p>
                Coming soon...
              </p>
              <PrimaryButton id="PopoverFocus" >Show Popover</PrimaryButton>
              <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                <PopoverHeader>Focus Trigger</PopoverHeader>
                <PopoverBody>Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You cannot select this text as the popover will disappear when you try.</PopoverBody>
              </UncontrolledPopover>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

PopoverStory.story = {
  name: "Popover",
};
