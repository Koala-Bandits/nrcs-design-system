import React from "react";
import { Badge as RsBadge } from "reactstrap";

export const BadgeLabel = ({ color, alt, children, ...rest }) => {
  let cmp;
  if (alt) {
    cmp = (
      <RsBadge className="badge-fpac" color={color} {...rest}>
        {children}
      </RsBadge>
    );
  } else {
    cmp = (
      <RsBadge color={color} {...rest}>
        {children}
      </RsBadge>
    );
  }

  return cmp;
};
