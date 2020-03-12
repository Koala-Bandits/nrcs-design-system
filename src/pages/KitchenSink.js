import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { KitchenSinkStory } from "pages/KitchenSink.stories";

class KitchenSink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNrcsDesignSystem />
        <div className="container">
          <h1 className="docs">Kitchen Sink</h1>
          <p>
            <span className="text-danger">** Under construction... **</span>
          </p>
        </div>
      </div>
    );
  }
}

export default KitchenSink;
