import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { GridAndLayoutStory } from "./GridAndLayout.stories";
import { FooterNrcsDesignSystem } from "components/page/footer/FooterNrcsDesignSystem";

class GridAndLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNrcsDesignSystem />
        <GridAndLayoutStory />
        <FooterNrcsDesignSystem />
      </div>
    );
  }
}

export default GridAndLayout;
