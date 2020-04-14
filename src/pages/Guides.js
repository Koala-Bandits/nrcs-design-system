import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { GuidesStory } from "./Guides.stories";
import { FooterNrcsDesignSystem } from "components/page/footer/FooterNrcsDesignSystem";

class Guides extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNrcsDesignSystem />
        <GuidesStory />
        <FooterNrcsDesignSystem />
      </div>
    );
  }
}

export default Guides;
