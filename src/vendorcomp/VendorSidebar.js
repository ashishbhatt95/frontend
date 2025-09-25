import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VendorSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Getting Started", path: "/vendor" },
    { label: "Registration", path: "/vendor/registration" },
    { label: "Vendor Details", path: "/vendor/details" },
    { label: "Shop Details", path: "/vendor/shop" },
    { label: "KYC", path: "/vendor/kyc" },
    { label: "Payment & Bank", path: "/vendor/payment" },
    { label: "Terms & Conditions", path: "/vendor/terms" },
  ];

  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.heading}>Vendor Registration</h1>
      <p style={styles.para}>
        Join our thriving marketplace today! Register as a vendor, showcase your
        products, reach thousands of customers, grow your brand, and boost sales
        with our seamless multi-vendor platform.
      </p>

      <div style={styles.menuContainer}>
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              ...styles.menuButton,
              backgroundColor:
                location.pathname === item.path ? "#023337" : "#fff",
              color: location.pathname === item.path ? "#fff" : "#023337",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "20px",
    borderRight: "1px solid #ddd",
    minHeight: "100vh",
    border: "none",
    backgroundColor: "#fff",
  },
  heading: {
    color: "#023337",
    fontSize: 20,
    fontWeight: 800,
    fontFamily: "Lato",
  },
  para: {
    fontSize: 14,
    lineHeight: 1.5,
    fontFamily: "Lato",
    color: "#023337",
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontFamily: "Lato",
  },
  menuButton: {
    padding: "10px 15px",
    borderRadius: "6px",
    fontSize: "14px",
    textAlign: "left",
    cursor: "pointer",
    fontWeight: "500",
    transition: "all 0.3s ease",
    border: "none",
  },
};

export default VendorSidebar;
