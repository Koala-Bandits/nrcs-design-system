import { INrcsCustomInputProps } from "components/types/types";
import React, { useRef, useEffect } from "react";
import { CustomInput } from "reactstrap";

export interface ICheckboxProps extends INrcsCustomInputProps {}
export const Checkbox = ({ indeterminate, type, ...rest }: ICheckboxProps) => {
  const checkboxRef = useRef(null);
  useEffect(() => {
    if (checkboxRef.current) {
      (checkboxRef.current as any).indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return <CustomInput innerRef={checkboxRef} {...rest} type="checkbox" />;
};
