import React from "react";
import { FooterWcis } from "./FooterWcis.js";

export default {
  title: "WCIS Components|Footer"
};

export const StoryFooterWcis = () => {
  return (
    <div>
      <h2 className="docs">Footer</h2>
      <p>
        Default Footer component based on the FPAC footer, a responsive layout
        with 3 columns that include standard links along with agency,
        organization, and application specific links as shown.
      </p>

      <FooterWcis />
    </div>
  );
};

StoryFooterWcis.story = {
  name: "Footer - WCIS"
};
