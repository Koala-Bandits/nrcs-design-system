import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Icon from "@mdi/react";

export const Breadcrumbs = ({ data, size, ...rest }) => {
  let cmp = (
    <Breadcrumb className={size === "sm" ? "breadcrumb-sm" : ""}>
      {data.map(crumb => {
        let itm;

        if (crumb.active) {
          itm = (
            <BreadcrumbItem active>
              {crumb.icon ? (
                <Icon
                  className="mdi"
                  path={crumb.icon}
                  size={size === "sm" ? 0.8 : 1}
                />
              ) : (
                ""
              )}
              {crumb.text}
            </BreadcrumbItem>
          );
        } else {
          itm = (
            <BreadcrumbItem>
              <a href={crumb.href}>
                {crumb.icon ? (
                  <Icon
                    className="mdi"
                    path={crumb.icon}
                    size={size === "sm" ? 0.8 : 1}
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
