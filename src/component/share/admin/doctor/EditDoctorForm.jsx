import InputButton from "../../../ui/button/InputButton";
import SelectBox from "../../input/SelectBox";
import TextArea from "../../input/TextArea";
import TextBox from "../../input/TextBox";
import DoctorType from "./DoctorType";

export default function EditDoctorForm() {
  return (
    <form
      action=""
      method="post"
      class="form-horizontal"
      enctype="multipart/form-data"
    >
      <TextBox
        type="readonly"
        placeholder="type"
        labelText="Doctory Type"
        name="type"
        value="user"
        onChange=""
      />
      <SelectBox
        labelText="Doctory Type"
        name="doctorTYpe"
        type={<DoctorType />}
      >
        <option>Hello</option>
        <option>Hello 2</option>
      </SelectBox>

      <TextBox
        type="text"
        placeholder="Doctor Name"
        labelText="Doctor Name"
        name="name"
        value=""
        onChange=""
      />

      <TextBox
        type="email"
        placeholder="Email"
        labelText="Email"
        name="email"
        value=""
        onChange=""
      />
      <TextBox
        type="text"
        placeholder="Mobile Number"
        labelText="Mobile Number"
        name="mobile"
        value=""
        onChange=""
      />
      <TextBox
        type="text"
        placeholder="Username"
        labelText="Username"
        name="username"
        value=""
        onChange=""
      />
      <TextBox
        type="password"
        placeholder="password"
        labelText="Password"
        name="password"
        value=""
        onChange=""
      />
      <TextArea
        type="text"
        placeholder="Designation"
        labelText="Designation"
        name="designation"
        value=""
        onChange=""
      />

      <TextBox
        type="file"
        placeholder="signature"
        labelText="Signature"
        name="signature"
        value=""
        onChange=""
      />

      <TextBox
        type="number"
        placeholder="Single Price"
        labelText="Single Image Price"
        name="single"
        value=""
        onChange=""
      />
      <TextBox
        type="number"
        placeholder="Double Price"
        labelText="Double Image Price"
        name="doble"
        value=""
        onChange=""
      />
      <TextBox
        type="number"
        placeholder="Multiple Price"
        labelText="Multiple Image Price"
        name="multiple"
        value=""
        onChange=""
      />
      <TextBox
        type="number"
        placeholder="ECG Price"
        labelText="ECG Image Price"
        name="ecg"
        value=""
        onChange=""
      />
      <TextBox
        type="number"
        placeholder="CT Price"
        labelText="CT Image Price"
        name="ct"
        value=""
        onChange=""
      />
      <InputButton type="submit" name="Submit" value="Submit" onChange="" />
    </form>
  );
}
