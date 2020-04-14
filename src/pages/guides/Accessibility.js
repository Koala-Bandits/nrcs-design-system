import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { AccessibilityStory } from "./Accessibility.stories";
import { FooterNrcsDesignSystem } from "components/page/footer/FooterNrcsDesignSystem";

class Accessibility extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNrcsDesignSystem />
        <AccessibilityStory />
        <FooterNrcsDesignSystem />
      </div>
    );
  }
}

export default Accessibility;
