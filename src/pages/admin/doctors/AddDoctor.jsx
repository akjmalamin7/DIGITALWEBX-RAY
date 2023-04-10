import "../../../assets/styles/Form.css";

import AddDoctorForm from "../../../component/share/admin/doctor/AddDoctorForm";
import Layout from "../../Layout";
export default function AddDoctor() {
  return (
    <Layout panel="Add Doctor">
      <AddDoctorForm />
    </Layout>
  );
}
