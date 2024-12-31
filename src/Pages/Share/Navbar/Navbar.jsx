import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-4 bg-slate-900 text-slate-100 top-3 sticky z-30">
      <div className="container flex justify-between items-center h-16 mx-auto ">
        <h1 className="text-2xl font-bold">MUH</h1>

        {/* Desktop Menu */}
        <ul className="hidden space-x-4 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "hover:text-blue-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "hover:text-blue-400"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "hover:text-blue-400"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "hover:text-blue-400"
            }
          >
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
            className="menu dropdown-content mt-2 z-40 p-2 shadow bg-white rounded-xl w-28 -ml-10"
          >
            <NavLink to="/" className="text-blue-500 font-bold">
              Home
            </NavLink>
            <NavLink to="/projects" className="text-blue-500 font-bold">
              Projects
            </NavLink>

            <NavLink to="/about" className="text-blue-500 font-bold">
              About
            </NavLink>

            <NavLink to="/contact" className="text-blue-500 font-bold">
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
