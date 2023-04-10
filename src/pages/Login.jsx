import "../assets/styles/Login/Sidebar.css";
import { LoginBanner } from "../component/helper/login/LoginBanner";
import { LoginSidebar } from "../component/helper/login/LoginSidebar";
export default function Login() {

  return (
    <div>
      <div className="container-fluid login-container">
        <div className="row full-height">
          <LoginSidebar />
          <LoginBanner />
        </div>
      </div>
    </div>
  );
}
