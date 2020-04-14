import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { AboutStory } from "pages/About.stories";
import { FooterNrcsDesignSystem } from "components/page/footer/FooterNrcsDesignSystem.js";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNrcsDesignSystem />
        <AboutStory />
        <FooterNrcsDesignSystem />
      </div>
    );
  }
}

export default About;
