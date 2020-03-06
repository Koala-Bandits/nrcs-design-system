import React from "react";

import { HeaderNrcs } from "./HeaderNrcs";
import { HeaderFpac } from "./HeaderFpac";
import { HeaderCD } from "./HeaderCD";

export default {
  title: "Page Components|Header"
};

export const StoryHeaderNRCS = () => {
  return (
    <div>
      <h1 className="docs">Header - NRCS</h1>
      <p>NRCS Header is uses primary blue and is responsive in sizing.</p>
      <HeaderNrcs />
    </div>
  );
};

export const StoryHeaderFPAC = () => {
  return (
    <div>
      <h1 className="docs">Header - FPAC</h1>
      <p>FPAC Header is uses secondary green and is responsive in sizing.</p>
      <HeaderFpac />
    </div>
  );
};

export const StoryHeaderCD = () => {
  return (
    <div>
      <h1 className="docs">Header - NRCS</h1>
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

StoryHeaderFPAC.story = {
  name: "Header - FPAC"
};

StoryHeaderCD.story = {
  name: "Header - CD"
};
