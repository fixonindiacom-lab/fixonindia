import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bookingpop from "../Bookings/Bookingpop"; // import the booking form
import "./ACService.css"; // reuse same CSS

export default function RefrigeratorService() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "ref-1",
      name: "Power Issue",
      price: 199,
      image:
        "https://tse1.mm.bing.net/th/id/OIP.bpW7bKlF3QjC-2L9tFqcAgHaGX?pid=Api&P=0&h=180",
      desc: "Diagnosis and repair of refrigerator power and electrical issues.",
    },
    {
      id: "ref-2",
      name: "Noise Issue",
      price: 199,
      image:
        "https://tse1.mm.bing.net/th/id/OIP.IQ4z6kjaKv7mmbTLG9seLAHaD4?pid=Api&P=0&h=180",
      desc: "Fix unusual sounds caused by fans, compressors, or loose components.",
    },
    {
      id: "ref-3",
      name: "No Cooling",
      price: 199,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.J7c1lyj3b3WvTeJGcX6PxwAAAA?pid=Api&P=0&h=180",
      desc: "Restore cooling efficiency by checking gas, compressor, and airflow.",
    },
    {
      id: "ref-4",
      name: "Excess Cooling",
      price: 199,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.iyIPQP1FYHe1pW3u8SpDpgHaE6?pid=Api&P=0&h=180",
      desc: "Fix over-cooling issues that cause freezing inside the refrigerator.",
    },
    {
      id: "ref-5",
      name: "Water Leakage",
      price: 199,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.6zYtWCPGy_ynfhNA3Ye9NwHaD7?pid=Api&P=0&h=180",
      desc: "Resolve water leakage problems from drain pipes or ice buildup.",
    },
    {
      id: "ref-6",
      name: "Door Issue",
      price: 199,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.cNa1BOyXYkBEWfOWEJdh1wHaFP?pid=Api&P=0&h=180",
      desc: "Repair loose doors, broken gaskets, or improper sealing issues.",
    },
    {
      id: "ref-7",
      name: "Less Cooling",
      price: 199,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.ggGIdkDuXPtveREc8SQGxwAAAA?pid=Api&P=0&h=180",
      desc: "Fix low cooling problems to keep food fresh and safe.",
    },
  ];

  return (
    <div className="ac-page">
      {/* HERO */}
      <div
        className="ac-hero"
        style={{
          backgroundImage:
            "url('https://image.pngaaa.com/537/101537-middle.png')",
        }}
      >
        <div className="overlay">
          <h1>Refrigerator Checkup</h1>
          <p>Fast diagnosis • Expert repair • Starting at ₹199</p>
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

// export default function RefrigeratorService() {
//   const navigate = useNavigate();

//   const services = [
//     {
//       id: "ref-1",
//       name: "Power Issue",
//       price: 199,
//       image:
//         "https://tse1.mm.bing.net/th/id/OIP.bpW7bKlF3QjC-2L9tFqcAgHaGX?pid=Api&P=0&h=180",
//       desc: "Diagnosis and repair of refrigerator power and electrical issues.",
//     },
//     {
//       id: "ref-2",
//       name: "Noise Issue",
//       price: 199,
//       image:
//         "https://tse1.mm.bing.net/th/id/OIP.IQ4z6kjaKv7mmbTLG9seLAHaD4?pid=Api&P=0&h=180",
//       desc: "Fix unusual sounds caused by fans, compressors, or loose components.",
//     },
//     {
//       id: "ref-3",
//       name: "No Cooling",
//       price: 199,
//       image:
//         "https://tse2.mm.bing.net/th/id/OIP.J7c1lyj3b3WvTeJGcX6PxwAAAA?pid=Api&P=0&h=180",
//       desc: "Restore cooling efficiency by checking gas, compressor, and airflow.",
//     },
//     {
//       id: "ref-4",
//       name: "Excess Cooling",
//       price: 199,
//       image:
//         "https://tse4.mm.bing.net/th/id/OIP.iyIPQP1FYHe1pW3u8SpDpgHaE6?pid=Api&P=0&h=180",
//       desc: "Fix over-cooling issues that cause freezing inside the refrigerator.",
//     },
//     {
//       id: "ref-5",
//       name: "Water Leakage",
//       price: 199,
//       image:
//         "https://tse2.mm.bing.net/th/id/OIP.6zYtWCPGy_ynfhNA3Ye9NwHaD7?pid=Api&P=0&h=180",
//       desc: "Resolve water leakage problems from drain pipes or ice buildup.",
//     },
//     {
//       id: "ref-6",
//       name: "Door Issue",
//       price: 199,
//       image:
//         "https://tse2.mm.bing.net/th/id/OIP.cNa1BOyXYkBEWfOWEJdh1wHaFP?pid=Api&P=0&h=180",
//       desc: "Repair loose doors, broken gaskets, or improper sealing issues.",
//     },
//     {
//       id: "ref-7",
//       name: "Less Cooling",
//       price: 199,
//       image:
//         "https://tse4.mm.bing.net/th/id/OIP.ggGIdkDuXPtveREc8SQGxwAAAA?pid=Api&P=0&h=180",
//       desc: "Fix low cooling problems to keep food fresh and safe.",
//     },
//   ];

//   return (
//     <div className="ac-page">
//       {/* HERO */}
//       <div
//         className="ac-hero"
//         style={{
//           backgroundImage:
//             "url('https://image.pngaaa.com/537/101537-middle.png')",
//         }}
//       >
//         <div className="overlay">
//           <h1>Refrigerator Checkup</h1>
//           <p>Fast diagnosis • Expert repair • Starting at ₹199</p>
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
//     </div>
//   );
// }



























// // ===============================
// // RefrigeratorService.jsx
// // ===============================
// const RefrigeratorService = () =>  {
//   const issues = [
//     "Power Issue",
//     "Noise Issue",
//     "No Cooling",
//     "Excess Cooling",
//     "Water Leakage",
//     "Door Issue",
//     "Less Cooling",
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="relative h-72 bg-[url('https://images.unsplash.com/photo-1586201375761-83865001e17b')] bg-cover bg-center">
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <h1 className="text-4xl md:text-5xl text-white font-extrabold">
//             Refrigerator Checkup
//           </h1>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 py-12">
//         <div className="grid md:grid-cols-2 gap-6">
//           {issues.map((i) => (
//             <div
//               key={i}
//               className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition"
//             >
//               <h3 className="font-semibold">{i}</h3>
//               <p className="text-xl font-bold text-blue-600 mt-2">₹199</p>
//               <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl">
//                 Book Checkup
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// export default RefrigeratorService;