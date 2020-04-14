import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { ColorStory } from "pages/Color.stories";
import { FooterNrcsDesignSystem } from "components/page/footer/FooterNrcsDesignSystem.js";

class Color extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNrcsDesignSystem />
        <ColorStory />
        <FooterNrcsDesignSystem />
      </div>
    );
  }
}

export default Color;
