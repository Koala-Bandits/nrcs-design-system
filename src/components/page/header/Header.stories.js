import React from "react";

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
      <h2 className="docs">Header - NRCS</h2>
      <p>NRCS Header is uses primary blue and is responsive in sizing.</p>
      <HeaderNrcs />
    </div>
  );
};

export const StoryHeaderNRCSDesignSystem = () => {
  return (
    <div>
      <h2 className="docs">Header - NRCS Design System</h2>
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
      <h2 className="docs">Header - FPAC</h2>
      <p>FPAC Header is uses secondary green and is responsive in sizing.</p>
      <HeaderFpac />
    </div>
  );
};

export const StoryHeaderCD = () => {
  return (
    <div>
      <h2 className="docs">Header - CD</h2>
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
