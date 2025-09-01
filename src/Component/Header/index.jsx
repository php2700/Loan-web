import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.png"

const Header = () => {
      const navigate = useNavigate();
      const handleSignUp = () => {
            navigate("/signup");
      };
      return (
            <nav className="flex z-10 fixed top-0 left-0 w-full items-center justify-between px-10 py-4 bg-white shadow-sm">
                  {/* Logo */}
                  <div className="h-10">
                  <img src={logo1} className="h-full object-contain w-full" />
                  </div>

                  <ul className="flex space-x-8 font-semibold text-gray-900">
                        <li className="relative group text-lg">
                              <Link to="/">Home</Link>
                              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0C3B57] text-xl transition-all group-hover:w-full"></span>
                        </li>
                        <li className="hover:text-[#0C3B57] text-xl cursor-pointer">
                              <Link to="/services">Services</Link>
                        </li>
                        <li className="hover:text-[#0C3B57] text-xl cursor-pointer">
                              <Link to="/faq">Faqs</Link>
                        </li>
                        <li className="hover:text-[#0C3B57] text-xl cursor-pointer">
                              <Link to="/contact">Contact</Link>
                        </li>
                  </ul>

                  <button
                        onClick={handleSignUp}
                        className="bg-[#0C3B57]  text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-600"
                  >
                        SIGN UP
                  </button>
            </nav>
      );
};

export default Header;
