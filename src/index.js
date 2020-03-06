import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Styles
import "./scss/nrcs-design-system.scss";

// Pages
import About from "./pages/About";
import Color from "./pages/Color";
import Typography from "./pages/Typography";
import Iconography from "./pages/Iconography";
import Accessibility from "./pages/Accessibility";
import KitchenSink from "./pages/KitchenSink";

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
        <Route exact path="/about" component={About} />
        <Route exact path="/color" component={Color} />
        <Route exact path="/typography" component={Typography} />
        <Route exact path="/iconography" component={Iconography} />
        <Route exact path="/accessibility" component={Accessibility} />
        <Route exact path="/kitchen-sink" component={KitchenSink} />
        <Route path="/" component={About} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
