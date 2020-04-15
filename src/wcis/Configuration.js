import React from "react";
import { HeaderWcisApp } from "./HeaderWcisApp";
import { ConfigurationStory } from "./Configuration.stories";
import { FooterWcis } from "./FooterWcis";

class Configuration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderWcisApp />
        <ConfigurationStory />
        <FooterWcis />
      </div>
    );
  }
}

export default Configuration;
