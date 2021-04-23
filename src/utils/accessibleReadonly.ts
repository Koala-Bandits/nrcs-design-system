import React from "react";
import { getClassName } from "./utils";

export const getActionHandler = <
  TEventHandler extends React.EventHandler<React.SyntheticEvent>
>(
  handler?: TEventHandler,
  isReadOnly?: boolean
) => {
  isReadOnly = !!isReadOnly;
  return (e: React.SyntheticEvent) => {
    if (!isReadOnly && handler) {
      handler(e);
    }
  };
};

export const appendDisabledCssClass = (
  className: string = "",
  isReadOnly?: boolean
) => {
  isReadOnly = !!isReadOnly;
  return getClassName(className, isReadOnly ? "disabled" : "");
};

export const getKeyDownHandler = <
  TEventHandler extends React.EventHandler<React.KeyboardEvent>
>(
  handler?: TEventHandler,
  isReadOnly?: boolean
) => {
  isReadOnly = !!isReadOnly;
  return (e: React.KeyboardEvent) => {
    if (isReadOnly && e.nativeEvent.code !== "Tab") {
      e.preventDefault();
    }
    if (!isReadOnly && handler) {
      handler(e);
    }
  };
};
