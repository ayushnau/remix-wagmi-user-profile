import React from "react";
import { Link } from "@remix-run/react";
import { User } from "../types/user";

interface NavbarTypes {
  user: User;
}

const Header: React.FC<NavbarTypes> = ({ user }) => {
  return (
    <nav className="z-5 navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top bg-gradient shadow-lg">
      <div className="container-fluid">
        <Link className="navbar-brand d-lg-none" to="/">
          ProfileHub
        </Link>

        <div className="d-none d-lg-flex w-100 justify-content-between">
          <Link className="navbar-brand" to="/">
            ProfileHub
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Messages
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center ms-auto">
              <div className="me-3">
                <img
                  src={user.profilePicture}
                  alt="User"
                  className="rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <div className="text-light fw-bold">{user.name}</div>
            </div>
          </div>
        </div>

        <div className="d-lg-none d-flex align-items-center ms-auto">
          <div className="me-3">
            <img
              src={user.profilePicture}
              alt="User"
              className="rounded-circle"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="text-light fw-bold">{user.name}</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
