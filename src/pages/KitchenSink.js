import React from "react";
import { HeaderNrcsDesignSystem } from "components/page/header/HeaderNrcsDesignSystem";
import { KitchenSinkStory } from "./KitchenSink.stories";
import { FooterNrcsDesignSystem } from "components/page/footer/FooterNrcsDesignSystem";

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
            <span className="text-danger">
              ** Under construction... soon to be a display of core components
              as an overview. For now, see our Storybook for all components. **
            </span>
          </p>
        </div>
        <FooterNrcsDesignSystem />
      </div>
    );
  }
}

export default KitchenSink;
