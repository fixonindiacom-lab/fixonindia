import React, { useState } from "react";
import "./ServicesSection.css";

const servicesData =[
  {
    "id": 1,
    "service": "JET CLEAN SERVICE",
    "image": "https://tse4.mm.bing.net/th/id/OIP.aeQzBhIj2BmvwPvsaPA_oQHaE7?pid=Api&P=0&h=180"
  },
  {
    "id": 2,
    "service": "FOAM JET CLEAN SERVICE",
    "image": "https://tse1.mm.bing.net/th/id/OIP.Een_ACk1GYw_nuzDZ9lCFwHaE7?pid=Api&P=0&h=180"
  },
  {
    "id": 3,
    "service": "AC LESS/ON COOLING REPAIR",
    "image": "https://tse4.mm.bing.net/th/id/OIP.aeQzBhIj2BmvwPvsaPA_oQHaE7?pid=Api&P=0&h=180"
  },
  {
    "id": 4,
    "service": "AC POWER ISSUE REPAIR",
    "image": "https://tse1.mm.bing.net/th/id/OIP.Een_ACk1GYw_nuzDZ9lCFwHaE7?pid=Api&P=0&h=180"
  },
  {
    "id": 5,
    "service": "AC NOISE / SMELL REPAIR",
    "image": "https://tse3.mm.bing.net/th/id/OIP.Ktwv2BDWPodfHUw5pFE8QAHaEZ?pid=Api&P=0&h=180"
  },
  {
    "id": 6,
    "service": "AC WATER LEAKAGE REPAIR",
    "image": "https://tse4.mm.bing.net/th/id/OIP.aeQzBhIj2BmvwPvsaPA_oQHaE7?pid=Api&P=0&h=180"
  },
  {
    "id": 7,
    "service": "GAS REFILL / CHECK UP",
    "image": "https://tse3.mm.bing.net/th/id/OIP.Ktwv2BDWPodfHUw5pFE8QAHaEZ?pid=Api&P=0&h=180"
  },
  {
    "id": 8,
    "service": "AC INSTALLATION SPLIT",
    "image": "https://tse1.mm.bing.net/th/id/OIP.Een_ACk1GYw_nuzDZ9lCFwHaE7?pid=Api&P=0&h=180"
  },
  {
    "id": 9,
    "service": "AC INSTALLATION WINDOW",
    "image": "https://tse3.mm.bing.net/th/id/OIP.Ktwv2BDWPodfHUw5pFE8QAHaEZ?pid=Api&P=0&h=180"
  },
  {
    "id": 10,
    "service": "AC UNINSTALLATION SPLIT",
    "image": "https://tse4.mm.bing.net/th/id/OIP.aeQzBhIj2BmvwPvsaPA_oQHaE7?pid=Api&P=0&h=180"
  },
  {
    "id": 11,
    "service": "AC UNINSTALLATION WINDOW",
    "image": "https://tse1.mm.bing.net/th/id/OIP.Een_ACk1GYw_nuzDZ9lCFwHaE7?pid=Api&P=0&h=180"
  },
]
;

export default function ServicesSection() {
  return (
    <div className="services-container">
      <h2 className="title">Our AC Services</h2>

      <div className="services-grid">
        {servicesData.map((item) => (
          <div key={item.id} className="service-card">
            <img src={item.image} alt={item.service} className="service-img" />
            <div className="card-body">
              <h3>{item.service}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}