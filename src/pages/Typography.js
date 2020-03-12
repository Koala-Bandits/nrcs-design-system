import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { TypographyStory } from "pages/Typography.stories";

class Typography extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNrcsDesignSystem />
        <TypographyStory />
      </div>
    );
  }
}

export default Typography;
