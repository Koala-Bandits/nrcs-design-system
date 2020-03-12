import React from "react";
import { getStorybook } from "@storybook/react";

export default {
  title: "Design System|Kitchen Sink"
};

const allStories = getStorybook();

// Bit of a hack for now to just get the components:
let componentStories = [];
allStories.forEach(stories => {
  if (stories.kind.startsWith("Components")) {
    componentStories.push(stories);
  }
});

export const KitchenSinkStory = () => (
  <div>
    <h1 className="docs">Kitchen Sink</h1>

    <p>
      This following is all components rendered in succession. Note, performance
      may be slow...
    </p>

    <>
      {componentStories.map(stories => {
        return (
          <>
            {" "}
            {stories.stories.map(story => {
              return <>{story.render()}</>;
            })}{" "}
          </>
        );
      })}
    </>
  </div>
);
