import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css"
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaBook,
  FaUpload,
  FaInfoCircle,
  FaEnvelope,
  FaShieldAlt,
  FaFileContract,
  FaTags,
  FaWhatsapp,
} from "react-icons/fa";
import "../css/Footer.css";
import { FaStreetView, FaUsersViewfinder } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span>📘</span> Codexia
          </div>
          <p>
            Codexia is a digital platform designed to help students explore,
            share, and access quality study materials anytime, anywhere.
          </p>

          <div className="footer-socials">
            <a href="#"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/company/project-to-placement/posts/?feedView=all"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/project_to_placement/?hl=en"><FaInstagram /></a>
            <a href="https://www.youtube.com/@Projecttoplacement"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <Link to="/"><FaHome /> Home</Link>
          <Link to="/browse"><FaBook /> Browse Notes</Link>
          <Link to="/upload"><FaUsersViewfinder /> View Notes</Link>
        </div>

        {/* CATEGORIES */}
        <div className="footer-column">
          <h4>Categories</h4>
          <Link to="/categories"><FaTags /> All Categories</Link>
          <Link to="/categories/engineering">Engineering</Link>
          <Link to="/categories/commerce">Commerce</Link>
          <Link to="/categories/arts">Arts</Link>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <Link to="/about"><FaInfoCircle /> About Us</Link>
          <Link to="/contact"><FaEnvelope /> Contact Us</Link>
          <Link to="/privacy"><FaShieldAlt /> Privacy Policy</Link>
          <Link to="/terms"><FaFileContract /> Terms & Conditions</Link>
        </div>

        <div className="footer-column newsletter">
          <h4>Newsletter</h4>
          <p>Stay updated with new features and study resources.</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Your email" />
            <button>➤</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Codexia. All rights reserved.</p>
        <p>Made with ❤️ for students</p>
      </div>
    </footer>
  );
};

export default Footer;
