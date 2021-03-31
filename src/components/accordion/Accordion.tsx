import React from "react";
import { Card, CardBody, CardHeader, Collapse } from "reactstrap";

export interface IAccordionData {
  label: string;
  content: string;
}

export interface IAccordionProps {
  data: IAccordionData[];
}

export const Accordion = ({ data }: IAccordionProps) => {
  let cmp = (
    <div className="accordion" id="accordionExample">
      {data.map((card, index) => {
        return (
          <Card>
            <CardHeader id={"card" + index}>
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target={"#collapse" + index}
                aria-controls={"collapse" + index}
              >
                {card.label}
              </button>
            </CardHeader>
            <div
              id={"collapse" + index}
              className="collapse show"
              data-parent="#accordionExample"
            >
              <CardBody>{card.content}</CardBody>
            </div>
          </Card>
        );
      })}
    </div>
  );

  return cmp;
};
