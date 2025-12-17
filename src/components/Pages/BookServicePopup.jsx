import { useState } from "react";
import "./BookServicePopup.css";

const OWNER_WHATSAPP = "919540950802"; // 🔴 Replace with owner's WhatsApp number (country code required)

export default function BookServicePopup({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    // if (!form.name || !form.service || !form.address) {                       //  !form.phone ||
    //   alert("Please fill all details");
    //   return;
    // }

    const message = `
📌 *New Service Booking Request*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
🛠 Service: ${form.service}
📍 Address: ${form.address}

Please confirm availability.
    `;

    const whatsappURL = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bsp-overlay">
      <div className="bsp-box">
        <h2>Book a Service</h2>
        <p className="bsp-subtitle">
          Fill the details and we’ll connect you instantly on WhatsApp
        </p>

        <div className="bsp-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Select Service</option>
            <option value="AC Repair">AC Repair</option>
            <option value="AC Installation">AC Installation</option>
            <option value="Washing Machine Repair">Washing Machine Repair</option>
            <option value="Refrigerator Repair">Refrigerator Repair</option>
          </select>

          <textarea
            name="address"
            placeholder="Service Address"
            rows="3"
            value={form.address}
            onChange={handleChange}
          />

          <div className="bsp-actions">
            <button className="bsp-whatsapp" onClick={sendToWhatsApp}>
              Send on WhatsApp
            </button>
            <button className="bsp-close" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
