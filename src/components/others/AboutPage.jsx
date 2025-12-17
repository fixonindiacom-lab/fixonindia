import React from "react";
import "./AboutPage.css";
import WhyChooseUs from "./WhyChooseUs";

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* ===== HERO ===== */}
      <section className="about-hero reveal">
        <div className="hero-content">
          <h1 className="hero-title">About Fix-of-India Services</h1>
          <p className="hero-subtitle">
            Premium home services delivered with trust, technology & skilled professionals.
          </p>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="about-section reveal">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-text">
          Fix-of-India Services is India’s fastest-growing home-service platform,
          providing reliable and transparent solutions for AC servicing, electrical
          work, plumbing, appliances, and complete home maintenance.
          Our mission is to simplify your daily life by offering expert support,
          verified technicians, and affordable services anywhere in India.
        </p>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="mission-section reveal">
        <div className="mission-card">
          <h3>Our Mission</h3>
          <p>
            To bring reliable, fast, and quality services to every Indian household
            through verified experts and modern technology.
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
          <h2>50+</h2>
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

        <button className="acta-btn">Book Service</button>
      </section>

        <WhyChooseUs/>
    </div>
  );
}
