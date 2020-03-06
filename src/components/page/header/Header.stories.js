import React from "react";

export default {
  title: "Page Components|Header"
};

export const HeaderNRCS = () => (
  <div className="nrcs-header">
    <div className="container header-title h1">
      <a href="/home" title="Home" aria-label="Home">
        NRCS Design System <span className="header-subtitle">| BETA</span>
      </a>
    </div>
  </div>
);

export const HeaderFPAC = () => (
  <div className="fpac-header">
    <div className="container header-title h1">
      <a href="/home" title="Home" aria-label="Home">
        NRCS Design System <span className="header-subtitle">| FPAC green</span>
      </a>
    </div>
  </div>
);

HeaderNRCS.story = {
  name: "Header - NRCS"
};

HeaderFPAC.story = {
  name: "Header - FPAC"
};
