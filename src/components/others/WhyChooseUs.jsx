import React from "react";
import "./WhyChooseUs.css";
import { FiDollarSign, FiClock, FiShield, FiUserCheck } from "react-icons/fi";
// import heroImg from "../../assets/logo.png"; // replace with your image
const heroImg = "https://tse4.mm.bing.net/th/id/OIP.td2QnXfGUWY4G34_GAJK1AHaE8?pid=Api&P=0&h=180";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Transparent Cost",
      icon: <FiDollarSign />,
      description: "No hidden charges. Pay exactly what you see."
    },
    {
      title: "Quick Repairs",
      icon: <FiClock />,
      description: "Fast and reliable service at your doorstep."
    },
    {
      title: "Trusted Quality",
      icon: <FiShield />,
      description: "We use genuine parts and guarantee our work."
    },
    {
      title: "Trained & Skilled Workers",
      icon: <FiUserCheck />,
      description: "Professionally trained electricians for every task."
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="left-column">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="points-container">
            {points.map((point, index) => (
              <div key={index} className="point-card">
                <div className="point-icon">{point.icon}</div>
                <h3 className="point-title">{point.title}</h3>
                <p className="point-description">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="right-column">
          <img src={heroImg} alt="Why Choose Us" />
        </div>
      </div>
    </section>
  );
}
