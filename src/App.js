// App.js - Main Application Root Component

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Data Store for Global State Management via React Hooks + Context API
import { StateProvider } from "./appStore.js";

// Application Header & Footer
import { HeaderWcisApp } from "./wcis/HeaderWcisApp";
import { FooterWcis } from "./wcis/FooterWcis";

// Application Modal and Growl global components
import { ToastProvider } from "components/feedback/growls/toastProvider.js";

// Application Pages
import Dashboard from "./wcis/Dashboard";
import Profiles from "./wcis/Profiles";
import Configuration from "./wcis/Configuration";
import ExcludeElements from "./wcis/configuration/ExcludeElements";
import ElementConfiguration from "./wcis/configuration/ElementConfiguration";
import SensorConfiguration from "./wcis/configuration/SensorConfiguration";
import TemporaryDeactivation from "./wcis/configuration/TemporaryDeactivation";

// Main Application Root Component
//
// Routing via react-router
// A <Switch> looks through its children <Route>s and renders the first one that matches the current URL
// 'exact' does just what it says to for nested routes
//
// Application page routes/switches are wrapped in our header & footer
function App() {
  return (
    <div>
      <StateProvider>
        <ToastProvider>
          <Router basename="/wcis">
            <HeaderWcisApp />
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/configuration" component={Configuration} />
              <Route
                exact
                path="/configuration/exclude-elements"
                component={ExcludeElements}
              />
              <Route
                exact
                path="/configuration/element-configuration"
                component={ElementConfiguration}
              />
              <Route
                exact
                path="/configuration/sensor-configuration"
                component={SensorConfiguration}
              />
              <Route
                exact
                path="/configuration/temporary-deactivation"
                component={TemporaryDeactivation}
              />
              {/* <Route exact path="/visual-style" component={VisualStyle} /> */}
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </Router>
          <FooterWcis />
        </ToastProvider>
      </StateProvider>
    </div>
  );
}

export default App;
