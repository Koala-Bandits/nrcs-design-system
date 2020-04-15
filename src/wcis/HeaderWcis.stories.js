import React from "react";

import { HeaderWcisApp } from "./HeaderWcisApp";

export default {
  title: "WCIS Components|Header"
};

export const StoryHeaderWcisApp = () => {
  return (
    <div>
      <h2 className="docs">Header - WCIS</h2>
      <p>WCIS Header is uses primary blue and is responsive in sizing.</p>
      <HeaderWcisApp />
    </div>
  );
};

StoryHeaderWcisApp.story = {
  name: "Header - WCIS"
};
