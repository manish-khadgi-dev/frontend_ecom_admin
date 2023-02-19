import React, { useEffect, useRef, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import { Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { verifyAdminUser } from "../../helper/axiosHelper";

const EmailVerify = () => {
  // get the verification code and email from the query paramaters
  // call api to verify
  // display success or errror messages

  const isExeRef = useRef(true);

  const [response, setResponse] = useState({});

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const dt = {
      verificationCOde: searchParams.get("c"),
      email: searchParams.get("email"),
    };
    verifyUserLink(dt);
    isExeRef.current = false;
  }, []);

  //call API here,
  const verifyUserLink = async (dt) => {
    // call axios function

    if (!isExeRef) {
      return console.log("API already called");
    }
    const data = await verifyAdminUser(dt);
    setResponse(data);
  };

  return (
    <AdminLayout>
      <div className="verify-page">
        <Alert variant="success">You account is verified</Alert>
      </div>
    </AdminLayout>
  );
};

export default EmailVerify;
