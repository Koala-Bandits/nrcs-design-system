import React from "react";
import { getStorybook } from "@storybook/react";

export default {
  title: "Design System|Kitchen Sink"
};

const allStories = getStorybook();

export const KitchenSinkStory = () => (
  <div className="container">
    <h1 className="docs">Kitchen Sink</h1>

    <p>
      <span className="text-danger">
        This following is every story in our Storybook rendered in succession.
      </span>
    </p>

    <>
      {allStories.map(stories => {
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
