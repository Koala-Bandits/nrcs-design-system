import React from "react";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { HeaderNrcs } from "./HeaderNrcs";
import { HeaderNrcsDesignSystem } from "./HeaderNrcsDesignSystem";
import { HeaderFpac } from "./HeaderFpac";
import { HeaderCD } from "./HeaderCD";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Page Components/Header",
};

export const StoryHeaderNRCS = () => {
  return (
    <div>
      <ContentHeaderH1>Header - NRCS</ContentHeaderH1>
      <p>NRCS Header is uses primary blue and is responsive in sizing.</p>
      <HeaderNrcs />
    </div>
  );
};

export const StoryHeaderNRCSDesignSystem = () => {
  return (
    <div>
      <ContentHeaderH1>Header - NRCS Design System</ContentHeaderH1>
      <p>
        This is the complete header for the NRCS Design System website. It uses
        a HeaderNrcs with a NavbarNrcs
      </p>
      <HeaderNrcsDesignSystem />
    </div>
  );
};

export const StoryHeaderFPAC = () => {
  return (
    <div>
      <ContentHeaderH1>Header - FPAC</ContentHeaderH1>
      <p>FPAC Header is uses secondary green and is responsive in sizing.</p>
      <HeaderFpac />
    </div>
  );
};

export const StoryHeaderCD = () => {
  return (
    <div>
      <ContentHeaderH1>Header - CD</ContentHeaderH1>
      <p>
        CD Header is uses primary blue, smaller, and vertically centered items.
        It is also responsive in sizing.
      </p>
      <HeaderCD />
    </div>
  );
};

StoryHeaderNRCS.story = {
  name: "Header - NRCS",
};

StoryHeaderNRCSDesignSystem.story = {
  name: "Header - NRCS Design System",
};

StoryHeaderFPAC.story = {
  name: "Header - FPAC",
};

StoryHeaderCD.story = {
  name: "Header - CD",
};
