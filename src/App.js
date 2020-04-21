// App.js - Main Application Root Component

import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

// Data Store for Global State Management via React Hooks + Context API
import { StateProvider } from "./appStore.js";

// Application Header & Footer
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { FooterNrcsDesignSystem } from "components/page/footer/FooterNrcsDesignSystem";

// Application Modal and Growl global components
// TODO

// Application Pages
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
import Utilities from "./pages/guides/Utilities";

// Main Application Root Component
//
// Routing via react-router
// A <Switch> looks through its children <Route>s and renders the first one that matches the current URL.
// 'exact' does just what it says to for nested routes
//
// Application page routes/switches are wrapped in our header & footer
function App() {
  return (
    <div>
      <StateProvider>
        <HeaderNrcsDesignSystem />
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
          <Route path="/guides/utilities" component={Utilities} />
          <Route path="/" component={About} />
        </Switch>
        <FooterNrcsDesignSystem />
      </StateProvider>
    </div>
  );
}

export default App;
