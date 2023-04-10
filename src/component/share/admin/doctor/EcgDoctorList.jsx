import { Link } from "react-router-dom";

import styled from "styled-components";

const TableWrapper = styled.div`
  table {
    width: 100%;
    border: 1px solid rgb(203 203 203);
    border-collapse: collapse;
    & th,
    & td {
      border: 1px solid rgb(203 203 203);
      padding: 5px;
      border-collapse: collapse;

      & .btn-group,
      & .btn-group-vertical {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        & a {
          float: left;
          padding: 3px 4px;
          border: none;
        }
      }
    }
  }
`;
export default function EcgDoctorList() {
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th width="12%">Username</th>
            <th>Name</th>
            <th width="15%">Phone</th>
            <th width="15%">Mail</th>
            <th width="250">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>9 - Dr. Tamanna</td>
            <td>Dr. Tamanna Zahan</td>
            <td>8801759497773</td>
            <td>digitaltech@gmail.com</td>
            <td>
              <div className="btn-group">
                <Link
                  to="/admin/edit-doctor/1/edit"
                  className="btn btn-success btn-sm"
                >
                  Edit
                </Link>
                <Link
                  to="/admin/edit-doctor/1/edit"
                  className="btn btn-primary  btn-sm"
                >
                  View
                </Link>

                <Link
                  to="/admin/deactive-user/9"
                  title="Deactive User"
                  class="btn btn-danger btn-sm"
                >
                  Deactive
                  <i className="fa fa-chevron-down"></i>
                </Link>

                <Link
                  to="/admin/delete-doctor/9"
                  className="btn btn-danger btn-sm"
                >
                  Delete
                  <i className="fa fa-trash"></i>
                </Link>

                <Link
                  to="/admin/dr/view-formate/9"
                  className="btn btn-primary btn-sm"
                >
                  Formate
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      ;
    </TableWrapper>
  );
}
