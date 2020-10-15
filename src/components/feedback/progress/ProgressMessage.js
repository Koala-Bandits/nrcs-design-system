import React from "react";
import { Container, Row, Col, Progress } from "reactstrap";

export const ProgressMessage = ({ message, value, children, ...rest }) => {
  let cmp;

  cmp = (
    <div>
      {message ? <label>{message}</label> : ""}
      <Progress animated color="info" message={message} value={value} />
    </div>
  );

  return cmp;
};
