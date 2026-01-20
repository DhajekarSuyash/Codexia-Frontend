import React from "react";
import "../css/SupportPages.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="policy-page">
        <div className="policy-container">

          <h1>Privacy Policy</h1>

          <section>
            <h2>1. Introduction</h2>
            <p>
              At Codexia, we respect your privacy and are committed to protecting
              your personal information. This policy explains how we collect,
              use, and safeguard your data.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal details such as your name, email address,
              and usage data when you register or interact with our platform.
            </p>
          </section>

          <section>
            <h2>3. How We Use Your Data</h2>
            <p>
              Your information is used to provide better services, improve user
              experience, and ensure platform security.
            </p>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              data against unauthorized access or misuse.
            </p>
          </section>

          <section>
            <h2>5. Changes to This Policy</h2>
            <p>
              We may update this policy periodically. Continued use of Codexia
              indicates acceptance of any changes.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
