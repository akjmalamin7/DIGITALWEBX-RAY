import InputButton from "../../../ui/button/InputButton";
import SelectBox from "../../input/SelectBox";
import TextArea from "../../input/TextArea";
import TextBox from "../../input/TextBox";
import DoctorList from "./DoctorList";

export default function EditUserForm() {
  return (
    <form
      action=""
      method="post"
      class="form-horizontal"
      enctype="multipart/form-data"
    >
      <TextBox
        type="text"
        placeholder="Diagnostic Name"
        labelText="Diagnostic Name"
        name="diagnosticName"
        value=""
        onChange=""
      />
      <TextBox
        type="readonly"
        placeholder="type"
        labelText="Type"
        name="type"
        value="user"
        onChange=""
      />
      <TextBox
        type="email"
        placeholder="Diagnostic Email"
        labelText="Diagnostic Email"
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
        placeholder="Address"
        labelText="Address"
        name="addresss"
        value=""
        onChange=""
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
