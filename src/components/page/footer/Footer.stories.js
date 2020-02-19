import React from "react";
import { action } from "@storybook/addon-actions";
import Header from "./Footer.js";

export default {
  component: Header,
  title: "Page Components|Footer"
};

export const Base = () => (
  <div className="bg-primary">
    <div className="container text-white pt-5 h1">
      <a href="/home">
        HOME<small>vBETA</small>
      </a>
    </div>
  </div>
);
