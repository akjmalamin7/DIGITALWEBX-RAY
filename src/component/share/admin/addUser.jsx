import { useState } from "react";
import { addUser } from "../../../helper/api";
import InputButton from "../../ui/button/InputButton";
import SelectBox from "../input/SelectBox";
import TextArea from "../input/TextArea";
import TextBox from "../input/TextBox";
import DoctorList from "./user/DoctorList";
export default function AddUserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    type: "",
    mobile: "",
    username: "",
    password: "",
    address: "",
    single: "",
    double: "",
    multiple: "",
    ecg: "",
    ct: "",
    submit: "Submit",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user });

    addUser(JSON.stringify(user)).then((res) => {
      console.log(res.status);
    });

    /* fetch("http://api.desherkhobor24.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then((res) => {
      console.log(res);
      //history.push("/");
    });*/
  };
  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <TextBox
        type="text"
        placeholder="Diagnostic Name"
        labelText="Diagnostic Name"
        name="name"
        value={user.name}
        onChange={handleOnChange}
      />
      <TextBox
        type="text"
        placeholder="type"
        labelText="Type"
        name="type"
        value={user.type}
        onChange={handleOnChange}
      />
      <TextBox
        type="email"
        placeholder="Diagnostic Email"
        labelText="Diagnostic Email"
        name="email"
        value={user.email}
        onChange={handleOnChange}
      />
      <TextBox
        type="text"
        placeholder="Mobile Number"
        labelText="Mobile Number"
        name="mobile"
        value={user.mobile}
        onChange={handleOnChange}
      />
      <TextBox
        type="text"
        placeholder="Username"
        labelText="Username"
        name="username"
        value={user.username}
        onChange={handleOnChange}
      />
      <TextBox
        type="password"
        placeholder="password"
        labelText="Password"
        name="password"
        value={user.password}
        onChange={handleOnChange}
      />
      <TextArea
        type="text"
        placeholder="Address"
        labelText="Address"
        name="address"
        value={user.address}
        onChange={handleOnChange}
      />
      <SelectBox
        labelText="Select Doctor"
        name="selectDoctor"
        type={<DoctorList />}
      />
      <SelectBox
        labelText="Ignore Doctor"
        name="ignoreDoctor"
        type={<DoctorList />}
      />

      <TextBox
        type="number"
        placeholder="Single Price"
        labelText="Single Image Price"
        name="single"
        value={user.single}
        onChange={handleOnChange}
      />
      <TextBox
        type="number"
        placeholder="Double Price"
        labelText="Double Image Price"
        name="double"
        value={user.double}
        onChange={handleOnChange}
      />
      <TextBox
        type="number"
        placeholder="Multiple Price"
        labelText="Multiple Image Price"
        name="multiple"
        value={user.multiple}
        onChange={handleOnChange}
      />
      <TextBox
        type="number"
        placeholder="ECG Price"
        labelText="ECG Image Price"
        name="ecg"
        value={user.ecg}
        onChange={handleOnChange}
      />
      <TextBox
        type="number"
        placeholder="CT Price"
        labelText="CT Image Price"
        name="ct"
        value={user.ct}
        onChange={handleOnChange}
      />
      <InputButton
        type="submit"
        name="Submit"
        value={user.submit}
        onChange={handleOnChange}
      />
    </form>
  );
}
