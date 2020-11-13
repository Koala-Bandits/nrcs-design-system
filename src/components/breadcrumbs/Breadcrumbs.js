import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Icon from "@mdi/react";

export const Breadcrumbs = ({ data, size, ...rest }) => {
  let cmp = (
    <Breadcrumb className={size === "sm" ? "breadcrumb-sm" : ""}>
      {data.map((crumb, index) => {
        let itm;

        if (crumb.active) {
          itm = (
            <BreadcrumbItem key={index} active>
              {crumb.icon ? (
                <Icon
                  className="mdi"
                  path={crumb.icon}
                  size={size === "sm" ? 0.9 : 1}
                />
              ) : (
                ""
              )}
              {crumb.text}
            </BreadcrumbItem>
          );
        } else {
          itm = (
            <BreadcrumbItem key={index}>
              <a href={crumb.href}>
                {crumb.icon ? (
                  <Icon
                    className="mdi"
                    path={crumb.icon}
                    size={size === "sm" ? 0.9 : 1}
                  />
                ) : (
                  ""
                )}
                {crumb.text}
              </a>
            </BreadcrumbItem>
          );
        }

        return itm;
      })}
    </Breadcrumb>
  );

  return cmp;
};
