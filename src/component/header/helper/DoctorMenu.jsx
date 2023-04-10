import { Link } from "react-router-dom";
export default function DoctorMenu() {
  return (
    <ul className="nav navbar-nav">
      <li className="">
        <Link to="/doctor/patient">
          <i className="fa fa-desktop"></i> <span>Incomplete Report </span>
        </Link>
      </li>

      <li className="">
        <Link to="/doctor/index_city">
          <i className="menu-icon fa fa-desktop"></i>
          CT Scan Report
        </Link>
      </li>

      <li className="">
        <Link to="/doctor/completed">
          <i className="menu-icon fa fa-tasks"></i>
          <span>Today Completed Report</span>
        </Link>
      </li>

      <li className="">
        <Link to="/doctor/complete-report">
          <i className="menu-icon fa fa-tasks"></i>
          <span>All Completed Report</span>
        </Link>
      </li>

      <li className="dropdown">
        <Link to="#">
          <i className="fa fa-edit"></i>
          <span>
            My Format <i className="caret"></i>
          </span>
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link to="/doctor/formate/create">
              <i className="menu-icon fa fa-user-plus"></i> Add Format
            </Link>
          </li>
          <li>
            <Link to="/doctor/formate">
              <i className="menu-icon fa fa-folder"></i> View All Format
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}
