import React from "react";
import { Badge as RsBadge, BadgeProps } from "reactstrap";

export const Badge = ({ color, alt, children, ...rest }: BadgeProps) => {
  let cmp;
  if (alt) {
    cmp = (
      <RsBadge pill className="badge-fpac" color={color} {...rest}>
        {children}
      </RsBadge>
    );
  } else {
    cmp = (
      <RsBadge pill color={color} {...rest}>
        {children}
      </RsBadge>
    );
  }

  return cmp;
};
