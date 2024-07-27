import React, { useState } from "react";
import Header from "~/components/Header";
import UserProfile from "~/components/UserProfile";
// import Navbar from "./Navbar";
import { User } from "../types/user";
import { userData } from "~/data";
import ToastMessage from "~/components/ToastMessage";

export default function Index() {
  const [showError, setShowError] = useState(false);
  const user: User = userData;
  return (
    <>
      <Header user={user} />
      <UserProfile user={user} setShowError={setShowError} />
      <ToastMessage
        show={showError}
        setShow={setShowError}
        message={"Something Went Wrong!"}
      />
    </>
  );
}
