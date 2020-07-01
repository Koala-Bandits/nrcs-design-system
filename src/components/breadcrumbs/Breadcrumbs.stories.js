import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { ContentHeaderH2 } from "components/text/ContentHeader";
import { mdiAccount, mdiHome, mdiFormatListBulleted } from "@mdi/js";

export default {
  title: "Components|Breadcrumbs"
};

export const BreadcrumbsDefault = () => {
  let data = [
    { text: "Home", href: "#", active: false },
    { text: "Library", href: "#", active: false },
    { text: "Science Fiction", href: "#", active: false },
    { text: "Isaac Asimov", href: "#", active: true }
  ];

  return (
    <div>
      <ContentHeaderH2>Breadcrumbs</ContentHeaderH2>

      <Breadcrumbs data={data} />

      <h3 className="mt-4">Small</h3>

      <Breadcrumbs data={data} size="sm" />
    </div>
  );
};

export const BreadcrumbsIcons = () => {
  let dataWithIcons = [
    { text: "Home", href: "#", icon: mdiHome, active: false },
    { text: "Library", href: "#", icon: mdiAccount, active: false },
    {
      text: "Science Fiction",
      href: "#",
      icon: mdiFormatListBulleted,
      active: false
    },
    { text: "Isaac Asimov", href: "#", icon: mdiAccount, active: true }
  ];

  return (
    <div>
      <ContentHeaderH2>Breadcrumbs - with Icons</ContentHeaderH2>

      <Breadcrumbs data={dataWithIcons} />

      <h3 className="mt-4">Small</h3>

      <Breadcrumbs data={dataWithIcons} size="sm" />
    </div>
  );
};

BreadcrumbsDefault.story = {
  name: "Breadcrumbs - Default"
};

BreadcrumbsIcons.story = {
  name: "Breadcrumbs - with Icons"
};
