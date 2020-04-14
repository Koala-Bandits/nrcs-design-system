import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { TypographyStory } from "pages/Typography.stories";
import { FooterNrcsDesignSystem } from "components/page/footer/FooterNrcsDesignSystem.js";

class Typography extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNrcsDesignSystem />
        <TypographyStory />
        <FooterNrcsDesignSystem />
      </div>
    );
  }
}

export default Typography;
