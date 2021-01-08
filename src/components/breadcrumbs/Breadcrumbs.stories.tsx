import React from "react";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   Dropdown,
//   DropdownToggle
// } from "reactstrap";
import { Breadcrumbs } from "./Breadcrumbs";
import {
  ContentHeaderH1,
  ContentHeaderH2,
} from "components/text/ContentHeader";
// import Icon from "@mdi/react";
import {
  mdiAccount,
  // mdiChevronDown,
  mdiHome,
  mdiFormatListBulleted,
} from "@mdi/js";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Breadcrumbs",
};

export const BreadcrumbsDefault = () => {
  let data = [
    { text: "Home", href: "#", active: false },
    { text: "Library", href: "#", active: false },
    { text: "Science Fiction", href: "#", active: false },
    { text: "Isaac Asimov", href: "#", active: true },
  ];

  return (
    <div>
      <ContentHeaderH1 size={undefined} className="mt-0">
        Breadcrumbs
      </ContentHeaderH1>

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
      active: false,
    },
    { text: "Isaac Asimov", href: "#", icon: mdiAccount, active: true },
  ];

  return (
    <div>
      <ContentHeaderH2 size={undefined}>
        Breadcrumbs - with Icons
      </ContentHeaderH2>

      <Breadcrumbs data={dataWithIcons} />

      <h3 className="mt-4">Small</h3>

      <Breadcrumbs data={dataWithIcons} size="sm" />
    </div>
  );
};

// export const BreadcrumbsCustom = () => {
//   return (
//     <div>
//       <Breadcrumb>
//         <BreadcrumbItem>
//           <a href="#">Home</a>
//         </BreadcrumbItem>
//         <BreadcrumbItem>
//           <a href="#">Library</a>
//         </BreadcrumbItem>
//         <BreadcrumbItem>
//           <Dropdown>
//             <DropdownToggle className="btn-icon pt-0 pb-0" color="link">
//               Dropdown
//               <Icon className="mdi ml-1" path={mdiChevronDown} size={0.8} />
//             </DropdownToggle>
//           </Dropdown>
//         </BreadcrumbItem>
//       </Breadcrumb>
//     </div>
//   );
// };

BreadcrumbsDefault.story = {
  name: "Breadcrumbs - Default",
};

BreadcrumbsIcons.story = {
  name: "Breadcrumbs - with Icons",
};

// BreadcrumbsCustom.story = {
//   name: "Breadcrumbs - Custom"
// };
