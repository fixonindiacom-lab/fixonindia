import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingSystem from "./Bookings/BookingSystem";
import BookServicePopup from "./BookServicePopup";

export default function HeroSection() {
  const [showBookPopup, setShowBookPopup] = useState(false);

  return (
    <>
      {/* All CSS from HeroSection.css embedded here */}
      <style>{`
        .hero-section-combined {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 80px 60px;
          background: linear-gradient(115deg, #e0e0e0, #4e7bac, #0056b3);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: scroll;
          min-height: 90vh;
          width: 100%;
          flex-wrap: wrap;
          overflow: hidden;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .hero-content-combined {
          flex: 1;
          min-width: 300px;
          margin-right: 50px;
          opacity: 0;
          animation: slideFadeIn 1s forwards;
        }

        .hero-image-combined {
          flex: 1;
          min-width: 300px;
          display: flex;
          justify-content: center;
          opacity: 0;
          animation: slideFadeIn 1s forwards;
          animation-delay: 0.3s;
        }

        .hero-title-combined {
          font-size: 3rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero-subtitle-combined {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 35px;
          line-height: 1.5;
        }

        .hero-points-combined {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .hero-point-item {
          color: black;
          text-align: left;
        }

        .hero-buttons-combined {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .cta-btn-combined {
          text-decoration: none;
          padding: 14px 30px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.4s ease;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border: none;
          display: inline-block;
        }

        .primary-btn-combined {
          background-color: #111;
          color: #fff;
        }

        .primary-btn-combined:hover {
          background-color: #333;
          transform: translateY(-3px) scale(1.02);
        }

        .secondary-btn-combined {
          background-color: #37c732ff;
          color: #fff;
        }

        .secondary-btn-combined:hover {
          background-color: #2ba828;
          transform: translateY(-3px) scale(1.02);
        }

        @keyframes slideFadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media screen and (max-width: 900px) {
          .hero-section-combined {
            padding: 50px 25px;
            flex-direction: column;
            text-align: center;
          }

          .hero-content-combined {
            margin: 0 0 30px 0;
          }

          .hero-buttons-combined {
            justify-content: center;
          }

          .hero-point-item {
            text-align: center;
          }
        }

        @media screen and (max-width: 480px) {
          .hero-title-combined {
            font-size: 2rem;
          }

          .hero-subtitle-combined {
            font-size: 1rem;
          }

          .cta-btn-combined {
            font-size: 0.95rem;
            padding: 10px 20px;
          }
        }
      `}</style>

      <section className="hero-section-combined">
        <div className="hero-content-combined">
          <h1 className="hero-title-combined">
            Fixonindia — Your Home's Best Buddy!
          </h1>
          <p className="hero-subtitle-combined">
            Fast, professional, and trusted electricians at your doorstep. We
            handle all types of electrical installations, repairs, and maintenance.
          </p>
          <ul className="hero-points-combined">
            <li className="hero-point-item">✔ Same Day Service</li>
            <li className="hero-point-item">✔ 100% Verified Technicians</li>
            <li className="hero-point-item">✔ Lowest Prices Guaranteed</li>
          </ul>
          <br />
          <div className="hero-buttons-combined">
            <Link
              to="/service"
              className="cta-btn-combined primary-btn-combined"
            >
              Visit Services
            </Link>

            <button
              className="cta-btn-combined secondary-btn-combined"
              onClick={() => setShowBookPopup(true)}
            >
              Book on WhatsApp
            </button>
          </div>
        </div>

        <div className="hero-image-combined">
          <BookingSystem />
        </div>

        {/* Popups */}
        {showBookPopup && (
          <BookServicePopup onClose={() => setShowBookPopup(false)} />
        )}
      </section>
    </>
  );
}












// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import BookingSystem from "./Bookings/BookingSystem"
// import "./HeroSection.css";
// import BookServicePopup from "./BookServicePopup";


// // function BookServicePopup({ onClose }) {
// //   return (
// //     <div className="popup-overlay">
// //       <div className="popup-content">
// //         <h2>Book a Service</h2>
// //         <p>This is a dummy popup for booking a service.</p>
// //         <button className="close-btn" onClick={onClose}>Close</button>
// //       </div>
// //     </div>
// //   );
// // }


