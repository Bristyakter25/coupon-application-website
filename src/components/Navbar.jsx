// Navbar.js
import React, { useContext } from "react";
import logo from "../assets/Savings_Nest_Logo.jpg";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink className="font-medium text-xl text-teal-800" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-medium text-xl text-teal-800" to="/brand">
          Brand
        </NavLink>
      </li>
      <li>
        <NavLink className="font-medium text-xl text-teal-800" to="/my-profile">
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="md:max-w-6xl mx-auto">
      <div className="navbar ">
        {/* Logo and App Name */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={logo}
            alt="Logo"
          />
          <a className="ml-2 text-3xl text-green-900">Discount PRO</a>
        </div>

        {/* Center Navigation Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* User Authentication Section */}
        <div className="navbar-end flex items-center space-x-4">
          {user && user?.email ? (
            <button onClick={logOut} className="btn">
              Log Out
            </button>
          ) : (
            <NavLink to="/auth/login" className="btn">
              Login
            </NavLink>
          )}

          <NavLink to="/auth/register">
            <button className="btn">Register</button>
          </NavLink>
        </div>
      </div>
      <div className="text-3xl font-semibold flex justify-end mb-5">{user && user.email}</div>
    </div>
  );
};

export default Navbar;
