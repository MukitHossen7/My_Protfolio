import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// bg-[#020617]
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const handleScroll = (section, linkName) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setActiveLink(linkName);
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#030712] backdrop-blur-lg border-b border-b-gray-700/20 bg-opacity-30 text-gray-100 pt-5 pb-4 sticky top-0 z-50">
      <div className="flex justify-between items-center  w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <Link to="/">
          <img
            src="/logo.png"
            className="w-8 md:w-10 h-8 md:h-10 bg-slate-100 p-1 rounded-lg"
          ></img>
        </Link>
        <ul className="hidden md:flex gap-10">
          <li>
            <button
              onClick={() => handleScroll("myIdentity", "Home")}
              className={`${
                activeLink === "Home" ? "text-[#3CCF91]" : ""
              } hover:text-[#3CCF91]`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("about", "About")}
              className={`${
                activeLink === "About" ? "text-[#3CCF91]" : ""
              } hover:text-[#3CCF91]`}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Skills", "Skills")}
              className={`${
                activeLink === "Skills" ? "text-[#3CCF91]" : ""
              } hover:text-[#3CCF91]`}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Project", "Projects")}
              className={`${
                activeLink === "Projects" ? "text-[#3CCF91]" : ""
              } hover:text-[#3CCF91]`}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("Contacts", "Contact")}
              className={`${
                activeLink === "Contact" ? "text-[#3CCF91]" : ""
              } hover:text-[#3CCF91]`}
            >
              Contact
            </button>
          </li>
        </ul>
        {/* Mobile Menu */}
        <div className="md:hidden">
          {/* Hamburger Icon for Mobile Devices */}
          <div className="md:hidden flex items-center justify-between p-4 ">
            <button onClick={toggleSidebar} className="text-xl text-[#3CCF91]">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Sidebar */}
          <div
            className={`fixed top-[89px] left-0 min-h-screen bg-black z-40 transform transition-transform duration-300 ease-in-out 
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:relative md:flex md:flex-col w-64`}
          >
            <div className="flex flex-col bg-black justify-between flex-1 space-y-6 mt-6 px-6">
              <div>
                <button
                  onClick={() => handleScroll("myIdentity", "Home")}
                  className={`${
                    activeLink === "Home" ? "text-[#3CCF91]" : ""
                  } hover:text-[#3CCF91]`}
                >
                  Home
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleScroll("about", "About")}
                  className={`${
                    activeLink === "About" ? "text-[#3CCF91]" : ""
                  } hover:text-[#3CCF91]`}
                >
                  About
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleScroll("Skills", "Skills")}
                  className={`${
                    activeLink === "Skills" ? "text-[#3CCF91]" : ""
                  } hover:text-[#3CCF91]`}
                >
                  Skills
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleScroll("Project", "Projects")}
                  className={`${
                    activeLink === "Projects" ? "text-[#3CCF91]" : ""
                  } hover:text-[#3CCF91]`}
                >
                  Projects
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleScroll("Contacts", "Contact")}
                  className={`${
                    activeLink === "Contact" ? "text-[#3CCF91]" : ""
                  } hover:text-[#3CCF91]`}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>

          {/* Overlay for Sidebar when open in Mobile Devices */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
              onClick={toggleSidebar}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
