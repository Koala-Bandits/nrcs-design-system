import React from "react";
import RsIcon from "@mdi/react";
import { IconProps } from "@mdi/react/dist/IconProps";

/**
 * @mdi/react Icon sets the path fill to currentColor if the color prop is undefined.
 * This component wraps the @mdi/react Icon and sets color to null if color is undefined
 * so that the parent svg fill is propagated. To use currentColor, explicitly set color to
 * "current" or "currentColor"
 */
export const Icon = ({ color, ...rest }: IconProps) => (
  <RsIcon
    color={
      color === undefined
        ? null
        : color === "current" || color === "currentColor"
        ? undefined
        : color
    }
    {...rest}
  />
);
