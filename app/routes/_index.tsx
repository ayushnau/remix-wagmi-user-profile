import React from "react";
import Header from "~/components/Header";
import UserProfile from "~/components/UserProfile";
// import Navbar from "./Navbar";
import { User } from "../types/user";
import { userData } from "~/data";

export default function Index() {
  const user: User = userData;
  return (
    <>
      <Header user={user} />
      <UserProfile user={user} />
    </>
  );
}
