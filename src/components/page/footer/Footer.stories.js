import React from "react";
import { Footer } from "./Footer.js";

export default {
  component: Footer,
  title: "Page Components|Footer"
};

export const StoryFooter = () => {
  return (
    <div>
      <h2 className="docs">Footer</h2>
      <p>
        Footer component is based on the FPAC footer, a responsive layout with 3
        columns that include standard links along with application specific
        links.
      </p>

      <Footer />
    </div>
  );
};

StoryFooter.story = {
  name: "Footer"
};
