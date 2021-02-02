import React, { useRef, useEffect } from "react";
import { CustomInput, CustomInputProps } from "reactstrap";

export const Checkbox = ({
  indeterminate,
  type,
  ...rest
}: CustomInputProps) => {
  const checkboxRef = useRef(null);
  useEffect(() => {
    if (checkboxRef.current) {
      (checkboxRef.current as any).indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return <CustomInput innerRef={checkboxRef} {...rest} type="checkbox" />;
};
