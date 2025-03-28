import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo/logo2.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [menuStatus, setMenuStatus] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setMenuStatus(false);
  };

  return (
    <div className="w-full">
      <div
        className={`w-full fixed left-0 z-50 transition-all duration-300 ${
          isScrolled ? "top-3 bg-[#5a2104]" : "top-[20px] bg-transparent"
        }`}
      >
        <div
          className={`w-full flex ${
            menuStatus ? "fixed z-50" : ""
          } justify-center items-center h-[80px] transition-all duration-300`}
        >
          <div className="w-[80%] h-[10vh] lg:w-[90%] pb-2 flex lg:justify-evenly justify-between items-center">
            <div className="w-[50%] lg:w-[30%] flex justify-start">
              <img src={logo} className="w-[100px]" alt="logo" />
            </div>
            <div className="hidden lg:flex w-[90%] justify-center gap-x-10">
              <div
                className="text-[20px] cursor-pointer mt-2 font-semibold text-white underline-animation"
                onClick={() => handleNavigation("/")}
              >
                Home
              </div>
              <div
                className="text-[20px] cursor-pointer mt-2 font-semibold text-white underline-animation"
                onClick={() => handleNavigation("/about")}
              >
                About
              </div>
              <div
                className="text-[20px] cursor-pointer mt-2 font-semibold text-white underline-animation"
                onClick={() => handleNavigation("/menu")}
              >
                Menu
              </div>
              <div
                className="text-[20px] cursor-pointer mt-2 font-semibold text-white underline-animation"
                onClick={() => handleNavigation("/contact")}
              >
                Contact
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="w-[0%] ml-14 flex lg:hidden justify-center items-center">
              <button
                className={`relative order-10 block self-center lg:hidden ${
                  menuStatus
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0"
                    : ""
                }`}
                onClick={() => setMenuStatus(!menuStatus)}
                aria-expanded={menuStatus ? true : false}
                aria-label="Toggle navigation"
              >
                <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Fullscreen Menu for Mobile */}
        <div
          className={`w-full h-[90vh] overflow-y-auto z-50 mt-[10vh] fixed top-0 left-0 transition-all duration-500 ease-in-out bg-white transform ${
            menuStatus
              ? "translate-x-0 opacity-100 visible"
              : "-translate-x-full opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center justify-start h-full">
            <div className="w-[80%] mt-10">
              <div
                className="text-[20px] cursor-pointer py-3 font-semibold text-black"
                onClick={() => handleNavigation("/")}
              >
                Home
              </div>
              <div
                className="text-[20px] cursor-pointer py-3 font-semibold text-black"
                onClick={() => handleNavigation("/about")}
              >
                About
              </div>
              <div
                className="text-[20px] cursor-pointer py-3 font-semibold text-black"
                onClick={() => handleNavigation("/menu")}
              >
                Menu
              </div>
              <div
                className="text-[20px] cursor-pointer py-3 font-semibold text-black"
                onClick={() => handleNavigation("/contact")}
              >
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
