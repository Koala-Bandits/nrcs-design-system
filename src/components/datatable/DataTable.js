import React, { useCallback, useMemo, useState } from "react";
import { Table } from "reactstrap";
import {
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import { FlatButton } from "components/buttons/Buttons";
import { mdiDotsVertical, mdiExport, mdiPlusBox, mdiTrashCan } from "@mdi/js";

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
  // const [sort, setSort] = useState(sortProp || {});

  // row-actions = {} ?

  // TABLE HEADER via COLUMNS
  var cols = [];
  for (const [index, col] of columns.entries()) {
    // if selection
    // if (!col.hasOwnProperty(visible) || col.visible) {
    //   if (col.sort) {
    //     cols.push(<th key={index}>{value} SORT</th>);
    //   } else {
    //     cols.push(<th key={index}>{value}</th>);
    //   }
    // }
    cols.push(<th key={index}>{col.header}</th>);
  }

  // TABLE ROWS via adjustedData
  const filterAndSortData = () => {
    // To do
  };

  // the data filtered and sorted, if needed
  // const adjustedData = useMemo(
  //   () => filterAndSortData(data, filters, onSearch, sort),
  //   [data, filters, onSearch, sort]
  // );

  return (
    <div>
      <Row className="mb-1 align-items-center">
        <Col xs="12" sm="6">
          <label className="mt-1 mr-1">Caption</label>
          <FlatButton iconLeft={mdiPlusBox}>Add New</FlatButton>
          <FlatButton iconLeft={mdiTrashCan}>Delete</FlatButton>
          <FlatButton iconLeft={mdiExport}>Export</FlatButton>
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
      <Table>
        <thead className="thead-light">
          <tr>{cols}</tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-muted" colsspan={cols.length}>
              No data...
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
