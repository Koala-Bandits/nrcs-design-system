import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { AccessibilityStory } from "stories/Accessibility.stories";

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
