import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
          alt="Privacy Policy"
          className="privacy-hero-bg"
        />
        <div className="privacy-hero-content fade-in">
          <h1>Privacy Policy</h1>
          <p>
            Your privacy matters to us. Learn how Fixon India collects, uses, and
            safeguards your personal data.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="privacy-content">
        <div className="privacy-card slide-up">

          <p className="intro-text">
            This Privacy Policy is framed in accordance with the Information
            Technology Act, 2000 and the Information Technology (Reasonable
            Security Practices and Procedures and Sensitive Personal Data or
            Information) Rules, 2011. This Policy governs how <strong>Fixon India</strong>{" "}
            collects, stores, processes, and protects your information.
          </p>

          <PrivacySection
            title="1. Definitions"
            content={
              <ul>
                <li><strong>Personal Information:</strong> Information identifying an individual.</li>
                <li><strong>Sensitive Personal Data (SPDI):</strong> Financial and payment details.</li>
                <li><strong>Services:</strong> Appliance inspection, repair, and maintenance.</li>
              </ul>
            }
          />

          <PrivacySection
            title="2. Information We Collect"
            content={
              <>
                <h4>Personal Information</h4>
                <ul>
                  <li>Full name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Service location</li>
                </ul>

                <h4>Sensitive Data</h4>
                <ul>
                  <li>Payment details via secure gateways</li>
                </ul>

                <h4>Technical Data</h4>
                <ul>
                  <li>IP address and browser type</li>
                  <li>Usage logs</li>
                </ul>
              </>
            }
          />

          <PrivacySection
            title="3. Purpose of Data Usage"
            content={
              <ul>
                <li>Service booking and fulfillment</li>
                <li>Technician assignment</li>
                <li>Payments and invoicing</li>
                <li>Customer support</li>
                <li>Legal compliance</li>
              </ul>
            }
          />

          <PrivacySection
            title="4. Information Sharing"
            content={
              <ul>
                <li>Authorized Fixon India staff and technicians</li>
                <li>Payment gateway partners</li>
                <li>Legal authorities when required</li>
              </ul>
            }
          />

          <PrivacySection
            title="5. Data Retention"
            content={
              <p>
                Data is retained only as long as required to fulfill legal and
                operational purposes, in compliance with Indian laws.
              </p>
            }
          />

          <PrivacySection
            title="6. Data Security"
            content={
              <p>
                We implement encryption, access controls, and secure storage
                systems. However, no system can guarantee 100% security.
              </p>
            }
          />

          <PrivacySection
            title="7. User Rights"
            content={
              <ul>
                <li>Access and update personal data</li>
                <li>Withdraw consent</li>
                <li>Request data deletion</li>
              </ul>
            }
          />

          <div className="grievance-box">
            <h3>Grievance Redressal Officer</h3>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:fixonindia.com@gmail.com">
                fixonindia.com@gmail.com
              </a>
            </p>
            <p><strong>Response Time:</strong> Within 30 days</p>
          </div>

          <PrivacySection
            title="8. Policy Updates"
            content={
              <p>
                Fixon India reserves the right to update this Privacy Policy.
                Continued usage implies acceptance of changes.
              </p>
            }
          />
        </div>
      </section>
    </div>
  );
};

const PrivacySection = ({ title, content }) => {
  return (
    <div className="privacy-section fade-in">
      <h2>{title}</h2>
      <div className="section-content">{content}</div>
    </div>
  );
};

export default PrivacyPolicy;
