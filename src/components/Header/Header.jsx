import React from "react";
import { Link, NavLink } from "react-router-dom";
import StudentAdmin from "./StudentAdmin";


function Header() {
  return (
    <header className="shadow z-50 top-0">
      <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-20 w-full bg-blue-600 p-4 shadow-lg">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/">
            <img
              src="src/Pictures/Logo.jpg"
              className="h-16 w-16 rounded-lg ml-4"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex-1 text-center mb-4 md:mb-0">
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            Holy Name H.S School, Sivsagar
          </h1>
          <h2 className="text-white text-base md:text-xl font-bold">
            হলী নেম হাই চেকেণ্ডাৰী স্থূল, সিৱসাগৰ
          </h2>
        </div>
        <div className="flex items-center">
          <StudentAdmin />
        </div>
      </div>
      <div>
        
      </div>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-4 top-0 z-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div
            className="hidden lg:flex justify-between items-center w-full lg:w-auto lg:order-1"
            id="mobile-menu"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              {/* Add other links here */}
              <li>
                <NavLink
                  to="/principal"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Principal
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admission"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Admission
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faculty"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Faculty
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notice"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Notice
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Career
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/complaints"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Complaints
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block text-bold right-4 float-right pr-4 font-medium">
            +91 8064356687
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
