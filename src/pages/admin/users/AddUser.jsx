import "../../../assets/styles/Form.css";

import AddUserForm from "../../../component/share/admin/addUser";
import Layout from "../../Layout";
export default function AddUser() {
  return (
    <Layout panel="Add Customer">
      <AddUserForm />
    </Layout>
  );
}
