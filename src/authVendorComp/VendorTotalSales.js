import React from "react";

const VendorTotalSales = () => {
  return (
    <div style={styles.mainContainer}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontFamily: "Lato", fontWeight: 700, color: "#23272E" }}>
          Total Sales
        </p>
        <img
          src="../assets/DotsHorizontal.png"
          alt="more"
          style={{
            width: "30px",
            height: "25px",
            position: "relative",
            top: "-0.5rem",
          }}
        />
      </div>
      <p style={{ color: "#6A717F", fontFamily: "Lato", fontSize: "1rem" }}>
        Last 7 days
      </p>
      <div
        style={{
          display: "flex",
          gap: 20,
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem" }}>$350K</h2>
        <p style={{ position: "relative", top: "0.4rem" }}>Sales</p>
      </div>
      <p style={{ color: "#6A717F" }}>
        Previous 7days <span style={{ color: "#6467F2" }}>($235)</span>
      </p>
    </div>
  );
};

const styles = {
  mainContainer: {
    width: "17rem",
    height: "10rem",

    borderRadius: 10,
    backgroundColor: "#fff",
    padding: "10px",
    boxShadow: "0px 0.47px 2px rgba(0, 0, 0, 0.25);",
  },
};
export default VendorTotalSales;
