// appStore.js
// React Hooks + Context API for data simple store
//
// Global application state management for things like Growls, Modals, Theme, etc.

import React, { createContext, useReducer } from "react";

const initialState = {
  user: {},
  appGrowls: {},
  appModal: { modalVisible: false }
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "action description":
        const newState = ""; // do something with the action
        return newState;
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
