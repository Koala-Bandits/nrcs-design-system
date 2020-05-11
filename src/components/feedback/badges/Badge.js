import React from "react";
import { Badge as RsBadge } from "reactstrap";

export const Badge = ({ color, alt, children, ...rest }) => {
  let cmp;
  if (alt) {
    cmp = (
      <RsBadge color={color} {...rest}>
        {children}
      </RsBadge>
    );
  } else {
    cmp = (
      <RsBadge className="badge-fpac" color={color} {...rest}>
        {children}
      </RsBadge>
    );
  }

  return cmp;
};
