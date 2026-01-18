import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import "../css/Navbar.css";
import logo from "../assets/logo.jpeg";
import { FaUserEdit, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Codexia Logo" />
        <span>Codexia</span>
      </div>

      <nav className="navbar-links">
        <Link to="/" className="nav-item">
          <i className="fas fa-home"></i> Home
        </Link>

        <Link to="/browse" className="nav-item">
          <i className="fas fa-book"></i> Browse Notes
        </Link>

        <Link to="/categories" className="nav-item">
          <i className="fas fa-list"></i> Categories
        </Link>

        {user ? (
          <>
            <Link to="/dashboard" className="nav-item">
              <i className="fas fa-chart-line"></i> Dashboard
            </Link>

            {/* PROFILE CLICK */}
            <div className="profile-wrapper">
              <div
                className="nav-item profile-trigger"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <FaUserCircle />
                <span>{user.firstName}</span>
              </div>

              {showDropdown && (
                <div className="profile-dropdown">
                  <Link to="/update-profile" className="dropdown-item">
                    <FaUserEdit className="dropdown-icon" />
                     Update Profile
                  </Link>

                  <button className="dropdown-item logout" onClick={logout}>
                    <FaSignOutAlt className="dropdown-icon" />
                     Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/register" className="nav-item register">
              <i className="fas fa-user-plus"></i> Register
            </Link>

            <Link to="/login" className="nav-item login">
              <i className="fas fa-right-to-bracket"></i> Login
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
