import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bookingpop from "../Bookings/Bookingpop"; // import the booking form
import "./ACService.css"; // reuse same CSS

export default function WashingMachineService() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    // TOP LOAD
    {
      id: "was-top-1",
      name: "Unknown Issue (Top Load)",
      type: "Automatic Top Load",
      price: 199,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.OuBBafDrP7wg9BuH2AVFuQAAAA?pid=Api&P=0&h=180",
      desc: "Complete diagnosis for unidentified problems in top-load washing machines.",
    },
    {
      id: "was-top-2",
      name: "Draining Issue (Top Load)",
      type: "Automatic Top Load",
      price: 199,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.rYBw1tq7vhHI6X7msxABnwHaDe?pid=Api&P=0&h=180",
      desc: "Fix water drainage problems and blockages in top-load machines.",
    },

    // FRONT LOAD
    {
      id: "was-front-1",
      name: "Not Spinning (Front Load)",
      type: "Automatic Front Load",
      price: 199,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.qElTCtk0UrdYqcM4oiOrJQAAAA?pid=Api&P=0&h=180",
      desc: "Repair spinning issues caused by motor, belt, or drum problems.",
    },
    {
      id: "was-front-2",
      name: "Noise Issue (Front Load)",
      type: "Automatic Front Load",
      price: 199,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.7Zg_I4LTi-kq31EHpAItkQAAAA?pid=Api&P=0&h=180",
      desc: "Resolve abnormal vibration or loud noise during wash cycles.",
    },

    // SEMI AUTOMATIC
    {
      id: "was-semi-1",
      name: "Power / Display Issue (Semi Auto)",
      type: "Semi Automatic",
      price: 199,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.ojfbmFOWBXhvANKIDCyOrAHaE8?pid=Api&P=0&h=180",
      desc: "Electrical and display troubleshooting for semi-automatic machines.",
    },
  ];

  return (
    <div className="ac-page">
      {/* HERO */}
      <div
        className="ac-hero"
        style={{
          backgroundImage:
            "url('https://tse2.mm.bing.net/th/id/OIP.uE_Njh8tnr2ThwqvsiT09QAAAA?pid=Api&P=0&h=180')",
        }}
      >
        <div className="overlay">
          <h1>Washing Machine Repair</h1>
          <p>All types • All brands • Starting at ₹199</p>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="ac-container">
        {services.map((s) => (
          <div key={s.id} className="ac-card">
            <div className="card-image">
              <img src={s.image} alt={s.name} />
            </div>

            <div className="card-content">
              <h3>{s.name}</h3>
              <p className="price">₹{s.price}</p>
              <p className="desc">{s.desc}</p>

              <button
                className="book-btn"
                onClick={() =>
                  navigate(`/services/${s.id}`, { state: s })
                }
              >
                View Details
              </button>

              <br /><br />

              <button
                className="book-btn"
                onClick={() =>
                  setSelectedService({ service: s.name, price: s.price })
                }
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* INSTALLATION */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "20px",
          background: "#eaf2ff",
          borderRadius: "18px",
          fontWeight: 700,
          color: "#1b6cb8",
          textAlign: "center",
        }}
      >
        Installation / Uninstallation – ₹399
      </div>

      {/* BOOKING MODAL */}
      {selectedService && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <Bookingpop
            initialService={selectedService}
            onClose={() => setSelectedService(null)}
          />
        </div>
      )}
    </div>
  );
}






























// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./ACService.css"; // reuse same CSS

// export default function WashingMachineService() {
//   const navigate = useNavigate();

//   const services = [
//     // TOP LOAD
//     {
//       id: "was-top-1",
//       name: "Unknown Issue (Top Load)",
//       type: "Automatic Top Load",
//       price: 199,
//       image:
//         "https://tse2.mm.bing.net/th/id/OIP.OuBBafDrP7wg9BuH2AVFuQAAAA?pid=Api&P=0&h=180",
//       desc: "Complete diagnosis for unidentified problems in top-load washing machines.",
//     },
//     {
//       id: "was-top-2",
//       name: "Draining Issue (Top Load)",
//       type: "Automatic Top Load",
//       price: 199,
//       image:
//         "https://tse2.mm.bing.net/th/id/OIP.rYBw1tq7vhHI6X7msxABnwHaDe?pid=Api&P=0&h=180",
//       desc: "Fix water drainage problems and blockages in top-load machines.",
//     },

