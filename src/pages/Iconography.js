import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { IconographyStory } from "pages/Iconography.stories";
import { FooterNrcsDesignSystem } from "components/page/footer/FooterNrcsDesignSystem.js";

class Iconography extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNrcsDesignSystem />
        <IconographyStory />
        <FooterNrcsDesignSystem />
      </div>
    );
  }
}

export default Iconography;
