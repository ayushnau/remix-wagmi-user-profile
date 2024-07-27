import React from "react";
import { User } from "../types/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

interface UserDetailsCardType {
  user: User;
}

const UserDetailsCard: React.FC<UserDetailsCardType> = ({ user }) => {
  return (
    <div
      className="container mt-4 mb-4 p-3 d-flex justify-content-center flex-column"
      style={{ maxWidth: "400px", boxSizing: "content-box" }}
    >
      <div
        className="card p-4 rounded-3 shadow-sm w-100"
        style={{ maxWidth: "400px" }}
      >
        <div className="d-flex flex-column align-items-center">
          <div className="avatar-container mb-3">
            <img
              src={user.profilePicture}
              className="img-fluid rounded-circle border border-light"
              alt="profile"
              style={{ height: "140px", width: "140px", objectFit: "cover" }}
            />
          </div>
          <h2 className="h4 mb-1">{user.name}</h2>
          <h6 className="text-muted mb-3">{user.userTag}</h6>
          <p className="text-center mb-3">{user.about}</p>

          <div className="d-flex justify-content-center gap-3 mb-4">
            <FontAwesomeIcon icon={faTwitter} className="text-muted" />
            <FontAwesomeIcon icon={faFacebookF} className="text-muted" />
            <FontAwesomeIcon icon={faInstagram} className="text-muted" />
            <FontAwesomeIcon icon={faLinkedin} className="text-muted" />
          </div>

          <button className="btn btn-dark w-100 mb-4">Edit Profile</button>
        </div>
      </div>

      {/* Contact Information Card */}
      <div className="card p-3 mt-4 rounded-3 shadow-sm w-100 animate-card">
        <h5 className="mb-3">Contact Information</h5>
        <div className="d-flex flex-column flex-md-row align-items-start text-center mb-3 text-nowrap">
          <div className="d-flex align-items-center mb-2 mb-md-0 me-md-3">
            <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" />
            <span className="text-muted">{user.email}</span>
          </div>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faPhone} className="me-2 text-primary" />
            <span className="text-muted">{user.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
