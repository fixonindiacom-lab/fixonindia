import React from "react";
import { Snowflake, Refrigerator, WashingMachine, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./ServicesUI.css";

export default function ServicesUI() {
  const navigate = useNavigate();

  const services = [
    {
      id: "ac",
      title: "AC Repair & Service",
      price: "Starting from ₹299",
      icon: Snowflake,
      image:
        "https://tse1.mm.bing.net/th/id/OIP.5tAb0HNC_MY7oJvfKyuVHgHaE8?pid=Api&P=0&h=180",
      desc: "Expert AC installation, gas refill, cleaning & repairs",
      route: "/services/ac",
    },
    {
      id: "washing-machine",
      title: "Washing Machine Repair",
      price: "Checkup from ₹199",
      icon: WashingMachine,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.gD_D3rKYnki9kszT8K3z3AHaE9?pid=Api&P=0&h=180",
      desc: "Top load, front load & semi-automatic repair services",
      route: "/services/washing-machine",
    },
    {
      id: "refrigerator",
      title: "Refrigerator Checkup",
      price: "Checkup from ₹199",
      icon: Refrigerator,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.iyIPQP1FYHe1pW3u8SpDpgHaE6?pid=Api&P=0&h=180",
      desc: "Cooling, leakage, noise & power issue solutions",
      route: "/services/refrigerator",
    },
  ];

  return (
    <div className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <h1>Home Appliance Services</h1>
        <p>
          Verified technicians • Transparent pricing • Same-day service
        </p>
      </section>

      {/* CARDS */}
      <section className="services-container">
        {services.map((s) => (
          <div
            key={s.id}
            className="service-card"
            onClick={() => navigate(s.route)}
          >
            <div className="card-image">
              <img src={s.image} alt={s.title} />
            </div>

            <div className="card-content">
              <div className="card-header">
                <div className="icon-box">
                  <s.icon size={26} />
                </div>
                <div>
                  <h2>{s.title}</h2>
                  <span>{s.price}</span>
                </div>
              </div>

              <p className="card-desc">{s.desc}</p>

              <div className="card-footer">
                <span>View Details</span>
                <ArrowRight />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

























// import React from "react";
// import { Snowflake, Refrigerator, WashingMachine, ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // HERO STYLE SERVICE LANDING – HEADING + IMAGE + ICON
// // CLICK → NAVIGATE TO DETAIL SCREEN (NO ACCORDION, NO TABLE)

// export default function ServicesUI() {
//   const navigate = useNavigate();

//   const services = [
//     {
//       id: "ac",
//       title: "AC Repair & Service",
//       price: "Starting from ₹299",
//       icon: Snowflake,
//       image:
//         "https://images.unsplash.com/photo-1581579185169-1c6c9e8e6f07?auto=format&fit=crop&w=1200&q=80",
//       desc: "Professional AC repair, cleaning & installation services",
//       route: "/services/ac",
//     },
//     {
//       id: "washing-machine",
//       title: "Washing Machine Repair",
//       price: "Checkup from ₹199",
//       icon: WashingMachine,
//       image:
//         "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?auto=format&fit=crop&w=1200&q=80",
//       desc: "Top load, front load & semi automatic machine services",
//       route: "/services/washing-machine",
//     },
//     {
//       id: "refrigerator",
//       title: "Refrigerator Checkup",
//       price: "Checkup from ₹199",
//       icon: Refrigerator,
//       image:
//         "https://images.unsplash.com/photo-1586201375761-83865001e17b?auto=format&fit=crop&w=1200&q=80",
//       desc: "Cooling, leakage, noise & power issue solutions",
//       route: "/services/refrigerator",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* HERO */}
//       <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//             Home Appliance Services
//           </h1>
//           <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
//             Trusted technicians • Transparent pricing • Fast service
//           </p>
//         </div>
//       </section>

//       {/* SERVICE CARDS */}
//       <section className="max-w-6xl mx-auto px-6 -mt-20">
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((s) => (
//             <div
//               key={s.id}
//               onClick={() => navigate(s.route)}
//               className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
//             >
//               {/* IMAGE */}
//               <div className="relative h-52 overflow-hidden">
//                 <img
//                   src={s.image}
//                   alt={s.title}
//                   className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-black/30" />
//               </div>

//               {/* CONTENT */}
//               <div className="p-6">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 rounded-xl bg-blue-600 text-white">
//                     <s.icon size={24} />
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-bold">{s.title}</h2>
//                     <p className="text-blue-600 font-semibold">{s.price}</p>
//                   </div>
//                 </div>

//                 <p className="text-gray-600 mb-6">{s.desc}</p>

//                 <div className="flex items-center justify-between">
//                   <span className="font-semibold text-blue-600">
//                     View Details
//                   </span>
//                   <ArrowRight className="text-blue-600 group-hover:translate-x-2 transition" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }












