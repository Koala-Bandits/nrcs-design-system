// index.js - React Application Entry Point

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

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

// Enable routing via react-router wrapping <App /> in <Router>
// Routes are then defined in the main application component
const routing = (
  <Router basename="/nrcs-design-system">
    <div>
      <App />
    </div>
  </Router>
);

// Renders our main application component to 'root' div
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
