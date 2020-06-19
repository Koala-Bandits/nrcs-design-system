// index.js - React Application Entry Point

// Polyfills for IE11
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
// not sure if we should use core-js or react-app-polyfill, need to test
import "core-js/stable";

import React from "react";
import ReactDOM from "react-dom";

// Application Styles via NRCS Design System Bootstrap theme
import "./scss/nrcs-design-system.scss";

// Main Application Root Component
import App from "./App";

import * as serviceWorker from "./serviceWorker";

// Google font via WebFontLoader
import WebFont from "webfontloader";
WebFont.load({
  google: {
    families: ["Roboto:300,400,700", "sans-serif"]
  }
});

const nrcsDSApp = <App />;

// Renders our main application component to 'root' div
ReactDOM.render(nrcsDSApp, document.getElementById("root"));
// ReactDOM.render(<AppWithToastProvider />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
