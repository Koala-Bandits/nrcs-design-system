import React from "react";

import { HeaderNrcs } from "./HeaderNrcs";
import { HeaderFpac } from "./HeaderFpac";
import { HeaderCD } from "./HeaderCD";

export default {
  title: "Page Components|Header"
};

export const StoryHeaderNRCS = () => <HeaderNrcs />;

export const StoryHeaderFPAC = () => <HeaderFpac />;

export const StoryHeaderCD = () => <HeaderCD />;

StoryHeaderNRCS.story = {
  name: "Header - NRCS"
};

StoryHeaderFPAC.story = {
  name: "Header - FPAC"
};

StoryHeaderCD.story = {
  name: "Header - CD"
};
