import React from "react";
import VendorTotalSales from "./VendorTotalSales";

const AuthVendorDashboard = () => {
  return (
    <div style={styles.mainContainer}>
      <div>
        <VendorTotalSales />
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    width: "100vw",
    height: "100%",
    backgroundColor: "#E8EFFF",
    padding: "20px 10px 10px 30px",
  },
};

export default AuthVendorDashboard;
