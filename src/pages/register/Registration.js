import React from "react";
import AdminLayout from "../layout/AdminLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInpute } from "../../components/customInpute/CustomInpute";

const Registration = () => {
  const inputs = [
    {
      label: "Frist Name",
      name: "fName",
      type: "text",
      placeholder: "Sam ",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "smith ",
      required: true,
    },

    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "04xxxxx ",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "04xxxxx ",
    },
    {
      label: "Email",
      name: "email",
      type: "type",
      placeholder: "smith ",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "xxxxx ",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "xxxxx ",
      required: true,
    },
  ];
  return (
    <AdminLayout>
      <div className="reg-page">
        <Form className="border mt-5 p-3 rounded shadow-lg">
          {inputs.map((item) => (
            <CustomInpute key={item.name} {...item} />
          ))}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default Registration;
