import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AdminLoginBtn from "./AdminLogin/AdminLoginBtn";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <header className="shadow z-50 top-0">
      {/* Top Section with Logo, School Name, and Admin Login */}
      <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-30 w-full bg-purple-700 p-4 shadow-lg">
        <div className="flex items-center mb-4 ml-60  md:mb-0">
          <Link to="/">
            <img
              src="src/Pictures/Logo.jpg"
              className="h-24 w-24 rounded-lg ml-4"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex-1 text-center mb-4 ml-10 md:mb-0">
          <h1 className="text-white text-2xl md:text-3xl font-bold uppercase">
            Holy Name Senior Secondary School, Sivsagar
          </h1>
          <h2 className="text-white text-base md:text-xl font-bold">
            হলী নেম হাই চেকেণ্ডাৰী স্থূল, সিৱসাগৰ
          </h2>
          <p className="text-white text-sm md:text-lg">
            Cherekapar, Dist:- Sivasagar, Assam-785640
          </p>
          <p className="text-white text-sm md:text-lg">Ph- 6901055733</p>
        </div>
        <div className=" items-center mb-4 mr-48 md:mb-0 hidden sm:block">
          <Link to="/">
            <img
              src="src/Pictures/Logo.jpg"
              className="h-24 w-24 rounded-lg ml-4"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex items-center mr-10">
          <AdminLoginBtn />
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="main-nav bg-white border-gray-200 px-4 lg:px-6 py-4 top-0 z-50 sticky">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="hidden lg:block text-bold right-4 float-right pr-4 font-medium">
            <p>Phone: +91 8064356687, +91 6901055733</p>
          </div>
          <div
            className={`${
              showMediaIcons ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
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
                  Suggestions
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
          <div className="lg:hidden">
            <button
              onClick={() => setShowMediaIcons(!showMediaIcons)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 "
            >
              <GiHamburgerMenu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