//     // FRONT LOAD
//     {
//       id: "was-front-1",
//       name: "Not Spinning (Front Load)",
//       type: "Automatic Front Load",
//       price: 199,
//       image:
//         "https://tse4.mm.bing.net/th/id/OIP.qElTCtk0UrdYqcM4oiOrJQAAAA?pid=Api&P=0&h=180",
//       desc: "Repair spinning issues caused by motor, belt, or drum problems.",
//     },
//     {
//       id: "was-front-2",
//       name: "Noise Issue (Front Load)",
//       type: "Automatic Front Load",
//       price: 199,
//       image:
//         "https://tse4.mm.bing.net/th/id/OIP.7Zg_I4LTi-kq31EHpAItkQAAAA?pid=Api&P=0&h=180",
//       desc: "Resolve abnormal vibration or loud noise during wash cycles.",
//     },

//     // SEMI AUTOMATIC
//     {
//       id: "was-semi-1",
//       name: "Power / Display Issue (Semi Auto)",
//       type: "Semi Automatic",
//       price: 199,
//       image:
//         "https://tse4.mm.bing.net/th/id/OIP.ojfbmFOWBXhvANKIDCyOrAHaE8?pid=Api&P=0&h=180",
//       desc: "Electrical and display troubleshooting for semi-automatic machines.",
//     },
//   ];

//   return (
//     <div className="ac-page">
//       {/* HERO */}
//       <div
//         className="ac-hero"
//         style={{
//           backgroundImage:
//             "url('https://tse2.mm.bing.net/th/id/OIP.uE_Njh8tnr2ThwqvsiT09QAAAA?pid=Api&P=0&h=180')",
//         }}
//       >
//         <div className="overlay">
//           <h1>Washing Machine Repair</h1>
//           <p>All types • All brands • Starting at ₹199</p>
//         </div>
//       </div>

//       {/* SERVICES GRID */}
//       <div className="ac-container">
//         {services.map((s) => (
//           <div
//             key={s.id}
//             className="ac-card"
//             onClick={() =>
//               navigate(`/services/${s.id}`, {
//                 state: s,
//               })
//             }
//           >
//             <div className="card-image">
//               <img src={s.image} alt={s.name} />
//             </div>

//             <div className="card-content">
//               <h3>{s.name}</h3>
//               <p className="price">₹{s.price}</p>
//               <p className="desc">{s.desc}</p>
//               <button className="book-btn">View Details</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* INSTALLATION */}
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "40px auto",
//           padding: "20px",
//           background: "#eaf2ff",
//           borderRadius: "18px",
//           fontWeight: 700,
//           color: "#1b6cb8",
//           textAlign: "center",
//         }}
//       >
//         Installation / Uninstallation – ₹399
//       </div>
//     </div>
//   );
// }




















// // ===============================
// // WashingMachineService.jsx
// // ===============================
// const WashingMachineService = () => {
//   const issues = [
//     "Unknown Issue",
//     "Draining Issue",
//     "Not Spinning",
//     "Error on Display / Power Issue",
//     "Noise Issue",
//   ];

//   const types = [
//     "Automatic Top Load",
//     "Automatic Front Load",
//     "Semi Automatic",
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="relative h-72 bg-[url('https://images.unsplash.com/photo-1626808642875-0aa545482dfb')] bg-cover bg-center">
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <h1 className="text-4xl md:text-5xl text-white font-extrabold">
//             Washing Machine Repair
//           </h1>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 py-12">
//         {types.map((t) => (
//           <div key={t} className="mb-10">
//             <h2 className="text-2xl font-bold mb-4">{t}</h2>
//             <div className="grid md:grid-cols-2 gap-6">
//               {issues.map((i) => (
//                 <div
//                   key={i}
//                   className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition"
//                 >
//                   <h3 className="font-semibold">{i}</h3>
//                   <p className="text-xl font-bold text-blue-600 mt-2">₹199</p>
//                   <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl">
//                     Book Checkup
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

//         <div className="bg-blue-50 p-6 rounded-2xl font-semibold text-blue-700">
//           Installation / Uninstallation – ₹399
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WashingMachineService;