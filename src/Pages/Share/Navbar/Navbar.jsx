import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#020617] backdrop-blur-lg bg-opacity-30 text-gray-100 pt-5 pb-4 sticky top-0 z-50">
      <div className="flex justify-between items-center  w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <img
          src="/logo.png"
          className="w-8 md:w-10 h-8 md:h-10 bg-slate-100 p-1 rounded-lg"
        ></img>

        <ul className="hidden md:flex gap-10">
          <NavLink to="/" className="">
            Home
          </NavLink>
          <NavLink to="/projects" className="">
            Projects
          </NavLink>
          <NavLink to="/contacts" className="">
            Contact
          </NavLink>
        </ul>

        {/* Mobile Menu */}
        <div className="dropdown md:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-2 z-10 p-2 gap-2 shadow bg-white text-black rounded-xl w-28 -ml-10"
          >
            <NavLink to="/" className="">
              Home
            </NavLink>
            <NavLink to="/projects" className="">
              Projects
            </NavLink>

            <NavLink to="/about" className="">
              About
            </NavLink>

            <NavLink to="/contact" className="">
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
