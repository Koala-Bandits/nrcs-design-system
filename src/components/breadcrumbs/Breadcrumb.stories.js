import React from "react";
import { action } from "@storybook/addon-actions";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Icon from "@mdi/react";
import { mdiAccount, mdiHome, mdiFormatListBulleted } from "@mdi/js";

export default {
  title: "Components|/Breadcrumbs"
};

export const BreadcrumbsDefault = () => (
  <div>
    <h1>Badges - Default</h1>

    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Library
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Data
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          Bootstrap
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  </div>
);

export const BreadcrumbsIcons = () => (
  <div>
    <h1>Breadcrumbs - with Icons</h1>

    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">
          <Icon path={mdiHome} size={1} />
          Home
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          <Icon path={mdiAccount} size={1} />
          Library
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          <Icon path={mdiFormatListBulleted} size={1} />
          Data
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          <Icon path={mdiAccount} size={1} />
          Bootstrap
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  </div>
);

BreadcrumbsDefault.story = {
  name: "Breadcrumbs - Default"
};

BreadcrumbsIcons.story = {
  name: "Breadcrumbs - with Icons"
};
