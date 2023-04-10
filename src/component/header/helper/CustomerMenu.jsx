import { Link } from "react-router-dom";
export default function CustomerMenu() {
  return (
    <ul className="nav navbar-nav">
      <li className=" dropdown">
        <Link to="#">
          <i className="menu-icon fa fa-calendar"></i> <span>Send Report</span>
        </Link>

        <ul className="sub-menu children dropdown-menu">
          <li>
            <Link to="/agent/defaultxrayupload">
              <i className="menu-icon fa fa-send"></i> Send xray Report
            </Link>
          </li>

          <li>
            <Link to="/agent/xray/ecgcreate">
              <i className="menu-icon fa fa-send"></i>Send ECG Report
            </Link>
          </li>
          <li>
            <Link to="/agent/xray/createcity">
              <i className="menu-icon fa fa-send"></i>Send CTScan Report
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/agent/xray/defaultsendreports">
          <i className="menu-icon fa fa-send"></i>
          <span>Quick Send Report</span>
        </Link>
      </li>

      <li className=" dropdown">
        <Link to="#">
          <i className="menu-icon fa fa-calendar"></i>
          <span>Waiting Report</span>
        </Link>

        <ul className="sub-menu children dropdown-menu">
          <li className="">
            <Link to="/agent/pending/patient">
              <i className="fa fa-clock-o fa_custom fa-1x"></i> Waiting xray
              Report
            </Link>
          </li>
          <li className="">
            <Link to="/agent/pendingecg">
              <i className="fa fa-clock-o fa_custom fa-1x"></i> Waiting ECG
              Report
            </Link>
          </li>
          <li className="">
            <Link to="/agent/pendingecg">
              <i className="fa fa-clock-o fa_custom fa-1x"></i> Waiting CT
              Report
            </Link>
          </li>
        </ul>
      </li>

      <li className="">
        <Link to="http://fileupload.digitalwebxray.com/">
          <i className="menu-icon fa fa-desktop"></i>
          <span>DCM File Uploader</span>
        </Link>
      </li>
      <li className="">
        <Link to="/agent/completed/patient">
          <i className="fa fa-check-circle-o fa_custom fa-1x"></i>{" "}
          <span>Completed Report</span>
        </Link>
      </li>

      <li className=" dropdown">
        <Link to="#">
          <i className="menu-icon fa fa-calendar"></i> <span>All Report</span>
        </Link>

        <ul className="sub-menu children dropdown-menu">
          <li>
            <Link to="/agent/current">
              <i className="menu-icon fa fa-calendar"></i> This Month Report
            </Link>
          </li>

          <li>
            <Link to="/agent/previous-report">
              <i className="menu-icon fa fa-calendar"></i> Previous Month Report
            </Link>
          </li>
          <li>
            <Link to="/agent/previous-m-report/2">
              <i className="menu-icon fa fa-calendar"></i> Previous All
            </Link>
          </li>
        </ul>
      </li>

      <li className="">
        <Link to="/agent/doctor">
          <i className="menu-icon fa fa-user"></i> <span>Doctor List</span>
        </Link>
      </li>

      <li className="dropdown">
        <Link to="#">
          <i className="menu-icon fa fa-money"></i> <span>Referance List</span>
        </Link>
        <ul className="sub-menu children dropdown-menu">
          <li>
            <Link to="/agent/create-referance">
              <i className="menu-icon fa fa-money"></i> Add Referance
            </Link>
          </li>

          <li>
            <Link to="/agent/view-ref">
              <i className="menu-icon fa fa-history"></i> Referance List
            </Link>
          </li>
        </ul>
      </li>

      <li className="dropdown">
        <Link to="#">
          <i className="menu-icon fa fa-money"></i> <span>Bill</span>
        </Link>
        <ul className="sub-menu children dropdown-menu">
          <li>
            <Link to="/agent/current-month">
              <i className="menu-icon fa fa-money"></i> Manage Bill
            </Link>
          </li>

          <li>
            <Link to="/agent/all-histroy">
              <i className="menu-icon fa fa-history"></i> All Transection
              History
            </Link>
          </li>
        </ul>
      </li>

      <li className="dropdown">
        <Link to="#">
          <i className="menu-icon fa fa-user"></i> <span>Checked user</span>
        </Link>
        <ul className="sub-menu children dropdown-menu">
          <li>
            <Link to="/agent/checkby/adduser">
              <i className="menu-icon fa fa-user"></i> Add new
            </Link>
          </li>

          <li>
            <Link to="/agent/allUsers">
              <i className="menu-icon fa fa-users"></i> All Users
            </Link>
          </li>
        </ul>
      </li>
      <li className="">
        <Link to="/agent/view-software">
          <i className="menu-icon fa fa-apple"></i> <span> Software</span>
        </Link>
      </li>
    </ul>
  );
}
