import { INrcsCustomInputProps, INrcsReadOnly } from "../../types/types";
import React, { useRef, useEffect, useState } from "react";
import { CustomInput } from "reactstrap";
import { useReadOnlyConfig } from "hooks";

export interface ICheckboxProps extends INrcsCustomInputProps, INrcsReadOnly {}

export const Checkbox = ({
  indeterminate,
  type,
  readOnly,
  className,
  onChange,
  onKeyDown,
  ...rest
}: ICheckboxProps) => {
  const checkboxRef = useRef(null);
  useEffect(() => {
    if (checkboxRef.current) {
      (checkboxRef.current as any).indeterminate = indeterminate;
    }
  }, [indeterminate]);
  const { composedClassNames, handler, keyDownHandler } = useReadOnlyConfig({
    readOnly,
    handlerCallBack: onChange,
    keyDownCallBack: onKeyDown,
    className,
  });

  return (
    <CustomInput
      {...rest}
      onChange={handler}
      className={composedClassNames}
      innerRef={checkboxRef}
      onKeyDown={keyDownHandler}
      type="checkbox"
    />
  );
};
