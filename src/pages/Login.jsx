import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { PiBookOpenBold } from "react-icons/pi";
import "../css/Login.css";
import Navbar from "../components/Navbar";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/api/auth/login", formData);

      // save token + fname
      login(response.data);

      alert(`🎉 Welcome back, ${response.data.firstName}!`);

      window.location.href = "/";

    } catch (error) {
      alert("❌ Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-card big-card">
          <div className="login-icon">
            <PiBookOpenBold />
          </div>

          <h2>Welcome Back</h2>
          <p className="subtitle">Sign in to your account to continue</p>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="switch-text">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
