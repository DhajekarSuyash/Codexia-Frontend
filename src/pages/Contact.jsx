import React from "react";
import "../css/SupportPages.css";
import contact from "../assets/contactus.avif";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/logo.jpeg";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="about-page">
        <div className="about-container">

          <div className="about-image">
            <img src={contact} alt="Contact Codexia" />
          </div>

          <div className="about-content">
            <div className="navbar-logo">
              <h1>
                <img src={logo} alt="Codexia Logo" />
                Contact Us
              </h1>
            </div>

            <p>
              Have questions, feedback, or need support?  
              We’d love to hear from you.
            </p>

            <form className="contact-form">
              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
