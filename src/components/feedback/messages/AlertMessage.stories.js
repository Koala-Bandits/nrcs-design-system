import React from "react";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { AlertMessage } from "./AlertMessage";

export default {
  title: "Components|Feedback/Alert Messages"
};

export const MessagesDefault = () => (
  <div>
    <ContentHeaderH1>Alert Messages</ContentHeaderH1>
    <p className="lead">
      Alert messages are awesome little helpers. Used selectively with short
      concise messaging can provide help, explaination, or instruction to users
      for blocks of content.
    </p>
    <AlertMessage color="info">
      This is an <strong>info</strong> alert message with{" "}
      <a href="/#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </AlertMessage>
    <AlertMessage color="success">
      This is a <strong>success</strong> alert message with{" "}
      <a href="/#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </AlertMessage>
    <AlertMessage color="danger">
      This is a <strong>error</strong> alert message with{" "}
      <a href="/#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </AlertMessage>
    <AlertMessage color="warning">
      This is a <strong>warning</strong> alert message with{" "}
      <a href="/#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </AlertMessage>
    <hr />
    <AlertMessage color="warning">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </AlertMessage>
  </div>
);

MessagesDefault.story = {
  name: "Alert Messages"
};
