import React from "react";

const categories = [
  "Men",
  "Women",
  "Baby",
  "Grocery & Essentials",
  "Streetwear",
  "Shoes",
  "Accessories",
  "Beauty",
  "Electronics",
  "Industrial equipment",
  "See more",
];

const Dashboard = () => {
  return (
    <div
      style={{ display: "flex", gap: "5px", justifyContent: "space-around" }}
    >
      {categories.map((item, index) => (
        <div key={index} style={{ cursor: "pointer" }}>
          <h1 style={{ color: "#023337", fontSize: 15, fontWeight: 500 }}>
            {item}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
