import React from "react";
import "../css/SupportPages.css";
import about from "../assets/about.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/logo.jpeg"
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-page">
      <div className="about-container">

        <div className="about-image">
          <img src={about} alt="About Codexia" />
        </div>

        <div className="about-content">
            <div className="navbar-logo">
          <h1><img src={logo} alt="Codexia Logo" />About Codexia</h1>
          </div>
          <p>
            Codexia is a modern digital learning platform designed to help students
            easily access, share, and manage high-quality study materials in one place.
          </p>

          <h2>🎯 Our Mission</h2>
          <p>
            Our mission is to simplify learning by creating a trusted platform where
            students and educators can share knowledge freely and effectively.
          </p>

          <h2>🚀 Our Vision</h2>
          <p>
            We envision a future where learning resources are accessible to everyone,
            anytime, anywhere — empowering learners at every stage of their journey.
          </p>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;

