import { Outlet } from "react-router-dom";
import VendorSidebar from "../vendorcomp/VendorSidebar";
import VendorHeader from "../vendorcomp/VendorHeader";

const VendorLayout = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div
      // style={{
      //   position: "fixed",
      //   top: 0,
      //   left: 0,
      //   right: 0,
      //   zIndex: 1000,
      //   margin: 0,
      //   padding: 0,
      // }}
      >
        <VendorHeader />
      </div>

      <div
        style={{
          display: "flex",
          minHeight: "100%",
        }}
      >
        <div
          style={{
            width: "20%",
            boxSizing: "border-box",
            margin: 0,
          }}
        >
          <VendorSidebar />
        </div>

        <main
          style={{
            width: "100%",
            boxSizing: "border-box",
            margin: 0,
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default VendorLayout;
