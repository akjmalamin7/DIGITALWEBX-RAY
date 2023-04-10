import { Link } from "react-router-dom";
export default function AdminMenu() {
  return (
    <ul className="nav navbar-nav">
      <li className="dropdown">
        <Link to="#">
          <i className="fa fa-user"></i>
          Users
          <span className="btn-caret">
            <span className="caret"></span>
          </span>
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link to="/admin/add-doctor">
              <i className="menu-icon fa fa-plus"></i> Add Doctor
            </Link>
          </li>
          <li>
            <Link to="/admin/xray-doctors">
              <i className="menu-icon fa fa-user"></i> Manage Radiology Doctor
            </Link>
          </li>
          <li>
            <Link to="/admin/ecg-doctors">
              <i className="menu-icon fa fa-user"></i> Manage ECG Doctor
            </Link>
          </li>
          <li>
            <Link to="/admin/add-user">
              <i className="menu-icon fa fa-plus"></i> Add Customer
            </Link>
          </li>
          <li>
            <Link to="/admin/users">
              <i className="menu-icon fa fa-user"></i> Manage Customer
            </Link>
          </li>

          <li>
            <Link to="/admin/delete-user">
              <i className="menu-icon fa fa-user"></i> Delete Doctor List
            </Link>
          </li>
          <li>
            <Link to="/admin/delete-customer-list">
              <i className="menu-icon fa fa-user"></i> Delete Customer List
            </Link>
          </li>
        </ul>
      </li>

      <li className="">
        <Link to="/admin/patient-list">
          <i className="fa fa-desktop"></i>
          <span>Incomplete Report </span>
        </Link>
      </li>

      <li className="">
        <Link to="/admin/completed">
          <i className="fa fa-check-circle"></i>
          <span>Completed Report</span>
        </Link>
      </li>

      <li className="dropdown">
        <Link to="#">
          <i className="fa fa-cogs"></i>
          Manage Report
          <span className="btn-caret">
            <span className="caret"></span>
          </span>
        </Link>

        <ul className="dropdown-menu">
          <li className="">
            <Link to="/admin/completed">
              <i className="fa fa-check-circle"></i> Today Completed Report
            </Link>
          </li>

          <li>
            <Link to="/admin/Agent-daily-report">
              <i className="menu-icon fa fa-calculator"></i> Today Summery
            </Link>
          </li>
          <li>
            <Link to="/admin/patient">
              <i className="menu-icon fa fa-calendar"></i> Monthly Completed
            </Link>
          </li>
          <li>
            <Link to="/admin/serarch_report">
              <i className="menu-icon fa fa-search"></i> Search Report
            </Link>
          </li>
          <li>
            <Link to="/admin/importExportView" target="_blank" rel="noreferrer">
              <i className="menu-icon fa fa-download"></i> Export Report
            </Link>
          </li>
          <li className="menu-item-has-children">
            <Link to="/admin/completed-error" className="dropdown-toggle">
              <i className="menu-icon fa fa-image"></i> Error Report
            </Link>
          </li>

          <li className="menu-item-has-children">
            <Link to="/admin/delete-report" className="dropdown-toggle">
              <i className="menu-icon fa fa-archive"></i> Deleted Reports
            </Link>
          </li>
        </ul>
      </li>

      <li className="dropdown">
        <Link to="#">
          <i className="fa fa-cogs"></i>
          Manage Doctor Bill
          <span className="btn-caret">
            <span className="caret"></span>
          </span>
        </Link>

        <ul className="dropdown-menu">
          <li>
            <Link to="/admin/doctor-list">
              <i className="menu-icon fa fa-refresh"></i> Doctor Update
            </Link>
          </li>
          <li>
            <Link to="/admin/doctor-bill">
              <i className="menu-icon fa fa-refresh"></i> Payment
            </Link>
          </li>
          <li>
            <Link to="/admin/doctor-trangection">
              <i className="menu-icon fa fa-refresh"></i> Transection History
            </Link>
          </li>
        </ul>
      </li>

      <li className="dropdown">
        <Link to="#">
          <i className="fa fa-cogs"></i>
          Manage Customer Bill
          <span className="btn-caret">
            <span className="caret"></span>
          </span>
        </Link>

        <ul className="dropdown-menu">
          <li>
            <Link to="/admin/customerbill">
              <i className="menu-icon fa fa-refresh"></i> Customer OLD Bill
            </Link>
          </li>
          <li>
            <Link to="october2020.digitalwebxray.com/login" target="_blank">
              <i className="menu-icon fa fa-history"></i> Old Bill
              (October-2020)
            </Link>
          </li>

          <li>
            <Link to="/admin/customer-list">
              <i className="menu-icon fa fa-refresh"></i> Customer Update
            </Link>
          </li>
          <li>
            <Link to="/admin/customer-bill">
              <i className="menu-icon fa fa-refresh"></i> Payment
            </Link>
          </li>
          <li>
            <Link to="/admin/customer-trangection">
              <i className="menu-icon fa fa-refresh"></i> Transection History
            </Link>
          </li>
        </ul>
      </li>

      <li className="dropdown">
        <Link to="#">
          <i className="fa fa-cogs"></i>
          Other's setting
          <span className="btn-caret">
            <span className="caret"></span>
          </span>
        </Link>

        <ul className="dropdown-menu">
          <li>
            <Link to="/admin/create-payment">
              <i className="menu-icon fa fa-plus"></i> Add Payment
            </Link>
          </li>

          <li>
            <Link to="/admin/payment-list">
              <i className="menu-icon fa fa-eye"></i> View All Payment
            </Link>
          </li>

          <li>
            <Link to="/admin/create-formate">
              <i className="menu-icon fa fa-plus"></i> Add Formate
            </Link>
          </li>
          <li>
            <Link to="/admin/view-formate">
              <i className="menu-icon fa fa-eye"></i> All Formates
            </Link>
          </li>

          <li>
            <Link to="/admin/create-type">
              <i className="menu-icon fa fa-plus"></i> Add x-ray name
            </Link>
          </li>
          <li>
            <Link to="/admin/view-type">
              <i className="menu-icon fa fa-eye"></i> All x-ray name
            </Link>
          </li>

          <li>
            <Link to="/admin/create-history">
              <i className="menu-icon fa fa-plus"></i> Add History
            </Link>
          </li>
          <li>
            <Link to="/admin/view-history">
              <i className="menu-icon fa fa-eye"></i> All History
            </Link>
          </li>

          <li></li>
        </ul>
      </li>

      <li className="dropdown">
        <Link to="#">
          <i className="fa fa-cogs"></i>
          Settings
          <span className="btn-caret">
            <span className="caret"></span>
          </span>
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link to="/admin/create-message">
              <i className="menu-icon fa fa-tasks"></i> Add Message
            </Link>
          </li>

          <li>
            <Link to="/admin/clear-cache" className="dropdown-toggle">
              <i className="menu-icon fa fa-refresh"></i> Clear Cache
            </Link>
          </li>
        </ul>
      </li>

      <li className="dropdown">
        <Link to="#">
          <i className="fa fa-cogs"></i>
          Software
          <span className="btn-caret">
            <span className="caret"></span>
          </span>
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link to="/admin/create-software">
              <i className="menu-icon fa fa-plus"></i> Add Software
            </Link>
          </li>

          <li>
            <Link to="/admin/view-software">
              <i className="menu-icon fa fa-eye"></i> All Software
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}
