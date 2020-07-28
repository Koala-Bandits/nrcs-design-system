import React, { useMemo, useState } from "react";
import { Table } from "reactstrap";
import {
  Row,
  Col,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  Input
} from "reactstrap";
import { FlatButton } from "components/buttons/Buttons";
import { mdiChevronUp, mdiChevronDown, mdiViewColumn } from "@mdi/js";

export const DataTable = ({
  actions,
  caption = "",
  columns = [],
  columnPicker,
  data = [],
  paging,
  size,
  summary = "",
  children,
  ...rest
}) => {
  // which column we are sorting on, with direction
  // { property: "string", direction: "asc/desc" }
  const [sort, setSort] = useState("");

  // filterstring
  const [filterString, setFilterString] = useState();

  const onFilter = event => {
    setFilterString(event.target.value.toLowerCase());
    console.log("filter string: " + filterString);
  };

  const onSort = property => () => {
    let direction;
    if (!sort || property !== sort.property) direction = "desc";
    else if (sort.direction === "asc") direction = "desc";
    else direction = "asc";
    const nextSort = { property, direction };
    setSort(nextSort);
    console.log("sorting: " + property + " direction:" + direction);
  };

  // get an array of column properties for filterable columns
  // TO DO this probably needs to be a state var as we hide/show columns to update filterable columns
  let filters = [];
  columns.forEach(column => {
    if (column.filter) {
      filters.push(column.property);
      // filters[column.property] = '';
    }
  });

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
  const escapeRegExp = input => input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const filterAndSortData = (data, filterString, sort) => {
    let result = data;
    console.log("filter and sort...");
    // filter first
    if (filterString && filterString.length > 0) {
      result = data.filter(rowdata => {
        let match = false;
        filters.forEach(filter => {
          if (rowdata[filter].toLowerCase().includes(filterString))
            match = true;
        });
        return match;
      });
    }

    // sort second
    if (sort) {
      const { property, direction } = sort;
      result = result === data ? [...data] : result; // don't sort caller's data
      const before = direction === "asc" ? 1 : -1;
      const after = direction === "asc" ? -1 : 1;
      result.sort((d1, d2) => {
        if (d1[property] > d2[property]) return before;
        if (d1[property] < d2[property]) return after;
        return 0;
      });
    }

    return result;
  };

  // TABLE HEADERS via COLUMNS
  let cols = columns.map(col => {
    let classes = "";

    // header alignment
    if (col.align && col.align === "center") {
      classes += "text-center";
    } else if (col.align && col.align === "right") {
      classes += "text-right";
    }

    let cmp = (
      <th className={classes} key={col.property}>
        {col.header}
      </th>
    );

    if (col.sort) {
      classes += " th-sort p-0";
      let icon = mdiChevronDown;
      if (
        sort.direction &&
        sort.direction === "desc" &&
        sort.property === col.property
      ) {
        icon = mdiChevronUp;
      }

      if (col.sort && sort.property === col.property) {
        classes += " th-sort-active";
      }

      cmp = (
        <th className={classes} key={col.property}>
          <FlatButton
            iconRight={icon}
            onClick={onSort(col.property)}
            size={size}
          >
            {col.header}
          </FlatButton>
        </th>
      );
    }
    return cmp;
  });

  // TABLE ROWS via adjustedData
  // This causes updates to adjustedData via useMeme() which triggers based on changes to its dependencies (sort, filter, & page state changes)
  const adjustedData = useMemo(
    () => filterAndSortData(data, filterString, sort),
    [data, filterString, sort]
  );

  let rows = (
    <tr>
      <td className="text-muted" colSpan={cols.length}>
        No data...
      </td>
    </tr>
  );

  if (adjustedData.length > 0) {
    rows = adjustedData.map((row, index) => {
      let cells = columns.map(col => {
        let classes = "";

        // alignment
        if (col.align && col.align === "center") {
          classes += "text-center";
        } else if (col.align && col.align === "right") {
          classes += "text-right";
        }

        return (
          <td className={classes} key={col.property}>
            {row[col.property]}
          </td>
        );
      });

      return <tr key={index}>{cells}</tr>;
    });
  }

  return (
    <div
      className={
        size && size === "sm" ? "datatable mb-2 text-sm" : "datatable mb-2"
      }
    >
      {filters.length > 0 ? (
        <Row className="mb-4">
          <Col xs="12" sm="6" md="4">
            <Label>Filter</Label>
            <Input
              type="text"
              name="filtertext"
              placeholder="Start typing..."
              onChange={onFilter}
              size={size}
            />
          </Col>
        </Row>
      ) : (
        ""
      )}
      <Row className="mb-1 align-items-center">
        <Col xs="12" sm="6">
          <caption className="caption mr-1">{caption}</caption>
          {actions}
        </Col>
        {/* {filters.length > 0 ? (
          <Col xs="12" sm="6">
            <Form inline>
              <Label>Filter</Label>
              <Input
                type="text"
                name="filtertext"
                placeholder="Start typing..."
                onChange={onFilter}
              />
            </Form>
          </Col>
        ) : (
          ""
        )} */}
        {columnPicker ? (
          <Col xs="12" sm="6" className="d-flex justify-content-end">
            <FlatButton iconOnly={mdiViewColumn}></FlatButton>
          </Col>
        ) : (
          ""
        )}
      </Row>
      <Table
        className="mb-0"
        size={size && size === "sm" ? "sm" : ""}
        summary={summary}
      >
        <thead className="thead-light">
          <tr>{cols}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      {paging ? (
        <Row className="mt-1 align-items-center">
          <Col xs="12" sm="6">
            <span className="mt-1 mr-1">1-25 of 111</span>
          </Col>
          <Col xs="12" sm="6" className="d-flex justify-content-end">
            <Pagination
              className="datatable"
              aria-label="Page navigation example"
            >
              <PaginationItem>
                <PaginationLink first href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last href="#" />
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </div>
  );
};
