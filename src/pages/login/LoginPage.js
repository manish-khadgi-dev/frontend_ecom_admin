import React, { useRef } from "react";
import AdminLayout from "../layout/AdminLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { loginAdmin } from "../admin-user/adminUserAction";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    console.log(obj);

    dispatch(loginAdmin());
  };

  // const inputs = [
  //   {
  //     label: "Email",
  //     name: "email",
  //     type: "type",
  //     placeholder: "smith ",
  //     required: true,
  //     forwardRef: emailRef,
  //   },
  //   {
  //     label: "Password",
  //     name: "password",
  //     type: "password",
  //     placeholder: "xxxxx ",
  //     required: true,
  //     forwardRef: passRef,
  //   },
  // ];

  return (
    <AdminLayout>
      <div className="reg-page">
        <Form
          onSubmit={handleOnSubmit}
          className="border mt-5 p-3 rounded shadow-lg pt-5"
        >
          <h3 className="mb-3 text-center">Welcome Back</h3>
          <hr className="mb-5" />

          {/* {inputs.map((item) => (
            <CustomInpute key={item.name} {...item} />
          ))} */}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              ref={emailRef}
              name="email"
              placeholder="a@a.com"
              required
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              ref={passRef}
              name="password"
              placeholder="*******"
              required
              type="password"
              className="form-control"
            />
          </div>

          {<div className="text-danger mb-4"></div>}
          <div className="d-grid">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default LoginPage;
