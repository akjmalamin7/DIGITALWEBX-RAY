import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import WaitingList from "../pages/admin/patients/WaitingList";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";


const Routing = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<WaitingList />} />
      </Route>
    </Routes>
  )
}

export default Routing