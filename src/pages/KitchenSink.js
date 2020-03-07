import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { KitchenSinkStory } from "stories/KitchenSink.stories";

class KitchenSink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNrcsDesignSystem />
        <KitchenSinkStory />
      </div>
    );
  }
}

export default KitchenSink;
