import React from "react";
import Navbar from "../components/Navbar";
import { FaUser, FaPhone, FaEnvelope, FaLock } from "react-icons/fa";
import { PiBookOpenBold } from "react-icons/pi";
import "../css/Register.css";

const Register = () => {
  return (
    <>
      <Navbar />

      <div className="register-container">
        <div className="register-card big-card">

          <div className="register-icon">
            <PiBookOpenBold />
          </div>

          <h2>Create Account</h2>
          <p className="subtitle">
            Join Codexia and start sharing knowledge
          </p>

          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="First Name" />
          </div>

          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Last Name" />
          </div>

          <div className="input-group">
            <FaPhone className="input-icon" />
            <input type="number" placeholder="Mobile Number" />
          </div>

          {/* Email */}
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email Address" />
          </div>

          {/* Password */}
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" />
          </div>

          <button>Create Account</button>

          <p className="switch-text">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
