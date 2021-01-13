import React from "react";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { Footer } from "./Footer.js";
import { FooterNrcsDesignSystem } from "./FooterNrcsDesignSystem.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Page Components/Footer",
};

export const StoryFooter = () => {
  return (
    <div>
      <ContentHeaderH1>Footer</ContentHeaderH1>
      <p>
        Default Footer component based on the FPAC footer, a responsive layout
        with 3 columns that include standard links along with agency,
        organization, and application specific links as shown.
      </p>

      <Footer />
    </div>
  );
};

export const StoryFooterNrcsDesignSystem = () => {
  return (
    <div>
      <ContentHeaderH1>Footer</ContentHeaderH1>
      <p>Footer component for the NRCS Design System website.</p>

      <FooterNrcsDesignSystem />
    </div>
  );
};

StoryFooter.story = {
  name: "Footer",
};

StoryFooterNrcsDesignSystem.story = {
  name: "Footer - NRCS Design System",
};
