import React, { useState } from "react";
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

export const DataTable = ({ children, ...rest }) => {
  //// props
  // data []
  // columns []
  // buttons [] ?
  // sort (per column)?
  // selection = single/multiple
  // page-size = 25 or ...
  // column-picker
  // row-actions = {} ?

  // actions-menu example?
  // search filter example?

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
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
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
