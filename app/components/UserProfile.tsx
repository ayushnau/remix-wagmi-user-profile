import React from "react";
import { User } from "../types/user";
import UserDetailsCard from "./UserDetailsCard";
import UserActivities from "./UserActivities";

interface UserProfileTypes {
  user: User;
}

const UserProfile: React.FC<UserProfileTypes> = ({ user }) => {
  return (
    <div className="d-flex flex-column flex-md-row z-4 position-relative">
      <div className="flex-fill mb-4 mb-md-0">
        <UserDetailsCard user={user} />
      </div>
      <div
        className="flex-fill position-relative z-1"
        style={{
          maxHeight: "calc(100vh - 4rem)", // Adjust based on header/footer height
          overflowY: "auto",
        }}
      >
        <UserActivities activities={user.activities} />
      </div>
    </div>
  );
};

export default UserProfile;
