import React from "react";
import {
  ContentHeaderH1,
  ContentHeaderH2,
  ContentHeaderH3,
  ContentHeaderH4,
  ContentHeaderH5,
  ContentHeaderH6
} from "./ContentHeader";
import Icon from "@mdi/react";
import { mdiHelpCircle, mdiCloseCircle, mdiHuman } from "@mdi/js";

export default {
  title: "Components|Content Header"
};

export const ContentHeaderDefault = () => (
  <div>
    <h2 className="docs">Content Header</h2>

    <p>
      Your basic HTML header tags with an underline and 100% width to expand
      across it's container.
    </p>

    <ContentHeaderH1>h1. Content Header</ContentHeaderH1>
    <p></p>
    <ContentHeaderH2>h1. Content Header</ContentHeaderH2>
    <p></p>
    <ContentHeaderH3>h1. Content Header</ContentHeaderH3>
    <p></p>
    <ContentHeaderH4>h1. Content Header</ContentHeaderH4>
    <p></p>
    <ContentHeaderH5>h1. Content Header</ContentHeaderH5>
    <p></p>
    <ContentHeaderH6>h1. Content Header</ContentHeaderH6>
  </div>
);

export const ContentHeaderIcons = () => (
  <div>
    <h2 className="docs">Content Header</h2>

    <p>
      Your basic HTML header tags with an underline and 100% width to expand
      across it's containe PLUS some icons on the right.
    </p>
    <p>
      <strong>
        To Do... this needs some work to consistenly size and align icons.
      </strong>
    </p>

    <ContentHeaderH1>
      h1. Content Header
      <span className="float-right">
        <Icon className="mdi" className="mdi" path={mdiHuman} />
        <Icon className="mdi" path={mdiHelpCircle} />
        <Icon className="mdi" path={mdiCloseCircle} />
      </span>
    </ContentHeaderH1>
    <p></p>
    <ContentHeaderH2>
      h2. Content Header
      <span className="float-right">
        <Icon className="mdi" className="mdi" path={mdiHuman} />
        <Icon className="mdi" path={mdiHelpCircle} />
        <Icon className="mdi" path={mdiCloseCircle} />
      </span>
    </ContentHeaderH2>
    <p></p>
    <ContentHeaderH3>
      h3. Content Header
      <span className="float-right">
        <Icon className="mdi" className="mdi" path={mdiHuman} />
        <Icon className="mdi" path={mdiHelpCircle} />
        <Icon className="mdi" path={mdiCloseCircle} />
      </span>
    </ContentHeaderH3>
  </div>
);

ContentHeaderDefault.story = {
  name: "Content Header"
};

ContentHeaderIcons.story = {
  name: "Content Header - with Icons"
};
