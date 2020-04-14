import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { VisualStyleStory } from "pages/VisualStyle.stories";
import { FooterNrcsDesignSystem } from "components/page/footer/FooterNrcsDesignSystem";

class VisualStyle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNrcsDesignSystem />
        <VisualStyleStory />
        <FooterNrcsDesignSystem />
      </div>
    );
  }
}

export default VisualStyle;
