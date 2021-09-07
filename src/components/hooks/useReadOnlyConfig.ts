import React, { useMemo } from "react";
import {
  appendDisabledCssClass,
  getActionHandler,
  getKeyDownHandler,
} from "../utils/accessibleReadonly";

export interface IReadOnlyConfigProps<
  TEventHandler extends React.EventHandler<React.SyntheticEvent>
> {
  readOnly?: boolean;
  handlerCallBack?: TEventHandler;
  keyDownCallBack?: React.KeyboardEventHandler<HTMLInputElement>;
  className?: string;
}

export const useReadOnlyConfig = <
  TEventHandler extends React.EventHandler<React.SyntheticEvent>
>({
  readOnly,
  handlerCallBack,
  keyDownCallBack,
  className,
}: IReadOnlyConfigProps<TEventHandler>) => {
  const handler = useMemo(() => getActionHandler(handlerCallBack, readOnly), [
    handlerCallBack,
    readOnly,
  ]);

  const composedClassNames = useMemo(
    () => appendDisabledCssClass(className, readOnly),
    [className, readOnly]
  );

  const keyDownHandler = useMemo(
    () => getKeyDownHandler(keyDownCallBack, readOnly),
    [keyDownCallBack, readOnly]
  );

  return {
    handler,
    composedClassNames,
    keyDownHandler,
  };
};
