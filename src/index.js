import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Styles
import "./scss/nrcs-design-system.scss";

// Pages
//import App from './App';
import Home from "./pages/Home.js";
import VisualStyle from "./pages/VisualStyle.js";
import Components from "./pages/Components.js";

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
const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/components" component={Components} />
        <Route path="/visual-style" component={VisualStyle} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
