import React from "react";

import logo from "../../assets/logo/logo3.png";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="w-full text-slate-500">
        <div className="border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-12">
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-product-4-sub"
              >
                <h3
                  className="mb-6 text-[22px] font-bold capitalize text-[#5a2104]"
                  id="footer-product-4-sub"
                >
                  Match Point
                </h3>
                <p
                  className="text-[22px] font-semibold text-black"
                  style={{ fontStyle: "italic" }}
                >
                  "One roof... <br />
                  Infinite Happiness... <br />
                  Endless Country Cuisine..."
                </p>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-docs-4-sub"
              >
                <h3
                  className="mb-6 text-[22px] font-bold capitalize text-[#5a2104]"
                  id="footer-docs-4-sub"
                >
                  Quick Links
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-[16px] text-black font-semibold duration-300 hover:text-[#5a2104] focus:text-[#5a2104] hover:font-bold"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-[16px] text-black font-semibold duration-300 hover:text-[#5a2104] focus:text-[#5a2104] hover:font-bold"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-[16px] text-black font-semibold duration-300 hover:text-[#5a2104] focus:text-[#5a2104] hover:font-bold"
                    >
                      Menu
                    </a>
                  </li>

                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-[16px] text-black font-semibold duration-300 hover:text-[#5a2104] focus:text-[#5a2104] hover:font-bold"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-about-4-sub"
              >
                <h3
                  className="mb-6 text-[22px] font-bold capitalize text-[#5a2104]"
                  id="footer-about-4-sub"
                >
                  Our Country Cuisines
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-[16px] text-black font-semibold duration-300 hover:text-[#5a2104] focus:text-[#5a2104] hover:font-bold"
                    >
                      Meat & Eat
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-[16px] text-black font-semibold duration-300 hover:text-[#5a2104] focus:text-[#5a2104] hover:font-bold"
                    >
                      Sai Veg Restaurant
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-[16px] text-black font-semibold duration-300 hover:text-[#5a2104] focus:text-[#5a2104] hover:font-bold"
                    >
                      Ceylon Kadai Non-Veg
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-[16px] text-black font-semibold duration-300 hover:text-[#5a2104] focus:text-[#5a2104] hover:font-bold"
                    >
                      Chillax - Ice Creams & Desserts
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-[16px] text-black font-semibold duration-300 hover:text-[#5a2104] focus:text-[#5a2104] hover:font-bold"
                    >
                      Italian Job - Pasta & Pizza
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-[16px] text-black font-semibold duration-300 hover:text-[#5a2104] focus:text-[#5a2104] hover:font-bold"
                    >
                      Yarnbird Fried Chicken
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors text-[16px] text-black font-semibold duration-300 hover:text-[#5a2104] focus:text-[#5a2104] hover:font-bold"
                    >
                      Tex-Mex Delights
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-4"
                aria-labelledby="footer-get-in-touch-4-sub"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d281.5246039297075!2d78.14676220580405!3d11.624783934321762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef5b2eeebfd9%3A0x35bb247488c59353!2sMeat%20%26%20Eat!5e1!3m2!1sen!2sin!4v1743486856998!5m2!1sen!2sin"
                  height="100%"
                  loading="lazy"
                  width="100%"
                ></iframe>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 bg-slate-100 py-4 text-sm">
          <div className="container mx-auto px-6">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-5">
              <img src={logo} alt="" className="w-[100px]" />
              <nav
                className="col-span-3 md:col-span-4 lg:col-span-6"
                aria-labelledby="subfooter-links-3-sub"
              >
                <p className="text-black text-[16px] text-center">
                  Match Point - The Food World - 2025 @ All Rights Reserved
                </p>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
