import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { AboutStory } from "pages/About.stories";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNrcsDesignSystem />
        <AboutStory />
      </div>
    );
  }
}

export default About;
