import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Share/Navbar/Navbar";
import Footer from "../Pages/Share/Footer/Footer";
import { Toaster } from "react-hot-toast";
// bg-[#000000]
const MainLayout = () => {
  return (
    <div className="bg-[#030712]">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-169px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default MainLayout;
