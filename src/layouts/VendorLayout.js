import { Outlet } from "react-router-dom";
import VendorSidebar from "../vendorcomp/VendorSidebar";
import VendorHeader from "../vendorcomp/VendorHeader";

const VendorLayout = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          margin: 0,
          padding: 0,
        }}
      >
        <VendorHeader />
      </div>

      <div
        style={{
          display: "flex",
          minHeight: "100%",
          marginTop: "60px",
          padding: "10px 0px 0px 0px",
        }}
      >
        <div
          style={{
            width: "20%",
            minHeight: "calc(100vh - 80px)",
            boxSizing: "border-box",
            margin: 0,
          }}
        >
          <VendorSidebar />
        </div>

        <main
          style={{
            width: "80%",
            boxSizing: "border-box",
            margin: 0,
            padding: "10px 15px 0px 0px",
            overflowX: "hidden",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default VendorLayout;
