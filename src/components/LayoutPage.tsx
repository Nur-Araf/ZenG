import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutPage = () => {
  return (
    <div>
      <Navbar />

      {/* Outlet for nested routes */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutPage;
