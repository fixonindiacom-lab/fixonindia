import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
          alt="Terms and Conditions"
          className="hero-bg"
        />
        <div className="hero-content">
          <h1>Terms & Conditions</h1>
          <p>
            Please read these terms carefully before using Fixon India services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="terms-content">
        <div className="terms-card">
          <div className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Fixon India services, you agree to be bound
              by these Terms & Conditions and all applicable laws of India.
            </p>
          </div>

          <div className="terms-section">
            <h2>2. Services</h2>
            <p>
              Fixon India provides appliance inspection, repair, maintenance,
              and support services through authorized technicians.
            </p>
          </div>

          <div className="terms-section">
            <h2>3. User Responsibilities</h2>
            <ul>
              <li>Provide accurate information while booking services</li>
              <li>Ensure safe access to the service location</li>
              <li>Make timely payments for services rendered</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>4. Payments & Pricing</h2>
            <p>
              Prices displayed are subject to change based on inspection and
              actual service requirements. Payments are processed securely.
            </p>
          </div>

          <div className="terms-section">
            <h2>5. Limitation of Liability</h2>
            <p>
              Fixon India shall not be liable for indirect, incidental, or
              consequential damages arising from service usage.
            </p>
          </div>

          <div className="terms-section">
            <h2>6. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with
              the laws of India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
