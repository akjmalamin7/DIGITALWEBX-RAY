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
export default function CompletedPatientList() {
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            <th width="2%">Sl</th>
            <th>D.C Name</th>
            <th>S.Time</th>
            <th>P.Id</th>
            <th>Name</th>
            <th>Sex</th>
            <th>Age</th>
            <th>Img Type</th>
            <th>Type</th>
            <th>Selected</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td> 1 </td>

            <td>SHOMOY</td>

            <td>8:52 pm</td>

            <td>773</td>
            <td>Chan Mia Akhon</td>
            <td>Male</td>
            <td>70 Years</td>
            <td>Rt. Ankle Joint. B/V </td>
            <td>xray</td>
            <td>
              All
              <br /> (DR.ASISH)
            </td>
            <td>Waiting</td>
            <td>
              <div className="btn-group">
                <Link
                  to="/admin/typing-back/773886"
                  class="btn btn-success"
                  onclick="return confirm('are You sure to Active')"
                >
                  T.B
                </Link>

                <Link
                  to="/admin/patient-view/773886"
                  class="btn btn-warning btn-sm"
                >
                  <i class="fa fa-eye"></i> View
                </Link>

                <Link
                  to="/admin/patient-disable/773886"
                  class="btn btn-danger"
                  onclick="return confirm('are You sure to Delete')"
                >
                  Delete
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
