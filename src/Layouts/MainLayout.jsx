import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Share/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* <div className="top-0 sticky z-30">
        <Navbar></Navbar>
      </div> */}
      <Navbar></Navbar>
      <div className="absolute  z-[-2] min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
