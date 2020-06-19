import React from "react";
import { ContentHeaderH2 } from "components/text/ContentHeader";
import { HeaderNrcs } from "./HeaderNrcs";
import { HeaderNrcsDesignSystem } from "./HeaderNrcsDesignSystem";
import { HeaderFpac } from "./HeaderFpac";
import { HeaderCD } from "./HeaderCD";

export default {
  title: "Page Components|Header"
};

export const StoryHeaderNRCS = () => {
  return (
    <div>
      <ContentHeaderH2>Header - NRCS</ContentHeaderH2>
      <p>NRCS Header is uses primary blue and is responsive in sizing.</p>
      <HeaderNrcs />
    </div>
  );
};

export const StoryHeaderNRCSDesignSystem = () => {
  return (
    <div>
      <ContentHeaderH2>Header - NRCS Design System</ContentHeaderH2>
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
      <ContentHeaderH2>Header - FPAC</ContentHeaderH2>
      <p>FPAC Header is uses secondary green and is responsive in sizing.</p>
      <HeaderFpac />
    </div>
  );
};

export const StoryHeaderCD = () => {
  return (
    <div>
      <ContentHeaderH2>Header - CD</ContentHeaderH2>
      <p>
        CD Header is uses primary blue, smaller, and vertically centered items.
        It is also responsive in sizing.
      </p>
      <HeaderCD />
    </div>
  );
};

StoryHeaderNRCS.story = {
  name: "Header - NRCS"
};

StoryHeaderNRCSDesignSystem.story = {
  name: "Header - NRCS Design System"
};

StoryHeaderFPAC.story = {
  name: "Header - FPAC"
};

StoryHeaderCD.story = {
  name: "Header - CD"
};
