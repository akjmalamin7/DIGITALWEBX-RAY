import Nav from "./Nav";
import { navItems } from "../menuData";

export default function HeaderNav() {
  return (
    <nav className="navbar navbar-custom admin no-print noprint admin_header_sec">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="main-menu">
          <Nav  navItems={navItems} />
        </div>
      </div>
    </nav>
  );
}
