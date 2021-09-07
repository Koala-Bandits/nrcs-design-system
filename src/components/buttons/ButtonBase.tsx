import { INrcsReadOnly } from "../types/types";
import React from "react";
import { Button as RSButton, ButtonProps } from "reactstrap";
import { useReadOnlyConfig } from "../hooks";

export interface IButtonBaseProps extends ButtonProps, INrcsReadOnly {}

export const ButtonBase: React.FC<IButtonBaseProps> = ({
  readOnly,
  onClick,
  className,
  ...props
}) => {
  const { composedClassNames, handler } = useReadOnlyConfig({
    readOnly,
    handlerCallBack: onClick,
    className,
  });

  return (
    <RSButton
      {...props}
      aria-disabled={readOnly}
      className={composedClassNames}
      onClick={handler}
    />
  );
};
