import React, { useState } from 'react';
// import { Tooltip } from "./Tooltip";
import { Tooltip } from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Feedback/Tooltip",
};

export const TooltipDefault = () => {

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <ContentHeaderH1>Tooltip</ContentHeaderH1>
      <p className="lead">
        Tooltips display informative text when users hover over, focus on, or tap an element. When activated, Tooltips display a text label identifying an element, such as a description of its function.
    </p>

      <h3 className="mt-4">Default</h3>

      <span id="TooltipExample">Hover here to see the default tooltip.</span>
      <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
        I'm a tooltip!
      </Tooltip>

      <h3 className="mt-4">Positioned Tooltips</h3>
      <p>
        <span id="TooltipTopExample">Top </span>
        <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipTopExample" toggle={toggle}>
          I'm a top tooltip!
      </Tooltip>
      </p>

      <p>
        <span id="TooltipBottomExample">Bottom </span>
        <Tooltip placement="bottom" isOpen={tooltipOpen} target="TooltipBottomExample" toggle={toggle}>
          I'm a bottom tooltip!
      </Tooltip>
      </p>

      <p>
        <span id="TooltipLeftExample">Left </span>
        <Tooltip placement="left" isOpen={tooltipOpen} target="TooltipLeftExample" toggle={toggle}>
          I'm a left tooltip!
      </Tooltip>
      </p>

      <p>
        <span id="TooltipRightExample">Right </span>
        <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipRightExample" toggle={toggle}>
          I'm a right tooltip!
      </Tooltip>
      </p>

    </div >
  );
}
TooltipDefault.story = {
  name: "Tooltip",
};