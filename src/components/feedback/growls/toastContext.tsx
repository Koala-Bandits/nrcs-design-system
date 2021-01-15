import React from "react";

interface IToastContext {
  add: (color: string, content: string) => void;
  remove: (id: string) => void;
}

// provide a default context with no-op functions
const ToastContext = React.createContext<IToastContext>({
  add: () => {},
  remove: () => {},
});

export default ToastContext;
