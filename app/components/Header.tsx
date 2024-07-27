import React from "react";
import { User } from "../types/user";

interface NavbarTypes {
  user: User;
}
const Header: React.FC<NavbarTypes> = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          ProfileHub
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Messages
              </a>
            </li>
          </ul>

          <div className="navbar-nav mx-2">
            <div className="nav-item mx-2">
              <img
                src={user.profilePicture}
                alt="User"
                className="rounded-circle"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <div className="nav-item d-flex align-items-center fw-bold">
              {user.name}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
