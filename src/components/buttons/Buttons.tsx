import React from "react";
import { Button as RSButton, ButtonProps as RSButtonProps } from "reactstrap";
import {
  ButtonBase as Button,
  IButtonBaseProps as ButtonProps,
} from "./ButtonBase";
import Icon from "@mdi/react";
import { getClassName } from "../utils/utils";

type HTMLDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface IButtonProps extends ButtonProps {
  iconLeft?: any;
  iconRight?: any;
  iconOnly?: any;
}

export const PrimaryButton = ({
  size,
  iconLeft,
  iconRight,
  iconOnly,
  children,
  className,
  ...rest
}: IButtonProps) => {
  let cmp;

  if (iconLeft) {
    cmp = (
      <Button
        className={getClassName("btn-main", className)}
        color="primary"
        size={size}
        {...rest}
      >
        <Icon
          className="mdi mr-1"
          path={iconLeft}
          size={size === "sm" ? 0.8 : 1}
        />
        {children}
      </Button>
    );
  } else if (iconRight) {
    cmp = (
      <Button
        className={getClassName("btn-main", className)}
        color="primary"
        size={size}
        {...rest}
      >
        {children}
        <Icon
          className="mdi ml-1"
          path={iconRight}
          size={size === "sm" ? 0.8 : 1}
        />
      </Button>
    );
  } else if (iconOnly) {
    cmp = (
      <Button
        className={getClassName("btn-icon", className)}
        color="primary"
        size={size}
        {...rest}
      >
        <Icon className="mdi" path={iconOnly} size={size === "sm" ? 0.8 : 1} />
      </Button>
    );
  } else {
    cmp = (
      <Button
        className={getClassName("btn-main", className)}
        color="primary"
        size={size}
        {...rest}
      >
        {children}
      </Button>
    );
  }

  return cmp;
};

export const SecondaryButton = ({
  size,
  iconLeft,
  iconRight,
  iconOnly,
  children,
  className,
  ...rest
}: IButtonProps) => {
  let cmp;

  if (iconLeft) {
    cmp = (
      <Button
        className={getClassName("btn-main", className)}
        outline
        color="primary"
        size={size}
        {...rest}
      >
        <Icon
          className="mdi mr-1"
          path={iconLeft}
          size={size === "sm" ? 0.8 : 1}
        />
        {children}
      </Button>
    );
  } else if (iconRight) {
    cmp = (
      <Button
        className={getClassName("btn-main", className)}
        outline
        color="primary"
        size={size}
        {...rest}
      >
        {children}
        <Icon
          className="mdi ml-1"
          path={iconRight}
          size={size === "sm" ? 0.8 : 1}
        />
      </Button>
    );
  } else if (iconOnly) {
    cmp = (
      <Button
        className={getClassName("btn-icon", className)}
        outline
        color="primary"
        size={size}
        {...rest}
      >
        <Icon className="mdi" path={iconOnly} size={size === "sm" ? 0.8 : 1} />
      </Button>
    );
  } else {
    cmp = (
      <Button
        className={getClassName("btn-main", className)}
        outline
        color="primary"
        size={size}
        {...rest}
      >
        {children}
      </Button>
    );
  }

  return cmp;
};

export const FlatButton = ({
  size,
  iconLeft,
  iconRight,
  iconOnly,
  children,
  className,
  ...rest
}: IButtonProps) => {
  let cmp;

  if (iconLeft) {
    cmp = (
      <Button
        className={getClassName("btn-main", className)}
        color="link"
        size={size}
        {...rest}
      >
        <Icon
          className="mdi mr-1"
          path={iconLeft}
          size={size === "sm" ? 0.8 : 1}
        />
        {children}
      </Button>
    );
  } else if (iconRight) {
    cmp = (
      <Button
        className={getClassName("btn-main", className)}
        color="link"
        size={size}
        {...rest}
      >
        {children}
        <Icon
          className="mdi ml-1"
          path={iconRight}
          size={size === "sm" ? 0.8 : 1}
        />
      </Button>
    );
  } else if (iconOnly) {
    cmp = (
      <Button
        className={getClassName("btn-icon", className)}
        color="link"
        size={size}
        {...rest}
      >
        <Icon className="mdi" path={iconOnly} size={size === "sm" ? 0.8 : 1} />
      </Button>
    );
  } else {
    cmp = (
      <Button
        className={getClassName("btn-main", className)}
        color="link"
        size={size}
        {...rest}
      >
        {children}
      </Button>
    );
  }

  return cmp;
};

export const ButtonSet = ({ className, ...props }: HTMLDivProps) => {
  return <div className={getClassName("btn-set", className)} {...props}></div>;
};

interface IButtonFooterProps {
  className?: string;
}
export const ButtonFooter = ({
  className,
  children,
}: React.PropsWithChildren<IButtonFooterProps>) => (
  <div className={`pt-3 mt-3 border-top ${className || ""}`}>{children}</div>
);
