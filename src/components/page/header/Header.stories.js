import React from "react";
import Header from "./Header.js";

export default {
  component: Header,
  title: "Page Components|Header"
};

export const Base = () => (
  <div className="nrcs-header">
    <div className="container header-title">
      <a href="/home" title="Home" aria-label="Home">
        NRCS Design System <span className="header-subtitle">| vBETA</span>
      </a>
    </div>
  </div>
);