// export default function HeroSection() {
//   const [showBookPopup, setShowBookPopup] = useState(false);

//   return (
//     <section className="hero-section">
//       <div className="hero-content animate-left">
//         {/* <div>
//           <img src="https://tse1.mm.bing.net/th/id/OIP.U8cNv1_PENi8PbZIbhF1bAHaDN?pid=Api&P=0&h=180"  style={{height:"10rem" , width:"100%" , borderRadius:"10px" , boxShadow:"0 6px 20px #5382b4ff"}}/> <br />
//         </div> */}
//         <h1 className="hero-title">
//           Fixonindia — Your Home’s Best Buddy!
//         </h1>
//         <p className="hero-subtitle">
//           Fast, professional, and trusted electricians at your doorstep. We
//           handle all types of electrical installations, repairs, and maintenance.
//         </p>
//         <ul className="hero-points" style={{listStyle:"none"}}>
//             <li style={{color:"black" , textAlign:"left"}}>✔ Same Day Service</li>
//             <li style={{color:"black" , textAlign:"left"}}>✔ 100% Verified Technicians</li>
//             <li style={{color:"black" , textAlign:"left"}}>✔ Lowest Prices Guaranteed</li>
//         </ul>
//         <br />
//         <div className="hero-buttons">
//           <Link to="/service" className="cta-btn primary-btn">
//             Visit Services
//           </Link>

//           <button
//             className="cta-btn secondary-btn" style={{backgroundColor:"#37c732ff"}}
//             onClick={() => setShowBookPopup(true)}
//           >
//             Book on WhatsApp
//           </button>

         
//         </div>
//       </div>

//       <div className="hero-image animate-right">

//        <BookingSystem/>

//       </div>

//        {/* Popups */}
//           {showBookPopup && (
//             <BookServicePopup onClose={() => setShowBookPopup(false)} />
//           )}

//     </section>
//   );
// }

























// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import "./HeroSection.css";

// // // Dummy Popups (replace with real components later)
// // function BookServicePopup({ onClose }) {
// //   return (
// //     <div className="popup-overlay">
// //       <div className="popup-content">
// //         <h2>Book a Service</h2>
// //         <p>This is a dummy popup for booking a service.</p>
// //         <button className="close-btn" onClick={onClose}>Close</button>
// //       </div>
// //     </div>
// //   );
// // }

// // function ContactUsPopup({ onClose }) {
// //   return (
// //     <div className="popup-overlay">
// //       <div className="popup-content">
// //         <h2>Contact Us</h2>
// //         <p>This is a dummy popup for contacting us.</p>
// //         <button className="close-btn" onClick={onClose}>Close</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function HeroSection() {
// //   const [showBookPopup, setShowBookPopup] = useState(false);
// //   const [showContactPopup, setShowContactPopup] = useState(false);

// //   return (
// //     <section className="hero-section">
// //       <div className="hero-content">
// //         <h1 className="hero-title">
// //           Reliable Electrical Services <br /> For Your Home & Office
// //         </h1>
// //         <p className="hero-subtitle">
// //           Fast, professional, and trusted electricians at your doorstep. We
// //           handle all types of electrical installations, repairs, and maintenance.
// //         </p>

// //         <div className="hero-buttons">
// //           <Link to="/services" className="cta-btn primary-btn">
// //             Visit Services
// //           </Link>
// //           <button
// //             className="cta-btn secondary-btn"
// //             onClick={() => setShowBookPopup(true)}
// //           >
// //             Book a Service
// //           </button>
// //           <button
// //             className="cta-btn tertiary-btn"
// //             onClick={() => setShowContactPopup(true)}
// //           >
// //             Contact Us
// //           </button>
// //         </div>
// //       </div>

// //       <div className="hero-image">
// //         <img
// //           src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
// //           alt="Electrician working"
// //         />
// //       </div>

//       // {/* Popups */}
//       // {showBookPopup && (
//       //   <BookServicePopup onClose={() => setShowBookPopup(false)} />
//       // )}
// //       {showContactPopup && (
// //         <ContactUsPopup onClose={() => setShowContactPopup(false)} />
// //       )}
// //     </section>
// //   );

// // }
