import "./App.css";
import UserLayout from "./layouts/UserLayout";
import Dashboard from "./userComp/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import VendorLayout from "./layouts/VendorLayout";
import Started from "./vendorcomp/Started";
import VendorRegistration from "./vendorcomp/VendorRegistration";
import VendorDetailsForm from "./vendorcomp/VendorDetailsForm";
import VendorKyc from "./vendorcomp/VendorKyc";
import VendorPayment from "./vendorcomp/VendorPayment";
import VendorTerm from "./vendorcomp/VendorTerm";
import VendorShop from "./vendorcomp/VendorShop";

import AuthVendorLayout from "./layouts/AuthVendorLayout";
import AuthVendorDashboard from "./authVendorComp/AuthVendorDashboard";
import VendorAddProduct from "./authVendorComp/VendorAddProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="/vendor" element={<VendorLayout />}>
          <Route index element={<Started />} />
          <Route path="registration" element={<VendorRegistration />} />
          <Route path="details" element={<VendorDetailsForm />} />
          <Route path="kyc" element={<VendorKyc />} />
          <Route path="payment" element={<VendorPayment />} />
          <Route path="terms" element={<VendorTerm />} />
          <Route path="shop" element={<VendorShop />} />
        </Route>

        <Route path="/authVendor" element={<AuthVendorLayout />}>
          <Route index element={<AuthVendorDashboard />} />
          <Route path="vendorAddProduct" element={<VendorAddProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
