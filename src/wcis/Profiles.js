import React from "react";
import { HeaderWcisApp } from "./HeaderWcisApp";
import { ProfilesStory } from "./Profiles.stories";
import { FooterWcis } from "./FooterWcis";

class Profiles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderWcisApp />
        <ProfilesStory />
        <FooterWcis />
      </div>
    );
  }
}

export default Profiles;
