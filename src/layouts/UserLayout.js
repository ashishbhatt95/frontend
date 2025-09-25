import { Outlet } from "react-router-dom";
import Header from "../userComp/Header";

const UserLayout = () => {
  return (
    <div>
      <Header />
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
