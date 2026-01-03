import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "./Services";
import "./ServiceDetails.css";

export default function ServiceDetails() {
  const { id } = useParams();

  // ✅ FIXED (string comparison)
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="details-container">
        <h2>Service not found</h2>
        <Link className="back-btn" to="/services">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="details-container">
      <img
        src={service.image}
        className="details-image"
        alt={service.name}
      />

      <div className="details-content">
        <h1>{service.name}</h1>
        <p className="price-tag">₹{service.price}</p>

        <p className="short-desc">{service.desc}</p>

              {/* Service Process */}
<div className="service-process">
  <h2 className="process-title">🔧 Our Simple & Transparent Service Process</h2>

  <div className="process-steps">
    <div className="process-step">
      <span className="step-number">01</span>
      <h3>Inspection & Quotation</h3>
      <p>
        Our technician inspects your appliance and provides a clear,
        upfront repair quotation for your approval.
      </p>
    </div>

    <div className="process-step">
      <span className="step-number">02</span>
      <h3>Customer Approval / Expert Support</h3>
      <p>
        Repairs begin only after your consent. If required, you may
        consult our senior technical expert to make an informed decision.
      </p>
    </div>

    <div className="process-step">
      <span className="step-number">03</span>
      <h3>Repair & Spare Parts</h3>
      <p>
        Repairs are carried out by qualified technicians using genuine
        spare parts at fixed and transparent prices.
      </p>
    </div>

    <div className="process-step highlight">
      <span className="step-number">✔</span>
      <h3>Up to 150-Day Warranty</h3>
      <p>
        Enjoy automatic service warranty after repair for complete peace
        of mind.
      </p>
    </div>
  </div>
</div>


        <Link className="back-btn" to="/service">
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}
