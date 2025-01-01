import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-4 bg-slate-900 text-slate-100 top-3 sticky z-30">
      <div className="flex justify-between items-center h-16 w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:container mx-auto ">
        <h1 className="text-2xl font-bold">MUH</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
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
