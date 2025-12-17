import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "How quickly can your technician arrive for AC repair?",
    answer:
      "We offer same-day AC repair service. In most cases, our technician reaches your location within 60–90 minutes depending on your area.",
  },
  {
    question: "Do you provide warranty on AC servicing and repairs?",
    answer:
      "Yes! We provide 30–90 days service warranty depending on the service type. All spare parts come with brand warranty.",
  },
  {
    question: "How do I know if my AC needs gas refilling?",
    answer:
      "Common signs include low cooling, high electricity bills, ice formation on coils, or AC running continuously. Our expert will inspect and confirm before any work.",
  },
  {
    question: "Do you offer home electrical repairs too?",
    answer:
      "Yes, we provide electrical services including wiring, switchboard repair, fan installation, inverter setup, and much more.",
  },
  {
    question: "Are your technicians trained and verified?",
    answer:
      "Absolutely. All technicians are ID-verified, trained, and follow complete safety and quality protocols.",
  },
  {
    question: "What are your service charges?",
    answer:
      "Basic inspection starts at ₹99–₹149 depending on city. Final charges depend on repair type and spare parts used.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <p className="faq-subtitle">
        Here are the most common questions about our AC & Electrical services
      </p>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <i className="faq-icon">{openIndex === index ? "−" : "+"}</i>
            </div>

            <div
              className="faq-answer"
              style={{
                maxHeight: openIndex === index ? "200px" : "0px",
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
