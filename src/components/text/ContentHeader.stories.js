import React from "react";
import Icon from "@mdi/react";
import { mdiHelpCircle, mdiCloseCircle, mdiHuman } from "@mdi/js";

export default {
  title: "Components|Content Header"
};

export const ContentHeaderDefault = () => (
  <div>
    <h1>Content Header</h1>

    <p>
      Your basic HTML header tags with an underline and 100% width to expand
      across it's container.
    </p>

    <h1 className="border-bottom w-100 pb-1">h1. Content Header</h1>
    <p></p>
    <h2 className="border-bottom w-100 pb-1">h2. Content Header</h2>
    <p></p>
    <h3 className="border-bottom w-100 pb-1">h3. Content Header</h3>
    <p></p>
    <h4 className="border-bottom w-100 pb-1">h4. Content Header</h4>
    <p></p>
    <h5 className="border-bottom w-100 pb-1">h5. Content Header</h5>
    <p></p>
    <h6 className="border-bottom w-100 pb-1">h6. Content Header</h6>
  </div>
);

export const ContentHeaderIcons = () => (
  <div>
    <h1>Content Header</h1>

    <p>
      Your basic HTML header tags with an underline and 100% width to expand
      across it's containe PLUS some icons on the right.
    </p>
    <p>
      <strong>
        To Do... this needs some work to consistenly size and align icons.
      </strong>
    </p>

    <h1 className="border-bottom w-100 pb-1">
      h1. Content Header
      <span className="float-right">
        <Icon className="mdi" className="mdi" path={mdiHuman} />
        <Icon className="mdi" path={mdiHelpCircle} />
        <Icon className="mdi" path={mdiCloseCircle} />
      </span>
    </h1>
    <p></p>
    <h2 className="border-bottom w-100 pb-1">
      h2. Content Header
      <span className="float-right">
        <Icon className="mdi" path={mdiHuman} />
        <Icon className="mdi" path={mdiHelpCircle} />
        <Icon className="mdi" path={mdiCloseCircle} />
      </span>
    </h2>
    <p></p>
    <h3 className="border-bottom w-100 pb-1">
      h3. Content Header
      <span className="float-right">
        <Icon className="mdi" path={mdiHuman} />
        <Icon className="mdi" path={mdiHelpCircle} />
        <Icon className="mdi" path={mdiCloseCircle} />
      </span>
    </h3>
    {/*<p></p>
     <h4 className="border-bottom w-100 pb-1">
      h4. Content Header
      <span className="float-right">
        <Icon className="mdi" path={mdiHuman} size={1} />
        <Icon className="mdi" path={mdiHelpCircle} size={1} />
        <Icon className="mdi" path={mdiCloseCircle} size={1} />
      </span>
    </h4>
    <p></p>
    <h5 className="border-bottom w-100 pb-1">
      h5. Content Header
      <span className="float-right">
        <Icon className="mdi" path={mdiHuman} size={0.9} />
        <Icon className="mdi" path={mdiHelpCircle} size={0.9} />
        <Icon className="mdi" path={mdiCloseCircle} size={0.9} />
      </span>
    </h5>
    <p></p>
    <h6 className="border-bottom w-100 pb-1">
      h6. Content Header
      <span className="float-right">
        <Icon className="mdi" path={mdiHuman} size={0.7} />
        <Icon className="mdi" path={mdiHelpCircle} size={0.7} />
        <Icon className="mdi" path={mdiCloseCircle} size={0.7} />
      </span>
    </h6> */}
  </div>
);

ContentHeaderDefault.story = {
  name: "Content Header"
};

ContentHeaderIcons.story = {
  name: "Content Header - with Icons"
};
