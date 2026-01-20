import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaUser, FaPhone, FaEnvelope, FaLock } from "react-icons/fa";
import { PiBookOpenBold } from "react-icons/pi";
import "../css/Register.css";
import Footer from "../components/Footer";
import api from "../api/axios";

const Register = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/api/auth/register", formData);

      alert("🎉 Account Created Successfully!!!!\nWelcome to Codexia 🚀\n ✅ Please login to continue.");

      window.location.href = "/login";

    } catch (error) {
      console.error(error);
      alert(
        error.response?.data || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

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

          {/* First Name */}
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          {/* Last Name */}
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          {/* Mobile */}
          <div className="input-group">
            <FaPhone className="input-icon" />
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button onClick={handleRegister} disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </button>

          <p className="switch-text">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
