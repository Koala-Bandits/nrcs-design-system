import React from "react";
import { Badge as RsBadge, BadgeProps } from "reactstrap";

export const BadgeLabel = ({ color, alt, children, ...rest }: BadgeProps) => {
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
