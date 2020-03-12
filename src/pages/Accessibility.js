import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { AccessibilityStory } from "pages/Accessibility.stories";

class Accessibility extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNrcsDesignSystem />
        <AccessibilityStory />
      </div>
    );
  }
}

export default Accessibility;
