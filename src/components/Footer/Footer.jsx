import { NavLink } from "react-router-dom";
import {
  XIcon,
  Instagram,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

       {/* Column 1 — Company Info */}
        <div className="footer-col">
          <h2 className="footer-logo">Fix-of-India Services</h2>
          <p className="footer-desc">
            Your trusted partner for professional home services, repairs & smart solutions.
          </p>

          <div className="footer-social">

            {/* Facebook */}
            <a
              href="https://x.com/fixonindia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon size={20} />
            </a> 

            {/* Instagram */}
            <a
              href="https://www.instagram.com/fixonindia?igsh=MXVoMm1wamcydGRmZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>

            {/* Email */}
            <a href="mailto:fixonindia.com@gmail.com">
              <Mail size={20} />
            </a>

            {/* Phone Call */}
            <a href="tel:+919540950802">
              <Phone size={20} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919540950802?text=Hello%20Fix-of-India%20Services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
            </a>

          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Help & Support</NavLink>
        </div>

        {/* Column 3 — Policies */}
        <div className="footer-col">
          <h3 className="footer-title">Legal</h3>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/terms">Terms & Conditions</NavLink>
        </div>

        {/* Column 4 — Map */}
        <div className="footer-col">
          <h3 className="footer-title">Our Location</h3>

          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55892.70691910171!2d76.57513539883463!3d28.88960493500898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d85a5414251a5%3A0x9f011cc2777a4544!2z4KSw4KWL4KS54KSk4KSVLCDgpLngpLDgpL_gpK_gpL7gpKPgpL4!5e0!3m2!1shi!2sin!4v1765367592541!5m2!1shi!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Fix-of-India Services • All Rights Reserved</p>
      </div>

    </footer>
  );
}






















            //  <iframe
            //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55892.70691910171!2d76.57513539883463!3d28.88960493500898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d85a5414251a5%3A0x9f011cc2777a4544!2z4KSw4KWL4KS54KSk4KSVLCDgpLngpLDgpL_gpK_gpL7gpKPgpL4!5e0!3m2!1shi!2sin!4v1765367592541!5m2!1shi!2sin"
            //   allowFullScreen=""
            //   loading="lazy"
            //   referrerPolicy="no-referrer-when-downgrade"
            //   title="Google Map"
            // ></iframe>