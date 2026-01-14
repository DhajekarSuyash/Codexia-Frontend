import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">📘 Codexia</div>

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

        <Link to="/register" className="nav-item register">
          <i className="fas fa-user-plus"></i> Register
        </Link>

        <Link to="/login" className="nav-item login">
          <i className="fas fa-right-to-bracket"></i> Login
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
