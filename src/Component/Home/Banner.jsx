import React from "react";
import heroBanner from "../../assets/hero_img.jpg";
import bgImg from "../../assets/h1_hero.jpg"
import { useNavigate } from "react-router-dom";

const Banner = () => {
       const navigate=useNavigate()
         const handleSignUp=()=>{
            navigate('/apply')
      }
      return (
            <>
                  <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen"   style={{ backgroundImage: `url(${bgImg})` }} >
                        <div className=" p-20 flex flex-col justify-center">
                              <p className="text-[#0C3B57] text-xl font-semibold mb-2">
                                    Achieve your financial goal
                              </p>
                              <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-4">
                                    Small Business Loans For Daily Expenses.
                              </h1>
                              <button onClick={handleSignUp} className="bg-black text-center flex font-bold text-white px-6 py-2 rounded hover:bg-[#0C3B57]">
                                    APPLY FOR LOAN
                              </button>
                        </div>

                        <div className="flex items-center justify-center">
                              <img
                                    src={heroBanner}
                                    alt="Business professional"
                                    className="w-full h-full object-cover"
                              />
                        </div>
                  </div>
                  <div className="w-full bg-[#0C3B57] text-white p-20 flex justify-around items-center ">
                        <div className="flex items-center">
                              <span className="text-xl mr-2">⏳</span>
                              <p className="text-xl">
                                    QUICK & EASY LOAN APPROVALS
                              </p>
                        </div>
                        <div className="flex items-center">
                              <span className="text-2xl mr-2">👍</span>
                              <p className="text-xl">
                                    QUICK & EASY LOAN APPROVALS
                              </p>
                        </div>
                        <div className="flex items-center">
                              <span className="text-2xl mr-2">💰</span>
                              <p className="text-xl">
                                    QUICK & EASY LOAN APPROVALS
                              </p>
                        </div>
                  </div>
            </>
      );
};

export default Banner;
