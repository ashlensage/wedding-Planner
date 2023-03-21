import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav text-gray-700">
      <div className="mx-auto max-w-2xl lg:max-w-7xl w-full container flex justify-content-center justify-between">
        <Link to="/home" className="self-center">
          <h2 className="nav-title">Prime Solo Project</h2>
        </Link>
        <div className="flex">
          {/* If no user is logged in, show these links */}
          {!user.id && (
            // If there's no user, show login/registration links
            <Link
              className="navLink font-bold rounded-md py-2.5 px-3.5"
              to="/login"
            >
              Login / Register
            </Link>
          )}

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              <Link
                className="navLink font-bold rounded-md py-2.5 px-3.5 mr-2"
                to="/user"
              >
                Home
              </Link>

              <LogOutButton className="navLink font-bold rounded-md py-2.5 px-3.5 mr-2" />
            </>
          )}
          <Link
            className="navLink font-bold rounded-md py-2.5 px-3.5"
            to="/about"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
