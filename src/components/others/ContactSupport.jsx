import React, { useState } from "react";
import "./ContactSupport.css";

export default function ContactSupport() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const phone = "919540950802"; // Your WhatsApp number

    const text =
      `New Support Request:%0A` +
      `Name: ${form.name}%0A` +
      `Email: ${form.email}%0A` +
      `Message: ${form.message}`;

    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="support-page">

      {/* ===== HERO SECTION ===== */}
      <div className="support-hero">
        <h1>Contact & Support</h1>
        <p>We are here to help you anytime — choose any method below</p>
      </div>

      <div className="support-layout">

        {/* ===== LEFT SIDEBAR ===== */}
        <div className="support-sidebar">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/faqs">FAQ & Common Questions</a></li>
            {/* <li><a href="#">Account & Login Issues</a></li>
            <li><a href="#">Service Related Help</a></li> */}
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>

          {/* <h3>Download Resources</h3>
          <ul>
            <li><a href="#">User Guide PDF</a></li>
            <li><a href="#">How Our Service Works</a></li>
            <li><a href="#">Contact Numbers</a></li>
          </ul>  */}
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="support-main">
          <h2>How Can We Help You?</h2>
          <p className="support-text">
            Our team is always ready to assist you with any issue.  
            You can contact us through WhatsApp, Email, Call, or by filling the support form below.
          </p>

          {/* ===== SUPPORT CARDS ===== */}
          <div className="support-cards">

            <div className="support-card">
              <h3>📞 Call Support</h3>
              <p>Speak to our support executive</p>
              <a href="tel:+919540950802" className="support-btn">Call Now</a>
            </div>

            <div className="support-card">
              <h3>💬 WhatsApp Chat</h3>
              <p>Instant response within minutes</p>
              <a href="https://wa.me/919540950802" target="_blank" className="support-btn whatsapp">
                Chat on WhatsApp
              </a>
            </div>

            <div className="support-card">
              <h3>📧 Email Support</h3>
              <p>Get detailed support via email</p>
              <a href="mailto:fixonindia.com@gmail.com" className="support-btn email">
                Send Email
              </a>
            </div>

            {/* <div className="support-card">
              <h3>❓ FAQ & Help Center</h3>
              <p>Find instant answers</p>
              <a href="/faqs" className="support-btn black">View FAQs</a>
            </div> */}

          </div>

          {/* ===== CONTACT FORM ===== */}
          <div className="contact-form-box">
            <h2>Send Us a Message</h2>
            <p>Fill this form and the message will be sent to our WhatsApp directly.</p>

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
            />

            <button onClick={sendToWhatsApp}>Send to WhatsApp</button>
          </div>

        </div>
      </div>
    </div>
  );
}



















// import React, { useState } from "react";
// import "./ContactSupport.css";

// export default function ContactSupport() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const sendToWhatsApp = () => {
//     const phone = "YOUR_PHONE_NUMBER_WITH_COUNTRY_CODE"; 
//     // Example: India → 91XXXXXXXXXX

//     const text =
//       `New Support Message:%0A` +
//       `Name: ${form.name}%0A` +
//       `Email: ${form.email}%0A` +
//       `Message: ${form.message}`;

//     const url = `https://wa.me/${phone}?text=${text}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="contact-container">
//       <h2>Need Help or Support?</h2>
//       <p>Fill the form below — message will directly come to our WhatsApp.</p>

//       <div className="contact-box">
//         <input
//           name="name"
//           type="text"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//         />

//         <input
//           name="email"
//           type="email"
//           placeholder="Your Email"
//           value={form.email}
//           onChange={handleChange}
//         />

//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={form.message}
//           onChange={handleChange}
//         />

//         <button onClick={sendToWhatsApp}>
//           Send to WhatsApp
//         </button>
//       </div>
//     </div>
//   );
// }
