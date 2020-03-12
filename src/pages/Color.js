import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { ColorStory } from "pages/Color.stories";

class Color extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNrcsDesignSystem />
        <ColorStory />
      </div>
    );
  }
}

export default Color;
