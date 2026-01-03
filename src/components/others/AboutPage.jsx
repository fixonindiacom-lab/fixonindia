import React from "react";
import "./AboutPage.css";
import WhyChooseUs from "./WhyChooseUs";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
    const navigate = useNavigate();
  return (
    <div className="about-page">

      {/* ===== HERO ===== */}
      <section className="about-hero reveal">
        <div className="hero-content">
          <h1 className="hero-title">About Fix-on-India Services</h1>
          <p className="hero-subtitle">
            At FixonIndia.com, we make home appliance service simple and stress-free. Our trained technicians and transparent pricing ensure dependable repairs you can trust.
          </p>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="about-section reveal">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-text">
          Fix-on-India Services is India’s fastest-growing home-service platform,
          your trusted partner for professional home appliance repair, maintenance, and smart solutions. We bring certified technicians right to your doorstep for fast, reliable servicing of:
        </p>
        <ul>
          <li>Air Conditioners (AC)</li>
          <li>Refrigerators</li>
          <li>Washing Machines</li>
          <li>Other Home Appliances</li>
        </ul>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="mission-section reveal">
        <div className="mission-card">
          <h3>Our Mission</h3>
          <p>
            Our mission is to make home appliance servicing simple, affordable, and trustworthy for every household across India.
          </p>
        </div>

        <div className="mission-card">
          <h3>Our Vision</h3>
          <p>
            To become India’s most trusted home-service brand with 100% customer
            satisfaction and nationwide coverage.
          </p>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-section reveal">
        <div className="stat-card">
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Trained Technicians</p>
        </div>

        <div className="stat-card">
          <h2>10+</h2>
          <p>Cities Covered</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Active Support</p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section reveal">
        <h2>Need a Professional Service?</h2>
        <p>Book a trusted technician anytime with just one click.</p>

        <button className="acta-btn" onClick={()=>{navigate("/service")}}>Book Service</button>
      </section>

        <WhyChooseUs/>
    </div>
  );
}
