import React from "react";
import { Button as RSButton, ButtonProps } from "reactstrap";

export interface IButtonBaseProps extends ButtonProps {
  readonly?: boolean;
}

export const ButtonBase: React.FC<IButtonBaseProps> = ({
  readonly,
  onClick,
  className,
  ...props
}) => {
  readonly = !!readonly;

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!readonly && onClick) {
      onClick(e);
    }
  };

  className = className || "";
  const classNames = readonly ? `disabled ${className}` : className;

  return (
    <RSButton
      {...props}
      aria-disabled={readonly}
      className={classNames}
      onClick={clickHandler}
    />
  );
};
