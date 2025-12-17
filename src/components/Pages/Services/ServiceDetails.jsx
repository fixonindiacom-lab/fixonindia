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

        <h2>What’s Included</h2>
        <ul>
          <li>✔ Complete inspection</li>
          <li>✔ Technician visit</li>
          <li>✔ Genuine spare guidance</li>
          <li>✔ 30-day service warranty</li>
        </ul>

        <h2>About This Service</h2>
        <p>
          Our certified technicians ensure high-quality service using professional
          tools and transparent pricing. This service is designed to improve
          appliance performance and extend lifespan.
        </p>

        <Link className="back-btn" to="/service">
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}
