import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Styles
import "./scss/nrcs-design-system.scss";

// Pages
import About from "./pages/About";
// -- Visual Style
import VisualStyle from "./pages/VisualStyle";
import Color from "./pages/visual-style/Color";
import Typography from "./pages/visual-style/Typography";
import Iconography from "./pages/visual-style/Iconography";
// -- Components
import Components from "./pages/Components";
// -- Guides
import Guides from "./pages/Guides";
import Accessibility from "./pages/guides/Accessibility";
import GridAndLayout from "./pages/guides/GridAndLayout";

// TODO: utilities

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
  <Router basename="/nrcs-design-system">
    <div>
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/visual-style" component={VisualStyle} />
        <Route path="/visual-style/color" component={Color} />
        <Route path="/visual-style/typography" component={Typography} />
        <Route path="/visual-style/iconography" component={Iconography} />
        <Route path="/components" component={Components} />
        <Route exact path="/guides" component={Guides} />
        <Route path="/guides/accessibility" component={Accessibility} />
        <Route path="/guides/grid-and-layout" component={GridAndLayout} />
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
