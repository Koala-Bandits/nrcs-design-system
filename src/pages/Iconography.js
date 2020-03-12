import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { IconographyStory } from "pages/Iconography.stories";

class Iconography extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNrcsDesignSystem />
        <IconographyStory />
      </div>
    );
  }
}

export default Iconography;
