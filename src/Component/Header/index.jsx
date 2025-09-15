import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut, List } from "lucide-react"; // icons
import logo1 from "../../assets/logo1.png";
import axios from "axios";
import { UserContext } from "../Context";

const Header = () => {
  const navigate = useNavigate();
  const { loanToken } = useContext(UserContext);

  const [user, setUser] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const fetchUser = async () => {
    const token = localStorage.getItem("loanToken");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API_BASE_URL}api/user/${userId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch user:", err);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [loanToken]);

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("loanToken");
    localStorage.removeItem("userId");
    fetchUser();
    navigate("/");
  };

  return (
    <nav className="flex z-10 fixed top-0 left-0 w-full items-center justify-between px-10 py-4 bg-white shadow-sm">
      <div className="h-10">
        <img
          onClick={handleHome}
          src={logo1}
          className="h-full object-contain w-full cursor-pointer"
        />
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

      {!user ? (
        <button
          onClick={handleSignUp}
          className="bg-[#0C3B57] text-white px-5 py-2 rounded-md font-semibold"
        >
          SIGN UP
        </button>
      ) : (
        <div className="relative">
          <button
            className="flex items-center gap-2 px-4 py-2 cursor-pointer border rounded-lg hover:bg-gray-100"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <User className="w-5 h-5" />
            <span>{user.name}</span>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
              <div className="mb-2">
                <div className="text-[12px]">{user.email}</div>
                {user?.referralCode && (
                  <div className="text-[12px]">
                    Refferal:{user.referralCode}{" "}
                  </div>
                )}
              </div>
              <hr />
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/apply");
                }}
                className="flex items-center w-full px-3 py-2 rounded hover:bg-gray-100"
              >
                <List className="w-4 h-4 mr-2" /> Apply
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/referrals");
                }}
                className="flex items-center w-full px-3 py-2 rounded hover:bg-gray-100"
              >
                <List className="w-4 h-4 mr-2" /> Referral List
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-3 py-2 rounded hover:bg-gray-100"
              >
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
