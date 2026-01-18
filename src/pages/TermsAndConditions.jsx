import React from "react";
import "../css/SupportPages.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />

      <div className="policy-page">
        <div className="policy-container">

          <h1>Terms & Conditions</h1>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Codexia, you agree to comply with and be bound
              by these terms and conditions.
            </p>
          </section>

          <section>
            <h2>2. User Responsibilities</h2>
            <p>
              Users are responsible for maintaining the confidentiality of their
              accounts and for all activities performed using their credentials.
            </p>
          </section>

          <section>
            <h2>3. Content Usage</h2>
            <p>
              All materials available on Codexia are for educational purposes
              only. Unauthorized distribution is prohibited.
            </p>
          </section>

          <section>
            <h2>4. Limitation of Liability</h2>
            <p>
              Codexia shall not be held liable for any indirect or consequential
              damages arising from the use of our services.
            </p>
          </section>

          <section>
            <h2>5. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access if users
              violate these terms.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
