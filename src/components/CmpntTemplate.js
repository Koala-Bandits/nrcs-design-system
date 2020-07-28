import React from "react";

export const Cmpnt = ({ data, children, ...rest }) => {
  let cmp = <div {...rest}></div>;

  return cmp;
};
