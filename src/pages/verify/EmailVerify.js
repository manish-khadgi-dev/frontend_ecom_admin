import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { Alert } from "react-bootstrap";

const EmailVerify = () => {
  // get the verification code and email from the query paramaters
  // call api to verify
  // display success or errror messages
  return (
    <AdminLayout>
      <div className="verify-page">
        <Alert variant="success">You account is verified</Alert>
      </div>
    </AdminLayout>
  );
};

export default EmailVerify;
