import React from "react";
import { User } from "../types/user";
import UserDetailsCard from "./UserDetailsCard";
import UserActivities from "./UserActivities";

interface UserProfileTypes {
  user: User;
}
const UserProfile: React.FC<UserProfileTypes> = ({ user }) => {
  return (
    <div className="d-flex flex-column  flex-md-row ">
      <UserDetailsCard user={user} />
      <UserActivities activities={user.activities} />
    </div>
  );
};

export default UserProfile;

{
  /* <div className="d-flex flex-column flex-md-row">
  <div className="flex-fill mb-4 mb-md-0">
    <UserDetailsCard user={user} />
  </div>
  <div className="flex-fill">
    <UserActivities activities={user.activities} />
  </div>
</div>; */
}
