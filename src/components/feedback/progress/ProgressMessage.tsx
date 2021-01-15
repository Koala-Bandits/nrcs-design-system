import React from "react";
import { Progress, ProgressProps } from "reactstrap";

export const ProgressMessage = ({
  message,
  value,
  children,
  ...rest
}: ProgressProps) => {
  let cmp;

  cmp = (
    <div>
      {message ? <label>{message}</label> : ""}
      <Progress animated color="info" message={message} value={value} />
    </div>
  );

  return cmp;
};
