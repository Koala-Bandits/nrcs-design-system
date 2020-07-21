import React, { useCallback, useMemo, useState } from "react";
import { Table } from "reactstrap";
import {
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Input
} from "reactstrap";
import { FlatButton } from "components/buttons/Buttons";
// import { Search } from "components/inputs/Search";
import Icon from "@mdi/react";
import {
  mdiChevronUp,
  mdiChevronDown,
  mdiPlusBox,
  mdiTrashCan,
  mdiFileExport,
  mdiViewColumn
} from "@mdi/js";
import FileBrowserStories from "components/inputs/FileBrowser.stories";

export const DataTable = ({ columns = [], data = [], children, ...rest }) => {
  //// props
  // data []
  // columns []
  // -- sort (per column)?

  // buttons [] ?
  // selection = single/multiple
  // page-size = 25 or ...
  // column-picker
  // caption

  // actions-menu example?
  // search filter example?

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
          // console.log(
          //   "filtering: " +
          //     rowdata[filter].toLowerCase() +
          //     " searching for: " +
          //     filterString +
          //     " included: " +
          //     rowdata[filter].toLowerCase().includes(filterString)
          // );
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
    let cmp = <th key={col.property}>{col.header}</th>;
    let classes = "th-sort p-0";
    if (col.sort) {
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
          <FlatButton iconRight={icon} onClick={onSort(col.property)}>
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
      let cells = columns.map(col => (
        <td key={col.property}>{row[col.property]}</td>
      ));

      return <tr key={index}>{cells}</tr>;
    });
  }

  return (
    <div className="datatable">
      <Row className="mb-1 align-items-center">
        <Col xs="12" sm="6">
          <label className="mt-1 mr-1">Caption</label>
          <FlatButton iconLeft={mdiPlusBox}>Add New</FlatButton>
          <FlatButton iconLeft={mdiTrashCan}>Delete</FlatButton>
          <FlatButton iconLeft={mdiFileExport}>Export</FlatButton>
        </Col>
        <Col xs="12" sm="6" className="d-flex justify-content-end">
          <Input
            type="text"
            name="filtertext"
            placeholder="Filter..."
            onChange={onFilter}
          />
          <FlatButton iconOnly={mdiViewColumn}></FlatButton>
        </Col>
      </Row>
      <Table className="mb-0">
        <thead className="thead-light">
          <tr>{cols}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
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
    </div>
  );
};
