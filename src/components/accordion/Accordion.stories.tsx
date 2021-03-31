import React from "react";

// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Collapse,
// } from "reactstrap";
import { Alert } from "components/feedback/alerts/Alert";
import {
  ContentHeaderH1,
  ContentHeaderH2,
} from "components/text/ContentHeader";
import { Accordion } from "components/accordion/Accordion";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Accordion",
};

export const AccordionDefault = () => {
  const data = [
    { label: "One", content: "lorem ipsum 1" },
    { label: "Two", content: "lorem ipsum 2" },
    { label: "Three", content: "lorem ipsum 3" },
    { label: "Four", content: "lorem ipsum 4" },
  ];

  return (
    <div>
      <ContentHeaderH1 className="mt-0">Accordion</ContentHeaderH1>

      <Alert color="warning">
        Warning: this component is under development and incomplete.
      </Alert>

      <Accordion data={data} />
    </div>
  );
};

AccordionDefault.story = {
  name: "Accordion - Default",
};
