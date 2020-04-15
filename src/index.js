import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Styles
import "./scss/nrcs-design-system.scss";

// Pages
import Dashboard from "./wcis/Dashboard";
import Profiles from "./wcis/Profiles";
import Configuration from "./wcis/Configuration";

import * as serviceWorker from "./serviceWorker";

// Google font via WebFontLoader
import WebFont from "webfontloader";
WebFont.load({
  google: {
    families: ["Roboto:300,400,700", "sans-serif"]
  }
});

// Routing via react-router
// A <Switch> looks through its children <Route>s and renders the first one that matches the current URL.
// 'exact' does just what it says to for nested routes
const routing = (
  <Router basename="/wcis">
    <div>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/configuration" component={Configuration} />
        {/* <Route exact path="/visual-style" component={VisualStyle} /> */}
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
