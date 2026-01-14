import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { PiBookOpenBold } from "react-icons/pi";
import "../css/Login.css";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-card big-card">
          
          {/* Top Icon */}
          <div className="login-icon">
            <PiBookOpenBold />
          </div>

          <h2>Welcome Back</h2>
          <p className="subtitle">
            Sign in to your account to continue
          </p>

          {/* Email */}
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Enter your email address" />
          </div>

          {/* Password */}
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Enter your password" />
          </div>

          <button>Login</button>

          <p className="switch-text">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
